import React from 'react';
import rolesData from './db.json'


const RoleList = () => {
  return (
    <div>
      <h1>Таблиця ролей</h1>
      <table className='roles_table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Роль</th>
            <th>Функції</th>
            <th>Зони відповідальності</th>
            <th>Підпорядкування</th>
          </tr>
        </thead>
        <tbody className='roles_table_body'>
          {rolesData.roles.map(role => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.role}</td>
              <td>{role.functions.join(", ")}</td>
              <td>{role.zones_of_responsibility.join(", ")}</td>
              <td>{role.subordination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;