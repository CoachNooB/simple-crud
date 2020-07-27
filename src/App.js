import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import AddUser from './Components/User/AddUser'
import EditUser from './Components/User/EditUser'
import { GlobalProvider } from './Context/GlobalState'

function App() {
  return (
    <div className='pa4 tc'>
      <GlobalProvider>
        <Router>
          <h1>CRUD</h1>
          <Switch>
            <div className='flex justify-center'>
              <Route exact path='/' component={ Home } />
              <Route path='/adduser' component={ AddUser } />
              <Route path='/edituser/:id' component={ EditUser } />
            </div>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
