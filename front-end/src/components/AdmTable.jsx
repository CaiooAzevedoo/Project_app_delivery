import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserAdm, deletUser } from '../Api/User';
import { Section } from './styles/AdmTableStyled';

function AdmTable({ count }) {
  const [users, setUsersAdm] = useState([]);

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
    <Section>
      <table>
        <thead>
          <tr>
            <th className="Field-item">Item</th>
            <th className="Field-name">Nome</th>
            <th className="Field-email">Email</th>
            <th className="Field-type">Tipo</th>
            <th className="Field-delete">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={ user.id }>
              <td
                className="User-id"
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                className="User-name"
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {user.name}
              </td>
              <td
                className="User-email"
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {user.email}
              </td>
              <td
                className="User-role"
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {user.role}
              </td>
              <td
                className="Adm-btn"
              >
                <button
                  className="Adm-btn-delete"
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
    </Section>
  );
}

AdmTable.propTypes = {
  count: PropTypes.bool.isRequired,
};

export default AdmTable;
