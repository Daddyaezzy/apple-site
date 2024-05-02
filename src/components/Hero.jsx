import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 772 ? smallHeroVideo : heroVideo
  );

  const handleResize = () => {
    if (window.innerWidth < 772) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setVideoSrc]);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2.5 });
    gsap.to("#cta", { opacity: 1, y: -20, delay: 2.5 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col md:pt-0 sm:pt-[120px] pt-[120px]">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-[60%] sm:w-[40%] ">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col md:pb-0 pb-10 items-center opacity-0  translate-y-20"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-normal md:text-xl text-lg">
            From $199/month or $999
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
