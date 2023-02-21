import { useSelector } from 'react-redux';
import { UserState } from './store/reducer';

import './App.css'

function App() {
  const login_status = useSelector<UserState,boolean>( (state:UserState) =>state.login_status)

  return (

      <div>
        
      
        
      
    </div>
  )
}

export default App
