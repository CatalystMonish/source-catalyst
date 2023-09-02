import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SwipeStack = ({ children }) => {
  const [order, setOrder] = useState(
    Array.from({ length: children.length }, (_, i) => i)
  );

  const handleSwipe = () => {
    setOrder(([first, ...rest]) => [...rest, first]);
  };

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence>
        {order.map((originalIndex, presentIndex) => {
          const isMain = presentIndex === 1;
          const offset = isMain ? 0 : presentIndex < 1 ? -300 : 300;

          return (
            <motion.div
              key={originalIndex}
              initial={{ opacity: 0, x: offset, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragMomentum={false}
              onDrag={(e, { offset }) => {
                if (isMain && Math.abs(offset.x) > 0) {
                }
              }}
              onDragEnd={(e, { offset }) => {
                if (isMain && Math.abs(offset.x) > 100) {
                  handleSwipe();
                }
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: isMain ? 1 : 0,
              }}
            >
              {children[originalIndex]}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default SwipeStack;
