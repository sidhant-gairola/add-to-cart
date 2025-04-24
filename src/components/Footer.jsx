import { FaRegCopyright } from "react-icons/fa";
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer-container">
      <FaRegCopyright /> SG {new Date().getFullYear()} | All rights reserved.
    </div>
  )
}

export default Footer
