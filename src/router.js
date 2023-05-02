import React, { useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link}
	from 'react-router-dom';
import Discover from './pages/Discover';
import Account from './pages/Account';
import FundraiserPage from './pages/Fundraiser';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import { Menu } from 'antd';
import { LogoutOutlined, GlobalOutlined, UserOutlined } from '@ant-design/icons'

function AppRouter() {

    const signout = async() => await Auth.signOut();

    const navItems = [
        {
            label: <Link style={linkStyle} to="/discover"> Discover </Link>,
            key: 'discover',
            icon: <GlobalOutlined color='white' />
        },
        {
            label: <Link style={linkStyle} to="/Account"> Account </Link>,
            key: 'account',
            icon: <UserOutlined />
        },
        {
            label: <Link style={signoutStyle} to="/" onClick={() => {signout()}}> Signout </Link>,
            key: 'signout',
            icon: <LogoutOutlined />
        },
    ]

    const [currentKey, setCurrentKey] = useState('discover')

    const onClick = (e) => {
        console.log(e);
        setCurrentKey(e.key)
    }
  
    return (
        <Router>
            <Menu items={navItems} onClick={onClick} selectedKeys={currentKey} mode='horizontal' style={{ height: '7vh', justifyContent: 'center', backgroundColor: '#0a1428'}} />
            <Routes style={{height: '93vh'}} >
                <Route  exact path='/'  element={<Discover />} />
                <Route path='/discover' element={<Discover />} />
                <Route path='/account' element={<Account />} />
                <Route path='/fund/:id' element={<FundraiserPage />} />
                <Route path='*' element={<Discover />} />
            </Routes>
        </Router>
    );
}

const linkStyle ={
    color: 'white'
}
const signoutStyle ={
    color: 'red'
}

export default AppRouter;
