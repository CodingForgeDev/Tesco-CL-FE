import React from 'react';
import { Nav, Navbar, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="fixed-top pt-3 px-3 z-50">
      <Navbar 
        expand="lg" 
        expanded={expanded}
        onToggle={(val) => setExpanded(val)}
        className={`glass-panel border border-white/50 max-w-6xl mx-auto px-4 py-2 shadow-2xl transition-all duration-300 ${expanded ? 'rounded-4xl' : 'rounded-full'}`} 
        id="main-nav" 
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-3 fw-bold text-slate-800 fs-4" id="brand-logo">
            <div className="bg-primary rounded-full p-1 d-flex align-items-center justify-content-center shadow-lg" style={{ width: '40px', height: '40px' }}>
              <span className="text-white fw-black">T</span>
            </div>
            <div className="d-flex flex-column lh-1">
              <span className="tracking-tighter fs-6 fs-sm-5 d-sm-block text-slate-900" style={{ fontWeight: 800 }}>TESCO CHEMICAL</span>
              <span className="text-primary d-sm-block" style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '4px', marginTop: '2px' }}>GROUP</span>
            </div>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle" className="border-0 shadow-none">
            <Menu size={24} className="text-slate-800" />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center gap-xl-2 py-3 py-lg-0">
              <Nav.Link as={Link} to="/" active={location.pathname === '/'} className="nav-item-glass mx-lg-1">Home</Nav.Link>
              
              <NavDropdown title="Company" id="company-dropdown" className="nav-item-glass mx-lg-1">
                <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contribution">Our Contribution</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quality">Quality Control</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/companies">Group Companies</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/products" active={location.pathname === '/products'} className="nav-item-glass mx-lg-1">Products</Nav.Link>
              
              <NavDropdown title="Resources" id="resources-dropdown" className="nav-item-glass mx-lg-1">
                <NavDropdown.Item as={Link} to="/seeds">Seed Varieties</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/crops">Crop Management</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link 
                as={Link} 
                to="/contact" 
                className="mt-2 mt-lg-0 ms-lg-3"
                id="nav-link-contact"
              >
                <Button variant="primary" className="rounded-full px-4 px-lg-5 text-[9px] text-lg-[10px] tracking-widest shadow-xl border-0 py-2 fw-black" id="nav-contact-btn">
                  CONTACT US
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="glass-panel border-0 border-top border-white pt-5 pb-4 mt-auto shadow-lg" id="site-footer">
      <Container>
        <div className="row g-4 mb-5">
           {/* Brand & Info */}
           <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center gap-3 fw-bold text-slate-800 fs-4 mb-4">
                <div className="bg-primary rounded p-1 d-flex align-items-center justify-content-center shadow-lg" style={{ width: '36px', height: '36px' }}>
                  <span className="text-white fw-black fs-5">T</span>
                </div>
                <div className="d-flex flex-column lh-1">
                  <span className="tracking-tighter fs-6 text-slate-900" style={{ fontWeight: 800 }}>TESCO CHEMICAL</span>
                  <span className="text-primary" style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '4px' }}>GROUP</span>
                </div>
              </div>
              <p className="text-slate-500 small leading-relaxed mb-4" style={{ maxWidth: '300px' }}>
                Pakistan's leading Importer, Formulator, and Distributor of high-performance chemical solutions for the modern agricultural landscape.
              </p>
              <div className="d-flex gap-2">
                 {[
                   { icon: <Facebook size={18} />, link: "#" },
                   { icon: <Twitter size={18} />, link: "#" },
                   { icon: <Instagram size={18} />, link: "#" },
                   { icon: <Linkedin size={18} />, link: "#" }
                 ].map((social, i) => (
                   <a key={i} href={social.link} className="bg-white/50 hover-bg-primary hover-text-white transition-all p-2 rounded-lg text-slate-500 shadow-sm border border-white">
                     {social.icon}
                   </a>
                 ))}
              </div>
           </div>

           {/* Quick Links */}
           <div className="col-lg-2 col-md-6">
              <h6 className="fw-black text-slate-900 text-uppercase tracking-widest mb-4" style={{ fontSize: '10px' }}>Site Map</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                 {[
                   { label: "Home", to: "/" },
                   { label: "About Us", to: "/about" },
                   { label: "Product Catalog", to: "/products" },
                   { label: "Our Contribution", to: "/contribution" },
                   { label: "Seed Varieties", to: "/seeds" }
                 ].map((link, i) => (
                   <li key={i}>
                      <Link to={link.to} className="text-slate-500 text-decoration-none small hover-text-primary transition-all fw-bold">
                        {link.label}
                      </Link>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Corporate */}
           <div className="col-lg-2 col-md-6">
              <h6 className="fw-black text-slate-900 text-uppercase tracking-widest mb-4" style={{ fontSize: '10px' }}>Corporate</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                 {[
                   { label: "Quality Control", to: "/quality" },
                   { label: "Group Companies", to: "/companies" },
                   { label: "Crop Management", to: "/crops" },
                   { label: "Contact Us", to: "/contact" }
                 ].map((link, i) => (
                   <li key={i}>
                      <Link to={link.to} className="text-slate-500 text-decoration-none small hover-text-primary transition-all fw-bold">
                        {link.label}
                      </Link>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Contact Info */}
           <div className="col-lg-4 col-md-6">
              <h6 className="fw-black text-slate-900 text-uppercase tracking-widest mb-4" style={{ fontSize: '10px' }}>Headquarters</h6>
              <div className="d-flex flex-column gap-3">
                 <div className="d-flex align-items-start gap-3">
                    <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-slate-500 small m-0 fw-medium">Tesco Chemical Group, Bahawalpur Road, Multan, Punjab, Pakistan</p>
                 </div>
                 <div className="d-flex align-items-center gap-3">
                    <Phone size={18} className="text-primary flex-shrink-0" />
                    <p className="text-slate-500 small m-0 fw-bold">+92 300 6843985</p>
                 </div>
                 <div className="d-flex align-items-center gap-3">
                    <Mail size={18} className="text-primary flex-shrink-0" />
                    <p className="text-slate-500 small m-0 fw-bold">info@tescochemical.com</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="pt-4 border-top border-slate-100">
          <div className="row align-items-center g-4">
             <div className="col-lg-6">
                <div className="d-flex flex-wrap gap-4" id="footer-badges">
                  <span className="text-[10px] fw-black text-slate-400 text-uppercase tracking-widest">ISO 9001:2015</span>
                  <span className="text-[10px] fw-black text-slate-400 text-uppercase tracking-widest">Licensed Formulator</span>
                  <span className="text-[10px] fw-black text-slate-400 text-uppercase tracking-widest">Global ID #52WMB95</span>
                </div>
             </div>
             <div className="col-lg-6 text-lg-end">
                <p className="text-[10px] fw-black text-slate-400 text-uppercase m-0">
                  © {new Date().getFullYear()} Tesco Chemical Group Industries Pvt. Ltd. All rights reserved.
                </p>
             </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
