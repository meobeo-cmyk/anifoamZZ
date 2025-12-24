import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function Section({ children, className, delay = 0, id }: SectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn("w-full py-16 px-4 md:px-8 max-w-7xl mx-auto", className)}
    >
      {children}
    </motion.div>
  );
}
