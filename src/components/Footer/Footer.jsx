import React from 'react'
import "./Footer.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icons">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relation</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Card</li>
                <li>Term of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="service_code">
            <p>Service Code</p>
          </div>
          <div className="service_code">&copy; 1997-2024 Netflix, Inc. </div>
        </div>
      </div>
    </div>
  );
}

export default Footer