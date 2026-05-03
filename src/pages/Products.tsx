import React, { useState, useMemo, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Nav, Tab, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, FlaskConical, Droplets, Bug, Sprout, Filter, X, Zap, ShieldCheck, Check, Layers } from 'lucide-react';
import { PRODUCT_DATA } from '../constants/products';
import { Skeleton } from '../components/ui/Skeleton';
import { LazyLoad } from '../components/ui/LazyLoad';
import { LazyImage } from '../components/ui/LazyImage';
import { ProductComparisonModal } from '../components/ui/ProductComparisonModal';

const Products = () => {
  const [activeTab, setActiveTab] = useState('herbicides');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('All Crops');
  const [selectedPacking, setSelectedPacking] = useState('All Sizes');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  // Toggle selection
  const toggleProductSelection = (e: React.MouseEvent | React.ChangeEvent, id: string) => {
    e.stopPropagation();
    setSelectedProducts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const selectedProductData = useMemo(() => {
    const allProducts = Object.values(PRODUCT_DATA).flat();
    return allProducts.filter(p => selectedProducts.includes(p.id));
  }, [selectedProducts]);

  // Simulate loading delay
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeTab, searchQuery, selectedCrop, selectedPacking]);

  const allCrops = useMemo(() => {
    const crops = new Set<string>();
    Object.values(PRODUCT_DATA).flat().forEach(p => p.crops.forEach(c => {
      if (c !== "All Crops") crops.add(c);
    }));
    return ["All Crops", ...Array.from(crops).sort()];
  }, []);

  const allPackings = useMemo(() => {
    const packings = new Set<string>();
    Object.values(PRODUCT_DATA).flat().forEach(p => {
        p.packing.split(',').forEach(s => {
          const trimmed = s.trim();
          if (trimmed !== "All Sizes") packings.add(trimmed);
        });
    });
    return ["All Sizes", ...Array.from(packings).sort()];
  }, []);

  const filteredProducts = useMemo(() => {
    const categoryProducts = PRODUCT_DATA[activeTab as keyof typeof PRODUCT_DATA] || [];
    return categoryProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.active.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCrop = selectedCrop === 'All Crops' || product.crops.includes(selectedCrop) || product.crops.includes('All Crops');
      const matchesPacking = selectedPacking === 'All Sizes' || product.packing.includes(selectedPacking);
      
      return matchesSearch && matchesCrop && matchesPacking;
    });
  }, [activeTab, searchQuery, selectedCrop, selectedPacking]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCrop('All Crops');
    setSelectedPacking('All Sizes');
  };

  const featuredList = useMemo(() => {
    return Object.values(PRODUCT_DATA).flat().filter(p => p.featured).slice(0, 3);
  }, []);

  return (
    <div id="products-page" className="py-5">
      <Container className="py-5">
        <div className="mb-5 text-center px-4">
          <span className="text-xs fw-bold tracking-[0.2em] text-primary text-uppercase mb-3 d-block">Technical Catalogue</span>
          <h1 className="fw-black text-slate-900 display-4 mb-3" style={{ fontWeight: 900 }}>Product Portfolio</h1>
          <p className="text-slate-500 max-w-3xl mx-auto fs-5">
            Science-based formulations designed for maximum field efficiency. Every product is registered and tested for the Pakistani agricultural landscape.
          </p>
        </div>

        {/* Featured Products Showcase */}
        <div className="mb-5 py-5 px-4 rounded-5xl bg-slate-900/5 border border-white/50 position-relative overflow-hidden" id="featured-showcase">
          <div className="position-absolute top-0 end-0 p-5 opacity-5 pointer-events-none">
            <Zap size={300} />
          </div>
          
          <div className="d-flex align-items-center justify-content-center gap-3 mb-5 px-3">
            <div className="h-[1px] bg-slate-300 w-12 d-none d-md-block"></div>
            <Zap size={20} className="text-primary" />
            <h4 className="fw-black text-slate-800 m-0 text-uppercase tracking-[0.3em] fs-6">Elite Formulations</h4>
            <div className="h-[1px] bg-slate-300 w-12 d-none d-md-block"></div>
          </div>
          
          <Row className="g-4 position-relative z-10">
            {featuredList.map((f, i) => (
              <Col lg={4} key={i}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <Card as={Link as any} to={`/product/${f.id}`} className="border-0 product-card-glass shadow-xl rounded-4xl p-2 h-100 text-decoration-none overflow-hidden">
                    <div className="rounded-4xl overflow-hidden shadow-sm position-relative" style={{ aspectRatio: '16/10' }}>
                       {f.image ? (
                         <LazyImage src={f.image} alt={f.name} className="w-100 h-100 object-cover" />
                       ) : (
                         <div className="bg-primary-dark w-100 h-100 d-flex align-items-center justify-content-center text-white">
                           <FlaskConical size={32} strokeWidth={1.5} />
                         </div>
                       )}
                       <div className="position-absolute top-0 end-0 p-3">
                         <Badge bg="white" className="text-dark rounded-pill px-3 py-2 text-uppercase fw-black tracking-widest" style={{ fontSize: '7px' }}>Essential</Badge>
                       </div>
                    </div>
                    <Card.Body className="pt-3 px-3 pb-3">
                      <h5 className="fw-black text-slate-900 mb-1">{f.name}</h5>
                      <p className="text-primary fw-bold text-[10px] text-uppercase tracking-widest mb-3">{f.active}</p>
                      <p className="text-slate-500 small m-0 leading-relaxed line-clamp-2">{f.usage}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>


        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k || 'herbicides')}>
          <Row className="g-4">
            <Col lg={3}>
              <div className="sticky-top" style={{ top: '100px' }}>
                <div className="glass-panel border-white/50 rounded-4xl overflow-hidden mb-4 shadow-sm">
                  <div className="bg-slate-900/5 fw-black py-4 px-4 text-slate-800 border-bottom border-white/20 d-flex align-items-center gap-2 text-uppercase tracking-widest" style={{ fontSize: '10px' }}>
                    <Filter size={14} /> Catalog Menu
                  </div>
                  <Nav variant="pills" className="flex-column p-2 gap-1">
                    {[
                      { key: 'fungicides', icon: <FlaskConical size={16} />, label: 'Fungicides' },
                      { key: 'herbicides', icon: <Sprout size={16} />, label: 'Herbicides' },
                      { key: 'insecticides', icon: <Bug size={16} />, label: 'Insecticides' },
                      { key: 'granules', icon: <Droplets size={16} />, label: 'Granules' },
                      { key: 'micros', icon: <FlaskConical size={16} />, label: 'Micro Nutrients' },
                      { key: 'fertilizers', icon: <Sprout size={16} />, label: 'Fertilizers' },
                      { key: 'adjuvants', icon: <Droplets size={16} />, label: 'Adjuvants' }
                    ].map(item => (
                      <Nav.Item key={item.key}>
                        <Nav.Link 
                          eventKey={item.key} 
                          className="sidebar-nav-item d-flex align-items-center gap-3 border-0 transition-all"
                        >
                          {item.icon} <span className="text-nowrap">{item.label}</span>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                <div className="glass-panel border-white/50 rounded-4xl p-4 shadow-sm">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="fw-black text-slate-800 m-0 text-uppercase tracking-widest" style={{ fontSize: '10px' }}>Quick Filter</h6>
                    {(searchQuery || selectedCrop !== 'All Crops' || selectedPacking !== 'All Sizes') && (
                      <Button variant="link" className="p-0 text-danger text-decoration-none x-small fw-bold" onClick={resetFilters}>
                        <X size={14} className="me-1" /> Reset
                      </Button>
                    )}
                  </div>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">Active Ingredient</Form.Label>
                    <InputGroup className="bg-white/40 rounded-3 border-white/30 overflow-hidden">
                      <InputGroup.Text className="bg-transparent border-0 pe-0">
                        <Search size={14} className="text-slate-400" />
                      </InputGroup.Text>
                      <Form.Control 
                        placeholder="Search chemistry..." 
                        className="bg-transparent border-0 shadow-none text-slate-700 py-2 fs-7"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">Target Crop</Form.Label>
                    <Form.Select 
                      className="bg-white/40 border-white/30 rounded-3 shadow-none text-slate-700 py-2 fs-7"
                      value={selectedCrop}
                      onChange={(e) => setSelectedCrop(e.target.value)}
                    >
                      {allCrops.map(crop => <option key={crop} value={crop}>{crop}</option>)}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">Packing Size</Form.Label>
                    <Form.Select 
                       className="bg-white/40 border-white/30 rounded-3 shadow-none text-slate-700 py-2 fs-7"
                       value={selectedPacking}
                       onChange={(e) => setSelectedPacking(e.target.value)}
                    >
                      {allPackings.map(size => <option key={size} value={size}>{size}</option>)}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </Col>
            
            <Col lg={9}>
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div>
                  <h3 className="fw-black text-capitalize text-slate-900 m-0">{activeTab}</h3>
                  <div className="h-1 bg-primary w-12 mt-2 rounded-full"></div>
                </div>
                <div className="d-flex flex-column align-items-end">
                   <Badge bg="white" className="text-primary border border-primary-subtle rounded-pill px-4 py-2 fw-black tracking-widest mb-1 shadow-sm" style={{ fontSize: '10px' }}>
                     {filteredProducts.length} FORMULATIONS
                   </Badge>
                   {(searchQuery || selectedCrop !== 'All Crops' || selectedPacking !== 'All Sizes') && (
                     <span className="text-[9px] fw-bold text-slate-400 text-uppercase tracking-tighter">Current Filters Applied</span>
                   )}
                </div>
              </div>

              <Row className="g-4">
                {isLoading ? (
                  // Skeleton Loading State
                  [...Array(6)].map((_, idx) => (
                    <Col md={6} key={`skeleton-${idx}`}>
                      <Card className="h-100 product-card-glass border-white/50 rounded-4xl p-4 shadow-sm">
                        <Card.Body className="p-0 d-flex flex-column">
                          <div className="d-flex justify-content-between align-items-start mb-4">
                            <Skeleton className="rounded-2xl" style={{ width: '44px', height: '44px' }} variant="glass" />
                          </div>
                          <Skeleton className="mb-2 h-6" style={{ width: '60%' }} variant="glass" />
                          <Skeleton className="mb-4 h-3" style={{ width: '40%' }} variant="glass" />
                          <Skeleton className="mb-2 h-4" variant="glass" />
                          <Skeleton className="mb-4 h-4" style={{ width: '80%' }} variant="glass" />
                          <div className="d-flex gap-1 mb-5">
                            <Skeleton className="rounded-pill" style={{ width: '50px', height: '20px' }} variant="glass" />
                            <Skeleton className="rounded-pill" style={{ width: '50px', height: '20px' }} variant="glass" />
                          </div>
                          <div className="pt-4 border-top border-slate-100 d-flex align-items-center justify-content-between mt-auto">
                            <div className="d-flex flex-column gap-1">
                              <Skeleton style={{ width: '40px', height: '8px' }} variant="glass" />
                              <Skeleton style={{ width: '80px', height: '14px' }} variant="glass" />
                            </div>
                            <Skeleton style={{ width: '60px', height: '14px' }} variant="glass" />
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : filteredProducts.length > 0 ? (
                  filteredProducts.map((product, idx) => (
                    <Col md={6} key={product.id}>
                      <LazyLoad 
                        placeholder={
                          <Card className="h-100 product-card-glass border-white/50 rounded-4xl p-4 shadow-sm">
                            <Card.Body className="p-0 d-flex flex-column">
                              <div className="d-flex justify-content-between align-items-start mb-4">
                                <Skeleton className="rounded-2xl" style={{ width: '44px', height: '44px' }} variant="glass" />
                              </div>
                              <Skeleton className="mb-2 h-6" style={{ width: '60%' }} variant="glass" />
                              <Skeleton className="mb-4 h-3" style={{ width: '40%' }} variant="glass" />
                              <Skeleton className="mb-2 h-4" variant="glass" />
                              <Skeleton className="mb-4 h-4" style={{ width: '80%' }} variant="glass" />
                              <div className="pt-4 border-top border-slate-100 d-flex align-items-center justify-content-between mt-auto">
                                <Skeleton style={{ width: '80px', height: '14px' }} variant="glass" />
                                <Skeleton style={{ width: '60px', height: '14px' }} variant="glass" />
                              </div>
                            </Card.Body>
                          </Card>
                        }
                      >
                        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="position-relative">
                          <div 
                            className={`position-absolute top-0 end-0 p-4 z-10 transition-all ${selectedProducts.includes(product.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                            onClick={(e) => toggleProductSelection(e, product.id)}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className={`rounded-xl border-2 p-1 d-flex align-items-center justify-content-center transition-colors ${selectedProducts.includes(product.id) ? 'bg-primary border-primary' : 'bg-white/80 border-slate-200'}`} style={{ width: '28px', height: '28px' }}>
                              {selectedProducts.includes(product.id) && <Check size={16} className="text-white" />}
                            </div>
                          </div>
                          
                          <Card as={Link as any} to={`/product/${product.id}`} className={`h-100 product-card-glass border-white/50 rounded-4xl p-4 shadow-sm text-decoration-none group transition-all overflow-hidden ${selectedProducts.includes(product.id) ? 'ring-2 ring-primary bg-primary/5' : ''}`} id={`prod-card-${idx}`}>
                            <Card.Body className="p-0 d-flex flex-column">
                              <div className="mb-4 rounded-3xl overflow-hidden bg-slate-100" style={{ aspectRatio: '16/9' }}>
                                {product.image ? (
                                  <LazyImage src={product.image} alt={product.name} className="w-100 h-100 object-cover" />
                                ) : (
                                  <div className="w-100 h-100 d-flex align-items-center justify-content-center text-primary/20">
                                    <FlaskConical size={40} />
                                  </div>
                                )}
                              </div>
                              <div className="d-flex justify-content-between align-items-start mb-4">
                                <div className="bg-primary/5 p-3 rounded-2xl text-primary">
                                  <FlaskConical size={20} />
                                </div>
                                {product.featured && <Badge bg="primary" className="rounded-pill px-3 py-2 text-uppercase fw-black tracking-widest shadow-sm" style={{ fontSize: '7px' }}>Essential</Badge>}
                              </div>
                              
                              <h5 className="fw-black text-slate-900 mb-1">{product.name}</h5>
                              <div className="text-primary fw-black text-uppercase mb-4 tracking-wider" style={{ fontSize: '9px', opacity: 0.8 }}>
                                {product.active}
                              </div>
                              
                              <p className="text-slate-500 small leading-relaxed mb-4 flex-grow-1 line-clamp-2">
                                {product.usage}
                              </p>
                              
                              <div className="d-flex flex-wrap gap-1 mb-5">
                                 {product.crops.slice(0, 3).map((crop, i) => (
                                   <Badge key={i} bg="white" className="text-slate-400 border border-slate-100 fw-bold px-3 py-1 rounded-pill" style={{ fontSize: '8px' }}>{crop}</Badge>
                                 ))}
                                 {product.crops.length > 3 && <Badge bg="white" className="text-slate-400 border border-slate-100 fw-bold px-3 py-1 rounded-pill" style={{ fontSize: '8px' }}>+{product.crops.length - 3}</Badge>}
                              </div>

                              <div className="pt-4 border-top border-slate-100 d-flex align-items-center justify-content-between mt-auto">
                                <div className="d-flex flex-column">
                                  <span className="text-[8px] fw-black text-slate-400 text-uppercase tracking-[0.2em]">Package</span>
                                  <span className="text-slate-900 fw-bold small">{product.packing}</span>
                                </div>
                                <div className="text-primary fw-black p-0 text-decoration-none small d-flex align-items-center gap-1 group" style={{ fontSize: '10px', letterSpacing: '1px' }}>
                                  DETAILS <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </motion.div>
                      </LazyLoad>
                    </Col>
                  ))
                ) : (
                  <Col md={12}>
                    <div className="glass-panel border-white/50 rounded-4xl p-5 text-center">
                      <div className="bg-slate-100 p-4 rounded-circle d-inline-block mb-4">
                        <Search size={48} className="text-slate-300" />
                      </div>
                      <h4 className="fw-bold text-slate-900 mb-2">No matching formulations</h4>
                      <p className="text-slate-500 mb-4">Try adjusting your filters or search terms.</p>
                      <Button variant="outline-primary" onClick={resetFilters}>Clear All Filters</Button>
                    </div>
                  </Col>
                )}
              </Row>

              <div className="mt-5 glass-panel-dark border-white/30 rounded-4xl p-5 text-center">
                <h4 className="fw-bold text-slate-900 mb-2">Can't find a specific active ingredient?</h4>
                <p className="text-slate-600 mb-4">Our R&D team can discuss custom formulations or upcoming product launches.</p>
                <Button variant="primary" as={Link as any} to="/contact" className="px-5 shadow-lg">Inquire Now</Button>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      {/* Floating Comparison Bar */}
      <AnimatePresence>
        {selectedProducts.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="position-fixed bottom-0 start-50 translate-middle-x mb-4 z-50 w-100 px-3"
            style={{ maxWidth: '800px' }}
          >
            <div className="product-card-glass bg-slate-900 border-white/10 rounded-full px-5 py-3 shadow-2xl d-flex align-items-center justify-content-between text-white border">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-xl text-primary">
                  <Layers size={20} />
                </div>
                <div>
                   <span className="fw-black tracking-widest text-[11px] text-primary-subtle d-block">PROD_COMPARISON</span>
                   <span className="fw-bold">{selectedProducts.length} Product{selectedProducts.length > 1 ? 's' : ''} Selected</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <Button 
                   variant="link" 
                   className="text-slate-400 text-decoration-none small fw-black tracking-widest p-0 h-fit"
                   onClick={() => setSelectedProducts([])}
                >
                  CLEAR ALL
                </Button>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <Button 
                   variant="primary" 
                   className="rounded-full px-5 py-2 fw-black tracking-widest text-[11px] shadow-lg border-0"
                   disabled={selectedProducts.length < 2}
                   onClick={() => setShowComparison(true)}
                >
                  COMPARE NOW
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ProductComparisonModal 
        show={showComparison} 
        onHide={() => setShowComparison(false)}
        products={selectedProductData}
        onRemove={(id) => setSelectedProducts(prev => prev.filter(p => p !== id))}
      />
    </div>
  );
};

export default Products;
