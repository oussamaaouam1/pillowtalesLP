"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, Sparkles } from "lucide-react";
import { submitWaitlistEmail } from "@/lib/actions";

export default function WaitlistSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const result = await submitWaitlistEmail(formData);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-light via-background-dark to-background-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/[0.04] via-primary-gold/[0.08] to-primary-gold/[0.04]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-primary-gold/[0.06] blur-[80px]" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-primary-gold/[0.04] blur-[60px]" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-gold/10 border border-primary-gold/20">
            <Sparkles className="w-4 h-4 text-primary-gold" />
            <span className="text-xs font-semibold text-primary-gold uppercase tracking-wider">
              Early Access
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main leading-tight">
            Ready for a better{" "}
            <span className="gradient-text">bedtime?</span>
          </h2>

          <p className="text-lg text-text-muted max-w-md leading-relaxed">
            Join the waitlist and be the first to know when Pillow Tales
            launches. Sweet dreams are just around the corner.
          </p>

          {/* Form */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
            >
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">
                {message}
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col sm:flex-row gap-3 mt-2"
              id="waitlist-form"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email..."
                className="flex-1 px-5 py-3.5 rounded-xl bg-background-dark/60 border border-glass-border text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary-gold/40 focus:ring-2 focus:ring-primary-gold/10 transition-all duration-300 text-sm"
                id="waitlist-email"
              />
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 rounded-xl bg-primary-gold text-background-dark font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-gold-dark transition-colors duration-300 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed whitespace-nowrap"
                id="waitlist-submit"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Join Waitlist
                  </>
                )}
              </motion.button>
            </form>
          )}

          {status === "error" && (
            <p className="text-sm text-red-400">{message}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
