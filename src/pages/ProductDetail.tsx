import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button, ListGroup, Carousel } from 'react-bootstrap';
import { motion } from 'motion/react';
import { ChevronLeft, Info, FileText, Droplets, AlertTriangle, CheckCircle, Package, FlaskConical, Sprout, ChevronRight } from 'lucide-react';
import { PRODUCT_DATA } from '../constants/products';
import { Skeleton } from '../components/ui/Skeleton';
import { LazyImage } from '../components/ui/LazyImage';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading delay on mount or ID change
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [id]);

    const product = useMemo(() => {
        for (const cat in PRODUCT_DATA) {
            const found = PRODUCT_DATA[cat].find(p => p.id === id);
            if (found) return found;
        }
        return null;
    }, [id]);

    const relatedProducts = useMemo(() => {
        if (!product) return [];
        const allProducts = Object.values(PRODUCT_DATA).flat();
        return allProducts
            .filter(p => p.id !== product.id)
            .filter(p => 
                p.category === product.category || 
                p.crops.some(crop => product.crops.includes(crop))
            )
            .slice(0, 6);
    }, [product]);

    if (!product && !isLoading) {
        return (
            <Container className="py-5 text-center">
                <h2 className="fw-black text-slate-800 mb-4">Product Not Found</h2>
                <Button as={Link as any} to="/products" variant="primary" className="rounded-pill px-4">
                    Back to Catalog
                </Button>
            </Container>
        );
    }

    return (
        <div id="product-detail-page" className="py-5">
            <Container className="py-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/products" className="text-primary fw-bold text-decoration-none mb-4 d-inline-flex align-items-center gap-2">
                        <ChevronLeft size={18} /> Back to Catalog
                    </Link>

                    <Row className="g-5 mt-2">
                        <Col lg={5}>
                            <div className="sticky-md-top" style={{ top: '100px' }}>
                                <div className="product-card-glass border-white/80 rounded-5xl p-3 shadow-2xl overflow-hidden position-relative">
                                    {isLoading ? (
                                        <div className="p-5 rounded-4xl text-center" style={{ minHeight: '350px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
                                            <Skeleton className="mx-auto rounded-pill mb-4" style={{ width: '120px', height: '24px' }} variant="glass" />
                                            <Skeleton className="mx-auto mb-4" style={{ width: '80%', height: '40px' }} variant="glass" />
                                            <div className="mt-auto pt-5">
                                               <Skeleton className="mx-auto rounded-circle" style={{ width: '64px', height: '64px' }} variant="glass" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-primary-dark rounded-4xl text-white text-center position-relative overflow-hidden" style={{ minHeight: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            {product?.image ? (
                                                <LazyImage src={product.image} alt={product.name} className="position-absolute top-0 start-0 w-100 h-100 object-cover opacity-60" />
                                            ) : (
                                                <div className="position-absolute top-0 end-0 p-4 opacity-5">
                                                    <FlaskConical size={200} strokeWidth={1} />
                                                </div>
                                            )}
                                            <div className="z-10 text-center p-5">
                                                <Badge bg="white" className="text-primary rounded-pill px-4 py-2 text-uppercase fw-black tracking-[0.2em] mb-4 shadow-xl" style={{ fontSize: '9px' }}>Official Formulation</Badge>
                                                <h1 className="fw-black display-5 mb-0">{product?.name}</h1>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="p-4 pt-5">
                                        <h6 className="text-[9px] fw-black text-slate-400 text-uppercase tracking-[0.3em] mb-4">Packaging Logistics</h6>
                                        <div className="d-flex flex-wrap gap-2">
                                            {isLoading ? (
                                                [...Array(3)].map((_, i) => <Skeleton key={i} className="rounded-2xl" style={{ width: '100px', height: '48px' }} variant="glass" />)
                                            ) : (
                                                product?.packing.split(',').map((size, idx) => (
                                                    <div key={idx} className="bg-white border border-slate-100 rounded-2xl px-4 py-3 d-flex align-items-center gap-2 shadow-sm">
                                                        <Package size={16} className="text-primary" />
                                                        <span className="text-slate-800 fw-bold small">{size.trim()}</span>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 glass-panel border-white/50 rounded-4xl p-4 alert alert-warning border-0 d-flex gap-3 shadow-sm">
                                    <AlertTriangle size={24} className="text-warning flex-shrink-0" />
                                    <div>
                                        <h6 className="fw-black text-[10px] text-uppercase tracking-widest mb-2">Safety Protocols</h6>
                                        {isLoading ? (
                                            <div className="d-flex flex-column gap-2 mt-2">
                                                <Skeleton className="h-3 w-48" variant="glass" />
                                                <Skeleton className="h-3 w-56" variant="glass" />
                                                <Skeleton className="h-3 w-40" variant="glass" />
                                            </div>
                                        ) : (
                                            <ul className="small text-slate-600 mb-0 ps-3 fw-medium">
                                                <li>Always read the label before use.</li>
                                                <li>Avoid contact with skin and eyes.</li>
                                                <li>Keep out of reach of children.</li>
                                                {product?.precautions?.map((p, i) => <li key={i}>{p}</li>)}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className="mb-5">
                                <div className="d-flex align-items-center gap-2 mb-4">
                                   {isLoading ? <Skeleton className="rounded-pill" style={{ width: '80px', height: '24px' }} variant="glass" /> : <Badge bg="primary" className="px-3 py-2 text-uppercase tracking-[0.2em] fw-black" style={{ fontSize: '9px' }}>{product?.category}</Badge>}
                                   <div className="h-[1px] bg-slate-200 flex-grow-1"></div>
                                </div>
                                
                                {isLoading ? (
                                    <>
                                        <Skeleton className="h-12 w-3/4 mb-4" variant="glass" />
                                        <Skeleton className="h-6 w-1/4 mb-5" variant="glass" />
                                    </>
                                ) : (
                                    <>
                                        <h1 className="fw-black text-slate-900 display-4 mb-2">{product?.name}</h1>
                                        <p className="text-primary fw-black text-uppercase tracking-[0.1em] fs-5 mb-5" style={{ opacity: 0.9 }}>{product?.active}</p>
                                    </>
                                )}
                                
                                <div className="product-card-glass border-white/50 rounded-4xl p-4 p-md-5 shadow-sm mb-5">
                                    <h5 className="fw-black text-slate-900 mb-4 d-flex align-items-center gap-3">
                                        <div className="bg-primary/10 p-2 rounded-xl"><Info size={20} className="text-primary" /></div> 
                                        Product Overview
                                    </h5>
                                    {isLoading ? (
                                        <div className="d-flex flex-column gap-2">
                                            <Skeleton className="h-4 w-full" variant="glass" />
                                            <Skeleton className="h-4 w-11/12" variant="glass" />
                                            <Skeleton className="h-4 w-full" variant="glass" />
                                            <Skeleton className="h-4 w-9/12" variant="glass" />
                                        </div>
                                    ) : (
                                        <p className="text-slate-600 fs-6 leading-relaxed mb-0 fw-medium">
                                            {product?.description || `Industrial strength ${product?.category} engineered for high-efficiency protection. ${product?.usage} This formulation follows strict quality standards for consistent field results.`}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <Row className="g-4 mb-5">
                                <Col md={6}>
                                    <div className="product-card-glass border-white/50 rounded-4xl p-4 h-100 shadow-sm">
                                        <h6 className="text-[10px] fw-black text-slate-400 text-uppercase tracking-[0.2em] mb-4 d-flex align-items-center gap-2">
                                            <Sprout size={14} className="text-primary" /> Target Crops
                                        </h6>
                                        <div className="d-flex flex-wrap gap-2">
                                            {isLoading ? (
                                                [...Array(4)].map((_, i) => <Skeleton key={i} className="rounded-pill" style={{ width: '60px', height: '24px' }} variant="glass" />)
                                            ) : (
                                                product?.crops.map((crop, idx) => (
                                                    <Badge key={idx} bg="primary" className="bg-opacity-5 text-primary border border-primary-subtle fw-black px-3 py-2 rounded-pill" style={{ fontSize: '10px' }}>{crop}</Badge>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="product-card-glass border-white/50 rounded-4xl p-4 h-100 shadow-sm">
                                        <h6 className="text-[10px] fw-black text-slate-400 text-uppercase tracking-[0.2em] mb-4 d-flex align-items-center gap-2">
                                            <Droplets size={14} className="text-primary" /> Application Dosage
                                        </h6>
                                        <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl">
                                            {isLoading ? (
                                                <>
                                                    <Skeleton className="h-5 w-32 mb-1" variant="glass" />
                                                    <Skeleton className="h-3 w-48" variant="glass" />
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-slate-900 fw-black m-0 fs-6">{product?.dosage || "Universal Field Dose"}</p>
                                                    {!product?.dosage && <p className="text-slate-400 small m-0 mt-1">Contact technical support for specific crop dosage.</p>}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="product-card-glass border-white/80 rounded-5xl p-4 p-md-5 mb-5 shadow-xl bg-white/40">
                                <h4 className="fw-black text-slate-900 mb-5 d-flex align-items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-xl"><FileText size={24} className="text-primary" /></div>
                                    Technical Analysis
                                </h4>
                                <ListGroup variant="flush" className="bg-transparent rounded-4xl overflow-hidden border">
                                    {[...Array(4)].map((_, i) => (
                                        <ListGroup.Item key={i} className={`bg-white/${i % 2 === 0 ? '80' : '60'} border-slate-100 py-4 px-4 d-flex justify-content-between align-items-center`}>
                                            <Skeleton className="h-3 w-24" variant="glass" />
                                            {isLoading ? <Skeleton className="h-4 w-32" variant="glass" /> : (
                                                <span className="text-slate-900 fw-black">
                                                    {i === 0 && product?.active}
                                                    {i === 1 && `${product?.category} Solutions`}
                                                    {i === 2 && "Engineered Solution"}
                                                    {i === 3 && `TCP-PK-${Math.floor(Math.random() * 10000)}`}
                                                </span>
                                            )}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>

                    {/* Related Products Carousel */}
                    {(isLoading || relatedProducts.length > 0) && (
                        <div className="mt-5 pt-5 border-top border-slate-100">
                            <div className="d-flex align-items-center justify-content-between mb-5">
                                <div>
                                    <h3 className="fw-black text-slate-900 m-0">Related Formulations</h3>
                                    <div className="h-1 bg-primary w-12 mt-2 rounded-full"></div>
                                </div>
                                <Button as={Link as any} to="/products" variant="link" className="text-primary fw-black text-decoration-none small d-flex align-items-center gap-2 p-0">
                                    VIEW CATALOG <ChevronRight size={14} />
                                </Button>
                            </div>

                            {isLoading ? (
                                <Row className="g-4 px-2">
                                    {[...Array(3)].map((_, i) => (
                                        <Col lg={4} md={6} key={i}>
                                            <Card className="product-card-glass border-white/50 rounded-4xl p-4 h-100 shadow-sm flex-column d-flex">
                                                <Skeleton className="rounded-2xl mb-4" style={{ width: '40px', height: '40px' }} variant="glass" />
                                                <Skeleton className="h-5 w-3/4 mb-2" variant="glass" />
                                                <Skeleton className="h-3 w-1/2 mb-4" variant="glass" />
                                                <div className="mt-auto">
                                                    <Skeleton className="h-3 w-full mb-2" variant="glass" />
                                                    <Skeleton className="h-3 w-4/5" variant="glass" />
                                                </div>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            ) : (
                                <Carousel id="related-products-carousel" indicators={false} className="pb-4" interval={5000} pause="hover">
                                    {relatedProducts.reduce((acc, curr, idx) => {
                                        const perChunk = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
                                        if (idx % perChunk === 0) acc.push(relatedProducts.slice(idx, idx + perChunk));
                                        return acc;
                                    }, [] as (typeof relatedProducts)[]).map((group, groupIdx) => (
                                        <Carousel.Item key={groupIdx}>
                                            <Row className="g-4 px-2 justify-content-center">
                                                {group.map((item, idx) => (
                                                    <Col lg={4} md={6} key={idx}>
                                                        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                                                            <Card as={Link as any} to={`/product/${item.id}`} className="product-card-glass border-white/50 rounded-4xl p-4 h-100 text-decoration-none shadow-sm flex-column d-flex">
                                                                <div className="bg-primary/5 p-3 rounded-2xl text-primary mb-4 d-inline-flex align-self-start">
                                                                    <FlaskConical size={20} />
                                                                </div>
                                                                <h5 className="fw-black text-slate-900 mb-1">{item.name}</h5>
                                                                <p className="text-primary fw-black text-uppercase mb-4 tracking-wider" style={{ fontSize: '9px', opacity: 0.8 }}>{item.active}</p>
                                                                <p className="text-slate-500 small leading-relaxed line-clamp-2 m-0 mt-auto">{item.usage}</p>
                                                            </Card>
                                                        </motion.div>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            )}
                        </div>
                    )}
                </motion.div>
            </Container>
        </div>
    );
};

export default ProductDetail;

