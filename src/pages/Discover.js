import React, { useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Fundraiser } from '../models';
import { Layout, List } from 'antd';
import { Content } from 'antd/es/layout/layout';
import FundraiserComponent from '../components/Fundraisers';
import { Link } from 'react-router-dom';

function Discover() {

	const [fundraisers, setFundraisers] = useState([])

	useEffect(() => {
		const getData = async () => {
			const models = await DataStore.query(Fundraiser);
			// console.log(models);
			setFundraisers(models);
		}
		getData()
	}, [])

	return(
		<Layout>
			<Content>
				<List 
					dataSource={fundraisers}
					renderItem={(item) =>{
						return(
							<Link to={`/fund/${item.id}`}>
								<FundraiserComponent fund={item} />
							</Link>
							
						)
					}}
				
				/>	
				{/* <Button onClick={() => getData()} > Reload Data </Button>	 */}
			</Content>

		</Layout>
		
	)
	
}

export default Discover;
