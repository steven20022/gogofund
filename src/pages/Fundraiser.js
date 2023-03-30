import { Alert, Button, Image, Layout, List } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import funds from '../TempData/funds.json'
import Donation from '../ui-components/Donation'
import imgsrc from '../images/images.jpg'

const FundraiserPage = (props) => {

    // const [toggle, setToggle] = useState(false)
    const [brickCount, setBrickCount] = useState(1)

    console.log(brickCount);

    function onBrickPress(label) {
        alert(label)
    }

    const genBricks = Array(brickCount).fill().map((_, index) => {
        return {
            index,
            content: <img src={imgsrc} onClick={() => onBrickPress("This is Brick Number " + (index + 1))}></img>
        }
    })

    console.log(genBricks);

    return (
        <Layout>
            <Sider style={{height: "100%"}}>
                <h1 style={{color: 'white'}} >Title: {funds[0].Name}</h1>
                <p style={{color: 'white'}} >Description: {funds[0].Description}</p>
                <p style={{color: 'white'}} >Goal: {funds[0].Goal}</p>
                <p style={{color: 'white'}} >EndDate: {funds[0].EndDate}</p>
                <Button onClick={() => setBrickCount(brickCount+1)}> Donate Now </Button>
            </Sider>
            <Content style={{backgroundColor: 'white'}}>
                <List 
                    dataSource={ genBricks }
            
                    renderItem={(item) => 
                            item.content
                    }
                />
            </Content>
        </Layout>
        
    )
}

export default FundraiserPage
