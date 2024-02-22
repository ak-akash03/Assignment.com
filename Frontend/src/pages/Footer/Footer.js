import React from 'react'
import "./Footer.css"
import logo from '../../IMAGE/assignmentcom.png'


function Footer() {
  return <>
<div className="d-flex flex-column h-100">
{/* 

<section className="hero text-white py-5 flex-grow-1">
    <div className="container py-4">
        <div className="row">
            <div className="col-lg-6">
                <h1 className="display-4">Bootstrap footer bottom</h1>
                <p className="fst-italic text-muted">Using Bootstrap 5 flexbox utilities, create a footer that always sticks to the bottom of your viewport. Snippet by <a className="text-primary" href="https://bootstrapious.com/" target="_blank">Bootstrapious</a></p>
            </div>
        </div>
    </div>
</section> */}



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