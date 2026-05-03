import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Check, ChevronRight, FlaskConical } from "lucide-react";
import { LazyLoad } from "../../components/ui/LazyLoad";
import { LazyImage } from "../../components/ui/LazyImage";
import { Skeleton } from "../../components/ui/Skeleton";

type Props = {
  product: any;
  idx: number;
  selectedProducts: string[];
  toggleProductSelection: (e: any, id: string) => void;
};

const ProductCard: React.FC<Props> = ({
  product,
  idx,
  selectedProducts,
  toggleProductSelection,
}) => {
  return (
    <LazyLoad
      placeholder={
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
            <div className="pt-4 border-top border-slate-100 d-flex align-items-center justify-content-between mt-auto">
              <Skeleton
                style={{ width: "80px", height: "14px" }}
                variant="glass"
              />
              <Skeleton
                style={{ width: "60px", height: "14px" }}
                variant="glass"
              />
            </div>
          </Card.Body>
        </Card>
      }
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="position-relative w-100 d-flex"
      >
        <div
          className={`position-absolute top-0 end-0 p-4 z-10 transition-all ${selectedProducts.includes(product.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          onClick={(e) => toggleProductSelection(e, product.id)}
          style={{ cursor: "pointer" }}
        >
          <div
            className={`rounded-xl border-2 p-1 d-flex align-items-center justify-content-center transition-colors ${selectedProducts.includes(product.id) ? "bg-primary border-primary" : "bg-white/80 border-slate-200"}`}
            style={{ width: "28px", height: "28px" }}
          >
            {selectedProducts.includes(product.id) && (
              <Check size={16} className="text-white" />
            )}
          </div>
        </div>

        <Card
          as={Link as any}
          to={`/product/${product.id}`}
          className={`h-100 product-card-glass product-card-equal border-white/50 rounded-4xl p-4 shadow-sm text-decoration-none group transition-all overflow-hidden ${selectedProducts.includes(product.id) ? "ring-2 ring-primary bg-primary/5" : ""} w-100`}
          id={`prod-card-${idx}`}
        >
          <Card.Body className="p-0 d-flex flex-column">
            <div
              className="mb-4 rounded-3xl overflow-hidden bg-slate-100"
              style={{ aspectRatio: "16/9" }}
            >
              {product.image ? (
                <LazyImage
                  src={product.image}
                  alt={product.name}
                  className="w-100 h-100 object-cover"
                />
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
              {product.featured && (
                <Badge
                  bg="primary"
                  className="rounded-pill px-3 py-2 text-uppercase fw-black tracking-widest shadow-sm"
                  style={{ fontSize: "7px" }}
                >
                  Essential
                </Badge>
              )}
            </div>

            <h5 className="fw-black text-slate-900 mb-1">{product.name}</h5>
            <div
              className="text-primary fw-black text-uppercase mb-4 tracking-wider"
              style={{ fontSize: "9px", opacity: 0.8 }}
            >
              {product.active}
            </div>

            <p className="text-slate-700 small leading-relaxed mb-4 flex-grow-1 line-clamp-2">
              {product.usage}
            </p>

            <div className="d-flex flex-wrap gap-1 mb-5">
              {product.crops.slice(0, 3).map((crop: string, i: number) => (
                <Badge key={i} bg="white" className="crop-badge">
                  {crop}
                </Badge>
              ))}
              {product.crops.length > 3 && (
                <Badge bg="white" className="crop-badge">
                  +{product.crops.length - 3}
                </Badge>
              )}
            </div>

            <div className="pt-4 border-top border-slate-100 d-flex align-items-center justify-content-between mt-auto">
              <div className="d-flex flex-column">
                <span className="text-[8px] fw-black text-slate-400 text-uppercase tracking-[0.2em]">
                  Package
                </span>
                <span className="text-slate-900 fw-bold small">
                  {product.packing}
                </span>
              </div>
              <div
                className="text-primary fw-black p-0 text-decoration-none small d-flex align-items-center gap-1 group"
                style={{ fontSize: "10px", letterSpacing: "1px" }}
              >
                DETAILS{" "}
                <ChevronRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </LazyLoad>
  );
};

export default ProductCard;
