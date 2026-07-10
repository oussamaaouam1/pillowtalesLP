"use client";

import { motion } from "framer-motion";
import { Moon, Shield, Palette } from "lucide-react";

const features = [
  {
    icon: Moon,
    title: "Calming Pacing",
    description:
      "No fast cuts, no bright flashes. Designed to lower heart rates and gently guide little ones to sleep.",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Shield,
    title: "100% Kid-Safe",
    description:
      "Zero ads, no tracking, locked behind a secure parent gate. Full COPPA & GDPR-K compliance built in.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Palette,
    title: "Premium Art",
    description:
      "Beautiful 3D illustrations that feel like a classic storybook brought to life with magical detail.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeatureSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background-light overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-gold/[0.03] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-primary-gold uppercase tracking-widest">
            Why Pillow Tales?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-text-main leading-tight">
            Bedtime stories, <span className="gradient-text">reimagined.</span>
          </h2>
          <p className="mt-4 text-text-muted text-lg leading-relaxed">
            Every detail is crafted to create the perfect wind-down experience
            for your child.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="glow-card group relative rounded-2xl bg-background-dark/60 border border-glass-border p-8 flex flex-col items-start gap-4"
            >
              {/* Icon container */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center border border-white/5`}
              >
                <feature.icon className="w-7 h-7 text-primary-gold" />
              </div>

              <h3 className="text-xl font-bold text-text-main">
                {feature.title}
              </h3>

              <p className="text-text-muted leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
