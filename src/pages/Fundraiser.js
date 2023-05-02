import { Layout, List, message } from 'antd';
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React, { useEffect, useState } from 'react'
import imgsrc from '../images/images.jpg'
import { useParams } from 'react-router'
import { DataStore } from '@aws-amplify/datastore';
import { Donation, Fundraiser } from '../models';
import DonateFormComponent from '../components/DonateForm';
const AWS = require('aws-sdk');

const FundraiserPage = (props) => {

    console.log(props);
    const layout = {
        height: '100%',
        labelcol: { span: 8 },
        wrappercol: { span: 16 },
      };

    const [users, setUsers] = useState([])

    const cognito = new AWS.CognitoIdentityServiceProvider()

    const getUsers = async () => {
        const cognitoUsers = await cognito.listUsers({UserPoolId: 'us-east-2_04GyQofbJ'}).promise();
        setUsers(cognitoUsers);
    }

    try {

            getUsers()

        console.log(users);
    } catch (error) {
        console.error(error);        
    }

    const { id } = useParams();
    const tempFund = [{
        title: '',
        description: '',
        endDate: '',
        fundGoal: ''
    }]
    const [fundraiser, setFundraiser] = useState(tempFund)

    function onBrickPress(index) {
        message.info(`
            Donator: ${donations[index].donatorName} \n
            Donation Amount: ${donations[index].donationAmount}
        `)
    }

    useEffect(() => {
        const getData = async () => {
            const models = await DataStore.query(Fundraiser, (c) => c.id.eq(id));
            setFundraiser(models);
        }
        getData()
    }, [id])

    const [donations, setDonations] = useState([])
	var total = 0;

	useEffect(() => {
		const getData = async () => {
			const models = await DataStore.query(Donation, (c) => c.fundraiserID.eq(id));
			setDonations(models);
            setBrickCount(models.length);
		}
		getData()
	},[id] )

    const [brickCount, setBrickCount] = useState(donations.length)

    const genBricks = Array(brickCount).fill().map((_, index) => {
        return {
            index,
            content: <img style={{maxWidth: '10%'}} src={imgsrc} alt='A Brick (Mario Style)' onClick={() => onBrickPress(index)}></img>
        }
    })

	const getDonationTotal = () => {
		donations.forEach((donation) => {
			total += donation.donationAmount
		})
	}
	getDonationTotal()
    console.log(donations);

    return (
        <Layout {...layout} style={{height: '100%'}}>
            <Sider style={{height: "100%"}}>
                <h1 style={{color: 'white'}} >Title: {fundraiser[0].title}</h1>
                <p style={{color: 'white'}} >Description: {fundraiser[0].description}</p>
                <p style={{color: 'white'}} >Goal: {total}/{fundraiser[0].fundGoal}</p>
                <p style={{color: 'white'}} >EndDate: {fundraiser[0].endDate}</p>
                <DonateFormComponent fund={fundraiser} />
            </Sider>
            <Content style={{backgroundColor: 'white'}}>
                <List 
                    dataSource={ genBricks }
                    renderItem={(item) => item.content}
                />
            </Content>
        </Layout>
        
    )
}

export default FundraiserPage
