import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Search } from "lucide-react";
import { Skeleton } from "../../components/ui/Skeleton";
import ProductCard from "./ProductCard";

type Props = {
  isLoading: boolean;
  filteredProducts: any[];
  selectedProducts: string[];
  toggleProductSelection: (e: any, id: string) => void;
  resetFilters: () => void;
};

const ProductGrid: React.FC<Props> = ({
  isLoading,
  filteredProducts,
  selectedProducts,
  toggleProductSelection,
  resetFilters,
}) => {
  return (
    <>
      <Row className="g-4">
        {isLoading ? (
          // Skeleton Loading State
          [...Array(6)].map((_, idx) => (
            <Col md={6} key={`skeleton-${idx}`}>
              <Card className="h-100 product-card-glass border-white/50 rounded-4xl p-4 shadow-sm">
                <Card.Body className="p-0 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <Skeleton
                      className="rounded-2xl"
                      style={{ width: "44px", height: "44px" }}
                      variant="glass"
                    />
                  </div>
                  <Skeleton
                    className="mb-2 h-6"
                    style={{ width: "60%" }}
                    variant="glass"
                  />
                  <Skeleton
                    className="mb-4 h-3"
                    style={{ width: "40%" }}
                    variant="glass"
                  />
                  <Skeleton className="mb-2 h-4" variant="glass" />
                  <Skeleton
                    className="mb-4 h-4"
                    style={{ width: "80%" }}
                    variant="glass"
                  />
                  <div className="d-flex gap-1 mb-5">
                    <Skeleton
                      className="rounded-pill"
                      style={{ width: "50px", height: "20px" }}
                      variant="glass"
                    />
                    <Skeleton
                      className="rounded-pill"
                      style={{ width: "50px", height: "20px" }}
                      variant="glass"
                    />
                  </div>
                  <div className="pt-4 border-top border-slate-100 d-flex align-items-center justify-content-between mt-auto">
                    <div className="d-flex flex-column gap-1">
                      <Skeleton
                        style={{ width: "40px", height: "8px" }}
                        variant="glass"
                      />
                      <Skeleton
                        style={{ width: "80px", height: "14px" }}
                        variant="glass"
                      />
                    </div>
                    <Skeleton
                      style={{ width: "60px", height: "14px" }}
                      variant="glass"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <Col md={6} key={product.id} className="d-flex">
              <ProductCard
                product={product}
                idx={idx}
                selectedProducts={selectedProducts}
                toggleProductSelection={toggleProductSelection}
              />
            </Col>
          ))
        ) : (
          <Col md={12}>
            <div className="glass-panel border-white/50 rounded-4xl p-5 text-center">
              <div className="bg-slate-100 p-4 rounded-circle d-inline-block mb-4">
                <Search size={48} className="text-slate-300" />
              </div>
              <h4 className="fw-bold text-slate-900 mb-2">
                No matching formulations
              </h4>
              <p className="text-slate-500 mb-4">
                Try adjusting your filters or search terms.
              </p>
              <Button variant="outline-primary" onClick={resetFilters}>
                Clear All Filters
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </>
  );
};

export default ProductGrid;
