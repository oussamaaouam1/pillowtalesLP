"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

import screenshot1 from "@/app/assets/screenshot-1.jpg";
import screenshot2 from "@/app/assets/screenshot-2.jpg";
import screenshot3 from "@/app/assets/screenshot-3.jpeg";
import screenshot4 from "@/app/assets/screenshot-4.jpeg";
import screenshot5 from "@/app/assets/screenshot-5.jpeg";
import screenshot6 from "@/app/assets/screenshot-6.jpeg";
import bgImage from "@/app/assets/bg.jpeg";

function Firefly({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 bg-primary-gold rounded-full"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0, 1, 0.3, 1, 0],
        scale: [0.5, 1.2, 0.8, 1, 0.5],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  const fireflies = [
    { delay: 0, x: "10%", y: "20%" },
    { delay: 1.5, x: "85%", y: "15%" },
    { delay: 0.8, x: "70%", y: "60%" },
    { delay: 2.2, x: "20%", y: "75%" },
    { delay: 3, x: "50%", y: "30%" },
    { delay: 1, x: "90%", y: "80%" },
    { delay: 2.5, x: "30%", y: "45%" },
    { delay: 0.3, x: "65%", y: "85%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Magical bedtime background"
          fill
          className="object-cover opacity-60 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-background-dark/60 to-background-light" />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-gold/[0.03] blur-[120px]" />

      {/* Fireflies */}
      {fireflies.map((f, i) => (
        <Firefly key={i} {...f} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-gold/10 border border-primary-gold/20 w-fit"
            >
              <Sparkles className="w-4 h-4 text-primary-gold" />
              <span className="text-xs font-semibold text-primary-gold uppercase tracking-wider">
                Coming Soon
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main leading-[1.1] tracking-tight">
              Turn screen time into{" "}
              <span className="gradient-text">sleepy time.</span>
            </h1>

            <p className="text-lg text-text-muted max-w-lg leading-relaxed">
              Premium, calming, and kid-safe bedtime stories. Meet the magic of
              Pillow Tales — where every night becomes an adventure that ends in
              sweet dreams.
            </p>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4 mt-2">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-text-main text-background-dark font-semibold text-sm transition-shadow hover:shadow-lg hover:shadow-primary-gold/20"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-glass-border text-text-main font-semibold text-sm glass transition-shadow hover:shadow-lg hover:shadow-primary-gold/10"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.414l2.302 1.314a1 1 0 0 1 0 1.786l-2.302 1.314-2.541-2.207 2.541-2.207zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Get it on Google Play
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column — iPad Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
              {/* iPad frame */}
              <div className="ipad-mockup w-[340px] h-[240px] sm:w-[480px] sm:h-[340px] lg:w-[520px] lg:h-[370px] relative overflow-hidden flex items-center justify-center rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-[3px] border-primary-gold/20 shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(244,208,111,0.1)]"
              >
                {/* Camera dot */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-background-dark/80 rounded-full border border-white/10 z-10" />

                {/* Screen content — app screenshots with crossfade */}
                <div className="absolute inset-2.5 sm:inset-3 rounded-[14px] sm:rounded-[18px] overflow-hidden bg-background-light">
                  {screenshots.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Pillow Tales app screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                  {/* Overlay gradient for polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Glow behind iPad */}
              <div className="absolute -inset-10 bg-primary-gold/[0.06] rounded-full blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light to-transparent" />
    </section>
  );
}
