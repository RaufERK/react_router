import {
  BrowserRouter,
  Link,
  Switch,
  NavLink,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import User from './User';
import { usersApiUrl } from '../data/constants';

const Users = () => {
  const [users, setUsers] = useState([]);
  const match = useRouteMatch();

  const getUsers = async () => {
    const preResult = await fetch(usersApiUrl);
    const result = await preResult.json();
    setUsers(result);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="main">
      <h1>Users</h1>
      <BrowserRouter>
        <ul>
          {users ? 
            users.map(({ name, id }) => (
              <li key={id}>
                <NavLink className="link" to={`${match.path}/${id}`}>
                  {name}
                </NavLink>
              </li>
            )) : 'ZAGRUZKA'}
        </ul>
        <Route path={`${match.path}/:userId`}>
          <User />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default Users;

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },
