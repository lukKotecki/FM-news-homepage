import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Header from './Header'
import Section from './Section'


export default function Layout(){


    return (
        <>
            <Header />
            <Outlet />
            <Aside />
            <Section />
        </>
    )
}