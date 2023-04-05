import { Badge, Card, Heading, Text } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Donation } from '../models';

function FundraiserComponent (props){
	// console.log(props);
	const fund = props.fund
	console.log(fund.id);
	const [donations, setDonations] = useState([])
	var total = 0;

	useEffect(() => {
		const getData = async () => {
			const models = await DataStore.query(Donation, (c) => c.fundraiserID.eq(fund.id));
			// console.log(models);
			setDonations(models);
		}
		getData()
	}, [])

	const getDonationTotal = () => {
		donations.forEach((donation) => {
			total += donation.donationAmount
		})
	}
	getDonationTotal()
	console.log(donations);
	console.log(total);

	return (
		<Card style={{margin: '10px'}} variation='elevated'>
			<Badge size='small' variation='info'>
				Goal: {total}/{props.fund.fundGoal}
			</Badge>
			<Heading level={5}>
				{props.fund.title}
			</Heading>
			<Text as='span'>
				{props.fund.description}
			</Text>
		</Card>
	)
}

export default FundraiserComponent;
