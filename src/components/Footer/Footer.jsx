import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
      <p> <a href='https://help.netflix.com/en/contactus'>Questions? Contact us.</a></p>
      </div>
      <div className="footer-edit">
      <ul>
        <li> <a href='https://help.netflix.com/en/node/25079'>Audio Description</a></li>
        <li> <a href='https://help.netflix.com/en'>Help Centre</a></li>
        <li> <a href='https://www.netflix.com/gift-cards'>Gift Cards</a></li>
        <li> <a href='https://help.netflix.com/en'>Media Centre</a></li>
        <li> <a href='https://ir.netflix.net/ir-overview/profile/default.aspx'>Investor Relations</a></li>
        <li> <a href='https://jobs.netflix.com/'>Jobs</a></li>
        <li> <a href='https://help.netflix.com/legal/termsofuse'>Terms of Use</a></li>
        <li> <a href='https://help.netflix.com/legal/privacy'>Privacy</a></li>
        <li> <a href='https://help.netflix.com/legal/notices'>Legal Notices</a></li>
        <li> <a href='https://help.netflix.com/en/node/124516'>Cookie Preferences</a></li>
        <li> <a href='https://help.netflix.com/en/node/134094'>Corporate Information</a></li>
        <li> <a href='https://help.netflix.com/en/contactus'>Contact Us</a></li>
        
      </ul>
      </div>
      <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
