import ActionButton from "@/components/ActionButton";
import starsBg from "@/assets/stars.png";

const Hero = () => {
  return (
    <section
      className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />
      {/* Start Planet */}
      <div className="absolute-center absolute size-64 rounded-full border border-white/20 bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] md:size-96" />
      {/* End Planet */}
      {/* Start Ring 1 */}
      <div className="absolute-center absolute size-[344px] rounded-full border opacity-20 md:size-[580px]">
        <div className="absolute-center absolute left-0 size-2 rounded-full bg-white" />
        <div className="absolute-center absolute top-0 size-2 rounded-full bg-white" />
        <div className="absolute-center absolute left-full inline-flex size-5 items-center justify-center rounded-full border border-white">
          <div className="size-2 rounded-full bg-white" />
        </div>
      </div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <div className="absolute-center absolute size-[444px] rounded-full border border-dashed border-white/20 md:size-[780px]"></div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <div className="absolute-center absolute size-[544px] rounded-full border border-white opacity-20 md:size-[980px]">
        <div className="absolute-center absolute left-0 size-2 rounded-full bg-white" />
        <div className="absolute-center absolute left-full size-2 rounded-full bg-white" />
      </div>
      {/* End Ring 3 */}
      <div className="container relative mt-16">
        <h1 className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-center text-8xl font-semibold tracking-tighter text-transparent md:text-[168px] md:leading-none">
          AI SEO
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg text-white/70 md:text-xl">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <ActionButton>Join waitlist</ActionButton>
        </div>
      </div>
    </section>
  );
};
export default Hero;
