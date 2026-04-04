import React from 'react';
import EtsyHeader from '../components/EtsyHeader/EtsyHeader';
import './FavouritesPage.css';

export default function FavouritesPage() {
  return (
    <div className="fav-page">
      <EtsyHeader />

      <div className="fav-wrapper">
        {/* User profile section at top */}
        <div className="fav-profile-section">
          <div className="fav-profile-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#F1641E" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="fav-profile-info">
            <h2 className="fav-profile-name">Himani</h2>
            <div className="fav-profile-links">
              <a href="#">Edit public profile</a>
              <a href="#">About</a>
            </div>
          </div>
          <button className="fav-updates-btn">Updates ▾</button>
        </div>

        {/* Empty state */}
        <div className="fav-empty-state">
          <div className="fav-empty-icon">
            📋
          </div>
          <h3 className="fav-empty-title">Nothing to see here yet</h3>
          <p className="fav-empty-subtitle">
            Start favouriting items to compare, shop, and keep track of
            <br />things you love.
          </p>
        </div>
      </div>
    </div>
  );
}
