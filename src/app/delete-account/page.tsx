"use client";

import { useState } from "react";
import { Trash2, CheckCircle, Loader2, Mail, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { submitDeleteAccount } from "@/lib/actions";

export default function DeleteAccountPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const result = await submitDeleteAccount(formData);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

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
            Delete <span className="gradient-text">Account</span>
          </h1>
          <p className="text-text-muted text-lg">
            We&apos;re sorry to see you go. This action is permanent and cannot
            be undone.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center"
          >
            <CheckCircle className="w-12 h-12 text-emerald-400" />
            <h2 className="text-xl font-bold text-text-main">Request Submitted</h2>
            <p className="text-sm text-emerald-300">{message}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Warning Card */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-red-300 mb-1">
                  Permanent Action
                </h3>
                <p className="text-sm text-red-300/80">
                  Enter your parent account email to permanently delete your
                  Pillow Tales account and all associated data. This includes
                  story progress, preferences, and any subscription information.
                </p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 rounded-2xl bg-background-light/50 border border-glass-border"
              id="delete-account-form"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="delete-email"
                  className="text-sm font-medium text-text-muted flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Parent Account Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="delete-email"
                  required
                  placeholder="parent@email.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-background-dark/60 border border-glass-border text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary-gold/40 focus:ring-2 focus:ring-primary-gold/10 transition-all duration-300 text-sm"
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
                className="w-full px-6 py-3.5 rounded-xl bg-red-500/80 hover:bg-red-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                id="delete-submit"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    Delete My Account
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
