import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-outer'>
        <div className='page-center'>
          <div className='header-inner'>
            <div className='header-left'>
                <img className='logo' src='https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:ddb78b29-683c-54ae-b43e-b6bd5e00363b/component?assetType=TEMPLATE&etag=3231cd9e21704b70bdc06c05e86a4b3f&revision=58a88525-71e4-4d48-a6dd-20f8e0cfdfd4&component_id=ef3c4681-9763-478b-af9c-fb92f2da5510' width={75}/>
            </div>
            <div className='header-right'>
                <ul>
                    <li><Link className='menu-item' to="/about">About</Link></li>
                    <li><Link className='menu-item'  to="/price">Price</Link></li>
                    <li><Link className='menu-item' to="/services">Services</Link></li>
                    <li><Link className='menu-item' to="/contact">Contact</Link></li>
                    <li><Link className='menu-item' to="/signup">Sign Up</Link></li>
                </ul>
                

            </div>
          </div>
        </div>
    </div>
  )
}

export default Header