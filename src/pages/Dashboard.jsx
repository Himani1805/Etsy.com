import React from 'react'
import style from './Dashboard.module.css'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
export default function Dashboard() {
  return (
    <div>
        <Header />
        <Navbar />
        <Footer />
    </div>
  )
}
