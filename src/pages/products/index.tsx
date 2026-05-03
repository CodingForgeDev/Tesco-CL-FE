import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Col, Badge, Tab, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Layers } from "lucide-react";
import { PRODUCT_DATA } from "../../constants/products";
import FeaturedShowcase from "./FeaturedShowcase";
import FiltersSidebar from "./FiltersSidebar";
import ProductGrid from "./ProductGrid";
import { ProductComparisonModal } from "../../components/ui/ProductComparisonModal";

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState("herbicides");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("All Crops");
  const [selectedPacking, setSelectedPacking] = useState("All Sizes");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleProductSelection = (
    e: React.MouseEvent | React.ChangeEvent,
    id: string,
  ) => {
    e.stopPropagation();
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  const selectedProductData = useMemo(() => {
    const allProducts = Object.values(PRODUCT_DATA).flat();
    return allProducts.filter((p: any) => selectedProducts.includes(p.id));
  }, [selectedProducts]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeTab, searchQuery, selectedCrop, selectedPacking]);

  const allCrops = useMemo(() => {
    const crops = new Set<string>();
    Object.values(PRODUCT_DATA)
      .flat()
      .forEach((p: any) =>
        p.crops.forEach((c: string) => {
          if (c !== "All Crops") crops.add(c);
        }),
      );
    return ["All Crops", ...Array.from(crops).sort()];
  }, []);

  const allPackings = useMemo(() => {
    const packings = new Set<string>();
    Object.values(PRODUCT_DATA)
      .flat()
      .forEach((p: any) =>
        p.packing.split(",").forEach((s: string) => {
          const trimmed = s.trim();
          if (trimmed !== "All Sizes") packings.add(trimmed);
        }),
      );
    return ["All Sizes", ...Array.from(packings).sort()];
  }, []);

  const filteredProducts = useMemo(() => {
    const categoryProducts =
      PRODUCT_DATA[activeTab as keyof typeof PRODUCT_DATA] || [];
    return categoryProducts.filter((product: any) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.active.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCrop =
        selectedCrop === "All Crops" ||
        product.crops.includes(selectedCrop) ||
        product.crops.includes("All Crops");
      const matchesPacking =
        selectedPacking === "All Sizes" ||
        product.packing.includes(selectedPacking);
      return matchesSearch && matchesCrop && matchesPacking;
    });
  }, [activeTab, searchQuery, selectedCrop, selectedPacking]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCrop("All Crops");
    setSelectedPacking("All Sizes");
  };

  const featuredList = useMemo(
    () =>
      Object.values(PRODUCT_DATA)
        .flat()
        .filter((p: any) => p.featured)
        .slice(0, 3),
    [],
  );

  return (
    <div id="products-page" className="py-5">
      <Container className="py-5">
        <div className="mb-5 text-center px-4">
          <span className="text-xs fw-bold tracking-[0.2em] text-primary text-uppercase mb-3 d-block">
            Technical Catalogue
          </span>
          <h1
            className="fw-black text-slate-900 display-4 mb-3"
            style={{ fontWeight: 900 }}
          >
            Product Portfolio
          </h1>
          <p className="text-slate-500 max-w-3xl mx-auto fs-5">
            Science-based formulations designed for maximum field efficiency.
            Every product is registered and tested for the Pakistani
            agricultural landscape.
          </p>
        </div>

        <FeaturedShowcase featuredList={featuredList} />

        <Tab.Container
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k || "herbicides")}
        >
          <Row className="g-4">
            <Col lg={3}>
              <div className="sticky-top" style={{ top: "100px" }}>
                <FiltersSidebar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedCrop={selectedCrop}
                  setSelectedCrop={setSelectedCrop}
                  selectedPacking={selectedPacking}
                  setSelectedPacking={setSelectedPacking}
                  resetFilters={resetFilters}
                  allCrops={allCrops}
                  allPackings={allPackings}
                />
              </div>
            </Col>

            <Col lg={9}>
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div>
                  <h3 className="fw-black text-capitalize text-slate-900 m-0">
                    {activeTab}
                  </h3>
                  <div className="h-1 bg-primary w-12 mt-2 rounded-full" />
                </div>
                <div className="d-flex flex-column align-items-end">
                  <Badge
                    bg="white"
                    className="text-primary border border-primary-subtle rounded-pill px-4 py-2 fw-black tracking-widest mb-1 shadow-sm"
                    style={{ fontSize: "10px" }}
                  >
                    {filteredProducts.length} FORMULATIONS
                  </Badge>
                  {(searchQuery ||
                    selectedCrop !== "All Crops" ||
                    selectedPacking !== "All Sizes") && (
                    <span className="text-[9px] fw-bold text-slate-400 text-uppercase tracking-tighter">
                      Current Filters Applied
                    </span>
                  )}
                </div>
              </div>

              <ProductGrid
                isLoading={isLoading}
                filteredProducts={filteredProducts}
                selectedProducts={selectedProducts}
                toggleProductSelection={toggleProductSelection}
                resetFilters={resetFilters}
              />

              <div className="mt-5 glass-panel-dark border-white/30 rounded-4xl p-5 text-center">
                <h4 className="fw-bold text-slate-900 mb-2">
                  Can't find a specific active ingredient?
                </h4>
                <p className="text-slate-600 mb-4">
                  Our R&D team can discuss custom formulations or upcoming
                  product launches.
                </p>
                <Button
                  variant="primary"
                  as={Link as any}
                  to="/contact"
                  className="px-5 shadow-lg"
                >
                  Inquire Now
                </Button>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      <AnimatePresence>
        {selectedProducts.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="position-fixed bottom-0 start-50 translate-middle-x mb-4 z-50 w-100 px-3"
            style={{ maxWidth: "800px" }}
          >
            <div className="product-card-glass bg-slate-900 border-white/10 rounded-full px-5 py-3 shadow-2xl d-flex align-items-center justify-content-between text-white border">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-xl text-primary">
                  <Layers size={20} />
                </div>
                <div>
                  <span className="fw-black tracking-widest text-[11px] text-primary-subtle d-block">
                    PROD_COMPARISON
                  </span>
                  <span className="fw-bold">
                    {selectedProducts.length} Product
                    {selectedProducts.length > 1 ? "s" : ""} Selected
                  </span>
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
                <div className="h-8 w-[1px] bg-white/10" />
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
        onRemove={(id) =>
          setSelectedProducts((prev) => prev.filter((p) => p !== id))
        }
      />
    </div>
  );
};

export default Products;
