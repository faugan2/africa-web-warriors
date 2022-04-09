import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector,useDispatch } from "react-redux";
import {selectUser,selectLoaded,setUser, setAchats} from "../features/appSlice";
import {useState,useEffect} from "react";
import "../styles/menu.scss";
import "../styles/menu_mobile.scss";
import { auth } from '../firebase_file';
import {useHistory} from "react-router-dom";

export default function SimpleMenu() {
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const history=useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [me,set_me]=useState(null);
 
    useEffect(()=>{
        if(user==null) return;
        set_me(user);
    },[user])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu">
      {
        me!=null && 
        <button onClick={handleClick}>
            <img src={me?.photo} />
        </button>
        }
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={e=>{
            history.push("/profile");
        }}>Profile</MenuItem>
        
        <MenuItem onClick={e=>{
            auth.signOut();
            dispatch(setUser(null));
            dispatch(setAchats(null));
            handleClose();
        }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
