import React from "react";

function Footer() {
  return (
    <div className="primary-bg primary-color">
      <div className="footer-title text-center">
        <h2>Questions? Contact Us</h2>
      </div>
      <div className="footer flex p50-RL">
        <div>
          <h4 className="m20-TB cursor-pointer">Faq</h4>
          <h4 className="m20-TB cursor-pointer">Investor Relations</h4>
          <h4 className="m20-TB cursor-pointer">Privacy</h4>
          <h4 className="m20-TB cursor-pointer">Speed Test</h4>
        </div>
        <div>
          <h4 className="m20-TB cursor-pointer">Help Center</h4>
          <h4 className="m20-TB cursor-pointer">Jobs</h4>
          <h4 className="m20-TB cursor-pointer">Cookie Preferences</h4>
          <h4 className="m20-TB cursor-pointer">Legal Notices</h4>
        </div>
        <div>
          <h4 className="m20-TB cursor-pointer">Account</h4>
          <h4 className="m20-TB cursor-pointer">Ways to Watch</h4>
          <h4 className="m20-TB cursor-pointer">Corporate Information</h4>
          <h4 className="m20-TB cursor-pointer">Only on Netflix</h4>
        </div>
        <div>
          <h4 className="m20-TB cursor-pointer">Media Center</h4>
          <h4 className="m20-TB cursor-pointer">Terms of Use</h4>
          <h4 className="m20-TB cursor-pointer">Contact Us</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer;
