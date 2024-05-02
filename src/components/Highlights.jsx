import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarosel from "./VideoCarosel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const highlightsScrollRef = useRef();

  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart reverse restart reverse",
      },
    });
    gsap.to(".link", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".link",
        toggleActions: "restart reverse restart reverse",
      },
    });
  }, []);

  return (
    <section
      id="#highlights"
      className="w-screen overflow-hidden h-full bg-zinc common-padding"
    >
      <div className="screen-max-width" ref={highlightsScrollRef}>
        <div className="mb-12 md:flex w-full items-end justify-between">
          <h1 id="title" className="section-heading ">
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarosel />
      </div>
    </section>
  );
};

export default Highlights;
