import React from 'react'
import {BsLinkedin,BsGithub} from "react-icons/bs";

function Footer() {
    return (
       <footer>
           <div className="p-4 text-center  border-bottom">
               <div className="footer-thanks">Thanks for Stopping By!</div>

           </div>
           <div className="p-5 row text-center">
               <p className="d-inline-block px-5 col-12 col-md-6">Get connected with me on social networks:</p>
               <div className="d-inline-block ms-auto px-5 col-12 col-md-6">
                   <a href="https://www.linkedin.com/in/yu-hsuan-liao-a551b01b5" target="_blank" rel="noreferrer"><BsLinkedin className="home-links"/></a>
                   <a href="https://github.com/BelleLQ" target="_blank" rel="noreferrer"><BsGithub  className="home-links"/></a>
               </div>
           </div>
           <div className="text-center p-4 footer-copyright">
               © 2021 Belle Liao. All rights reserved.
           </div>
       </footer>
    );
}

export default Footer;