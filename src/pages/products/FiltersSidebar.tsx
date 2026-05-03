import React from "react";
import { Nav, Form, InputGroup, Button } from "react-bootstrap";
import {
  Filter,
  Search,
  X,
  FlaskConical,
  Droplets,
  Bug,
  Sprout,
} from "lucide-react";

type Props = {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  selectedCrop: string;
  setSelectedCrop: (v: string) => void;
  selectedPacking: string;
  setSelectedPacking: (v: string) => void;
  resetFilters: () => void;
  allCrops: string[];
  allPackings: string[];
};

const FiltersSidebar: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  selectedCrop,
  setSelectedCrop,
  selectedPacking,
  setSelectedPacking,
  resetFilters,
  allCrops,
  allPackings,
}) => {
  return (
    <>
      <div className="glass-panel border-white/50 rounded-4xl overflow-hidden mb-4 shadow-sm">
        <div
          className="bg-slate-900/5 fw-black py-4 px-4 text-slate-800 border-bottom border-white/20 d-flex align-items-center gap-2 text-uppercase tracking-widest"
          style={{ fontSize: "10px" }}
        >
          <Filter size={14} /> Catalog Menu
        </div>
        <Nav variant="pills" className="flex-column p-2 gap-1">
          {[
            {
              key: "fungicides",
              icon: <FlaskConical size={16} />,
              label: "Fungicides",
            },
            {
              key: "herbicides",
              icon: <Sprout size={16} />,
              label: "Herbicides",
            },
            {
              key: "insecticides",
              icon: <Bug size={16} />,
              label: "Insecticides",
            },
            {
              key: "granules",
              icon: <Droplets size={16} />,
              label: "Granules",
            },
            {
              key: "micros",
              icon: <FlaskConical size={16} />,
              label: "Micro Nutrients",
            },
            {
              key: "fertilizers",
              icon: <Sprout size={16} />,
              label: "Fertilizers",
            },
            {
              key: "adjuvants",
              icon: <Droplets size={16} />,
              label: "Adjuvants",
            },
          ].map((item) => (
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
          <h6
            className="fw-black text-slate-800 m-0 text-uppercase tracking-widest"
            style={{ fontSize: "10px" }}
          >
            Quick Filter
          </h6>
          {(searchQuery ||
            selectedCrop !== "All Crops" ||
            selectedPacking !== "All Sizes") && (
            <Button
              variant="link"
              className="p-0 text-danger text-decoration-none x-small fw-bold"
              onClick={resetFilters}
            >
              <X size={14} className="me-1" /> Reset
            </Button>
          )}
        </div>

        <Form.Group className="mb-4">
          <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">
            Active Ingredient
          </Form.Label>
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
          <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">
            Target Crop
          </Form.Label>
          <Form.Select
            className="bg-white/40 border-white/30 rounded-3 shadow-none text-slate-700 py-2 fs-7"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            {allCrops.map((crop) => (
              <option key={crop} value={crop}>
                {crop}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="text-[10px] fw-bold text-slate-400 text-uppercase tracking-widest mb-2">
            Packing Size
          </Form.Label>
          <Form.Select
            className="bg-white/40 border-white/30 rounded-3 shadow-none text-slate-700 py-2 fs-7"
            value={selectedPacking}
            onChange={(e) => setSelectedPacking(e.target.value)}
          >
            {allPackings.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>
    </>
  );
};

export default FiltersSidebar;
