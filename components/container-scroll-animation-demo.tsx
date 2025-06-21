"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Stop Guessing. See What's About to <span className="">Blow Up on X</span>.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed mt-6">
              The only extension that reveals the viral potential of any tweet
              in real-time. Uncover trends before they happen and gain an unfair
              advantage, right from your timeline.
            </p>
          </>
        }
      >
        <video
          src="/MP4.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          style={{ pointerEvents: "none" }}
        />
      </ContainerScroll>
    </div>
  );
}
