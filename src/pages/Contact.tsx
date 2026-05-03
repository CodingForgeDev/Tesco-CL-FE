import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. A Tesco Chemical Group representative will contact you shortly.");
  };

  return (
    <div id="contact-page" className="py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <span className="text-xs fw-bold tracking-[0.2em] text-primary text-uppercase mb-3 d-block">Global Coordination</span>
          <h1 className="fw-black text-slate-900 display-4 mb-3" style={{ fontWeight: 900 }}>Connect With Us</h1>
          <p className="text-slate-500 max-w-3xl mx-auto fs-5">We are here to help you grow. Reach out to us for product inquiries, dealer support, or technical advice.</p>
        </div>

        <Row className="g-5">
          <Col lg={4}>
            <div className="d-grid gap-4" id="contact-details">
              {[
                { title: "Visit Us", icon: <MapPin size={24} className="text-primary" />, content: "30-C Ghaznavi Road, Model Town A, Bahawalpur, Punjab, Pakistan" },
                { title: "Call Us", icon: <Phone size={24} className="text-primary" />, content: "+92-300-6843985" },
                { title: "Email Us", icon: <Mail size={24} className="text-primary" />, content: "info@tescochemical.com" }
              ].map((item, idx) => (
                <div key={idx} className="glass-panel border-white/50 p-4 rounded-4xl shadow-sm d-flex gap-3 align-items-start">
                  <div className="bg-white/40 p-3 rounded-circle shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h6 className="fw-bold text-slate-900 mb-1">{item.title}</h6>
                    <p className="text-slate-500 small m-0 leading-tight">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-panel-dark border-white/30 rounded-4xl p-4 mt-4 shadow-xl overflow-hidden position-relative">
              <div className="position-absolute bottom-0 end-0 opacity-10 p-4" style={{ transform: 'translate(20%, 20%)' }}>
                <MessageSquare size={120} className="text-white" />
              </div>
              <h5 className="fw-bold text-slate-900 mb-2">Technical Support</h5>
              <p className="text-slate-600 mb-4" style={{ fontSize: '13px' }}>For emergency agricultural advice or chemical safety information, call our helpline.</p>
              <h4 className="fw-bold text-primary m-0">+92 300 6843985</h4>
            </div>
          </Col>

          <Col lg={8}>
            <div className="glass-panel border-white/60 p-5 rounded-4xl shadow-lg">
              <h3 className="fw-bold text-slate-900 mb-5">Send an Inquiry</h3>
              <Form onSubmit={handleSubmit}>
                <Row className="g-4">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">Full Name</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" className="py-3 px-4 bg-white/40 border-white/30 rounded-3 shadow-none focus-bg-white transition-all" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">Email Address</Form.Label>
                      <Form.Control type="email" placeholder="john@company.com" className="py-3 px-4 bg-white/40 border-white/30 rounded-3 shadow-none focus-bg-white transition-all" required />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formSubject">
                      <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">Inquiry Type</Form.Label>
                      <Form.Select className="py-3 px-4 bg-white/40 border-white/30 rounded-3 shadow-none focus-bg-white transition-all">
                        <option>Product Information</option>
                        <option>Partnership Request</option>
                        <option>Technical Support</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formMessage">
                      <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">Message</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="How can our technical team assist you?" className="py-3 px-4 bg-white/40 border-white/30 rounded-3 shadow-none focus-bg-white transition-all" required />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="pt-3">
                    <Button variant="primary" type="submit" size="lg" className="w-100 shadow-lg">
                      SUBMIT MESSAGE
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
