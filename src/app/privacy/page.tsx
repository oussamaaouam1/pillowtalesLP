import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Pillow Tales",
  description:
    "Pillow Tales privacy policy. COPPA and GDPR-K compliant. We do not collect personal data from children.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 prose-pillow">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-text-muted mb-8">
          Last updated: July 9, 2026
        </p>

        <p>
          At Pillow Tales, we take children&apos;s privacy extremely seriously. This
          Privacy Policy explains how we handle information in our app and on
          this website. Our app is designed for children, and we are fully
          committed to complying with the Children&apos;s Online Privacy Protection
          Act (COPPA) and the General Data Protection Regulation for children
          (GDPR-K).
        </p>

        <h2>COPPA & GDPR-K Compliance</h2>
        <p>
          Pillow Tales is designed to comply with COPPA (United States) and
          GDPR-K (European Union) regulations. We do not knowingly collect
          personal information from children under the age of 13 (or the
          applicable age in your jurisdiction).
        </p>
        <ul>
          <li>
            We do <strong>not</strong> collect, use, or disclose personal
            information from children.
          </li>
          <li>
            We do <strong>not</strong> require registration or login from child
            users.
          </li>
          <li>
            We do <strong>not</strong> serve behavioral advertising or targeted
            ads.
          </li>
          <li>
            All parental controls are gated behind a verified parent gate.
          </li>
        </ul>

        <h2>Data Collection (None)</h2>
        <p>
          <strong>We do not collect personal data.</strong> Pillow Tales does not
          gather, store, or transmit any personally identifiable information
          (PII) from its users, including:
        </p>
        <ul>
          <li>Names, email addresses, or phone numbers</li>
          <li>Location data or device identifiers</li>
          <li>Photos, videos, or audio recordings</li>
          <li>Browsing history or usage analytics tied to individuals</li>
        </ul>
        <p>
          We may collect anonymous, aggregated crash reports to improve app
          stability. These reports contain no personally identifiable
          information.
        </p>

        <h2>Parental Rights</h2>
        <p>
          As a parent or legal guardian, you have the right to:
        </p>
        <ul>
          <li>
            Review any personal information we may have collected about your
            child (we collect none).
          </li>
          <li>
            Request deletion of your child&apos;s account and any associated data.
          </li>
          <li>
            Refuse to allow any further collection of your child&apos;s information.
          </li>
          <li>
            Contact us at any time regarding your child&apos;s privacy.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please visit our{" "}
          <a href="/support">Contact & Support</a> page or our{" "}
          <a href="/delete-account">Account Deletion</a> page.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Pillow Tales does not integrate with any third-party advertising
          networks, social media platforms, or analytics services that collect
          personal data. We do not share any data with third parties.
        </p>

        <h2>Cookies</h2>
        <p>
          Our website may use essential cookies required for basic functionality
          (such as maintaining session state). We do not use tracking cookies or
          any form of behavioral tracking.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make any
          material changes, we will notify users through the app or on this
          website. Continued use of Pillow Tales after changes constitutes
          acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us through our{" "}
          <a href="/support">Contact & Support</a> page.
        </p>
      </div>
    </div>
  );
}
