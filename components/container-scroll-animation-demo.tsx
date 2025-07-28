"use client";
import React, { useState, useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AvatarCircles } from "./magicui/avatar-circles";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const avatarUrls = [
  { imageUrl: "/pp1.jpg", profileUrl: "#" },
  { imageUrl: "/pp2.jpg", profileUrl: "#" },
  { imageUrl: "/pp3.jpg", profileUrl: "#" },
  { imageUrl: "/pp4.png", profileUrl: "#" },
  { imageUrl: "/pp5.jpg", profileUrl: "#" },
];

export default function HeroScrollDemo() {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const res = await fetch("/api/waitlist/view");
        const data = await res.json();
        if (res.ok && typeof data.total === "number") {
          setWaitlistCount(data.total);
        }
      } catch (error) {
        console.error("Failed to fetch waitlist count", error);
      }
    };

    fetchWaitlistCount();
  }, []);

  return (
    <div className={`flex flex-col overflow-hidden mt-12 sm:mt-0`}>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="px-8 sm:py-0 text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Spot high-velocity tweets early and{" "}
              <span>
                <em>BOOST</em> your impressions
              </span>
              .
            </h1>

            <p className="px-8 sm:py-0 text-md md:text-xl lg:text-2xl text-gray-600 mb-0 md:mb-12 max-w-3xl mx-auto leading-relaxed mt-6">
              Spot high-velocity tweets early and engage before everyone else
              Gain visibility by riding the wave directly from your timeline
            </p>
          </>
        }
        footerComponent={
          <section className="pt-6 lg:py-32 relative overflow-hidde">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <motion.a
                  href="https://chrome.google.com/webstore/detail/ngalnapomjdfbkpjlhjfijjpjbbnblho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-8 inline-block group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
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
                        Get Started for Free
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
                <motion.div
                  className="flex items-center justify-center space-x-8 text-sm text-gray-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <span>
                      <div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Shield className="w-4 h-4" />
                          <span>Chrome Extension</span>
                        </div>
                      </div>
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-row justify-center items-center mt-6 mb-24">
                <p className="mr-1">made by</p>
                <img src="x.webp" className="h-6" alt="" />
                <p>
                  <span className="font-bold">@</span>
                  <a
                    href="https://x.com/evi_1k"
                    className="font-bold underline"
                  >
                    evi_1k
                  </a>{" "}
                  with *heart*
                </p>
              </div>

              {/* Metrics Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-12 mt-12"
              >
                <motion.h3
                  className="text-lg md:text-xl font-semibold text-gray-500 mb-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Early riders report massive growth:
                </motion.h3>

                <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
                  {[
                    {
                      icon: Eye,
                      color: "blue",
                      value: 240,
                      label: "Impressions Boost",
                      desc: "Riding high-velocity tweets",
                    },
                    {
                      icon: TrendingUp,
                      color: "green",
                      value: 110,
                      label: "Engagement Rate",
                      desc: "Early replies = more reach",
                    },
                    {
                      icon: Users,
                      color: "purple",
                      value: 90,
                      label: "Profile Visits",
                      desc: "Reply-Driven Profile Visits",
                    },
                    {
                      icon: Clock,
                      color: "orange",
                      value: 75,
                      label: "Time Saved",
                      desc: "No more guessing tweets",
                    },
                  ].map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
                      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 rounded-lg p-4 text-center relative overflow-hidden shadow-2xl"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-lg opacity-30"
                        animate={{
                          boxShadow: [
                            `0 0 20px rgba(255,255,255,0.1)`,
                            `0 0 40px rgba(255,255,255,0.2)`,
                            `0 0 20px rgba(255,255,255,0.1)`,
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5,
                        }}
                      />
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-400 to-white"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.2 + i * 0.2, duration: 1 }}
                      />
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                      </div>
                      <metric.icon className="w-6 h-6 text-white mx-auto mb-2 relative z-10" />
                      <div className="text-white relative z-10">
                        <span className="font-bold text-xl">
                          +{metric.value}%
                        </span>
                      </div>
                      <p className="text-gray-200 font-medium text-sm mt-1 relative z-10">
                        {metric.label}
                      </p>
                      <p className="text-gray-400 text-xs mt-1 relative z-10">
                        {metric.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-center mt-6"
                >
                  <p className="text-sm text-gray-500 italic">
                    *Based on 30-day analysis of beta users engaging with
                    high-velocity tweets
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        }
      >
        <video
          src="/MP4.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="mx-auto rounded-2xl object-cover h-full object-center"
          style={{ pointerEvents: "none" }}
        />
      </ContainerScroll>
    </div>
  );
}
