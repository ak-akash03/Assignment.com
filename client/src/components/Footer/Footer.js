import React from 'react'
import "./Footer.css"
import logo from '../../IMAGE/assignmentcom.png'


function Footer() {
  return <>
<div className="d-flex flex-column h-100">



<footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
        <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
                <img height={"50px"} src={logo} alt='png'></img>
                <p className="small my-2 text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <p className="small text-white mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">Bootstrapious.com</a></p>
            </div>
            <div className="text-white col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><a className='text-white' href="#">Home</a></li>
                    <li><a className='text-white' href="#">About</a></li>
                    <li><a className='text-white' href="#">Get started</a></li>
                    <li><a className='text-white' href="#">FAQ</a></li>
                </ul>
                <ul className="list-unstyled text-muted">
                    <li><a className='text-white' href="#">education</a></li>
                    <li><a className='text-white' href="#">work</a></li>
                    <li><a className='text-white' href="#">services</a></li>
                    <li><a className='text-white' href="#">other</a></li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                
            </div>
        </div>
    </div>
</footer>
</div>
  </>
}

export default Footer
