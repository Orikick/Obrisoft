import React from 'react';
import rolesData from './db.json'


const Table = ({ data }) => (
  <table style={{width:'100%'}} >
    <thead>
      <tr>
        <th>ID</th>
        <th>Document</th>
        <th>Requirements</th>
        <th>Terms</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody className='roles_table_body'>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td style={{width:"20%"}}>{item.doc}</td>
          <td style={{width:"50%"}}>
            <ul>
              {item.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {item.terms.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {item.price.map((price, index) => (
                <li key={index}>{price}</li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);


const Paperwork1Table = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Type</th>
        <th>Rules</th>
        <th>Ukrainian</th>
        <th>English</th>
        <th>German</th>
      </tr>
    </thead>
    <tbody className='roles_table_body'>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.type}</td>
          <td>{item.rules}</td>
          <td>{item.ukr}</td>
          <td>{item.eng}</td>
          <td>{item.de}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Paperwork2Table = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Type</th>
        <th>Rules</th>
        <th>Source</th>
        <th>Translated version</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody className='roles_table_body'>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.type}</td>
          <td>{item.rules}</td>
          <td>{item.source}</td>
          <td>{item.translated}</td>
          <td>{item.note}</td>
        </tr>
      ))}
    </tbody>
  </table>
);




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
      <div>
      <h2 className='tab_header'>Ministry of Justice</h2>
      <Table data={rolesData.apostilles.ministryofjustice} />
    </div>
    <div>
      <h2 className='tab_header'>Ministry of Justice</h2>
      <Table data={rolesData.apostilles.ministryofinternalaffairs} />
    </div>
    <div>
      <h2 className='tab_header'>Ministry of Justice</h2>
      <Table data={rolesData.apostilles.ministryofeducation} />
    </div>
    <div>
      <h2 className='tab_header'>Ministry of Justice</h2>
      <Table data={rolesData.apostilles.ministryofinternationalaffairs} />
    </div>
    <div>
      <h2 className='tab_header'>Paperwork1</h2>
      <Paperwork1Table data={rolesData.paperwork1} />
    </div>
    <div>
      <h2 className='tab_header'>Paperwork2</h2>
      <Paperwork2Table data={rolesData.paperwork2} />
    </div>
    </div>
  );
};

export default RoleList;