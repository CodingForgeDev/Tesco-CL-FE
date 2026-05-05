import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'motion/react';
import { Heart, Users, Sprout, ShieldCheck } from 'lucide-react';

const Contribution = () => {
  return (
    <div id="contribution-page" className="py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <span className="text-xs fw-bold tracking-[0.2em] text-primary text-uppercase mb-3 d-block">Social Responsibility</span>
          <h1 className="fw-black text-slate-900 display-4 mb-3" style={{ fontWeight: 900 }}>Our Contribution</h1>
          <p className="text-slate-500 max-w-3xl mx-auto fs-5">
            Beyond chemistry, we are committed to the prosperity of rural communities and the sustainability of Pakistan's agricultural future.
          </p>
        </div>

        <Row className="g-4 mb-5">
          {[
            {
              title: "Farmer Education Programs",
              icon: <Users size={32} />,
              desc: "We conduct over 200 field demonstrations annually, teaching farmers modern techniques for integrated pest management and efficient water usage."
            },
            {
              title: "Soil Health Initiatives",
              icon: <Sprout size={32} />,
              desc: "Our mobile soil testing labs provide free analysis to small-scale farmers, helping them optimize fertilizer use and preserve land fertility."
            },
            {
              title: "Rural Youth Training",
              icon: <Heart size={32} />,
              desc: "Empowering the next generation of agricultural experts through internships and vocational training in chemical formulation and field safety."
            },
            {
              title: "Climate Resilience",
              icon: <ShieldCheck size={32} />,
              desc: "Developing and promoting bio-friendly adjuvants that reduce chemical runoff and enhance crop resistance to extreme weather patterns."
            }
          ].map((item, idx) => (
            <Col md={6} lg={3} key={idx}>
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="glass-panel border-white/50 rounded-4xl p-4 h-100 shadow-sm text-center">
                  <div className="bg-primary/10 text-primary rounded-circle p-4 mx-auto mb-4 d-inline-block shadow-sm">
                    {item.icon}
                  </div>
                  <h5 className="fw-bold text-slate-900 mb-3">{item.title}</h5>
                  <p className="text-slate-500 small leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Card className="glass-panel-dark border-white/30 rounded-4xl p-4 p-md-5 shadow-xl mt-5">
          <Row className="align-items-center">
            <Col lg={7}>
              <h2 className="fw-bold text-slate-900 mb-4">Sustainability Goals 2030</h2>
              <p className="text-slate-600 mb-4">
                Tesco Chemical Group is aligned with global sustainability standards. We aim to reduce our carbon footprint by 30% and ensure that 100% of our packaging is recyclable by the end of the decade.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white/50 rounded-pill border border-white text-xs fw-bold tracking-wider text-slate-700">ZERO WASTE FORMULATION</div>
                <div className="px-4 py-2 bg-white/50 rounded-pill border border-white text-xs fw-bold tracking-wider text-slate-700">AWARENESS CAMPAIGNS</div>
                <div className="px-4 py-2 bg-white/50 rounded-pill border border-white text-xs fw-bold tracking-wider text-slate-700">WATER CONSERVATION</div>
              </div>
            </Col>
            <Col lg={5} className="mt-4 mt-lg-0 text-center">
               <img src="https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=1000" alt="Green Field" className="img-fluid rounded-4 shadow-sm" />
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Contribution;
