import React from 'react'
import './App.css'
import Login from './loginPage/login';
import { useSelector } from 'react-redux';
import { UserState } from './store/reducer';
import {Dashboard} from './Dashboard/Dashboard'

function App() {

  const login_status = useSelector<UserState,boolean>( (state:UserState) =>state.login_status)

  return (
    <div className="App">
      {!login_status && <Login type={''} login_status={false} login_details={{
        username: '',
        password: ''
      }}/>}
      {login_status && <Dashboard type={''} login_status={false} login_details={{
        username: '',
        password: ''
      }} />}
    </div>
  )
}

export default App
