import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import About from './Copmonents/About';
import Home from './Copmonents/Home';
import Users from './Copmonents/Users';
import { useState } from 'react';

const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div className="main">
      {auth ? 'Вы авторизованы!' : 'авторизуйтесь'}
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>


            {auth && (
              <>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
                <li>
                  <Link to="/goods">Goods</Link>
                </li>
              </>
            )}

            
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signout">Signout</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/signout">
            <div>SIGN OUT</div>
            <button onClick={() => setAuth(false)}>LOGOUT</button>
          </Route>

          <Route path="/signin">
            <div>SIGN IN</div>
            <button onClick={() => setAuth(true)}>LOGIN</button>
          </Route>

          <Route path="/about">
            <About />
          </Route>

          {auth && (
            <>
              <Route path="/users">
                <Users />
              </Route>

              <Route exact path="/goods">
                <div>Goods</div>
              </Route>
            </>
          )}

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <div>No ADRESS</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
