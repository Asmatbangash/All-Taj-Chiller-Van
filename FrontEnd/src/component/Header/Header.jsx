import logo from "../../assets/imges/logo.png";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <section className="bg-white py-3 px-0 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-12 contact-info d-flex">
              <div className="d-flex align-items-center me-3">
                <IoLocation />
                <a
                  href="https://maps.app.goo.gl/zUbatxxCbtSFGQvR8"
                  target="_blank"
                  className="px-2 text-decoration-none text-dark"
                >
                  001 Persia international city Dubai
                </a>
              </div>
              <div className="d-flex align-items-center me-3">
                <IoCall />
                <a
                  href="tel:+971552613713"
                  className="px-2 text-decoration-none text-dark"
                >
                  +971 55 261 3713
                </a>
              </div>
              <div className="d-flex align-items-center">
                <MdEmail />
                <a
                  href="mailto:info@altajchillervan.com"
                  className="px-2 text-decoration-none text-dark"
                >
                  info@altajchillervan.com
                </a>
              </div>
            </div>
            <div className="col-md-2 col-12 social-links d-flex justify-content-md-end justify-content-start">
              <a
                href="https://www.instagram.com/al_taj_chiller_van_1?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
                className="d-flex align-items-center me-3 text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61565035460415&amp;mibextid=LQQJ4d"
                className="d-flex align-items-center me-3 text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/al-taj-chiller-van-970515320?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app"
                className="d-flex align-items-center me-3 text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.tiktok.com/@altajchillervans?_t=8p3AoiXx4mf&amp;_r=1"
                className="d-flex align-items-center text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTikTok />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="navigation-menu sticky-top">
        <div className="container-fluid container-lg h-100">
          <nav className="navbar navbar-expand-sm navbar-light justify-content-md-between justify-content-lg-evenly">
            <Link className="navbar-brand header-logo" to="/">
              <img src={logo} alt="Logo" width="200" height="50" />
            </Link>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end justify-content-md-center"
              id="mynavbar"
            >
              <ul className="navbar-nav align-items-md-center py-3 px-0 p-md-0">
                <li className="pe-3">
                  <Link className="nav-link p-0 text-light" to="/">
                    Home
                  </Link>
                </li>
                <li className="pe-3">
                  <Link className="nav-link p-0 text-light" to="/about-us">
                    About Us
                  </Link>
                </li>

                <li className="dropdown">
                  <a
                    className="nav-link p-0 dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to='/services/chiller-van'>
                        chiller Van
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/chiller-truck">
                         chiller Truck
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/freezer-van">
                         Freezer Van
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/freezer-truck">
                         Freezer Truck
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/highRoof-van">
                         High Roof Van
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/refrigirated-truck">
                         Refrigirated Truck
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="pe-3 d-md-none">
                  <a className="nav-link p-0 text-light" href="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <Link to="/contact-us" className="btn btn-light d-none d-md-block">
              Contact Us
            </Link>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Header;
