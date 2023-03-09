import React from 'react';
import PropTypes from 'prop-types';

function AdmTable({ users }) {
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
  users: PropTypes.objectOf.isRequired,
};

export default AdmTable;
