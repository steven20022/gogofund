import React from 'react';
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
return (
	<Router>
        <Menu>
            <MenuItem>
                <Link to="/"> Home </Link>
            </MenuItem>
            <MenuButton>
                <Link to="/discover"> Discover </Link>
            </MenuButton>
            <MenuButton>
                <Link to="/Account"> Account </Link>
            </MenuButton>
        </Menu>
        <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route path='/discover' element={<Discover/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/fund' element={<FundraiserPage/>} />
            <Route path='*' element={<Home/>} />
        </Routes>
	</Router>
);
}

export default AppRouter;
