import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Building2, Globe2, Link as LinkIcon } from 'lucide-react';

const Companies = () => {
  return (
    <div id="companies-page" className="py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <span className="text-xs fw-bold tracking-[0.2em] text-primary text-uppercase mb-3 d-block">Strategic Partners</span>
          <h1 className="fw-black text-slate-900 display-4 mb-3" style={{ fontWeight: 900 }}>Group Companies</h1>
          <p className="text-slate-500 max-w-3xl mx-auto fs-5">
            Tesco Chemical Group operates as a diversified agricultural entity through its specialized subsidiaries and global trade partners.
          </p>
        </div>

        <Row className="g-4 mb-5">
          <Col lg={4}>
            <Card className="glass-panel border-white/50 p-5 rounded-4xl h-100 shadow-lg text-center">
              <Building2 size={48} className="text-primary mx-auto mb-4" />
              <h5 className="fw-bold text-slate-900 mb-3">Tesco Chemicals Pvt Ltd</h5>
              <p className="text-slate-600 small leading-relaxed">
                The core formulation unit responsible for local manufacturing, blending, and quality assurance of technical grade chemicals.
              </p>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-pill text-[10px] fw-bold">REGISTERED FORMULATOR</span>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="glass-panel border-white/50 p-5 rounded-4xl h-100 shadow-lg text-center">
              <Globe2 size={48} className="text-primary mx-auto mb-4" />
              <h5 className="fw-bold text-slate-900 mb-3">Global Agri-Trade S.A.</h5>
              <p className="text-slate-600 small leading-relaxed">
                Our international logistics arm based in Singapore, managing the procurement of active ingredients from China, Europe, and the USA.
              </p>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-pill text-[10px] fw-bold">IMPORT COORDINATION</span>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="glass-panel border-white/50 p-5 rounded-4xl h-100 shadow-lg text-center">
              <LinkIcon size={48} className="text-primary mx-auto mb-4" />
              <h5 className="fw-bold text-slate-900 mb-3">Tesco Dealer Network</h5>
              <p className="text-slate-600 small leading-relaxed">
                A massive network of 55+ exclusive branches and 500+ affiliated retailers across Punjab and Sindh districts.
              </p>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-pill text-[10px] fw-bold">DISTRIBUTION HUB</span>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Companies;
