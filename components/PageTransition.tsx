"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onAnimationStart={() => console.log("Animation started for:", pathname)}
        onAnimationComplete={() =>
          console.log("Animation completed for:", pathname)
        }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
