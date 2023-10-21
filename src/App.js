import './css/App.css'
import Nav from "./Components/Nav/Nav";
import UserList from './Components/List/UserList';
import { useState } from 'react';
import Login from './Login';
function App() {
  const [auth, setAuth] = useState(false); //Dont forget to make it false again

  return (


    <div className="App">
      {auth ? <div className='main'>
        <Nav />
        <UserList />
      </div> :
        <Login setAuth={setAuth} />
      }

    </div>
  )

}
export default App;
