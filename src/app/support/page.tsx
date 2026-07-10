"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, Mail, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { submitSupportForm } from "@/lib/actions";

export default function SupportPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const result = await submitSupportForm(formData);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  const inputClass =
    "w-full px-5 py-3.5 rounded-xl bg-background-dark/60 border border-glass-border text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary-gold/40 focus:ring-2 focus:ring-primary-gold/10 transition-all duration-300 text-sm";

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-4">
            Contact & <span className="gradient-text">Support</span>
          </h1>
          <p className="text-text-muted text-lg">
            Have a question or need help? We&apos;d love to hear from you. Our team
            typically responds within 48 hours.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center"
          >
            <CheckCircle className="w-12 h-12 text-emerald-400" />
            <h2 className="text-xl font-bold text-text-main">Message Sent!</h2>
            <p className="text-sm text-emerald-300">{message}</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-8 rounded-2xl bg-background-light/50 border border-glass-border"
            id="support-form"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="support-name" className="text-sm font-medium text-text-muted flex items-center gap-2">
                <User className="w-4 h-4" />
                Name
              </label>
              <input
                type="text"
                name="name"
                id="support-name"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="support-email" className="text-sm font-medium text-text-muted flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <input
                type="email"
                name="email"
                id="support-email"
                required
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="support-message" className="text-sm font-medium text-text-muted flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message
              </label>
              <textarea
                name="message"
                id="support-message"
                required
                placeholder="How can we help you?"
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">{message}</p>
            )}

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3.5 rounded-xl bg-primary-gold text-background-dark font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-gold-dark transition-colors duration-300 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
              id="support-submit"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
