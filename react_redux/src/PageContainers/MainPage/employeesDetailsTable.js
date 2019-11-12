import React,{Component} from "react";
import TableHead from "./tableHead";
import {TableRow} from "./tableBody";

class EmployeesDetailsTable extends Component {
  render() {
    const herderName=['id','name','age','gender','email','phoneNo']
    return (
      <div className="card card-body my-3">
      <table className="table table-bordered">
        <thead>
          <TableHead 
          data={herderName}
          />
        </thead>
        <TableRow empdata={this.props.empdata}></TableRow>
        </table>
        </div>
    );
  }
}
export default EmployeesDetailsTable