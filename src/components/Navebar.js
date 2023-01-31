import { Avatar, IconButton } from '@mui/material'
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/YouTube-Logo.png';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Button } from '@mui/material';

// serch

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import {auth,provider} from '../FireBase';
import {signInWithPopup} from 'firebase/auth';
import { useDispatch,useSelector } from 'react-redux';
import {setUser, getUser} from '../slices/UserSlice'

const Navebar = ()=> {

  const dispatch = useDispatch();
  // const user = useSelector((state)=> state.userInfo.user);

  // const handleLogin = async()=>{
  //   const response = await signInWithPopup(auth,provider);
  //   dispatch(setUser(response.user))
  // }

  return (
    <div id='navbar' className='navbar'>
        <div>
            <IconButton>
                <MenuIcon className='icons'/>
            </IconButton>
            <img src={logo} className="logo-img" alt="logo"/>
        </div>
        <div className='d-lg-flex'>

        <Paper className='header-serch'
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" id="search_btn" className='search-btn'>
        <SearchIcon className='icons'/>
      </IconButton>
    </Paper>
            <IconButton>
                <MicIcon className='icons'/>
            </IconButton>
        </div>
        <div className='profile_set_warper'>
            <IconButton>
                <VideoCallIcon className='icons setting-icon'/>
            </IconButton>
            <IconButton>
              {/* <Badge badgeContent={17} color="error" id='badge_colunt'> */}
                <NotificationsNoneIcon className='icons setting-icon'/>
              {/* </Badge> */}
            </IconButton>
            <Button className='sign-btn' variant="outlined">Sign in</Button>
            {/* <IconButton>
                <Avatar alt="" className='profile-pic setting-icon' src="./images/profile.jpg" />
            </IconButton>   */}
        </div>
    </div>
  )
}

export default Navebar