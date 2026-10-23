"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "@/data/config";
import { useLanguage } from "@/contexts/language";

// Pastille fixe qui rappelle la disponibilité une fois le hero dépassé
const AvailabilityBadge = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mailto = `mailto:${config.email}?subject=${encodeURIComponent(t.availability.subject)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={mailto}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-4 py-2 text-xs md:text-sm font-sans text-foreground shadow-md hover:border-primary/40 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          {t.availability.badge}
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default AvailabilityBadge;
