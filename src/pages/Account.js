import React, { useEffect, useState } from 'react';
import { Button, Divider, Form, Input, Layout, List, Modal, Popconfirm, message } from 'antd'
import { Amplify, Auth, DataStore } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import { Donation, Fundraiser } from '../models';
import FundraiserComponent from '../components/Fundraisers';
import { TabItem, Tabs } from '@aws-amplify/ui-react';
import DonationComponent from '../components/Donations';
import FundraiserFormComponent from '../components/FundraiserForm';
import FormItem from 'antd/es/form/FormItem';
import { useForm, useWatch } from 'antd/es/form/Form';
Amplify.configure(awsExports);

const { Header, Sider, Content } = Layout;

function Account (){

  const form = useForm()

  const tempUser = {
    attributes: {
      name:'',
      sub:'null'
    }
  }

  const tempFund = [{
    id: "",
    title: '',
    description: '',
    endDate: '',
    fundGoal: ''
  }]

  const tempDono = [{
    id: '',
    donatorName: '',
    donationAmount: '',
    sub: '',
    fundraiserID: ''
  }]

 
  const [user, setUser] = useState(tempUser)
  const [fundraisers, setFundraisers] = useState(tempFund)
  const [donations, setDonations] = useState(tempDono)

  useEffect(()  => {
    Auth.currentAuthenticatedUser().then((user) => setUser(user));
  }, [])
  
  console.log(user);
  console.log(user.attributes.name);

  console.log(fundraisers);
	useEffect(() => {
		const getFundData = async () => {
			const models = await DataStore.query(Fundraiser, (c) => c.sub.eq(user.attributes.sub));
			setFundraisers(models);
		}
		getFundData()
	}, [user.attributes.sub])
	useEffect(() => {
		const getDonoData = async () => {
			const models = await DataStore.query(Donation, (c) => c.sub.eq(user.attributes.sub));
			setDonations(models);
		}
		getDonoData()
	}, [user.attributes.sub])

  const onConfirm = async (item) => {
    await DataStore.delete(Fundraiser, (c) => c.id.eq(item.id)).then(window.location.reload(true))
  }

  return (
    <Layout>
      <Header style={headerStyle}>
        Account Hello, {user.username}
      </Header>
      <Layout style={{height: "100%"}}>
        <Content>
          <Tabs justifyContent={'center'}>
            <TabItem title={'My Fundraisers'}>
              <List 
                dataSource={fundraisers}
                renderItem={(item) =>{
                  console.log(item);
                  return(
                    <Popconfirm
                      title="Delete?"
                      description={`Would you like to delete ${item.title}`}
                      placement='top'
                      onConfirm={(item) => onConfirm(item)}
                      okText='yes'
                      cancelText='no'
                    >

                      <FundraiserComponent fund={item} />
                      <Divider />
                    </Popconfirm>
                  )
                }}
              />
            </TabItem>
            <TabItem title={'My Donations'}>
              <List 
                dataSource={donations}
                renderItem={(item) =>{
                  console.log(item);
                  return(
                      <DonationComponent dono={item} />
                  )
                }}
              />
            </TabItem>
            <TabItem title={'Create Fundraiser'}>
              <FundraiserFormComponent />
            </TabItem>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  )
}
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px'
}
const siderStyle = {
  textAlign: 'center',
  lineHeight: "100%",
  color: '#fff',
  height: '100%',
  backgroundColor: '#283c78'
}
export default Account;