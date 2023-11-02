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
    const [filter,setFilter] = useState("/main")
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const navigate = useNavigate()
    const menuItem=[
        {
            path:"/main",
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

    const handleSet = (e)=>{

        setFilter(e)
    }



console.log(filter)
    return (
        <DIV className="AdminContainer d-flex">
           <div style={{width: isOpen ? "200px" : "50px"}} className="AdminSidebar whiteBg">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo text-white">Admin</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <div value={item.path} key={index} className="link" activeclassName="active" onClick={()=>handleSet(item.path)}>
                        
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </div>
                   ))
               }              

           </div>
           <main >{filter=="/main"?"Home":"Other"}</main>
        </DIV>
    );
};

export default AdminSidebar;


const DIV=styled.div`

.AdminContainer{
    display:flex;
}
main{
    width: 100%;
    padding: 20px;
}
.AdminSidebar{
    background-color: var(--first-color);
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
    color: var(--first-color);
    transition: all 0.5s;
}
.active{
    background: white;
    color: var(--first-color);
}
.icon, .link_text{
    font-size: 20px;
}


`