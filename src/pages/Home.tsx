import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Truck,
  FlaskConical,
  ArrowRight,
  Zap,
  Target,
  Users,
  Globe,
  Award,
  Factory,
  Search,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { LazyLoad } from "../components/ui/LazyLoad";
import { Skeleton } from "../components/ui/Skeleton";

const Home = () => {
  return (
    <div id="home-page" className="py-0">
      {/* Hero Section */}
      <div className="bg-slate-50 relative overflow-hidden">
        <Container className="py-lg-5">
          <Row className="align-items-center g-5 py-5 min-vh-lg-80">
            {/* Left Column: Hero Text */}
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="d-flex align-items-center gap-2 mb-4">
                  <Badge
                    bg="primary"
                    className="rounded-pill px-3 py-2 text-uppercase fw-black tracking-[0.2em]"
                    style={{ fontSize: "9px" }}
                  >
                    Est. 2000
                  </Badge>
                  <div className="h-[1px] bg-slate-300 w-12"></div>
                  <span className="text-[10px] fw-black tracking-[0.1em] text-slate-500 text-uppercase">
                    Pakistan's Premier Agri-Chemical Hub
                  </span>
                </div>

                <h1
                  className="display-1 fw-black text-slate-900 lh-1 mb-4"
                  style={{ fontWeight: 900 }}
                >
                  Advancing <br />
                  <span className="text-primary">Plant Science</span>
                </h1>

                <p className="fs-5 text-slate-600 leading-relaxed max-w-lg mb-5 fw-medium">
                  Tesco Chemical Group is Pakistan's leading Importer,
                  Formulator, and Distributor. We bridge international chemical
                  standards with the unique soil requirements of the Indus
                  Valley.
                </p>

                <div className="row g-3 mb-5">
                  {[
                    { val: "24+", label: "Years Excellence" },
                    { val: "55+", label: "Distribution Hubs" },
                    { val: "120+", label: "Approved Brands" },
                  ].map((stat, idx) => (
                    <Col key={idx} md={4} sm={4} xs={6}>
                      <div className="product-card-glass p-4 rounded-4xl border-white shadow-sm text-center">
                        <div className="h3 fw-black text-slate-900 mb-1">
                          {stat.val}
                        </div>
                        <div className="text-[9px] text-slate-500 text-uppercase fw-black tracking-widest">
                          {stat.label}
                        </div>
                      </div>
                    </Col>
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <Button
                    as={Link as any}
                    to="/products"
                    variant="primary"
                    className="rounded-full px-5 py-3 fw-black tracking-widest text-[11px] shadow-xl border-0"
                  >
                    EXPLORE SOLUTIONS <ArrowRight size={14} className="ms-2" />
                  </Button>
                  <Button
                    as={Link as any}
                    to="/about"
                    variant="light"
                    className="rounded-full px-5 py-3 fw-black tracking-widest text-[11px] glass-panel border-white shadow-sm"
                  >
                    OUR HISTORY
                  </Button>
                </div>
              </motion.div>
            </Col>

            {/* Right Column: Visual Elements */}
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="d-flex flex-column gap-4"
              >
                <div className="product-card-glass product-card-equal border-white/80 rounded-5xl p-5 shadow-2xl position-relative overflow-hidden">
                  <div className="position-relative z-10">
                    <div
                      className="bg-primary/10 rounded-3xl d-flex align-items-center justify-content-center mb-5 shadow-sm"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <FlaskConical size={32} className="text-primary" />
                    </div>
                    <h3 className="fw-black text-slate-900 mb-4 display-6">
                      Quality <br />
                      Leadership
                    </h3>
                    <p className="text-slate-600 mb-5 leading-relaxed fw-medium">
                      Our certified "Kansol" formulations represent the gold
                      standard in pesticide efficacy, ensuring maximum yields
                      for our regional partners.
                    </p>
                    <div className="d-flex align-items-baseline gap-2">
                      <span className="text-primary fw-black fs-2">ISO</span>
                      <span className="text-slate-400 fw-bold">
                        9001:2015 CERTIFIED
                      </span>
                    </div>
                  </div>
                  <div className="position-absolute bottom-0 end-0 p-5 opacity-5">
                    <Award size={150} />
                  </div>
                </div>

                <div className="glass-panel border-white/60 rounded-4xl p-4 d-flex align-items-center justify-content-between shadow-lg">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-emerald-700/10 p-2 rounded-xl">
                      <Globe size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] fw-black text-slate-500 text-uppercase tracking-widest mb-0">
                        Global Sourcing
                      </h4>
                      <p className="small fw-bold text-slate-800 m-0">
                        USA • UK • CHINA • INDIA
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Strategic Pillars */}
      <LazyLoad
        threshold={0.1}
        rootMargin="100px"
        placeholder={<div className="h-[500px] bg-slate-50" />}
      >
        <div className="py-5 bg-white">
          <Container className="py-5">
            <div className="text-center mb-5 max-w-2xl mx-auto">
              <Badge
                bg="primary"
                className="bg-opacity-10 text-primary rounded-pill px-4 py-2 text-uppercase fw-black tracking-widest mb-4"
                style={{ fontSize: "10px" }}
              >
                Strategic Pillars
              </Badge>
              <h2 className="fw-black text-slate-900 display-5 mb-4">
                The Foundation of <br />
                Indus Agriculture
              </h2>
              <p className="text-slate-500 fs-6 fw-medium">
                We organize our operations around four core capabilities that
                ensure reliability from port to farm.
              </p>
            </div>

            <Row className="g-4">
              {[
                {
                  title: "Import Excellence",
                  desc: "Strategic partnerships with global chemical manufacturers to bring the latest active ingredients to Pakistan.",
                  icon: <Globe size={24} />,
                  color: "primary",
                },
                {
                  title: "Precise Formulation",
                  desc: "In-house laboratories ensuring every batch meets rigorous stability and efficacy standards.",
                  icon: <Search size={24} />,
                  color: "emerald-700",
                },
                {
                  title: "Hyper-Local Ops",
                  desc: "A network of 55+ distribution centers across the Punjab and Sindh agriculture belts.",
                  icon: <Truck size={24} />,
                  color: "slate-800",
                },
                {
                  title: "Farmer Success",
                  desc: "Direct field advisory services helping growers maximize their return on chemical investment.",
                  icon: <Users size={24} />,
                  color: "primary",
                },
              ].map((pillar, i) => (
                <Col lg={3} md={6} key={i}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="h-100 p-5 rounded-4xl glass-panel border-white shadow-sm d-flex flex-column align-items-start"
                  >
                    <div
                      className={`bg-${pillar.color} p-4 rounded-3xl text-white mb-4 shadow-lg`}
                    >
                      {pillar.icon}
                    </div>
                    <h4 className="fw-black text-slate-900 mb-3">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-500 small leading-relaxed fw-medium m-0">
                      {pillar.desc}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </LazyLoad>

      {/* Industrial Infrastructure */}
      <LazyLoad
        threshold={0.1}
        rootMargin="100px"
        placeholder={<div className="h-[600px] bg-slate-900" />}
      >
        <div className="py-5 bg-slate-900 text-white overflow-hidden position-relative">
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5">
            <Factory
              size={500}
              className="position-absolute"
              style={{ top: "10%", right: "-10%" }}
              strokeWidth={1}
            />
          </div>

          <Container className="py-5 position-relative z-10">
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <h2 className="display-4 fw-black mb-4">
                  World-Class <br />
                  Manufacturing Units
                </h2>
                <p className="fs-5 text-slate-400 mb-5 leading-relaxed">
                  Our facility in Sunder Industrial Estate, Lahore, employs
                  advanced liquid and powder formulation lines capable of
                  processing thousands of tons annually.
                </p>
                <Row className="g-4">
                  <Col sm={6}>
                    <div className="border-start border-primary border-4 ps-4">
                      <div className="h2 fw-black mb-0">15,000+</div>
                      <div className="text-slate-500 text-uppercase tracking-widest fw-black text-[10px]">
                        Tons Annual Capacity
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="border-start border-primary border-4 ps-4">
                      <div className="h2 fw-black mb-0">3-Tier</div>
                      <div className="text-slate-500 text-uppercase tracking-widest fw-black text-[10px]">
                        Quality QC Check
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-5xl">
                  <h4 className="fw-black mb-4 d-flex align-items-center gap-3">
                    <Target size={24} className="text-primary" /> Operating
                    Regions
                  </h4>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {[
                      "Punjab Agriculture Belt (Multan, Bahawalpur, Lahore)",
                      "Sindh Cotton Belt (Sukkur, Hyderabad)",
                      "KP Horticulture Zones",
                      "Strategic Export Markets",
                    ].map((region, i) => (
                      <li
                        key={i}
                        className="d-flex align-items-center gap-3 py-3 border-bottom border-white/10 last:border-0"
                      >
                        <CheckCircle size={16} className="text-primary" />
                        <span className="fw-bold">{region}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </LazyLoad>

      {/* CTA Section */}
      <LazyLoad
        threshold={0.1}
        rootMargin="100px"
        placeholder={<div className="h-[400px] bg-white" />}
      >
        <div className="py-5 bg-white">
          <Container className="py-5">
            <div className="bg-primary rounded-5xl p-5 text-center text-white shadow-2xl position-relative overflow-hidden">
              {/* Decorative elements */}
              <div className="position-absolute top-0 start-0 p-5 opacity-10">
                <Zap size={150} />
              </div>
              <div className="position-absolute bottom-0 end-0 p-5 opacity-10">
                <ArrowRight size={150} />
              </div>

              <div className="position-relative z-10 py-4">
                <h2 className="display-5 fw-black mb-4">
                  Partner with the Leaders in <br />
                  Agrochemical Innovation
                </h2>
                <p className="fs-5 opacity-80 mb-5 max-w-xl mx-auto">
                  Join Pakistan's fastest-growing agricultural network. Whether
                  you're a dealer or a large-scale grower, we have the solutions
                  you need.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Button
                    as={Link as any}
                    to="/contact"
                    variant="light"
                    className="rounded-full px-5 py-3 fw-black tracking-widest text-[11px] text-primary shadow-lg border-0"
                  >
                    BECOME A PARTNER
                  </Button>
                  <Button
                    as={Link as any}
                    to="/products"
                    variant="outline-light"
                    className="rounded-full px-5 p-3 fw-black tracking-widest text-[11px] border-2"
                  >
                    BROWSE ALL PRODUCTS
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </LazyLoad>
    </div>
  );
};

export default Home;
