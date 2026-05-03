export interface Product {
    id: string;
    name: string;
    active: string;
    usage: string;
    packing: string;
    crops: string[];
    featured?: boolean;
    category: string;
    description?: string;
    dosage?: string;
    precautions?: string[];
    image?: string;
}

export const PRODUCT_DATA: Record<string, Product[]> = {
    herbicides: [
        { 
            id: "tesco-glypho-s",
            name: "Tesco Glypho-S", 
            active: "Glyphosate 480 SL", 
            usage: "Non-selective weed control in non-cropped areas and orchards.", 
            packing: "1L, 5L", 
            crops: ["Orchards", "Non-Crop"],
            category: "herbicides",
            description: "A wide-spectrum systemic herbicide used to kill weeds, especially annual broadleaf weeds and grasses that compete with crops.",
            dosage: "2-3 Liters per 100 liters of water",
            precautions: ["Avoid spray drift on desirable plants", "Wear protective gear"],
            image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop"
        },
        { 
            id: "wheat-care-24d",
            name: "Wheat-Care 2,4-D", 
            active: "2,4-D Ethyl Ester", 
            usage: "Post-emergence control of broadleaf weeds in wheat.", 
            packing: "400ml, 1L", 
            crops: ["Wheat"],
            category: "herbicides",
            description: "Selective herbicide for the control of most broadleaf weeds in wheat and other cereals.",
            dosage: "400-600ml per acre",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
        },
        { 
            id: "meta-x-70",
            name: "Meta-X 70", 
            active: "Metribuzin 70% WP", 
            usage: "Selective control for potato and sugarcane weeds.", 
            packing: "250g, 500g", 
            crops: ["Potato", "Sugarcane"],
            category: "herbicides",
            dosage: "250g per acre",
            image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop"
        }
    ],
    insecticides: [
        { 
            id: "termi-stop",
            name: "Termi-Stop", 
            active: "Chlorpyrifos 40 EC", 
            usage: "Powerful protection against termites and soil pests.", 
            packing: "1L", 
            crops: ["Cotton", "Sugarcane", "Wheat"],
            category: "insecticides",
            featured: true,
            dosage: "1-2 Liters per acre for soil drenching",
            image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800&auto=format&fit=crop"
        },
        { 
            id: "imida-pro",
            name: "Imida-Pro", 
            active: "Imidacloprid 20 SL", 
            usage: "Systemic control for sucking pests in cotton and vegetables.", 
            packing: "250ml, 500ml", 
            crops: ["Cotton", "Vegetables"],
            category: "insecticides",
            image: "https://images.unsplash.com/photo-1595009552535-be753429d7f1?q=80&w=800&auto=format&fit=crop"
        },
        { 
            id: "l-cyhaloth-super",
            name: "L-Cyhaloth Super", 
            active: "Lambda Cyhalothrin 2.5 EC", 
            usage: "Broad-spectrum control for bollworms and beetles.", 
            packing: "500ml, 1L", 
            crops: ["Cotton", "Maize", "Rice"],
            category: "insecticides",
            image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop"
        }
    ],
    fungicides: [
        { 
            id: "manco-z-gold",
            name: "Manco-Z Gold", 
            active: "Mancozeb 80% WP", 
            usage: "Broad-spectrum contact fungicide for blight and rust.", 
            packing: "500g, 1kg", 
            crops: ["Potato", "Tomato", "Wheat"],
            category: "fungicides",
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop"
        },
        { 
            id: "carben-save",
            name: "Carben-Save", 
            active: "Carbendazim 50% WP", 
            usage: "Systemic fungicide for various fungal diseases.", 
            packing: "500g", 
            crops: ["Rice", "Orchards"],
            category: "fungicides",
            image: "https://images.unsplash.com/photo-1597362868123-d5144e0c4a43?q=80&w=800&auto=format&fit=crop"
        }
    ],
    granules: [
        { 
            id: "cartap-4g",
            name: "Cartap 4G", 
            active: "Cartap Hydrochloride 4%", 
            usage: "Effective control of stem borers and leaf folders in rice.", 
            packing: "10kg Bag", 
            crops: ["Rice"],
            category: "granules",
            image: "https://images.unsplash.com/photo-1536633310979-b864bab1852b?q=80&w=800&auto=format&fit=crop"
        },
        { 
            id: "fipro-g",
            name: "Fipro-G", 
            active: "Fipronil 0.3% G", 
            usage: "Long-lasting control of early stem borer and termites in Sugarcane.", 
            packing: "8kg Bag", 
            crops: ["Sugarcane"],
            category: "granules",
            image: "https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?q=80&w=800&auto=format&fit=crop"
        }
    ],
    micros: [
        { 
            id: "tesco-zinc-plus",
            name: "Tesco Zinc-Plus", 
            active: "Chelated Zinc 10%", 
            usage: "Essential micro-nutrient for citrus and deciduous fruit trees.", 
            packing: "500ml", 
            crops: ["Citrus", "Mango", "Apple"],
            category: "micros",
            image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop"
        },
        { 
            id: "boron-lite",
            name: "Boron-Lite", 
            active: "Solubor 20%", 
            usage: "Specialized for improving kernel development in Maize and Cotton.", 
            packing: "1kg", 
            crops: ["Maize", "Cotton"],
            category: "micros",
            image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop"
        }
    ],
    fertilizers: [
        { 
            id: "crop-start-npk",
            name: "Crop-Start NPK", 
            active: "20:20:20 NPK", 
            usage: "Water-soluble balanced nutrition for foliar application during early growth.", 
            packing: "1kg, 2kg", 
            crops: ["All Crops"],
            category: "fertilizers",
            featured: true,
            image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop"
        },
        { 
            id: "nitro-max",
            name: "Nitro-Max", 
            active: "Liquid Nitrogen 32%", 
            usage: "Rapid leaf growth stimulator for wheat and vegetables.", 
            packing: "5L", 
            crops: ["Wheat", "Vegetables"],
            category: "fertilizers",
            image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop"
        }
    ],
    adjuvants: [
        { 
            id: "kansol-add",
            name: "Kansol Add", 
            active: "Spray Adjuvant", 
            usage: "Enhances spread, penetration, and effectiveness of all crop protection sprays.", 
            packing: "100ml, 250ml", 
            featured: true, 
            crops: ["All Crops"],
            category: "adjuvants",
            description: "Kansol Add is our signature adjuvant that acts as a wetting, spreading, and penetrating agent for agricultural sprays.",
            dosage: "25-50ml per 100 liters of spray solution",
            image: "https://images.unsplash.com/photo-1622383529984-60c21820412b?q=80&w=800&auto=format&fit=crop"
        }
    ]
};
