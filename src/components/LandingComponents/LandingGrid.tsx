import { Spotlight } from "../../ui/Spotlight";

const LandingGradient = () => {
  return (
    <div className="min-h-screen w-full flex  bg-black/[0.96] antialiased relative overflow-hidden p-4">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>

      <Spotlight />

      
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center grid grid-cols-2 gap-4" >
       <div>

       </div>
        <div className="mt-[10rem]">
        <h1 className="text-xl sm:text-xl md:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-mono">
          Your  own Code Editor
        </h1>
        <h3 className="text-xl sm:text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-5 font-mono">
        Start Building Today 
        </h3>
        <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
         Brutal
        </button>
        </div>
        

      </div>
    </div>
  );
};

export default LandingGradient;
