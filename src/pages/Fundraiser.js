import { Button, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import funds from '../TempData/funds.json'

const FundraiserPage = (props) => {

    const fund = 
    [{
        "id": "bdddd8ff-e626-4548-915b-5128e1eb7d25",
        "Name": "Temp Fund",
        "Description": "A Temp Fund",
        "Goal": 1000,
        "EndDate": "2023-03-31",
        "User": "Elamj1",
        "userID": "ba0e07fa-4a98-4c5e-be89-90f22acd3bca",
        "createdAt": "2023-03-27T13:37:15.612Z",
        "updatedAt": "2023-03-27T13:37:15.612Z"
    }]

    return (
        <Layout>
            <Sider>
                <h1 style={{color: 'white'}} >Title: {funds[0].Name}</h1>
                <p style={{color: 'white'}} >Description: {funds[0].Description}</p>
                <p style={{color: 'white'}} >Goal: {funds[0].Goal}</p>
                <p style={{color: 'white'}} >EndDate: {funds[0].EndDate}</p>
                <Button>Donate</Button>
            </Sider>
            <Content>

            </Content>
        </Layout>
        
    )
}


export default FundraiserPage
