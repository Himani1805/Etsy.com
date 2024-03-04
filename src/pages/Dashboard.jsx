import React from 'react'
import style from './Dashboard.module.css'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import DashboardContent from '../components/Dashboard/DashboardContent'
export default function Dashboard() {
  return (
    <div>
      <Header />
      <Navbar />
      <DashboardContent />
      <Footer />

    </div>
  )
}
