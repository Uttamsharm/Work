import React from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube, faTiktok, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex items-center mb-10">
        <img src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt="Printify Logo" className="mr-2 h-12" />
        <div className="flex space-x-4">
          <a href="#" className="text-green-600"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="text-green-600"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="text-green-600"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#" className="text-green-600"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="text-green-600"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#" className="text-green-600"><FontAwesomeIcon icon={faTiktok} /></a>
          <a href="#" className="text-green-600"><FontAwesomeIcon icon={faReddit} /></a>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 text-left">
        <div>
          <h3 className="font-bold mb-4">Integrations</h3>
          <ul>
            <li>Shopify</li>
            <li>Etsy</li>
            <li>eBay</li>
            <li>Amazon</li>
            <li>TikTok Shop</li>
            <li>PrestaShop</li>
            <li>BigCommerce</li>
            <li>Wix</li>
            <li>WooCommerce</li>
            <li>Squarespace</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Discover</h3>
          <ul>
            <li>Blog</li>
            <li>Guides</li>
            <li>Products</li>
            <li>Etsy print-on-demand</li>
            <li>Shopify print-on-demand</li>
            <li>Woocommerce print-on-demand</li>
            <li>Wix print-on-demand</li>
            <li>Squarespace print-on-demand</li>
            <li>Make Your Own Shirt</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Start selling</h3>
          <ul>
            <li>Custom T-shirts</li>
            <li>Custom Hoodies</li>
            <li>Custom Mugs</li>
            <li>Custom Socks</li>
            <li>Custom Backpacks</li>
            <li>Custom Branding</li>
            <li>Sell on Etsy</li>
            <li>Sell on Social Media</li>
            <li>Free T-shirt Designs</li>
            <li>Custom Products</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Printify</h3>
          <ul>
            <li>Print on Demand</li>
            <li>Print Providers</li>
            <li>Experts Program</li>
            <li>Printify Express Delivery</li>
            <li>Become a Partner</li>
            <li>About</li>
            <li>Printify Quality Promise</li>
            <li>Jobs</li>
            <li>Webinars</li>
            <li>Printing Profits Podcast</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;







