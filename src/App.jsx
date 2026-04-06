import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Dashboard from './pages/Dashboard'
import CartPage from './pages/CartPage'
import FavouritesPage from './pages/FavouritesPage'
import SearchPage from './pages/SearchPage'
import '../mediaQuery.css'

export default function App() {
  return (
    // UserProvider wraps everything so any component can read the logged-in user's name
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
