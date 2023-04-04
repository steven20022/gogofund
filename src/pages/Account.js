import React, { useEffect, useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Account (){
  
  const [user, setUser] = useState({})

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => setUser(user));
  }, [])
  
  console.log(user);

    return (
        <main>
          
			<h1>Account</h1>
			<br />
			<h2>Hello {user.username}</h2>
        </main>
      )
}

export default Account;