/*import React from "react"

export default function Main() {
    return (
        <main>
            <h1 className="main--title">React Facts</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}*/
import React from "react";
import { FaMailBulk} from "react-icons/fa"

export default function Main() {
    return (
    <main className="info">        
             <h1>Ricardo Weiss</h1>
             <h2>Frontend Developer</h2>
             <a href="#" className="info-link"><p className="info-site">ricardoweiss.website</p></a>
        <div className="button-container">            
           <a href="mailto:ricardoweiss1012@gmail.com" className="btn-email">< FaMailBulk /><p id="email">Email</p></a> 
        </div>
        <div className="about">
          <h4 className="about-title">About</h4>
          <p className="text-about">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="interests">
          <h4 className="interests-title">Interests</h4>
          <p className="text-interests">I love nature and hiking. History. Ethnic foods and cultures.</p>
        </div>
    </main>
    )
}