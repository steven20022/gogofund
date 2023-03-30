import { Badge, Card } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Donations } from '../models';
import { DonationsCreateForm } from '../ui-components';
import { Layout, List } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Link, useNavigate } from 'react-router-dom';

function Discover() {

	const [donations, setdonations] = useState([])

	const navigate = useNavigate();

	// useEffect(() => {
	// 	DataStore.query(Donations).then((donations) => setDonations(donations));
	// 	console.log(donations);
	// }, [])
	useEffect(() => {
	  	DataStore.query(Donations).then((donation) => {setdonations(donation); console.log(donation);});
	}, [])
	
	

	return(
		<Layout>
			<Content>
				<List 
					dataSource={donations}
					renderItem={(item, index) =>{
						return(
							<Card>
								<Badge size='small' variation='info'>Donation Number: {index}</Badge>
								<h1>Donation Amount: </h1><p>{item.Donation}</p>
							</Card>
						)
					}}
				
				/>	
				<DonationsCreateForm onSubmit={navigate('/discover')}/>		
			</Content>

		</Layout>
		
	)
	
}

export default Discover;
