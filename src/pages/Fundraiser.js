import { Button, Layout, List } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import funds from '../TempData/funds.json'
import Donation from '../ui-components/Donation'

const FundraiserPage = (props) => {

    const [toggle, setToggle] = useState(false)
    const [brickCount, setBrickCount] = useState(1)

    return (
        <Layout>
            <Sider style={{height: "100%"}}>
                <h1 style={{color: 'white'}} >Title: {funds[0].Name}</h1>
                <p style={{color: 'white'}} >Description: {funds[0].Description}</p>
                <p style={{color: 'white'}} >Goal: {funds[0].Goal}</p>
                <p style={{color: 'white'}} >EndDate: {funds[0].EndDate}</p>
                <Button onClick={setBrickCount(brickCount+1)}> Donate Now </Button>
            </Sider>
            <Content style={{backgroundColor: 'white'}}>
                <List 
                    dataSource={new Array(brickCount).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                          key,
                          label: `${key}`,
                        };
                      })}
            
                    renderItem={(item) => {
                        <List.Item style={{justifyItems: 'flex-start'}}>
                            <img src='../images/images.jpg' />
                        </List.Item>
                    }}
                />
            </Content>
        </Layout>
        
    )
}

export default FundraiserPage
