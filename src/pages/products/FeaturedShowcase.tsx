import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Zap, FlaskConical } from "lucide-react";
import { LazyImage } from "../../components/ui/LazyImage";

type Props = {
  featuredList: any[];
};

const FeaturedShowcase: React.FC<Props> = ({ featuredList }) => {
  return (
    <div
      className="mb-5 py-5 px-4 rounded-5xl bg-slate-900/5 border border-white/50 position-relative overflow-hidden"
      id="featured-showcase"
    >
      <div className="position-absolute top-0 end-0 p-5 opacity-5 pointer-events-none">
        <Zap size={300} />
      </div>

      <div className="d-flex align-items-center justify-content-center gap-3 mb-5 px-3">
        <div className="h-[1px] bg-slate-300 w-12 d-none d-md-block"></div>
        <Zap size={20} className="text-primary" />
        <h4 className="fw-black text-slate-800 m-0 text-uppercase tracking-[0.3em] fs-6">
          Elite Formulations
        </h4>
        <div className="h-[1px] bg-slate-300 w-12 d-none d-md-block"></div>
      </div>

      <Row className="g-4 position-relative z-10">
        {featuredList.map((f, i) => (
          <Col lg={4} key={i} className="d-flex">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="w-100 d-flex"
            >
              <Card
                as={Link as any}
                to={`/product/${f.id}`}
                className="border-0 product-card-glass product-card-equal shadow-xl rounded-4xl p-2 h-100 text-decoration-none overflow-hidden w-100"
              >
                <div
                  className="rounded-4xl overflow-hidden shadow-sm position-relative"
                  style={{ aspectRatio: "16/10" }}
                >
                  {f.image ? (
                    <LazyImage
                      src={f.image}
                      alt={f.name}
                      className="w-100 h-100 object-cover"
                    />
                  ) : (
                    <div className="bg-primary-dark w-100 h-100 d-flex align-items-center justify-content-center text-white">
                      <FlaskConical size={32} strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="position-absolute top-0 end-0 p-3">
                    <Badge
                      bg="white"
                      className="text-dark rounded-pill px-3 py-2 text-uppercase fw-black tracking-widest"
                      style={{ fontSize: "7px" }}
                    >
                      Essential
                    </Badge>
                  </div>
                </div>
                <Card.Body className="pt-3 px-3 pb-3">
                  <h5 className="fw-black text-slate-900 mb-1">{f.name}</h5>
                  <p className="text-primary fw-bold text-[10px] text-uppercase tracking-widest mb-3">
                    {f.active}
                  </p>
                  <p className="text-slate-500 small m-0 leading-relaxed line-clamp-2">
                    {f.usage}
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedShowcase;
