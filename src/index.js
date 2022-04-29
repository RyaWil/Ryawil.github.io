import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {UserContext} from './components/user-context'

//import the routes
import Home from './routes/home';
import CreateAccount from './routes/createaccount';
import Login from './routes/login';
import Deposit from './routes/deposit';
import Withdraw from './routes/withdraw';
import AllData from './routes/alldata';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

{/* Wrap everything below in UserContext.Provider to make context available
to all the associated routes. Then define how the context object is going to 
look initially */}

      <UserContext.Provider value={
                {users:[
                    { name:'Ryan',
                      email:'ryan@test.com',
                      password:'test',
                      balance:2500,
                }
                ],
                currentUser: null,
                userIndex: null,

                // Setting loginState as null here, because state variables
                // will be added in App.js to allow for conditional rendering
                // of login or logout options in the navbar

                loginState: null
                }
            } >
      <Routes>

{/* Can pass props to each of the components below within the curly braces
for element within each route */}

        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="createaccount" element={<CreateAccount />} />
          <Route path="login" element={<Login/>} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="alldata" element={<AllData />} />
        </Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);