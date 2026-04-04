import React from 'react';
import EtsyHeader from '../components/EtsyHeader/EtsyHeader';
import './CartPage.css';

export default function CartPage() {
  return (
    <div className="cart-page">
      <EtsyHeader />

      <div className="cart-wrapper">
        <h1 className="cart-title">Your cart</h1>

        {/* Purchase protection banner */}
        <div className="cart-protection-banner">
          <span className="cart-protection-icon">🤝</span>
          <p>
            <strong>Buy confidently</strong> with Etsy's Purchase Protection programme for buyers, get a full refund in the rare case your item doesn't arrive, arrives damaged, or isn't as described.{' '}
            <a href="#" className="cart-link">See eligibility</a>
          </p>
        </div>

        {/* Empty cart message */}
        <div className="cart-empty-state">
          <p className="cart-empty-text">Your cart is empty.</p>
        </div>

        {/* Climate note */}
        <div className="cart-climate-note">
          <span className="cart-leaf-icon">🌿</span>
          <p>
            Etsy invests in climate solutions like electric trucks and carbon offsets for every delivery.{' '}
            <a href="#" className="cart-link">See how</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="cart-footer">
        <div className="cart-footer-top">
          <span className="cart-footer-locale">🇮🇳 India &nbsp;|&nbsp; English (IN) &nbsp;|&nbsp; ₹ (INR)</span>
          <div className="cart-footer-links">
            <span>© 2026 Etsy, Inc.</span>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Interest-based ads</a>
            <a href="#">Local Shops</a>
            <a href="#">Regions</a>
            <a href="#">Help Centre</a>
          </div>
        </div>
        <p className="cart-footer-legal">
          Merchant is Etsy, Inc. (USA), Etsy Ireland UC (Ireland), Etsy UK Limited (United Kingdom), Etsy Canada Limited (Canada), or Etsy Australia Pty Limited (Australia) depending on the currency and location of the payment instrument issuance.
        </p>
        <p className="cart-footer-address">B-583 Adjacent Park Place, Sushant Lok Phase-I, Gurgaon, Haryana, India, 122009</p>
      </footer>
    </div>
  );
}
