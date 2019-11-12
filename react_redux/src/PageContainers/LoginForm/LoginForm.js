import React, { Component } from "react";
import { connect } from "react-redux";
import * as loginActions from "../../actions/actions";
import { bindActionCreators } from "redux";
import Input from "./input/Input";
import Label from "./input/label/Label";
//import {employeeData} from '../../APIresponse/userdata'
import EmployeesDetailsTable from '../MainPage/employeesDetailsTable'
import "bootstrap/dist/css/bootstrap.min.css"

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    };
    this.proceedClickHandler = this.proceedClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserLoginData();
    this.props.fetchUserData();
  }
  proceedClickHandler(event) {
    event.preventDefault();
    const {sccussLogin,userData}=this.props;
    const { username, password } = userData;

   const {  userName, passWord } = this.state;
    console.log(username,userName ,password,passWord);
    if(username===userName && password=== passWord)
    {
        sccussLogin();
        
    }
    else{
      alert("Username Or Password is wrong.");
    }
  }
  handelChangeUserName = data => {
    console.log(data,'event');
    this.setState({ userName: data});
  };
  handelChangepassword = data => {
    console.log(data,'event2');
    this.setState({ passWord: data });
  };
  render() {
    const { username, password,success } = this.props;
    //const userdata=this.props.userData;
    
    console.log(username, password);

    return (
      <form>
        <table>
         {!success &&  <tbody >
          <tr>
            <td>
              <Label lableName="Username" />
            </td>
            <td>
              <Input type="text" value="" onChangeHandler={this.handelChangeUserName} />
            </td>
          </tr>
          <tr>
            <td>
              <Label lableName="Password" />
            </td>
            <td>
              <Input
              value=""
                type="password"
                onChangeHandler={this.handelChangepassword}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                name="Proceed"
                id="Proceed"
                onClick={this.proceedClickHandler}
              >
                Proceed
              </button>
            </td>
          </tr>
          </tbody>}

          {success &&  <tbody>
           Employees List
            <EmployeesDetailsTable  empdata={this.props.EmployeeList}/>
              </tbody>
            }
        </table>
        
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    userData: state.userdata,
    username: state.username,
    password: state.password,
    success:state.success,
    EmployeeList:state.EmployeeList

  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(loginActions, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
