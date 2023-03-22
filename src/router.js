import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Account from './pages/Account';


function AppRouter() {
return (
	<Router>
        {/* <Navbar /> */}
        <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route path='/discover' element={<Discover/>} />
            <Route path='/account' element={<Account/>} />
        </Routes>
	</Router>
);
}

export default AppRouter;
