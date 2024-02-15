import React from 'react'

export default function Footer() {
 
  
  return (
  
    <div className='footer'>
        <hr/>
      <div className='row'>
        <div className='col-sm-3'>
          <div className='footer-con'>
            <h2>EShoping</h2>
            <div className="form-group">
              <input type="email" className="form-control input-sm input-inverse my-2" name="email" required="" data-form-field="Email" placeholder="Enter Your Email*" id="email-footer3-49"/>
            </div>
            <div className='btn-footer'>
              <button className='btn btn-primary'>Subscribe</button>
            </div>
            <span>Get monthly updates and free resources.</span>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='footer-con'>
            <h4>MOBIRISE</h4>
            <p>Phone:9536741161</p>
            <p>Email:rahulkumar202134@gmail.com</p>
            <p>Address:Aligarh</p>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="footer-con">
            <h4>RECENT NEWS</h4>
            <p>About Us</p>
            <p>Services</p>
            <p>Get In Touch</p>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="footer-con">
            <h4>LINKS</h4>
            <p>Website Builder</p>
            <p>Download for Mac</p>
            <p>Download for Windows</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
