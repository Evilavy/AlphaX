"use client";
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
} from "lucide-react";
export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden mt-12 sm:mt-0">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="px-8 sm:py-0 text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Stop Guessing. See What's About to{" "}
              <span className="">Blow Up on X</span>.
            </h1>
            <p className="px-8 sm:py-0 text-md md:text-xl lg:text-2xl text-gray-600 mb-0 md:mb-12 max-w-3xl mx-auto leading-relaxed mt-6">
              The only extension that reveals high-momentum tweets as they
              emerge. Detect breakout posts in real-time, right from your
              timeline.
            </p>
          </>
        }
        footerComponent={
          <section className="py-6 lg:py-32">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                {/* Key Visual Placeholder */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <div className="flex w-full max-w-md items-center space-x-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-black to-gray-700 hover:from-gray-800 hover:to-black text-white px-6"
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-8">
                  Join the waitlist to be the first to get access
                </p>

                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Identify viral tweets before anyone else</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Chrome Extension</span>
                  </div>
                </div>
              </div>
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
