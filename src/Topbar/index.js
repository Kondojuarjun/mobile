import React from 'react';
import './index.css';

const Header = () => {
    return ( <div className="container">
    
                <div>
                     <div className="edyoda">EDYODA</div>
                       <p className="story">Stories</p>
                 </div>
                 <div className="explore">Explore  Categories
                 <i className="fas fa-chevron-down"></i>
                 </div>
                <div className="para">
                  EdYoda is free learning and knowledge<br/>
                <span className="small-line">sharing platform for techies</span>
                  </div>
                  <div>
                      <button className="btn">Go To Main Website</button>
                   </div>
            </div>  );
}
 
export default Header;