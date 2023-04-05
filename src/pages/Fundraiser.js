import { Alert, Button, Image, Layout, List } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React, { useEffect, useState } from 'react'
import funds from '../TempData/funds.json'
import imgsrc from '../images/images.jpg'
import { useParams } from 'react-router'
import { DataStore } from '@aws-amplify/datastore';
import { Donation, Fundraiser } from '../models';
import { CreateDonation } from '../ui-components';

const FundraiserPage = (props) => {

    const { id } = useParams();
    const tempFund = [{
        title: '',
        description: '',
        endDate: '',
        fundGoal: ''
    }]
    const [fundraiser, setFundraiser] = useState(tempFund)

    function onBrickPress(label) {
        alert(label)
    }

    useEffect(() => {
        const getData = async () => {
            const models = await DataStore.query(Fundraiser);
            setFundraiser(models);
        }
        getData()
    }, [])

    const [donations, setDonations] = useState([])
	var total = 0;

	useEffect(() => {
		const getData = async () => {
			const models = await DataStore.query(Donation, (c) => c.fundraiserID.eq(id));
			setDonations(models);
            setBrickCount(models.length);
            console.log(donations.length);
		}
		getData()
	}, [])

    const [brickCount, setBrickCount] = useState(donations.length)

    const genBricks = Array(brickCount).fill().map((_, index) => {
        return {
            index,
            content: <img src={imgsrc} onClick={() => onBrickPress("This is Brick Number " + (index + 1))}></img>
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
        <Layout>
            <Sider style={{height: "100%"}}>
                <h1 style={{color: 'white'}} >Title: {fundraiser[0].title}</h1>
                <p style={{color: 'white'}} >Description: {fundraiser[0].description}</p>
                <p style={{color: 'white'}} >Goal: {total}/{fundraiser[0].fundGoal}</p>
                <p style={{color: 'white'}} >EndDate: {fundraiser[0].endDate}</p>
                <CreateDonation />
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
