import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import "./sidebar.css"
import {MdCrisisAlert} from "react-icons/md"
import {BiMessageAltAdd} from "react-icons/bi"
import {TbLogout2} from "react-icons/tb"
import styled from 'styled-components';


const AdminSidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const navigate = useNavigate()
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/analytics",
            name:"Stocks",
            icon:<FaRegChartBar/>
        },
        {
            path:"/sales",
            name:"Sales",
            icon:<MdCrisisAlert/>
        },
        {
            path:"/AdminAbout",
            name:"Users",
            icon:<FaUserAlt/>
        },
        {
            path:"/comment",
            name:"Reviews",
            icon:<FaCommentAlt/>
        },
        {
            path:"/AdminProduct",
            name:"Add ",
            icon:<BiMessageAltAdd/>
        },
        {
            path:"/AdminProductList",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/AdminLogout",
            name:"Logout",
            icon:<TbLogout2/>
        }
    ]

    const handleAdminLogout = ()=>{
        localStorage.setItem("Admin",false);
        navigate("/")
    }




    return (
        <DIV className=" AdminContainer">
           <div style={{width: isOpen ? "200px" : "50px"}} className="AdminSidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">EcoFood</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               
               {/* <button onClick={handleAdminLogout} className='link border-0 '><TbLogout2 className="icon"/></button> */}
           </div>
           <main>{children}</main>
        </DIV>
    );
};

export default AdminSidebar;


const DIV=styled.div`
    /* *{
    margin:0;
    padding:0;
    text-decoration: none;
} */
.AdminContainer{
    display:flex;
}
main{
    width: 100%;
    padding: 20px;
}
.AdminSidebar{
    background: #DC3545;
    /* background:#1A73E8; */
    color: #fff;
    height: 100vh;
    width: 200px;
    transition: all 0.5s;
}
.top_section{
    display: flex;
    align-items:center;
    padding:20px 15px;
}
.logo{
    font-size: 25px;
}
.bars{
    display: flex;
    font-size: 25px;
    margin-left: 50px;
}
.link{
    display: flex;
    color: #fff;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.5s;
    
}
.link:hover{
    background: white;
    color: #DC3545;
    transition: all 0.5s;
}
.active{
    background: white;
    color: #DC3545;
}
.icon, .link_text{
    font-size: 20px;
}

/* button{
    background-color: #DC3545;
} */
`