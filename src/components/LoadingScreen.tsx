import React from "react";
import { motion, AnimatePresence } from "motion/react";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div className="position-relative">
        {/* Animated Rings */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "80px",
            height: "80px",
            border: "4px solid rgba(5, 150, 105, 0.1)",
            borderTop: "4px solid #059669",
            borderRadius: "50%",
          }}
        />
        
        {/* Inner Pulsing Circle */}
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "40px",
            height: "40px",
            backgroundColor: "#059669",
            borderRadius: "50%",
            boxShadow: "0 0 20px rgba(5, 150, 105, 0.4)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          marginTop: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <span
          style={{
            color: "#0f172a",
            fontWeight: "900",
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Tesco Chemical
        </span>
        <span
          style={{
            color: "#059669",
            fontWeight: "700",
            fontSize: "0.625rem",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginLeft: "0.5em", // To center it with letter spacing
          }}
        >
          Group
        </span>
      </motion.div>
      
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          marginTop: "8px",
          color: "#64748b",
          fontSize: "0.875rem",
          fontWeight: "500",
        }}
      >
        Loading experience...
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
