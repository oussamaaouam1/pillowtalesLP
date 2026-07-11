"use client";

import { useState } from "react";
import { Trash2, CheckCircle, Loader2, Mail, AlertTriangle, KeyRound } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { requestDeletionOTP, verifyDeletionOTP } from "@/lib/actions";

export default function DeleteAccountPage() {
  // We use this to track which step the user is on
  const [step, setStep] = useState<"form" | "otp" | "success">("form");
  
  // Loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Store email to pass from step 1 to step 2
  const [email, setEmail] = useState("");

  async function handleRequestOTP(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const enteredEmail = formData.get("email") as string;
    setEmail(enteredEmail); // Save it for step 2

    const result = await requestDeletionOTP(formData);

    setIsLoading(false);

    if (result.success) {
      setStep("otp");
      setSuccessMessage(result.message);
    } else {
      setErrorMessage(result.message);
    }
  }

  async function handleVerifyOTP(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    // Add the email we saved from step 1 into the form data
    formData.append("email", email);

    const result = await verifyDeletionOTP(formData);

    setIsLoading(false);

    if (result.success) {
      setStep("success");
      setSuccessMessage(result.message);
    } else {
      setErrorMessage(result.message);
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

        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
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

              {/* Step 1 Form */}
              <form
                onSubmit={handleRequestOTP}
                className="flex flex-col gap-5 p-8 rounded-2xl bg-background-light/50 border border-glass-border"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-muted flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Parent Account Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="parent@email.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-background-dark/60 border border-glass-border text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary-gold/40 focus:ring-2 focus:ring-primary-gold/10 transition-all duration-300 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="reason" className="text-sm font-medium text-text-muted flex items-center gap-2">
                    Reason for leaving (Optional)
                  </label>
                  <textarea
                    name="reason"
                    id="reason"
                    rows={3}
                    placeholder="My child outgrew the app..."
                    className="w-full px-5 py-3.5 rounded-xl bg-background-dark/60 border border-glass-border text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary-gold/40 focus:ring-2 focus:ring-primary-gold/10 transition-all duration-300 text-sm resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-sm text-red-400">{errorMessage}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 px-6 py-3.5 rounded-xl bg-text-main hover:bg-white text-background-dark font-bold text-sm flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Request Deletion"
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}

          {step === "otp" && (
            <motion.div
              key="otp"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col gap-6"
            >
              {/* Step 2 Form */}
              <form
                onSubmit={handleVerifyOTP}
                className="flex flex-col gap-5 p-8 rounded-2xl bg-background-light/50 border border-glass-border text-center"
              >
                <div className="w-12 h-12 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-primary-gold/20">
                  <KeyRound className="w-6 h-6 text-primary-gold" />
                </div>
                <h2 className="text-xl font-bold text-text-main">Verify it&apos;s you</h2>
                <p className="text-sm text-text-muted -mt-2">
                  We sent a 6-digit code to <strong>{email}</strong>. Enter it below to confirm permanent deletion.
                </p>

                <div className="flex flex-col gap-2 mt-4">
                  <input
                    type="text"
                    name="otp"
                    required
                    maxLength={6}
                    placeholder="123456"
                    className="w-full text-center tracking-widest text-xl px-5 py-3.5 rounded-xl bg-background-dark/60 border border-glass-border text-text-main placeholder:text-text-muted/30 focus:outline-none focus:border-red-500/40 focus:ring-2 focus:ring-red-500/10 transition-all duration-300"
                  />
                </div>

                {errorMessage && (
                  <p className="text-sm text-red-400">{errorMessage}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 px-6 py-3.5 rounded-xl bg-red-500/80 hover:bg-red-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      Confirm Permanent Deletion
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center"
            >
              <CheckCircle className="w-12 h-12 text-emerald-400" />
              <h2 className="text-xl font-bold text-text-main">Account Deleted</h2>
              <p className="text-sm text-emerald-300">{successMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
