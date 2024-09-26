"use client";

import { useState, useEffect, useRef, ComponentPropsWithoutRef } from "react";
import {
  DotLottiePlayer,
  DotLottieCommonPlayer,
} from "@dotlottie/react-player";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import productImage from "@/assets/product-image.png";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyboard generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { width, height } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selected]);

  const handleTabHover = () => {
    if (!dotLottieRef.current) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="relative flex items-center gap-2.5 rounded-xl border border-white/15 p-2.5 lg:flex-1"
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 -m-px rounded-xl border border-[#a369ff]"
        ></motion.div>
      )}
      <div className="inline-flex size-12 items-center justify-center rounded-lg border border-white/15">
        <DotLottiePlayer
          src={props.icon}
          className="size-5"
          ref={dotLottieRef}
        />
      </div>
      <div className="font-medium">{props.title}</div>
      {props.isNew && (
        <div className="rounded-full bg-[#8c44ff] px-2 py-0.5 text-xs font-semibold text-black">
          New
        </div>
      )}
    </div>
  );
};

const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (tabIndex: number) => {
    setSelectedTab(tabIndex);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[tabIndex].backgroundSizeX],
      animateOptions
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[tabIndex].backgroundPositionX],
      animateOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[tabIndex].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          Elevate your SEO efforts.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg tracking-tight text-white/70 md:text-xl">
          From small startups to large enterprises, our AI-drivenplatform is
          designed to meet the diverse needs of all businesses.
        </p>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row ">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectTab(tabIndex)}
              key={tab.title}
              {...tab}
            />
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/20 p-2.5">
          <motion.div
            className="aspect-video rounded-lg border border-white/20 bg-cover"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundPosition,
              backgroundSize,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
