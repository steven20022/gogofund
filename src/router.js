import React, { useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link}
	from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Account from './pages/Account';
import { Menu, MenuButton, MenuItem } from '@aws-amplify/ui-react';
import FundraiserPage from './pages/Fundraiser';


function AppRouter() {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (open) => {
        setIsOpen(open);
    };

    const closeMenu = () => setIsOpen(false);
  
    return (
        <Router>
            <Menu isOpen={isOpen} onOpenChange={handleOpenChange}>
                <MenuItem >
                    <Link to="/" onClick={() => {closeMenu()}}> Home </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/discover" onClick={() => {closeMenu()}}> Discover </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/Account" onClick={() => {closeMenu()}}> Account </Link>
                </MenuItem>
            </Menu>
            <Routes>
                <Route exact path='/'  element={<Home />} />
                <Route path='/discover' element={<Discover />} />
                <Route path='/account' element={<Account />} />
                <Route path='/fund' element={<FundraiserPage />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
