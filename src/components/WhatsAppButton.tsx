import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppButton = () => {
  const phoneNumber = '923006843985';
  const message = 'Inquiry from Tesco Chemical Group website';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="position-fixed bottom-0 end-0 m-4 glass-panel d-flex align-items-center justify-content-center text-decoration-none shadow-lg transition-transform"
      style={{ 
        width: '60px', 
        height: '60px', 
        borderRadius: '24px', 
        backgroundColor: 'rgba(37, 211, 102, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        zIndex: 9999
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      id="whatsapp-floating-btn"
    >
      <MessageCircle size={32} color="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
