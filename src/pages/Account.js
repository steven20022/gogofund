import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Account (){



    return <Authenticator >
      {({ signOut, user }) => (
        <main>
			<h1>Account</h1>
			<br />
			<h2>Hello {user.username}</h2>
			<button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
}

export default Account;