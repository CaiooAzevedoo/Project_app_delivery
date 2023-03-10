import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserAdm, deletUser } from '../Api/User';

function AdmTable({ count }) {
  const [users, setUsersAdm] = useState([]);
  // const [admCount, setAdmCount] = useState(count);
  useEffect(() => {
    const request = async () => {
      const { data } = await getUserAdm();
      console.log(data);
      setUsersAdm(data);
    };
    request();
  }, [count]);

  const handleClick = async ({ target: { id } }) => {
    await deletUser(id);
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={ user.id }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {user.name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {user.email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {user.role}
              </td>
              <td>
                <button
                  id={ user.id }
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                  type="button"
                  onClick={ handleClick }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

AdmTable.propTypes = {
  count: PropTypes.bool.isRequired,
};

export default AdmTable;
