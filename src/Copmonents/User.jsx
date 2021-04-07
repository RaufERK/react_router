import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usersApiUrl } from '../data/constants';

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();

  const getUser = async () => {
    const preResult = await fetch(`${usersApiUrl}/${userId}`);
    const result = await preResult.json();
    console.log(result);
    setUser(result);
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  return (
    <div className="main">
      <h2>User Info</h2>
      {user && (
        <ul>
          <li>user : {user.name}</li>
          <li>username : {user.username}</li>
          <li>email : {user.email}</li>
        </ul>
      )}
    </div>
  );
};

export default User;
