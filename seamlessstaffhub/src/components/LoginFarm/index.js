import { Component } from "react";
import "./index.css"
import axios from "axios"
import Cookies from "js-cookie";

class LoginFarm extends Component{

    state = {
        username: '',
        password: '',
        showSubmitError: false,
        errorMsg: '',
      }

      onSubmitForm =async event => {
        const {history} = this.props
        event.preventDefault()
        const {username, password} = this.state
        axios.post("http://localhost:5000/login", {username, password})
        .then(res => {
          if (res.data){
            history.replace("/hrr")
            Cookies.set("jwt_token", `${username}`, { expires: 1 });
          }else{
            this.setState({errorMsg: "User Not Found Please Enter valid Credentials"})
            alert("User Not Found Please Enter valid Credentials")
          }
        }).catch(err => this.setState({errorMsg: err}))
        this.setState({username: "", password: ""})
      }

    onEnterUsername = event => {
        this.setState({username: event.target.value})
      }
    
      onChangePassword = event => {
        this.setState({password: event.target.value})
      }

    renderUsername = () => {
        const {username} = this.state
    
        return (
          <>
            <label className="label" htmlFor="userName">
              USERNAME
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              className="user-input"
              value={username}
              onChange={this.onEnterUsername}
            />
          </>
        )
      }

      renderPassword = () => {
        const {password} = this.state
    
        return (
          <>
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="user-input"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
          </>
        )
      }

    render(){
      const {errorMsg} = this.state
        return(
            <div className="ssh-app-container">
                <div className="ssh-card-container">
                <img
                    src="img\applogo.png"
                    alt="website logo"
                    className="website-logo"
                />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container">{this.renderPassword()}</div>
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
          <p className="err-msg">{errorMsg}</p>
        </div>
      </div>
        )
    }
}

export default LoginFarm