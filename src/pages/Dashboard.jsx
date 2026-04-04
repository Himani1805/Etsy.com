import React from 'react'
import style from './Dashboard.module.css'
import EtsyHeader from '../components/EtsyHeader/EtsyHeader'
import GreetingHero from '../components/GreetingHero/GreetingHero'
import Footer from '../components/Footer/Footer'
import DashboardContent from '../components/Dashboard/DashboardContent'
export default function Dashboard() {
  return (
    <div>
      <EtsyHeader />
      <GreetingHero />
      <DashboardContent />
      <Footer />
    </div>
  )
}
