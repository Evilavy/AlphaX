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
  ChevronDown,
  Heart,
  MessageCircle,
  Repeat2,
} from "lucide-react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Link from "next/link";
import HeroScrollDemo from "@/components/container-scroll-animation-demo";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function Component() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [particles, setParticles] = useState<any[]>([]);
  const [sparkles, setSparkles] = useState<any[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Handle scroll detection and direction
  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < 10) {
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      setIsScrolled(scrollY > 20);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Generate particles on client-side to avoid hydration errors
  React.useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      left: `${Math.random() * 90 + 5}%`,
      top: `${Math.random() * 80 + 10}%`,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);

    const generatedSparkles = [...Array(12)].map((_, i) => ({
      left: `${15 + Math.random() * 70}%`,
      top: `${15 + Math.random() * 70}%`,
      delay: i * 0.3,
    }));
    setSparkles(generatedSparkles);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Video SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "XpectViral: Founder's Presentation & Demo",
            description:
              "Watch the founder of XpectViral demonstrate how the tool spots high-velocity tweets. See a real example of a tweet with a score of 86, and learn how early engagement could lead to 3,000 impressions and 30 potential clients. Stop guessing and start acting smarter on X.",
            thumbnailUrl: "https://www.xpectviral.com/thumb.png",
            uploadDate: "2025-06-28",
            duration: "PT1M",
            contentUrl: "https://www.xpectviral.com/presentation.mp4",
            embedUrl: "https://www.xpectviral.com/",
          }),
        }}
      />
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
        animate={{
          height: isScrolled ? "60px" : "80px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="mx-auto px-4 flex items-center justify-between h-full"
          animate={{
            maxWidth: isScrolled ? "800px" : "1200px",
            paddingLeft: isScrolled ? "12px" : "16px",
            paddingRight: isScrolled ? "12px" : "16px",
            paddingTop: isScrolled ? "8px" : "16px",
            paddingBottom: isScrolled ? "8px" : "16px",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex items-center space-x-2"
            animate={{
              scale: isScrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center"
              animate={{
                width: isScrolled ? "28px" : "32px",
                height: isScrolled ? "28px" : "32px",
              }}
              transition={{ duration: 0.3 }}
            >
              <Zap
                className={`text-white ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`}
              />
            </motion.div>
            <motion.span
              className="font-bold"
              animate={{
                fontSize: isScrolled ? "18px" : "20px",
              }}
              transition={{ duration: 0.3 }}
            >
              XpectViral
            </motion.span>
          </motion.div>

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

          <motion.div
            animate={{
              scale: isScrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="https://chrome.google.com/webstore/detail/ngalnapomjdfbkpjlhjfijjpjbbnblho"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="cursor-pointer bg-transparent border-black text-black hover:bg-black hover:text-white"
              >
                Download Extension
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Spacer to prevent content from jumping */}
      <div className="h-20"></div>
      <div className="hero-scroll-section">
        <HeroScrollDemo />
      </div>

      {/* Presentation video */}
      <section className="pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-black to-gray-600 text-white">
              <BarChart3 className="w-4 h-4 mr-2" />
              Real Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Score 86 to 3K Views
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch the founder explain how XpectViral spotted a rising tweet
              and turned it into massive leverage
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex justify-center items-center relative"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Floating particles */}
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-gradient-to-r from-black to-gray-400 rounded-full opacity-20"
                  style={{
                    width: particle.width,
                    height: particle.height,
                    left: particle.left,
                    top: particle.top,
                  }}
                  animate={{
                    y: [-15, 15, -15],
                    x: [-8, 8, -8],
                    opacity: [0.1, 0.6, 0.1],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: particle.delay,
                  }}
                />
              ))}

              {/* Additional sparkle particles */}
              {sparkles.map((sparkle, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-1 h-1 bg-black rounded-full opacity-30"
                  style={{
                    left: sparkle.left,
                    top: sparkle.top,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: sparkle.delay,
                  }}
                />
              ))}

              {/* Pulse rings */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] border border-black/10 rounded-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] border border-black/5 rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.05, 0.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            {/* Main video container */}
            <motion.div
              className="relative max-w-[900px] group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Glowing border effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-black/20 via-gray-400/20 to-black/20 rounded-3xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />

              {/* Click indicator */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 z-10"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ▶
                  </motion.div>
                  <span>Click to watch the demo</span>
                </div>
              </motion.div>

              {/* Pulsing attention grabber */}
              <motion.div
                className="absolute -top-4 -right-4 w-4 h-4 bg-red-500 rounded-full z-10"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Video component with enhanced styling */}
              <div className="relative rounded-[10px] overflow-hidden shadow-2xl">
                <video
                  controls
                  playsInline
                  poster="/thumb.png"
                  preload="metadata"
                  className="w-full h-full"
                >
                  <source src="/presentation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Publication date */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 left-0 text-sm text-gray-500 flex items-center space-x-2"
              >
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="italic text-xs">06/28/2025</span>
              </motion.div>
            </motion.div>
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Call-to-action below video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="flex items-center justify-center space-x-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-2 h-2 bg-black rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm font-medium">1 min presentation</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">See how it works</span>
                <motion.div
                  className="w-2 h-2 bg-black rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section*/}
      <section className="py-20 bg-black overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-black">
              <TrendingUp className="w-4 h-4 mr-2" />
              Real Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See XpectViral in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how we spotted this rising tweet early, giving you the
              perfect window to engage
            </p>
          </div>

          <div className="h-[300px] sm:h-[400px] flex flex-col justify-between max-w-[1100px] mt-22">
            <motion.div
              className="text-white"
              initial={{ x: -150, opacity: 0, rotateY: -15 }}
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 150,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="ml-[5px] font-bold"
                initial={{ x: -80, opacity: 0, y: 20 }}
                whileInView={{ x: 0, opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                }}
                viewport={{ once: true }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                1. XpectViral Catches It Early
              </motion.h3>
              <motion.h4
                className="text-gray-400 ml-[5px]"
                initial={{ x: -60, opacity: 0, y: 15 }}
                whileInView={{ x: 0, opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                Low engagement but showing early signs of momentum
              </motion.h4>
              <motion.div
                className="ml-[5px] mt-2"
                initial={{ x: -60, opacity: 0, y: 15 }}
                whileInView={{ x: 0, opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.25,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                <a
                  href="https://x.com/evi_1k/status/1942944356626804747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  (check it out here)
                </a>
              </motion.div>
              <motion.div
                className="relative w-fit"
                initial={{ x: -120, opacity: 0, scale: 0.8, rotateX: -10 }}
                whileInView={{ x: 0, opacity: 1, scale: 1, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 120,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 2,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  className="max-w-[600px] rounded-lg shadow-2xl  w-[100%] sm:w-auto"
                  src="tweet-spotted.png"
                  alt=""
                  initial={{ filter: "blur(4px)" }}
                  whileInView={{ filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                />
                <motion.img
                  src="arrow.svg"
                  alt=""
                  className="absolute left-[65%] transform -translate-x-1/2 -bottom-[140px] hidden lg:block"
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                    rotate: -45,
                    y: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: [0.34, 1.56, 0.64, 1],
                    type: "spring",
                    stiffness: 150,
                  }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-end text-white"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <motion.h3
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  2. This Could've Been Your Window
                </motion.h3>
                <motion.img
                  className="max-w-[600px] w-[100%] sm:w-auto"
                  src="after-spotted.png"
                  alt=""
                  initial={{ x: 80, opacity: 0, scale: 0.9 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-28">
            <div className="bg-gradient-to-r from-white to-gray-300 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                This Could Be Your Next Opportunity
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Stop missing key moments. Start engaging with tweets before they
                gain traction.
              </p>
              <a
                href="https://chrome.google.com/webstore/detail/ngalnapomjdfbkpjlhjfijjpjbbnblho"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="cursor-pointer bg-transparent border-black text-black hover:bg-black hover:text-white"
                >
                  Download on the Chrome Store
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
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

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                icon: Zap,
                question: "What exactly is XpectViral?",
                answer:
                  "XpectViral is a lightweight Chrome extension that automatically detects tweets with unusual velocity in your X feed. Instead of shouting into the void, it helps you reply smartly to the right tweets at the right time to maximize your visibility and gain real followers.",
              },
              {
                icon: Eye,
                question: "How does the tool integrate with X's interface?",
                answer:
                  "The extension integrates directly into your X.com feed without modifying the interface. It simply adds discrete badges (🔥 for hot posts still growing, ⭐️ for emerging tweets) that let you instantly spot engagement opportunities.",
              },
              {
                icon: Clock,
                question: "When will I receive alerts or badges?",
                answer:
                  "Badges appear instantly as soon as you load your feed. The algorithm detects unusual velocity in real-time - so you can reply to emerging tweets before they explode, or quote-tweet hot posts while they're still generating massive traffic.",
              },
              {
                icon: Users,
                question: "What do I get by joining the waitlist now?",
                answer:
                  "By joining the waitlist now, you get priority access at launch, your $5 price is locked for life, and you'll receive exclusive updates. Most importantly: you'll be among the first to use this strategy to grow your X audience smartly instead of shouting into the void.",
              },
              {
                icon: Star,
                question: 'How do you detect "Rising Stars"?',
                answer:
                  'The algorithm detects tweets with "unusual velocity" - meaning those gaining engagement faster than normal for their context. The ⭐️ "Rising Stars" are fresh tweets with early signs of blowing up, perfect for engaging replies that will be seen by thousands of people.',
              },
            ].map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <CardContent className="p-0">
                    <div className="w-full p-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">{faq.question}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 ml-11">
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section id="signup-form" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Ride the Next Wave?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Stop guessing. Start growing. Install the extension and get an
              immediate edge on X.
            </motion.p>

            <motion.a
              href="https://chrome.google.com/webstore/detail/ngalnapomjdfbkpjlhjfijjpjbbnblho"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-block group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                {/* Glowing background effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-gray-300 to-white opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main button */}
                <motion.div
                  className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-600 rounded-xl px-8 py-4 shadow-2xl overflow-hidden group-hover:border-gray-400 transition-all duration-500"
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(0,0,0,0.3)",
                      "0 20px 60px rgba(255,255,255,0.1)",
                      "0 10px 30px rgba(0,0,0,0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Premium pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                  </div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{
                      x: "100%",
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Button content */}
                  <div className="relative z-10 flex items-center justify-center space-x-3">
                    <motion.div
                      className="w-6 h-6 bg-gradient-to-br from-white to-gray-300 rounded-sm flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img src="LogoFast-Icon.png" alt="" />
                    </motion.div>
                    <span className="text-white font-semibold text-lg tracking-wide">
                      Download on the Chrome Store
                    </span>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-gray-400 opacity-50" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-gray-400 opacity-50" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-gray-400 opacity-50" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-gray-400 opacity-50" />
                </motion.div>
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">XpectViral</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link
                href="/privacy-policy"
                className="hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-black transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="mailto:contact@xpectviral.com"
                className="hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>&copy; 2024 XpectViral. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
