"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const testimonials = [
  {
    text: `"This product has completely transformed how I manage my projects and deadlines"`,
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: `"These AI tools have completely revolutionized our entire SEO strategy. We've seen a significant increase in traffic and engagement since implementing them."`,
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: `"I've been using this AI platform for a few months now, and it's been a game-changer for my business. The personalized content suggestions have saved me countless hours of research and writing."`,
    name: "Alex Kim",
    title: "CEO @ Bright",
    avatarImg: avatar3,
  },
  {
    text: `"The AI-powered keyword suggestions have been incredibly helpful in optimizing our content. It's amazing how it understands the nuances of our brand and audience."`,
    name: "Emily Chen",
    title: "Marketing Manager @ Spark",
    avatarImg: avatar4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          Beyond Expectations.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-center text-lg tracking-tight text-white/70 md:text-xl lg:text-xl">
          Our revolutionary AI SEO tools have transformed our clients&apos;
          strategies
        </p>
        <div className="mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-5 pr-5"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="max-w-xs flex-none rounded-xl border border-white/15 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] p-6 md:max-w-md md:p-10"
              >
                <div className="text-lg tracking-tight md:text-2xl">
                  {testimonial.text}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative before:absolute before:inset-0 before:z-10 before:rounded-lg before:border before:border-white/30 before:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light after:content-['']">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar ${testimonial.name}`}
                      className="size-11 rounded-lg grayscale"
                    />
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-white/50">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
