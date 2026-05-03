import React from 'react';
import { Modal, Table, Button, Badge } from 'react-bootstrap';
import { X, Check, FlaskConical, Package, Sprout } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    active: string;
    category: string;
    crops: string[];
    packing: string;
    usage: string;
}

interface ProductComparisonModalProps {
    show: boolean;
    onHide: () => void;
    products: Product[];
    onRemove: (id: string) => void;
}

export const ProductComparisonModal = ({ show, onHide, products, onRemove }: ProductComparisonModalProps) => {
    return (
        <Modal show={show} onHide={onHide} size="xl" centered className="comparison-modal">
            <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title className="fw-black text-slate-900 display-6">Product Comparison</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
                <div className="table-responsive">
                    <Table className="align-middle border-separate" style={{ borderSpacing: '10px 0' }}>
                        <thead>
                            <tr>
                                <th className="border-0 bg-transparent" style={{ minWidth: '200px' }}>
                                    <div className="text-slate-400 text-uppercase tracking-[0.2em] fw-black text-[10px]">Specifications</div>
                                </th>
                                {products.map(product => (
                                    <th key={product.id} className="border-0 bg-transparent text-center" style={{ minWidth: '250px' }}>
                                        <div className="product-card-glass p-4 rounded-4xl border-white shadow-sm position-relative">
                                            <Button 
                                                variant="link" 
                                                className="position-absolute top-0 end-0 p-2 text-slate-300 hover-text-danger"
                                                onClick={() => onRemove(product.id)}
                                            >
                                                <X size={18} />
                                            </Button>
                                            <div className="bg-primary/5 p-3 rounded-2xl text-primary mx-auto mb-3 d-inline-flex">
                                                <FlaskConical size={24} />
                                            </div>
                                            <h5 className="fw-black text-slate-900 mb-0">{product.name}</h5>
                                            <Badge bg="primary" className="mt-2 rounded-pill px-3 py-1 text-uppercase fw-black tracking-widest" style={{ fontSize: '8px' }}>
                                                {product.category}
                                            </Badge>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-4 border-0">
                                    <div className="d-flex align-items-center gap-2 text-slate-600 fw-bold small">
                                        <FlaskConical size={14} className="text-primary" /> Active Ingredient
                                    </div>
                                </td>
                                {products.map(product => (
                                    <td key={product.id} className="py-4 text-center border-0">
                                        <span className="text-slate-900 fw-black small text-uppercase tracking-wider">{product.active}</span>
                                    </td>
                                ))}
                            </tr>
                            <tr className="bg-slate-50/50">
                                <td className="py-4 border-0">
                                    <div className="d-flex align-items-center gap-2 text-slate-600 fw-bold small">
                                        <Package size={14} className="text-primary" /> Packing Size
                                    </div>
                                </td>
                                {products.map(product => (
                                    <td key={product.id} className="py-4 text-center border-0">
                                        <span className="text-slate-700 fw-bold small">{product.packing}</span>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 border-0">
                                    <div className="d-flex align-items-center gap-2 text-slate-600 fw-bold small">
                                        <Sprout size={14} className="text-primary" /> Target Crops
                                    </div>
                                </td>
                                {products.map(product => (
                                    <td key={product.id} className="py-4 text-center border-0">
                                        <div className="d-flex flex-wrap gap-1 justify-content-center">
                                            {product.crops.map((crop, i) => (
                                                <Badge key={i} bg="white" className="text-slate-500 border border-slate-100 fw-bold px-2 py-1 rounded-pill" style={{ fontSize: '8px' }}>
                                                    {crop}
                                                </Badge>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr className="bg-slate-50/50">
                                <td className="py-4 border-0">
                                    <div className="d-flex align-items-center gap-2 text-slate-600 fw-bold small">
                                        <Check size={14} className="text-primary" /> Core Benefits
                                    </div>
                                </td>
                                {products.map(product => (
                                    <td key={product.id} className="py-4 text-center border-0 px-4">
                                        <p className="text-slate-500 small leading-relaxed m-0">{product.usage}</p>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Modal.Body>
            <Modal.Footer className="border-0 p-4 pt-2">
                <Button variant="light" onClick={onHide} className="rounded-full px-5 py-2 fw-black small text-slate-600">
                    CLOSE
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
