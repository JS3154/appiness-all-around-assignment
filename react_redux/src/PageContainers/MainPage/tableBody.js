import React  from 'react'

export const TableRow = props => (
       props.empdata.user.map(emp=>(
        <tr>
          <td className="col-md-2" >{emp.id}</td>
          <td className="col-md-2">{emp.name}</td>
          <td className="col-md-2">{emp.age}</td>
          <td className="col-md-2">{emp.gender}</td>
          <td className="col-md-2">{emp.email}</td>
          <td className="col-md-2">{emp.phoneNo}</td>
        </tr>
        ))
    )

    

