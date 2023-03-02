import React from 'react'
import {NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='menu-container'>
        <h1 className='titulo-tienda'>Bombastick</h1>
        <ul className='menu-items'>
            <li>
                <NavLink to='/' className='menu-list'>Productos</NavLink>
            </li>
            <li>
                <NavLink to='/category/Conjuntos' className='menu-list'>Conjuntos</NavLink>
            </li>
            <li>
                <NavLink to='/category/Pantalones' className='menu-list'>Pantalones</NavLink>
            </li>
            <li>
                <NavLink to='/category/Polleras' className='menu-list'>Polleras</NavLink>
            </li>
            <li>
                <NavLink to='/category/Top' className='menu-list'>Top</NavLink>
            </li>
            <li>
                <NavLink to='/category/Vestidos' className='menu-list'>Vestidos</NavLink>
            </li>
        </ul>
        <div>
            <NavLink to='/cart'className= 'menu-carrito'>Carrito</NavLink>
        </div>
    </div>
  )
}

export default NavBar