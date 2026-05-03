import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Microscope, Activity, CheckCircle, Database } from 'lucide-react';

const QualityControl = () => {
  return (
    <div id="quality-control-page" className="py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <span className="text-xs fw-bold tracking-[0.2em] text-primary text-uppercase mb-3 d-block">Precision Standards</span>
          <h1 className="fw-black text-slate-900 display-4 mb-3" style={{ fontWeight: 900 }}>Quality Control</h1>
          <p className="text-slate-500 max-w-3xl mx-auto fs-5">
            Every drop formulated at Tesco Chemical Group undergoes multi-stage laboratory testing to ensure maximum efficacy and environmental safety.
          </p>
        </div>

        <Row className="g-5 align-items-center mb-5">
          <Col lg={6}>
            <div className="glass-panel border-white/50 p-5 rounded-4xl shadow-lg">
              <h3 className="fw-bold text-slate-900 mb-4">Our Lab Standards</h3>
              <p className="text-slate-600 mb-4 lh-lg">
                We operate a state-of-the-art Research & Development facility in Bahawalpur, equipped with HPLC and GC-MS technology to identify active ingredient purity down to 1 part per billion.
              </p>
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-xs fw-bold text-slate-700 uppercase">Ingredient Purity Check</span>
                  <span className="text-xs fw-bold text-primary">100%</span>
                </div>
                <ProgressBar now={100} variant="primary" style={{ height: '8px' }} />
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-xs fw-bold text-slate-700 uppercase">Formulation Stability</span>
                  <span className="text-xs fw-bold text-primary">99.8%</span>
                </div>
                <ProgressBar now={99.8} variant="primary" style={{ height: '8px' }} />
              </div>
              <div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-xs fw-bold text-slate-700 uppercase">Environmental Compliance</span>
                  <span className="text-xs fw-bold text-primary">ISO Certified</span>
                </div>
                <ProgressBar now={100} variant="primary" style={{ height: '8px' }} />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-4">
              {[
                { title: "HPLC Analysis", icon: <Microscope className="text-primary" />, text: "Precise quantification of active ingredients to prevent under-dosing or crop toxicity." },
                { title: "Stability Testing", icon: <Activity className="text-primary" />, text: "Ensuring our chemicals remain effective across Pakistan's extreme temperature fluctuations." },
                { title: "Batch Tracking", icon: <Database className="text-primary" />, text: "Every batch is serialized, allowing us to trace quality from raw import to field application." },
                { title: "Safety Verification", icon: <CheckCircle className="text-primary" />, text: "Strict adherence to WHO and FAO standards for chemical handling and packaging." }
              ].map((item, idx) => (
                <Col sm={6} key={idx}>
                  <Card className="glass-panel border-white/50 p-4 rounded-4xl h-100 shadow-sm border-top border-4 border-primary">
                    <div className="mb-3">{item.icon}</div>
                    <h6 className="fw-bold text-slate-900 mb-2">{item.title}</h6>
                    <p className="text-[11px] text-slate-500 leading-relaxed mb-0">{item.text}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QualityControl;
