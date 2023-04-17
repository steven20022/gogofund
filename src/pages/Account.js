import React, { useEffect, useState } from 'react';
import { Button, Input, Layout, List, Modal, message } from 'antd'
import { Amplify, Auth, DataStore } from 'aws-amplify';
import { Authenticator, Tabs } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import { Fundraiser } from '../models';
import FundraiserComponent from '../components/Fundraisers';
Amplify.configure(awsExports);

const { Header, Sider, Content } = Layout;

function Account (){
  
  const [user, setUser] = useState({})
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordOld, setPasswordOld] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => setUser(user));
  }, [])
  
  console.log(user);
  console.log(user.attributes);


  const handleOk = async () => {
    setConfirmLoading(true)
    await Auth.changePassword(user, passwordOld, password).then((res) => {
      if (res === "SUCCESS") {
        message.success('Successfully Updated Password')
      } else {
        message.error('Error \n' + res)
      }
      setOpen(false)
    })

  }

  const [fundraisers, setFundraisers] = useState([])

	useEffect(() => {
		const getData = async () => {
			const models = await DataStore.query(Fundraiser, (c) => c.sub.eq(user.username));
			// console.log(models);
			setFundraisers(models);
		}
		getData()
	}, [])

  return (
    <Layout>
      <Header style={headerStyle}>
        Account Hello, {user.username}
      </Header>
      <Layout>
        <Sider style={siderStyle}>
          <h1>Account Settings</h1>
          <Button onClick={() => setOpen(true)}>
            <p>Change Username</p>
          </Button>
          <Modal 
            title="Change Password"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={() => setOpen(false)}
          >
            <Input.Password
              placeholder='Enter old pass'
              onChange={(pass) => setPasswordOld(pass)}
            />
            <Input.Password
              placeholder='Enter new pass'
              onChange={(pass) => setPassword(pass)}
            />
          </Modal>
        </Sider>
        <Content>
        <List 
					dataSource={fundraisers}
					renderItem={(item) =>{
            console.log(item);
						return(
								<FundraiserComponent fund={item} />
						)
					}}
				
				/>	
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
  color: '#fff',
  height: '100%',
  backgroundColor: '#283c78'
}
export default Account;