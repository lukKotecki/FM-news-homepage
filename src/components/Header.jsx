import React from 'react'
import { useLocation } from 'react-router-dom';
import Menu from './Menu/Menu'
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-menu.svg'
import { nanoid } from 'nanoid'
import { NavLink } from 'react-router-dom'

export default function Header({...rest}){

    const [showMenu, setShowMenu] = React.useState(false)
    const [activePage, setActivePage] = React.useState('home')

    
    // let location = useLocation()
    // console.log(location)


    // React.useEffect(()=>{
    //     const closeMenu = function(){
    //         window.addEventListener('click', (e)=> {
    //         console.log('kliknieto')
    //         e.target.id==='menu-btn' || e.target.id === 'menu-container' ? 
    //         setShowMenu(true) : setShowMenu(false) })
    //     }
    //     return closeMenu
    // },[])

    window.addEventListener('click', (e)=> {
        console.log('kliknieto')
        e.target.id==='menu-btn' || e.target.id === 'menu-container' ? 
        setShowMenu(true) : setShowMenu(false) })



    const menuItems = [
        {name:'home'},
        {name:'new'},
        {name:'popular'},
        {name:'trending'},
        {name:'categories'}
    ]

    return (
        <header {...rest}>
            <img className='logo' src={logo} />
            <div className='menu'>
                <img id='menu-btn' src={menu} />                
                <Menu showMenu={showMenu}>
                    {menuItems.map(li=>
                        <li key={nanoid()} >
                            <NavLink 
                                to={li.name}
                                className={( { isActive } )=> isActive ? 'active' : null }
                                end>
                                {li.name}
                            </NavLink>
                        </li>)
                    }
                </Menu>
            </div>
        </header>
    )
}