import { Spotlight } from "../../ui/Spotlight";

const LandingGradient = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>

      <Spotlight />

      {/* Main Content */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Spotlight <br /> which is not overused.
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-lg mx-auto">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p>
      </div>
    </div>
  );
};

export default LandingGradient;
