"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  return (
    <section
      className="h-screen bg-transparent flex flex-col items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage: "url('/home-header-1.jpg')", // Image path relative to the public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        We help you{" "}
        <span className="text-white">
          <Typewriter
            words={["Develop Products", "Scale Your Business", "Reduce Risk", "Think Differently", "Deliver Innovation", "Build The Future"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      {/* Sub Text
      <p className="text-lg md:text-xl max-w-2xl mt-4">
        Design, build, and scale digital products with Creative Chaos.
      </p> */}

      {/* Button */}
      <button className="mt-8 bg-blue-700 hover:bg-blue-600 transition-colors px-8 py-3 boxed font-semibold text-white">
        LET&apos;S BUILD TOGETHER --
      </button>
    </section>
  );
}
