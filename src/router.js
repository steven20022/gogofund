import React, { useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link}
	from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Account from './pages/Account';
import { Menu, MenuButton, MenuItem, TabItem, Tabs } from '@aws-amplify/ui-react';
import FundraiserPage from './pages/Fundraiser';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';



function AppRouter() {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (open) => {
        setIsOpen(open);
    };

    const closeMenu = () => setIsOpen(false);
    const signout = async() => await Auth.signOut();
  
    return (
        <Router>
            <Menu isOpen={isOpen} onOpenChange={handleOpenChange} style={{justifyContent: 'center'}} >
                <MenuItem >
                    <Link to="/" onClick={() => {closeMenu()}}> Home </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/discover" onClick={() => {closeMenu()}}> Discover </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/Account" onClick={() => {closeMenu()}}> Account </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/Home" onClick={() => {signout()}}> Signout </Link>
                </MenuItem>
            </Menu>
            <Routes>
                <Route exact path='/'  element={<Home />} />
                <Route path='/discover' element={<Discover />} />
                <Route path='/account' element={<Account />} />
                <Route path='/fund/:id' element={<FundraiserPage />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
