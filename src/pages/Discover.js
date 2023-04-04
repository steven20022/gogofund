import { Badge, Card, Flex } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Fundraiser } from '../models';
import { Button, Layout, List } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Link, useNavigate } from 'react-router-dom';
import FundraiserComponent from '../components/Fundraisers';

function Discover() {

	const [fundraisers, setFundraisers] = useState([])

	const navigate = useNavigate();

	// useEffect(() => {
	//   	DataStore.query(Donations).then((donation) => {setdonations(donation); console.log(donation);});
	// }, [])
	
	async function getData() {
		const models = await DataStore.query(Fundraiser);
		console.log(models);
		setFundraisers(models);
	}

	return(
		<Layout>
			<Content>
				<List 
					dataSource={fundraisers}
					renderItem={(item) =>{
						return(
							<FundraiserComponent props={item} />
						)
					}}
				
				/>	
				<Button onClick={() => getData()} > Reload Data </Button>	
			</Content>

		</Layout>
		
	)
	
}

export default Discover;
