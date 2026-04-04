import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EtsyHeader.css';

export default function EtsyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // This state keeps track of whether the user is typing in the search bar so we can show the suggestions.
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // This state tracks which icon dropdown is currently open — only one can be open at a time.
  const [activeDropdown, setActiveDropdown] = useState(null);
  // This state holds what the user is typing in the search bar
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // This function handles the 'sticky' state to make the header stay at the top while the user explores.
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the dropdown if the user clicks anywhere outside the header icons
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.icon-wrapper')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const toggleDropdown = (name) => {
    // Toggle: clicking same icon closes it, clicking another opens it
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const handleSearchFocus = () => {
    // We are using a slight delay on the search bar focus so it feels smooth and high-end, not jumpy.
    setTimeout(() => {
      setIsSearchFocused(true);
    }, 100);
  };

  const handleSearchBlur = () => {
    // Add a slight timeout to allow clicking dropdown items before closing
    setTimeout(() => {
      setIsSearchFocused(false);
    }, 200);
  };

  // Navigate to search results when user submits the search query
  const handleSearch = (query) => {
    const q = query || searchQuery;
    if (!q.trim()) return;
    setIsSearchFocused(false);
    navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const categories = [
    "UNIQUE BIRTHDAY IDEAS", "HOME FAVOURITES", "FASHION FINDS", 
    "VINTAGE", "REGISTRY"
  ];

  const searchSuggestions = [
    { title: "Personalised gifts", image: "https://i.etsystatic.com/23244419/r/il/256acb/5460344806/il_300x300.5460344806_3962.jpg" },
    { title: "Wall art", image: "https://i.etsystatic.com/13937228/r/il/2aa962/5720982228/il_300x300.5720982228_3xm5.jpg" },
    { title: "Bedding & blankets", image: "https://i.etsystatic.com/11651126/c/1999/1999/0/858/il/b8040d/4026650319/il_300x300.4026650319_bhl2.jpg" },
    { title: "Jewellery", image: "https://i.etsystatic.com/9266327/c/2000/2000/0/0/il/fc0035/5390294661/il_300x300.5390294661_ewbc.jpg" },
  ];

  return (
    <header className={`etsy-header ${isScrolled ? 'sticky-active' : ''}`}>
      <div className="etsy-header-wrapper">
        
        <div className="etsy-header-top">
          
          <div className="header-left">
            <a href="/" className="etsy-logo">Etsy</a>
            <button 
              className="etsy-categories-btn" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
              {/* Categories text shown next to the hamburger icon, just like the real Etsy site */}
              <span className="etsy-categories-label">Categories</span>
            </button>
          </div>

          <div className="header-right-content">
            <div className={`etsy-search-container ${isSearchFocused ? 'focused' : ''}`}>
              <input
                type="text"
                className="etsy-search-input"
                placeholder="Search for anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                onKeyDown={handleKeyDown}
              />
              {/* This orange color is the exact shade used by Etsy to make the search button stand out. */}
              <button className="etsy-search-btn" aria-label="Search" onClick={() => handleSearch()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M10 2a8 8 0 105.293 13.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              </button>

              {/* We use absolute positioning here to make the dropdown float perfectly over the page content without moving other elements. */}
              {isSearchFocused && (
                <div className="search-dropdown">
                  <div className="search-dropdown-header">Gifts as special as they are</div>
                  <ul className="search-dropdown-list">
                    {searchSuggestions.map((item, idx) => (
                      <li key={idx} className="search-dropdown-item"
                        onMouseDown={() => handleSearch(item.title)}
                      >
                        <img src={item.image} alt={item.title} className="search-dropdown-img" />
                        <span className="search-dropdown-text">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* We darkened the icons here to #222 so they are easier to read and look more professional. */}
            <div className="etsy-actions">

              {/* Heart icon — tooltip on hover, navigates to /favourites page on click */}
              <div className="icon-wrapper">
                <Link to="/favourites" className="etsy-action-icon" aria-label="Favorites">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </Link>
                <div className="icon-tooltip">Favourites</div>
              </div>

              {/* Bell icon — tooltip on hover, Deals panel on click */}
              <div className="icon-wrapper">
                <button className="etsy-action-icon" aria-label="Notifications" onClick={() => toggleDropdown('deals')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="#222222" stroke="none">
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </button>
                {activeDropdown !== 'deals' && <div className="icon-tooltip">Deals</div>}
                {activeDropdown === 'deals' && (
                  <div className="icon-dropdown deals-dropdown">
                    <div className="icon-dropdown-title">Deals</div>
                    <div className="icon-dropdown-item">
                      <span className="deals-dot"></span>
                      <div>
                        <strong>Your first update!</strong>
                        <p>Look here for updates on items and shops you've favourited – sales, new products and more.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Account icon — tooltip on hover, full Etsy-style menu on click */}
              <div className="icon-wrapper">
                <button className="etsy-action-icon" aria-label="Profile" onClick={() => toggleDropdown('account')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="#222222" stroke="none" style={{ marginLeft: '4px' }}>
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </button>
                {activeDropdown !== 'account' && <div className="icon-tooltip">Your account</div>}
                {activeDropdown === 'account' && (
                  <div className="icon-dropdown account-dropdown">
                    {/* Username section at top */}
                    <div className="account-user-header">
                      <div className="account-user-avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#888" strokeWidth="1.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div>
                        <div className="account-username">Himani Sharma</div>
                        <div className="account-view-profile">View your profile</div>
                      </div>
                    </div>
                    <div className="account-divider"></div>
                    <ul className="account-menu-list">
                      <li><a href="#"><span className="acct-icon">🛍️</span>Purchases and reviews</a></li>
                      <li><a href="#"><span className="acct-icon">💬</span>Messages</a></li>
                      <li><a href="#"><span className="acct-icon">💳</span>Credit balance: ₹ 0</a></li>
                      <li><a href="#"><span className="acct-icon">🏷️</span>Special offers</a></li>
                      <li><a href="#"><span className="acct-icon">📋</span>Etsy Registry</a></li>
                      <li><a href="#"><span className="acct-icon">🏪</span>Sell on Etsy</a></li>
                    </ul>
                    <div className="account-divider"></div>
                    <ul className="account-menu-list">
                      <li><a href="#"><span className="acct-icon">❓</span>Help Centre</a></li>
                      <li><a href="#"><span className="acct-icon">⚙️</span>Account settings</a></li>
                      <li><a href="#"><span className="acct-icon">🚪</span>Sign out</a></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Cart icon — tooltip on hover, navigates to /cart page on click */}
              <div className="icon-wrapper">
                <Link to="/cart" className="etsy-action-icon action-cart" aria-label="Cart">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                  <span className="cart-dot"></span>
                </Link>
                <div className="icon-tooltip">Cart</div>
              </div>

            </div>
          </div>
          
        </div>

        <nav className="etsy-categories">
          <ul className="etsy-categories-list">
            <li>
              {/* Clicking GIFTS navigates to search results for "gifts" */}
              <Link to="/search?q=gifts" className="etsy-category-link">GIFTS</Link>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/search?q=${encodeURIComponent(category.toLowerCase())}`}
                  className="etsy-category-link"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <div className={`etsy-mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="etsy-mobile-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="etsy-drawer-header">
            <span className="etsy-drawer-title">Menu</span>
            <button className="etsy-drawer-close" onClick={() => setIsMobileMenuOpen(false)}>
              &times;
            </button>
          </div>
          <ul className="etsy-drawer-links">
            <li>
              <a href="#gifts" onClick={() => setIsMobileMenuOpen(false)}>GIFTS</a>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <a href={`#${category.replace(/\s+/g, '-').toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}>
                   {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
