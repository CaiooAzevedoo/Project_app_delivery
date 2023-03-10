import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserAdm } from '../Api/User';

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
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                  type="button"
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
