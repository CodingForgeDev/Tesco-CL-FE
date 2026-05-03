import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'motion/react';
import { Layers, Zap, ShoppingCart } from 'lucide-react';

const Seeds = () => {
  return (
    <div id="seeds-page" className="py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <span className="text-xs fw-bold tracking-[0.2em] text-primary text-uppercase mb-3 d-block">Elite Genetics</span>
          <h1 className="fw-black text-slate-900 display-4 mb-3" style={{ fontWeight: 900 }}>Seed Varieties</h1>
          <p className="text-slate-500 max-w-3xl mx-auto fs-5">
            Partnering with global seed tech leaders to bring high-germination, disease-resistant varieties to Pakistani soil.
          </p>
        </div>

        <Row className="g-4 mb-5">
          {[
            {
              title: "Hybrid Corn (Maize)",
              grade: "High Germination",
              desc: "Superior heat tolerance with yield potential exceeding 120 maunds per acre. Uniform cob size and rapid dry-down.",
              tech: "Triple-Layer Coating"
            },
            {
              title: "BT Cotton Varieties",
              grade: "Bollworm Resistant",
              desc: "Next-gen BT technology specifically adapted for lower Punjab districts. High fiber quality and excellent branching.",
              tech: "Kansol-Certified"
            },
            {
              title: "Premium Wheat Seeds",
              grade: "Rust Resistant",
              desc: "Certified varieties by the Department of Agriculture. Heavy grain weight with high milling quality for local markets.",
              tech: "Pre-Treated Protectant"
            }
          ].map((seed, idx) => (
            <Col lg={4} key={idx}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="glass-panel border-white/50 rounded-4xl p-5 h-100 shadow-xl overflow-hidden position-relative">
                  <div className="position-absolute top-0 end-0 p-4 opacity-10">
                    <Layers size={80} />
                  </div>
                  <Badge bg="primary" className="mb-3 px-3 py-2 text-uppercase tracking-widest" style={{ fontSize: '10px' }}>{seed.grade}</Badge>
                  <h4 className="fw-bold text-slate-900 mb-3">{seed.title}</h4>
                  <p className="text-slate-600 mb-4 small leading-relaxed">{seed.desc}</p>
                  <div className="mt-auto pt-3 border-top border-white/30 d-flex align-items-center justify-content-between">
                    <span className="text-[10px] fw-bold text-primary text-uppercase tracking-wider"><Zap size={14} className="me-1" /> {seed.tech}</span>
                    <Button variant="link" className="text-slate-900 p-0 text-decoration-none fw-bold small">Details</Button>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Seeds;
