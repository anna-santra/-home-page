import React from 'react';
import './Footer.css'
function Footer()
{
    const footerhead=[{"pid":1,"pname":"Get To Know Us"},{"pid":2,"pname":"Services"},{"pid":3,"pname":"Contact Us"},{"pid":4,"pname":"Connect With Us"}]
    const footerlinks=[{"id":1,"pid":1,"cname":"Aim"},{"id":2,"pid":1,"cname":"Vision"},{"id":3,"pid":1,"cname":"Testimonials"},{"id":4,"pid":2,"cname":"Consulting"},{"id":5,"pid":2,"cname":"Marketing"},{"id":6,"pid":2,"cname":"Terms & Conditions"},{"id":7,"pid":2,"cname":"Your Privacy Rights"},
                   {"id":8,"pid":3,"cname":"UK"},{"id":9,"pid":3,"cname":"US"},{"id":10,"pid":3,"cname":"INDIA"},{"id":11,"pid":4,"cname":"Facebook"},{"id":12,"pid":4,"cname":"Instagram"},{"id":13,"pid":4,"cname":"YouTube"},{"id":14,"pid":1,"cname":"Press Releases"},{"id":15,"pid":4,"cname":"Twitter"},{"id":16,"pid":3,"cname":"AUSTRALIA"}]
    return(
<React.Fragment>
<div className="container-fluid">
<div className="row border-3 bg-secondary mt-5 pt-3">
{
footerhead.map(footerobj=>{
    return(
        <div className="text-center text-dark col-md-3 col-sm-3 col-lg-3">
          <p className="h4 text-dark">{footerobj.pname}</p>
          <ul className="list-unstyled ">
              {
              footerlinks.map(linkobj=>{
             if(footerobj.pid===linkobj.pid)
             {
                 return(
                     <li>
                         <a href="#" className="foot">
                         {
                             linkobj.cname
                         }
                         </a>
                     </li>
                 )
             }
            
              })
            }
          </ul>
        </div>
    )
})
}
 
<p className="text-center mt-2">All rights reserved. Copyright © 2021 Melodica.com |&nbsp;
<a href="#" className="icons"> <i className="fab fa-twitter-square"></i></a>&nbsp;&nbsp;<a href="#" className="icons"><i className="fab fa-youtube"></i></a>&nbsp;<a href="#" className="icons"><i className="fab fa-facebook"></i></a>&nbsp;<a href="#" className="icons"><i class="fab fa-instagram"></i></a></p>
</div>
 
</div>
</React.Fragment>
    )
}
export default Footer;