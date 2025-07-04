import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black py-16 px-4 flex justify-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy for XpectViral Chrome Extension</h1>
        <p className="text-sm text-gray-500 mb-8 text-center">Last updated: 07/04/2025</p>
        <p className="mb-6">Thank you for using the XpectViral Chrome Extension ("the Extension"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use the Extension.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><b>Twitter Data:</b> The Extension analyzes publicly available data from Twitter/X, such as tweet statistics (likes, retweets, replies, views), tweet content, and user profile information (e.g., username, follower count). This data is only processed locally in your browser and is not transmitted to our servers.</li>
          <li><b>User Preferences:</b> The Extension stores your preferences (such as selected mode, UI position, and display settings) using Chrome's local storage. This information is only accessible to the Extension and is not shared externally.</li>
          <li><b>Premium Status:</b> If you are a premium user, the Extension may store your Twitter handle and payment status locally to enable premium features.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>To provide and personalize the Extension's features, such as scoring and highlighting tweets.</li>
          <li>To remember your settings and preferences for a better user experience.</li>
          <li>To enable premium features for eligible users.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Storage and Security</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>All data processed by the Extension is stored locally in your browser using Chrome's local storage. We do not collect, transmit, or store your data on external servers.</li>
          <li>The Extension does not access, collect, or transmit your private Twitter data, direct messages, or account credentials.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Data Sharing</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>We do not sell, trade, or otherwise transfer your information to outside parties.</li>
          <li>The Extension may send messages between its background and content scripts for functionality, but this data is not shared with third parties.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Third-Party Services</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>The Extension interacts with Twitter/X's public website to analyze and style tweets. It does not interact with any other third-party services.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Consent</h2>
        <p className="mb-6">By using the Extension, you consent to this Privacy Policy.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
        <p className="mb-6">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or the Extension, please contact us at <a href="mailto:contact@xpectviral.com" className="text-blue-600 underline">contact@xpectviral.com</a>.</p>
      </div>
    </div>
  );
} 