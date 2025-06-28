"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Flame,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  Clock,
  Shield,
  Radio,
  Brain,
  Eye,
  CheckIcon,
  Check,
} from "lucide-react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Link from "next/link";
import HeroScrollDemo from "@/components/container-scroll-animation-demo";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Component() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setEmail("");
      
    } catch (err: any) {
      setError(err.message);
      setTimeout(() => setError(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSignup = () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">XpectViral</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-black transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-gray-600 hover:text-black transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <Button
            variant="outline"
            className="cursor-pointer bg-transparent border-black text-black hover:bg-black hover:text-white"
            onClick={scrollToSignup}
          >
            Join the Waitlist
          </Button>
        </div>
      </header>
      <div className="hero-scroll-section">
      <HeroScrollDemo />
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Your Unfair Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four game-changing features that put you ahead of the curve
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="p-0">
                <BoxReveal boxColor="black">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      See the Future, Today
                    </h3>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor="black">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our algorithm identifies "Rising Stars" (🌟), tweets showing
                    exceptional growth within their first hour. Be the first to
                    comment, the first to share, the first to capitalize on the
                    next big conversation.
                  </p>
                </BoxReveal>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="p-0">
                <BoxReveal boxColor="black">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center">
                      <Flame className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Feel the Heat Before It Trends{" "}
                    </h3>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor="black">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    XpectViral scores tweets based on real-time velocity,
                    engagement rates, and growth signals. When a tweet's gaining
                    serious momentum, you'll know before it goes mainstream.
                  </p>
                </BoxReveal>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="p-0">
                <BoxReveal boxColor="black">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Intelligence, Not Just Numbers
                    </h3>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor="black">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Forget simple like counts. Our proprietary score considers
                    weighted engagement, velocity rate, tweet age, and even
                    account size to give you a clear view of what truly matters.
                    It's your personal analyst, built right into your feed.
                  </p>
                </BoxReveal>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="p-0">
                <BoxReveal boxColor="black">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Your Workflow, Supercharged
                    </h3>
                  </div>
                </BoxReveal>
                <BoxReveal boxColor="black">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    No external dashboards. No extra tabs. XpectViral integrates
                    smoothly and elegantly into the X.com interface. The
                    insights come to you, effortlessly, right where you need
                    them.
                  </p>
                </BoxReveal>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to gain your competitive advantage
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 detect-effect">
                    <Radio className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Capture</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  As soon as tweets load in your feed, XpectViral intercepts
                  their raw data directly from the source. No delays, no
                  third-party lag.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 detect-effect">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Instant Analysis</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  In milliseconds, our proprietary algorithm analyzes over 7 key
                  metrics—including velocity, momentum, and weighted
                  engagement—to compute a single, powerful viral potential
                  score.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 detect-effect">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Visual Highlight</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Tweets with the highest scores are instantly highlighted in
                  your feed with a clear badge (🔥 or 🌟), allowing you to spot
                  critical opportunities in the blink of an eye.
                </p>
              </div>
            </div>

            {/* Process Flow Visualization */}
            <div className="mt-16 flex items-center justify-center">
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-sm">Tweet Loads</span>
                </div>
                <div className="w-8 h-px bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-sm">Analysis</span>
                </div>
                <div className="w-8 h-px bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-sm">Badge Appears</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about XpectViral
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* FAQ Item 1 */}
            <Card className="bg-gray-50 border-gray-200 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  What exactly is XpectViral?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed ml-11">
                  XpectViral is a lightweight Chrome extension that automatically detects tweets with unusual velocity in your X feed. Instead of shouting into the void, it helps you reply smartly to the right tweets at the right time to maximize your visibility and gain real followers.
                </p>
              </CardContent>
            </Card>

            {/* FAQ Item 2 */}
            <Card className="bg-gray-50 border-gray-200 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center mr-3">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  How does the tool integrate with X's interface?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed ml-11">
                  The extension integrates directly into your X.com feed without modifying the interface. It simply adds discrete badges (🔥 for hot posts still growing, ⭐️ for emerging tweets) that let you instantly spot engagement opportunities.
                </p>
              </CardContent>
            </Card>

            {/* FAQ Item 3 */}
            <Card className="bg-gray-50 border-gray-200 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  When will I receive alerts or badges?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed ml-11">
                  Badges appear instantly as soon as you load your feed. The algorithm detects unusual velocity in real-time - so you can reply to emerging tweets before they explode, or quote-tweet hot posts while they're still generating massive traffic.
                </p>
              </CardContent>
            </Card>

            {/* FAQ Item 4 */}
            <Card className="bg-gray-50 border-gray-200 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  What do I get by joining the waitlist now?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed ml-11">
                  By joining the waitlist now, you get priority access at launch, your $5 price is locked for life, and you'll receive exclusive updates. Most importantly: you'll be among the first to use this strategy to grow your X audience smartly instead of shouting into the void.
                </p>
              </CardContent>
            </Card>

            {/* FAQ Item 5 */}
            <Card className="bg-gray-50 border-gray-200 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center mr-3">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  How do you detect "Rising Stars"?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed ml-11">
                  The algorithm detects tweets with "unusual velocity" - meaning those gaining engagement faster than normal for their context. The ⭐️ "Rising Stars" are fresh tweets with early signs of blowing up, perfect for engaging replies that will be seen by thousands of people.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 bg-gradient-to-r from-black/5 to-gray-500/5 relative overflow-hidden"
        id="pricing"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Unlock Your Edge{" "}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            The next viral tweet is already gaining speed. Will you be the one
            to ride it or the one who missed it?
          </p>
          <div className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mb-4 lg:mt-5"
                >
                  {/* Premium rays animation */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-px bg-gradient-to-t from-transparent via-gray-400 to-transparent"
                        style={{
                          height: "200px",
                          left: "50%",
                          top: "50%",
                          transformOrigin: "bottom center",
                          transform: `rotate(${i * 45}deg)`,
                        }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ 
                          scaleY: [0, 1, 0],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Elite badge */}
                  <motion.div 
                    className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm overflow-hidden"
                    initial={{ 
                      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.3)" 
                    }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(0, 0, 0, 0.3)",
                        "0 0 60px 0 rgba(0, 0, 0, 0.4)",
                        "0 0 0 0 rgba(0, 0, 0, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: 1 }}
                  >
                    {/* Premium pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                    </div>

                    {/* Elite crown/badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.3, 
                        type: "spring", 
                        stiffness: 200,
                        damping: 15
                      }}
                      className="w-20 h-20 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-2xl"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
                      >
                        <Check className="w-6 h-6 text-white" />
                      </motion.div>
                      {/* Rotating ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-gray-300 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight"
                    >
                      You're on the List
                    </motion.h2>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="mb-6"
                    >
                      <div className="mt-2 inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-gray-300 tracking-wider">
                          $5 PRICE LOCKED
                        </span>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        You'll be notified first when we launch and your $5 early bird price is secured.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 }}
                      className="flex items-center justify-center space-x-3 text-gray-400 border-t border-gray-800 pt-6"
                    >
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="font-medium tracking-wide">First to know • $5 launch price guaranteed</span>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                    </motion.div>

                    {/* Premium corners */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-gray-600" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-gray-600" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-gray-600" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-gray-600" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
                    <motion.div
                      className="flex-1"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
              <Input
                type="email"
                placeholder="Enter your email"
                        className="flex-1 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
              <Button
                size="lg"
                        className="bg-gradient-to-r from-black to-gray-700 hover:from-gray-800 hover:to-black text-white px-8 py-4 text-lg transition-all duration-300 relative overflow-hidden"
                        disabled={loading}
                      >
                        {loading && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                        <span className="relative z-10">
                          {loading ? "Joining..." : "Join the Waitlist"}
                        </span>
              </Button>
                    </motion.div>
                  </form>

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mt-4 mx-auto max-w-md"
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!error && (
            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span>Get early access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span>One-time payment, no subscription</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span>Lock in the $5 launch price</span>
              </div>
            </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">XpectViral</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>
              &copy; 2025 XpectViral. All rights reserved. Built for the next
              generation of content creators.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
