import { Badge, Card, Heading, Text } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Fundraiser } from '../models';
import { Link } from 'react-router-dom';

function DonationComponent (props){
	// console.log(props);
	const dono = props.dono
	// console.log(dono.id);

    const tempFund = [{
        id: "",
        title: '',
        description: '',
        endDate: '',
        fundGoal: ''
      }]

    const [fundraiser, setFundraiser] = useState(tempFund);

    useEffect(() => {
        const getData = async () => {
            const models = await DataStore.query(Fundraiser, (c) => c.id.eq(dono.fundraiserID));
            console.log(models);
            setFundraiser(models)
        }
        getData()
    }, [dono.fundraiserID])
    
    console.log(fundraiser);

	return (
        <Link to={`/fund/${fundraiser[0].id}`}>
            <Card style={{margin: '10px'}} variation='elevated'>
                <Badge variation='success'>
                    Donation Amount: {dono.donationAmount}
                </Badge>
                <Heading level={5}>
                    Donator: {dono.donatorName}
                </Heading>
                <Text as='span'>
                    Fundraiser: {fundraiser[0].title}
                </Text>
            </Card>
        </Link>
	)
}

export default DonationComponent;
