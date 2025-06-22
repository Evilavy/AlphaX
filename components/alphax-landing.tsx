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
} from "lucide-react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Link from "next/link";
import HeroScrollDemo from "@/components/container-scroll-animation-demo";
export default function Component() {
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
              href="#pricing"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <Button
            variant="outline"
            className="bg-transparent border-black text-black hover:bg-black hover:text-white"
          >
            Joint the Waitlist
          </Button>
        </div>
      </header>
      <HeroScrollDemo />

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
                    serious momentum, you’ll know before it goes mainstream.
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

      {/* Final CTA */}
      <section
        className="py-20 bg-gradient-to-r from-black/5 to-gray-500/5"
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
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-black to-gray-700 hover:from-gray-800 hover:to-black text-white px-8 py-4 text-lg"
              >
                Join the Waitlist
              </Button>
            </div>
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
