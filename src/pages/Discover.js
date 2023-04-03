import { Badge, Card, Flex } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Donations } from '../models';
import { DonationsCreateForm } from '../ui-components';
import { Button, Layout, List } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Link, useNavigate } from 'react-router-dom';

function Discover() {

	const [donations, setdonations] = useState([])

	const navigate = useNavigate();

	// useEffect(() => {
	//   	DataStore.query(Donations).then((donation) => {setdonations(donation); console.log(donation);});
	// }, [])
	
	async function getData() {
		const models = await DataStore.query(Donations);
		console.log(models);
		setdonations(models);
	}

	const genTemp = async() => {
		await DataStore.save(
			new Donations({
				"Donation": 1020,
				"sub": "Lorem ipsum dolor sit amet"
			})
		);
	}

	return(
		<Layout>
			<Content>
				<List 
					dataSource={donations}
					renderItem={(item, index) =>{
						return(
							<Card>
								<Badge size='small' variation='info'>Donation Number: {index}</Badge>
								<Flex direction={'row'}><h1>Donation Amount: </h1><p>{item.Donation}</p></Flex>
								<Flex direction={'row'}><h1>Donation Amount: </h1><p>{item.Donation}</p></Flex>
								
							</Card>
						)
					}}
				
				/>	
				<DonationsCreateForm onSubmit={navigate('/discover')} on/>	
				<Button onClick={() => genTemp()} > Temp Data </Button>	
				<Button onClick={() => getData()} > Reload Data </Button>	
			</Content>

		</Layout>
		
	)
	
}

export default Discover;
