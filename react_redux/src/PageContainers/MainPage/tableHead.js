import React,{Component} from "react";


class TableHead extends Component {
  render() {
    //console.log(this.props.data)
    return (
     <tr >
      {this.props.data.map((header)=>{
        return <td  className="col-md-2  bg-primary">{header}</td>
      })}
     </tr>
    );
  }
}
export default TableHead;
