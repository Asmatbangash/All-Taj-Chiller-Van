import logo from '../../assets/imges/logo.png'
import './Footer.css'
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import whatsApp from '../../assets/imges/whatsApp.png'

function Footer(){
    return(
<footer class="pt-5 pb-3">
    <section class="container-fluid container-xl">
      <div class="row pb-5">
        <div class="col-md-6 col-lg-3 pb-3 pb-md-0">
          <div class="d-flex align-items-center me-3">
             <IoCall className='text-light  fs-1'/>
            <a href="tel:+971 55 261 3713" class="ps-3 d-flex flex-column text-decoration-none" >
              <strong class="text-light">Call</strong>
              <span class="text-light">+971 55 261 3713</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 pb-3 pb-md-0">
          <div class="d-flex align-items-center me-3">
            <MdEmail className='text-light fs-1'/>
            <a href="mailto:info@altajchillervan.com" class="ps-3 d-flex flex-column text-decoration-none" >
              <strong class="text-light">Email Address</strong>
              <span class="text-light">info@altajchillervan.com</span>
            </a>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 pt-md-3 pt-lg-0 ps-lg-5">
          <div class="d-flex align-items-center me-3">
            <IoLocation className='text-light fs-1'/>
            <a href="https://maps.app.goo.gl/zUbatxxCbtSFGQvR8" class="ps-3 d-flex flex-column text-decoration-none">
              <strong class="text-light">Location</strong>
              <span class="text-light">001 Persia international city Dubai</span>
            </a>
          </div>
        </div>
      </div>
     
      <hr class="bg-light text-light" />
      <div class="row py-4">
        <div class="col-lg-4 pe-lg-4">
          <a class="navbar-brand footer-logo" href="">
            <img src={logo} alt="Footer Logo" width='250' height='70'/>
          </a>
          <p class="footer-desc text-light pt-3">
            The benefits of using a Al Taj Chiller Van facility include convenience, flexibility, and
            cost-effectiveness. Renting a refer container eliminates the need for companies to invest in &amp; maintain
            their own refrigerated transportation equipment, which can be expensive &amp; time-consuming. Additionally, Al
            Taj Chiller Van facilities offer a range of container sizes and configurations to meet the specific needs of
            their clients.
          </p>
        </div>
        <div class="col-md-3 col-lg-2 pt-4 ps-lg-4">
          <h6 class="text-light">Quick Links</h6>
          <hr class="secondary-color my-0" />
          <ul class="list-unstyled pt-4">
            <li class="pb-2">
              <a href="" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">Home</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">About Us</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">Services</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-lg-2 pt-4 ps-xl-4">
          <h6 class="text-light">Services</h6>
          <hr class="secondary-color my-0 services-hr" />
          <ul class="list-unstyled pt-4">
            <li class="pb-2">
              <a href="" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">Chiller Truck</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">Chiller Van</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="freezer" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">Freezer Van</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">High Roof Van</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">Freezer Truck</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="" className='text-decoration-none text-light'>
               <FaGreaterThan />
                <span class="text-light m-1">Refrigerated Truck</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-4 pt-4 ps-xl-4">
          <h6 class="text-light">Contact Info</h6>
          <hr class="secondary-color my-0 contact-info" />
          <ul class="list-unstyled pt-4">
            <li class="pb-2">
              <a href="https://maps.app.goo.gl/zUbatxxCbtSFGQvR8" class="pb-2 text-decoration-none">
              <IoLocation className='text-light fs-4'/>
                <span class="text-light ps-2">001 Persia international city Dubai</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="mailto: info@altajchillervan.com" class="pb-2 text-decoration-none">
              <MdEmail className='text-light fs-4'/>
                <span class="text-light ps-2">info@altajchillervan.com</span>
              </a>
            </li>
            <li class="pb-2">
              <a href="tel: +971 55 261 3713" class="pb-2 text-decoration-none">
              <IoCall className='text-light  fs-4'/>
                <span class="text-light ps-2">+971 55 261 3713</span>
              </a>
            </li>

            <li class="mt-3">
              <span class="text-light mt-4 me-2 follow-us">Follow Us</span>
              <a href="https://www.facebook.com/profile.php?id=61565035460415&amp;mibextid=LQQJ4d" class="me-1"><FaFacebook /></a>
              <a href="https://www.instagram.com/al_taj_chiller_van_1?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" class="me-1"><FaInstagramSquare /></a>
              <a href="https://www.linkedin.com/in/al-taj-chiller-van-970515320?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app" class="me-1"><FaLinkedin /></a>
              <a href="https://www.tiktok.com/@altajchillervans?_t=8p3AoiXx4mf&amp;_r=1"><AiFillTikTok /></a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="bg-light text-light" />
      <div class="row">
        <p class="text-light text-lg-center fw-light">
          © Copyright 2024 Al Taj Chiller Van. All rights reserved. Design and Developed by <a href="" class="text-decoration-underline secondary-color fw-bold" target="_blank">@smat-bangash</a>
        </p>
      </div>
    </section>
    <section class="footer-whatsapp">
      <a href="https://wa.me/971552613713" target="_blank"><img src={whatsApp} alt="Whatsapp Chat" width='70' height='50'/></a>
    </section>
  </footer>
    )
};

export default  Footer;