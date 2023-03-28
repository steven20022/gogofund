import React from 'react';
import { withAuthenticator } from "@aws-amplify/ui-react"

function Account (){
	return <h1>Account</h1>
}

export default withAuthenticator(Account);
