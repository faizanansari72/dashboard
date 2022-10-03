import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiTwotoneHome} from "react-icons/ai"
import {FcSalesPerformance} from "react-icons/fc"
import{SiGoogleads} from "react-icons/si"
import{MdAdminPanelSettings} from "react-icons/md"
import{RiAccountCircleFill} from "react-icons/ri"
import{TbBrandMastercard} from "react-icons/tb"
import{SiCampaignmonitor} from "react-icons/si"
import {MdOutlineAttachEmail} from "react-icons/md"
import{BsWhatsapp} from "react-icons/bs"
import{BsTelegram} from "react-icons/bs"
import{BsFillChatDotsFill} from "react-icons/bs"
import{MdReport} from "react-icons/md"
import {IoMdLogOut} from "react-icons/io"





const navData = [
  {navItem: "Sales",  href: "/sales" },
  {navItem: "Customer", href: "/customer"},
  {navItem: "Admin", href: "/admin"},
  {navItem: "Account", href: "/account"},
  {navItem: "Master", href: "/master"},
  {navItem: "Campaign", href: "/campaign"},
  {navItem: "Email", href: "/email"},
  {navItem: "Whatsapp", href: "/whatsapp"},
  {navItem: "Telegram", href: "/telegram"},
  {navItem: "SMS", href: "/sms"},
  {navItem: "Report", href: "/report"},
  {navItem: "Logout", href: "/logout"}];

 function Dashboard () {
  const states = [ 'Dashboard','Sales','Lead','Admin','Account','Mater','Campaign','Email','Whatsapp','Telegram','SMS','Report','Logout']

  const cities = {
     'Dashboard' : ['w','r','u'],
    'Sales' : [ 'a', 'b', 'c'],
    'Lead' : ['m','y','p'],
    'Admin' : ['q','3','n'],
    'Account' : ['q','3','n'],
    'Master' : ['q','3','n'],
    'Campaign' : ['q','3','n'],
    'Email' : ['q','3','n'],
    'Whatsapp' : ['q','3','n'],
    'Telegram' : ['q','3','n'],
    'SMS' : ['q','3','n'],
    'Report' : ['q','3','n'],
    'Logout' : ['q','3','n'],
  }

  return (
    <div className='third-page'>

       <div>
      
      <h1 className='dash-head'><i>Welcome To Dashboard !</i></h1>
   <div><h3><i className='myname'> <b>Nit Tech  <AiTwotoneHome/> </b></i></h3> </div> 
   <select className='sections'> 
    Dashboard :
    {
      states.map(state=>{
        return <option>{state}</option>
      })
    }
    </select> 
  
                            
 
       </div>
    
    
      <div>
    <nav className='navbar'>
  
       <ul className='category'>
           <li className='list'><NavLink exact to="/"></NavLink> </li>
           <li className='list' > <NavLink to="/sales">Sales <FcSalesPerformance/></NavLink></li>
           <li className='list'><NavLink to="/lead">Lead <SiGoogleads/> </NavLink></li>
           <li className='list'><NavLink to="/admin">Admin  <MdAdminPanelSettings/> </NavLink></li>
           <li className='list'><NavLink to="/account">Account  <RiAccountCircleFill/> </NavLink></li>
           <li className='list'><NavLink to="/master">Master <TbBrandMastercard/> </NavLink></li>
            <li className='list'><NavLink to="/campaign">Campaign<SiCampaignmonitor/></NavLink></li>
            <li className='list'><NavLink to="/email">Email <MdOutlineAttachEmail/></NavLink></li>
            <li className='list'><NavLink to="/whatsapp">Whatsapp<BsWhatsapp/></NavLink></li>
            <li className='list'><NavLink to="/telegram">Telegram <BsTelegram/></NavLink></li>
            <li className='list'><NavLink to="/sms">SMS  </NavLink><BsFillChatDotsFill/></li>
            <li className='list'><NavLink to="/report">Report <MdReport/></NavLink></li>
            <li className='list'><NavLink to="/logout">Logout <IoMdLogOut/></NavLink></li> 
         
      </ul>
     </nav>
     </div>
     
     
   </div>
  )
}

export default Dashboard