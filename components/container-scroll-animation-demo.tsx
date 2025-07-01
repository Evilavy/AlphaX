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

export default function HeroScrollDemo() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
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
      setWaitlistCount((prev) => (typeof prev === "number" ? prev + 1 : prev));
    } catch (err: any) {
      setError(err.message);
      setTimeout(() => setError(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-col overflow-hidden mt-12 sm:mt-0`}>
      <ContainerScroll
        success={success}
        titleComponent={
          <>
            <h1 className="px-8 sm:py-0 text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Stop Guessing. See What's About to{" "}
              <span className="">Blow Up on X</span>.
            </h1>
            <p className="px-8 sm:py-0 text-md md:text-xl lg:text-2xl text-gray-600 mb-0 md:mb-12 max-w-3xl mx-auto leading-relaxed mt-6">
              Spot high-momentum tweets early and engage before everyone else
              Gain visibility by riding the wave directly from your timeline
            </p>
          </>
        }
        footerComponent={
          <section className="pt-6 lg:py-32 relative overflow-hidde">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.9, opacity: 0, y: 30 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.9, opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative mb-4"
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
                              ease: "easeOut",
                            }}
                          />
                        ))}
                      </div>

                      {/* Elite badge */}
                      <motion.div
                        className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm overflow-hidden"
                        initial={{
                          boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.3)",
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(0, 0, 0, 0.3)",
                            "0 0 60px 0 rgba(0, 0, 0, 0.4)",
                            "0 0 0 0 rgba(0, 0, 0, 0.3)",
                          ],
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
                            damping: 15,
                          }}
                          className="w-20 h-20 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-2xl"
                        >
                          {/* Premium pattern overlay */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                          </div>

                          {/* Elite crown/badge */}
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
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
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
                            You'll be notified first when we launch and your $5
                            early bird price is secured.
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 }}
                          className="flex items-center justify-center space-x-3 text-gray-400 border-t border-gray-800 pt-6"
                        >
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          <span className="font-medium tracking-wide">
                            First to know • $5 launch price guaranteed
                          </span>
                          <div
                            className="w-2 h-2 bg-white rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          />
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
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                        id="signup-form"
                      >
                        <div className="flex w-full max-w-md items-center space-x-2">
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
                              type="submit"
                              className="cursor-pointer bg-gradient-to-r from-black to-gray-700 hover:from-gray-800 hover:to-black text-white px-6 transition-all duration-300 relative overflow-hidden"
                              disabled={loading}
                            >
                              {loading && (
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                                  initial={{ x: "-100%" }}
                                  animate={{ x: "100%" }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                  }}
                                />
                              )}
                              <span className="relative z-10">
                                {loading ? "Joining..." : "Join Waitlist"}
                              </span>
                            </Button>
                          </motion.div>
                        </div>
                      </form>
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 mx-auto max-w-md"
                          >
                            {error}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!error && (
                        <p className="text-sm text-gray-500 mb-8">
                          Join the waitlist to be the first to get access
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className="flex items-center justify-center space-x-8 text-sm text-gray-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>
                      {waitlistCount !== null
                        ? `Join ${waitlistCount} hunters, on the way to millions`
                        : "Loading..."}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Chrome Extension</span>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-row justify-center items-center mt-6">
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
