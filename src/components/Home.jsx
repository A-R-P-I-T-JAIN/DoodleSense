import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doodle1 from "../assets/doodle1.png";
import doodle2 from "../assets/doodle2.png";
import doodle3 from "../assets/doodle3.png";
import doodle4 from "../assets/doodle4.png";
import doodle5 from "../assets/doodle5.png";
import math from "../assets/math.mp4";
import physics from "../assets/physics.mp4";
import generate from "../assets/generate.mp4";
import { useGSAP } from "@gsap/react";
import Enter from "./Enter";
import Nav from "./Nav";

import { MdArrowDownward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const videoContainerRef = useRef(null);
  const isVertical = window.innerWidth < 1024;

  useGSAP(() => {
    const container = videoContainerRef.current;
    const numVideos = container.querySelectorAll("video").length; // Get the number of videos
    const videoWidth = container.offsetWidth / numVideos; // Each video's width
    const scrollDistance = videoWidth * (numVideos - 1); // Total scroll distance (all videos except the last one)

    !isVertical && gsap.to(container, {
      x: -scrollDistance, // Move to the left until the last video appears
      ease: "none",
      scrollTrigger: {
        trigger: container,
        end: () => `+=${scrollDistance}`, // Scroll only the exact distance needed
        pin: true,
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="w-full bg-slate-900 relative">
      <Nav />
      {/* Header Section with Doodles */}
      <div className="h-screen flex flex-col justify-center items-center relative pointer-events-none">
        <h1 className="head text-5xl md:text-7xl lg:text-9xl text-teal-400">
          DoodleSense
        </h1>
        <h1 className="head text-xl md:text-3xl lg:text-4xl text-orange-300 text-center">
          Doodle. Detect. Delight!
        </h1>

        {/* Fixed position of each doodle with responsive sizes */}
        <img
          src={doodle1}
          alt="Doodle 1"
          className="absolute w-[100px] md:w-[150px] lg:w-[200px] top-[15%] left-[15%]"
          // style={{ top: "15%", left: "15%" }}
        />
        <img
          src={doodle2}
          alt="Doodle 2"
          className="absolute w-[80px] md:w-[120px] lg:w-[150px]"
          style={{ top: "20%", right: "10%" }}
        />
        <img
          src={doodle3}
          alt="Doodle 3"
          className="absolute w-[100px] md:w-[150px] lg:w-[200px] top-[70%] md:top-[50%] left-[5%]"
          // style={{ top: "50%", left: "5%" }}
        />
        <img
          src={doodle4}
          alt="Doodle 4"
          className="absolute w-[90px] md:w-[140px] lg:w-[180px] top-[75%] md:top-[60%] right-[5%]"
          // style={{ top: "60%", right: "5%" }}
        />
        <img
          src={doodle5}
          alt="Doodle 5"
          className="absolute w-[100px] md:w-[140px] lg:w-[180px] top-[30%] left-[45%] md:top-[15%]"
          // style={{ top: "15%", left: "45%" }}
        />
        {/* Scroll Icon */}
        <div className="absolute bottom-5 flex flex-col items-center animate-bounce">
          <MdArrowDownward className="text-teal-400 text-2xl md:text-4xl" />
          <span className="text-teal-400 text-lg md:text-xl">Scroll</span>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div
        ref={videoContainerRef}
        className="video_cont min-h-screen flex flex-col lg:flex-row lg:gap-0 gap-12 min-w-[300vw] max-w-[300vw]"
      >
        {/* Each video takes up full viewport width */}
        <div className="w-[100vw] flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-white mb-4">
            Solve Mathematical Problems
          </h1>
          <video 
            src={math}
            className="w-[90%] md:w-[80%] h-auto max-w-[500px] md:max-w-[700px] lg:max-w-[800px] rounded-lg shadow-lg"
            muted
            playsInline
            autoPlay
            loop
          />
        </div>
        <div className="w-[100vw] flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-white mb-4">
            Solve Physics Problems
          </h1>
          <video
            src={physics}
            className="w-[90%] md:w-[80%] h-auto max-w-[500px] md:max-w-[700px] lg:max-w-[800px] rounded-lg shadow-lg"
            muted
            playsInline
            autoPlay
            loop
          />
        </div>
        <div className="w-[100vw] flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-white mb-4">
            Generate With AI
          </h1>
          <video
            src={generate}
            className="w-[90%] md:w-[80%] h-auto max-w-[500px] md:max-w-[700px] lg:max-w-[800px] rounded-lg shadow-lg"
            muted
            playsInline
            autoPlay
            loop
          />
        </div>
      </div>
      <Enter />
    </div>
  );
};

export default Home;
