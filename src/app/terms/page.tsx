import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Pillow Tales",
  description:
    "Pillow Tales terms of service. Rules and guidelines for using our premium bedtime stories app.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 prose-pillow">
        <h1>Terms of Service</h1>
        <p className="text-sm text-text-muted mb-8">
          Last updated: July 9, 2026
        </p>

        <p>
          Welcome to Pillow Tales. By downloading, installing, or using our
          application (&quot;App&quot;) or visiting our website, you agree to be bound by
          these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms,
          please do not use our services.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Pillow Tales, you acknowledge that you have
          read, understood, and agree to be bound by these Terms. If you are a
          parent or guardian using the App on behalf of a minor, you agree to
          these Terms on their behalf.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          Pillow Tales is a premium mobile application that provides calming,
          beautifully illustrated bedtime stories for children. Our service
          includes:
        </p>
        <ul>
          <li>Curated bedtime stories with premium 3D illustrations</li>
          <li>Calming narration and ambient soundscapes</li>
          <li>A safe, ad-free environment for children</li>
          <li>Parental controls and a secure parent gate</li>
        </ul>

        <h2>3. User Accounts</h2>
        <p>
          To access certain features, a parent or guardian may create an account.
          You are responsible for maintaining the confidentiality of your account
          credentials. Children are not required to create accounts or provide
          personal information.
        </p>

        <h2>4. Subscription & Payments</h2>
        <p>
          Pillow Tales may offer premium subscription plans. Subscriptions are
          managed through your device&apos;s app store (Apple App Store or Google
          Play). All billing, refunds, and cancellation are handled by the
          respective app store according to their policies.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content within Pillow Tales — including but not limited to stories,
          illustrations, animations, audio, and software — is the exclusive
          property of Pillow Tales and is protected by copyright and
          intellectual property laws. You may not reproduce, distribute, or
          create derivative works without our written permission.
        </p>

        <h2>6. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Reverse engineer, decompile, or disassemble any part of the App
          </li>
          <li>Use the App for any unlawful or unauthorized purpose</li>
          <li>Attempt to bypass or circumvent the parent gate</li>
          <li>
            Redistribute, sell, or sublicense any content from the App
          </li>
        </ul>

        <h2>7. Children&apos;s Safety</h2>
        <p>
          Pillow Tales is committed to children&apos;s safety. Our App is designed to
          comply with COPPA and GDPR-K regulations. Please refer to our{" "}
          <a href="/privacy">Privacy Policy</a> for full details on how we
          protect children&apos;s privacy.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          Pillow Tales is provided &quot;as is&quot; and &quot;as available&quot; without warranties
          of any kind, either express or implied. We do not guarantee that the
          App will be uninterrupted, error-free, or free of harmful components.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Pillow Tales shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of the App or service.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will
          be posted on this page with an updated revision date. Continued use
          of Pillow Tales after changes constitutes acceptance of the new Terms.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          For questions about these Terms, please visit our{" "}
          <a href="/support">Contact & Support</a> page.
        </p>
      </div>
    </div>
  );
}
