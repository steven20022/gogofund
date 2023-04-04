import { Card, Flex, Heading, Text } from '@aws-amplify/ui-react';
import React from 'react';

function FundraiserComponent (props){
	return (
		<Card>
			<Heading level={5}>
				{props.title}
			</Heading>
			<Text as='span'>
				{props.description}
			</Text>
		</Card>
	)
}

export default FundraiserComponent;
