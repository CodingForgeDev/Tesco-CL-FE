import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Sprout, Sun, CloudRain, Thermometer } from 'lucide-react';

const Crops = () => {
  return (
    <div id="crops-page" className="py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <span className="text-xs fw-bold tracking-[0.2em] text-primary text-uppercase mb-3 d-block">Agricultural Advisory</span>
          <h1 className="fw-black text-slate-900 display-4 mb-3" style={{ fontWeight: 900 }}>Crop Management</h1>
          <p className="text-slate-500 max-w-3xl mx-auto fs-5">
            Expert guidance for Pakistan's major crops. Learn the optimal spray schedules and chemical combinations for maximum yield.
          </p>
        </div>

        <Row className="g-4">
          {[
            {
              name: "Cotton (White Gold)",
              icon: <Sun className="text-warning" />,
              issues: ["Bollworms", "Whitefly", "Leaf Curl Virus"],
              solution: "Tesco Integrated Cotton Protection Program using systemic insecticides and growth regulators."
            },
            {
              name: "Wheat (Gandum)",
              icon: <CloudRain className="text-primary" />,
              issues: ["Rust", "Wild Oat Weeds", "Aphids"],
              solution: "Pre and post-emergence herbicides combined with targeted fungicides during the humid season."
            },
            {
              name: "Rice (Basmati)",
              icon: <Thermometer className="text-danger" />,
              issues: ["Stem Borer", "Leaf Folder", "Blasts"],
              solution: "Granular insecticide application for deep root protection and preventative leaf spray."
            },
            {
              name: "Vegetables & Orchards",
              icon: <Sprout className="text-success" />,
              issues: ["Fruit Fly", "Downy Mildew", "Nutrient Deficiency"],
              solution: "Micro-nutrient supplements and eco-friendly adjuvants specialized for high-value export crops."
            }
          ].map((crop, idx) => (
            <Col lg={6} key={idx}>
              <Card className="glass-panel border-white/50 rounded-4xl p-4 h-100 shadow-lg border-start border-5 border-primary">
                <Row className="align-items-center">
                  <Col sm={4} className="text-center mb-3 mb-sm-0">
                    <div className="bg-white/40 p-4 rounded-circle d-inline-block shadow-sm">
                      {React.cloneElement(crop.icon, { size: 48 })}
                    </div>
                  </Col>
                  <Col sm={8}>
                    <h4 className="fw-bold text-slate-900 mb-2">{crop.name}</h4>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {crop.issues.map((issue, i) => (
                        <Badge key={i} bg="danger" className="text-uppercase tracking-wider fw-normal px-2 py-1" style={{ fontSize: '9px' }}>{issue}</Badge>
                      ))}
                    </div>
                    <p className="text-slate-600 small mb-0 fw-medium">
                      <span className="text-primary fw-bold">Expert Solution:</span> {crop.solution}
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Crops;
