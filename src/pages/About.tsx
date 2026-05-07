import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import {
  Quote,
  Award,
  Globe,
  Leaf,
  FlaskConical,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Factory,
  Microscope,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";
import { LazyImage } from "../components/ui/LazyImage";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div id="about-page" className="bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <div className="bg-white py-5 border-bottom border-slate-100">
        <Container className="py-5">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <motion.div {...fadeIn}>
                <Badge
                  bg="primary"
                  className="text-white rounded-pill px-4 py-2 text-uppercase fw-black tracking-[0.2em] mb-4"
                  style={{ fontSize: "10px" }}
                >
                  Corporate Profile
                </Badge>
                <h1
                  className="fw-black text-slate-900 display-3 mb-4"
                  style={{ lineHeight: 1.1 }}
                >
                  Engineering the <br />
                  <span className="text-primary">Future of Agriculture</span>
                </h1>
                <p className="fs-5 text-slate-600 mb-5 leading-relaxed fw-medium">
                  Tesco Chemical Group Industries (Pvt) Ltd. stands as a beacon
                  of technical innovation in Pakistan's agricultural sector,
                  providing high-performance chemical solutions since 2000.
                </p>
                <div className="d-flex flex-wrap gap-4 mt-5">
                  {[
                    { val: "24+", label: "Years Experience" },
                    { val: "120+", label: "Unique Formulas" },
                    { val: "450+", label: "Distribution Points" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 border border-slate-100 rounded-3xl px-4 py-3 min-w-[140px]"
                    >
                      <h2 className="fw-black text-slate-900 mb-0">
                        {stat.val}
                      </h2>
                      <span className="text-[10px] text-slate-400 text-uppercase fw-black tracking-widest">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="position-relative"
              >
                <div className="glass-panel border-white shadow-2xl rounded-5xl overflow-hidden p-3">
                  <div
                    className="rounded-4xl overflow-hidden"
                    style={{ minHeight: "350px", height: "auto" }}
                  >
                    <div className="bg-primary-dark w-100 h-100 d-flex align-items-center justify-content-center p-4 p-md-5 text-center text-white position-relative">
                      <div className="position-absolute top-0 end-0 p-4 opacity-5">
                        <Factory size={300} strokeWidth={1} />
                      </div>
                      <div className="z-10">
                        <div className="bg-white/10 rounded-circle p-4 mb-4 d-inline-flex">
                          <Factory size={48} />
                        </div>
                        <h4 className="fw-black text-uppercase tracking-widest mb-3">
                          Multan HQ Complex
                        </h4>
                        <p className="small opacity-80 max-w-sm mx-auto fw-medium leading-relaxed">
                          Our central manufacturing unit in Multan is equipped
                          with industry-leading formulation technologies for
                          precise chemical synthesis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="position-absolute top-0 start-0 translate-middle-y bg-white rounded-3xl p-4 shadow-xl border border-slate-100 d-flex align-items-center gap-3 z-20">
                  <div className="bg-primary text-white rounded-2xl p-3">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h6 className="fw-black m-0 text-slate-900">
                      #1 Formulator
                    </h6>
                    <span className="text-[9px] text-slate-400 fw-bold text-uppercase tracking-widest">
                      Southern Punjab Region
                    </span>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CEO Message */}
      <div className="py-5 mt-n5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 p-5 rounded-5xl shadow-lg position-relative"
              >
                <Quote
                  className="position-absolute top-0 start-0 translate-middle text-primary opacity-10 d-none d-md-block"
                  size={80}
                />
                <Quote
                  className="position-absolute top-0 start-0 translate-middle text-primary opacity-10 d-md-none"
                  size={40}
                />
                <Row className="g-5 align-items-center">
                  <Col md={4} className="text-center">
                    <div className="rounded-4xl overflow-hidden shadow-2xl border-4 border-white inline-block">
                      <LazyImage
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nasir"
                        alt="CEO"
                        className="bg-slate-100"
                        style={{ width: "200px", height: "200px" }}
                      />
                    </div>
                    <div className="mt-4">
                      <h5 className="fw-black text-slate-900 mb-1">
                        Nasir Shakeel Kahloon
                      </h5>
                      <span className="text-primary text-[10px] fw-black text-uppercase tracking-widest">
                        CEO & Founder
                      </span>
                    </div>
                  </Col>
                  <Col md={8}>
                    <h4 className="fw-black text-slate-900 mb-4 fs-3">
                      Our Founding Philosophy
                    </h4>
                    <p className="text-slate-600 fs-5 leading-relaxed font-serif italic">
                      "Agriculture is the backbone of our economy, and the
                      farmer is its soul. At Tesco Chemical Group, we didn't
                      just build a factory; we built a promise to empower those
                      who feed our nation. Our journey is defined by the trust
                      of millions."
                    </p>
                    <div className="mt-5 pt-4 border-top border-slate-100 d-flex gap-4">
                      <div className="d-flex align-items-center gap-2">
                        <ShieldCheck className="text-primary" size={18} />
                        <span className="text-[10px] fw-black text-slate-500 text-uppercase tracking-widest">
                          ISO 9001:2015
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Award className="text-primary" size={18} />
                        <span className="text-[10px] fw-black text-slate-500 text-uppercase tracking-widest">
                          GOP Licensed
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Core Values */}
      <div className="py-5 bg-white">
        <Container className="py-5 text-center">
          <Badge
            bg="primary"
            className="text-white rounded-pill px-4 py-2 text-uppercase fw-black tracking-widest mb-4"
            style={{ fontSize: "10px" }}
          >
            Our DNA
          </Badge>
          <h2 className="fw-black text-slate-900 display-5 mb-5">
            Values That Drive Us
          </h2>
          <Row className="g-4">
            {[
              {
                icon: Zap,
                title: "Precision Formulation",
                desc: "Utilizing advanced laboratory analytics to ensure every drop meets exact specifications.",
              },
              {
                icon: Target,
                title: "Problem Focused",
                desc: "Developing specific solutions for local pests and diseases that are resistant to generic products.",
              },
              {
                icon: Microscope,
                title: "R&D Innovation",
                desc: "Continuous investment in modern chemistry to reduce environmental impact while maximizing yield.",
              },
              {
                icon: Users,
                title: "Farmer Prosper",
                desc: "A singular focus on the economic well-being of the farmer as the ultimate measure of our success.",
              },
            ].map((value, i) => (
              <Col key={i} lg={3} md={6}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="p-5 rounded-4xl border border-slate-100 bg-slate-50/50 h-100 text-start"
                >
                  <div className="bg-primary text-white rounded-2xl p-3 d-inline-flex mb-4">
                    <value.icon size={24} />
                  </div>
                  <h5 className="fw-black text-slate-900 mb-3">
                    {value.title}
                  </h5>
                  <p className="text-slate-500 small leading-relaxed m-0 fw-medium">
                    {value.desc}
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Industrial Timeline */}
      <div className="py-5 bg-slate-900 text-white overflow-hidden">
        <Container className="py-5">
          <Row className="align-items-end mb-5 g-4">
            <Col lg={6}>
              <Badge
                bg="primary"
                className="text-white px-4 py-2 text-uppercase fw-black tracking-widest mb-4"
                style={{ fontSize: "10px" }}
              >
                Historical Growth
              </Badge>
              <h2 className="fw-black display-5 mb-0">
                Our Journey Through <br />
                The Decades
              </h2>
            </Col>
            <Col lg={6} className="text-lg-end">
              <p className="opacity-60 max-w-md ms-auto mb-0 fw-medium">
                From a single supply office to a multi-billion PKR industrial
                conglomerate serving the nation.
              </p>
            </Col>
          </Row>

          <div className="position-relative pt-5">
            <div className="position-absolute top-0 start-50 translate-middle-x h-100 w-[2px] bg-white/10 d-none d-lg-block"></div>

            {[
              {
                year: "2000",
                title: "The Genesis",
                desc: "Inception of Tesco Chemicals with a focused vision on pesticide distribution in Southern Punjab.",
              },
              {
                year: "2008",
                title: "Industrial Shift",
                desc: "Establishment of our first state-of-the-art Formulation Plant in Multan Industrial Area.",
              },
              {
                year: "2015",
                title: "Nationwide Expansion",
                desc: "Expanding network to Sindh and KP, becoming a leading national supplier of high-end Herbicides.",
              },
              {
                year: "2022",
                title: "Modern ERA",
                desc: "Integration of automated synthesis lines and ISO 9001:2015 certification for global standards.",
              },
            ].map((milestone, i) => (
              <Row
                key={i}
                className={`mb-5 align-items-center ${i % 2 === 0 ? "" : "flex-row-reverse"}`}
              >
                <Col
                  lg={5}
                  className={i % 2 === 0 ? "text-lg-end" : "text-lg-start"}
                >
                  <motion.div
                    initial={{ x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white/5 border border-white/10 p-4 p-md-5 rounded-5xl backdrop-blur-sm"
                  >
                    <h2 className="display-4 fw-black text-primary mb-3">
                      {milestone.year}
                    </h2>
                    <h4 className="fw-black mb-3">{milestone.title}</h4>
                    <p className="opacity-60 fw-medium leading-relaxed m-0">
                      {milestone.desc}
                    </p>
                  </motion.div>
                </Col>
                <Col
                  lg={2}
                  className="text-center position-relative d-none d-lg-block"
                >
                  <div className="bg-primary rounded-circle p-2 d-inline-block z-10 position-relative shadow-2xl">
                    <div className="bg-white rounded-circle p-2"></div>
                  </div>
                </Col>
                <Col lg={5}></Col>
              </Row>
            ))}
          </div>
        </Container>
      </div>

      {/* Quality Commitment CTA */}
      <div className="py-5 bg-white border-top border-slate-100">
        <Container className="py-5 text-center">
          <div className="bg-primary rounded-5xl p-5 text-white shadow-2xl position-relative overflow-hidden">
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-5"></div>
            <Row className="justify-content-center position-relative">
              <Col lg={8}>
                <ShieldCheck size={64} className="mb-4 opacity-50" />
                <h2 className="fw-black display-5 mb-4">
                  Zero Compromise on Quality
                </h2>
                <p className="fs-5 opacity-80 mb-5 leading-relaxed fw-medium">
                  Every batch manufactured at our facilities undergoes rigorous
                  laboratory testing to ensure the highest biological efficacy
                  and field performance.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Badge
                    bg="white"
                    className="text-primary rounded-pill px-5 py-3 text-uppercase fw-black tracking-widest shadow-xl"
                  >
                    ISO 9001 CERTIFIED
                  </Badge>
                  <Badge
                    bg="white"
                    className="text-primary rounded-pill px-5 py-3 text-uppercase fw-black tracking-widest shadow-xl"
                  >
                    GOP LICENSED
                  </Badge>
                  <Badge
                    bg="white"
                    className="text-primary rounded-pill px-5 py-3 text-uppercase fw-black tracking-widest shadow-xl"
                  >
                    QC LABS
                  </Badge>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
