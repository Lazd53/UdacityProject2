import React from 'react';
import { connect } from 'react-redux'
import SelectMenu from './SelectMenu'
import SignInUser from './SignInUser'
import {setAuthdUser} from '../actions/users';

class SignIn extends React.Component {
  state={setUser:null}

  changeSetUser = (user) => {
    this.setState({setUser: user[1]})
  }

  setAuthdUser = (user) => {
    const {dispatch} = this.props;
    dispatch(setAuthdUser(user.id));
  }

  render(){
    let {users} = this.props;
    let {setUser} = this.state;
    return (
      <div className="sign-in-container">
        <h2>SIGN IN</h2>
        <h4>Please sign in to start the game</h4>
        <form className="sign-in-form">
          {users !== {} &&
            <SelectMenu
              setUser={this.changeSetUser}
            />
          }
          {this.state.setUser !== null &&
            <SignInUser user={setUser}/>
          }
          <button
            type="submit"
            disabled={ setUser === null }
            onClick={ (e) => {
              e.preventDefault();
              this.setAuthdUser(setUser)
            }}>
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

export default connect((store)=> {
  return {users: store.users}
  })(SignIn);
