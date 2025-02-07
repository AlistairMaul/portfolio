"use client";

import { BorderBeam } from "@/components/border-beam";
import { FlickeringGrid } from "@/components/flickering-grid";
import { TextReveal } from "@/components/text-reveal";
import { VelocityScroll } from "@/components/scroll-based-velocity";
import { ScrollProgress } from "@/components/scroll-progress";
import { Particles } from "@/components/particles";
import { MagicCard } from "@/components/magic-card";
import { IconCloud } from "@/components/icon-cloud";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/terminal";
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",,
  "vercel",
  "git",
  "github",
  "lua",
  "visualstudiocode",
  "c#",
  "python",
];
export default function Home() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
    <div className="bg-black">
      <ScrollProgress className="" />
      <div>
        <a className="p-60 justify-center items-center object-center flex text-9xl bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
          Hello, I'm Alistair
          
        </a>
      </div>
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={1000}
        width={1920}
      />
      <VelocityScroll className="bg-gray-800">Welcome, Please Scroll Down.</VelocityScroll>;
      <div className="p-3 justify-center flex">
          <Terminal>
          <TypingAnimation className="text-white">&gt; cd known-languages</TypingAnimation>
 
 <AnimatedSpan delay={3000} className="text-green-500">
   <span>✔ Javascript.</span>
 </AnimatedSpan>

 <AnimatedSpan delay={4000} className="text-green-500">
   <span>✔ Python.</span>
 </AnimatedSpan>

 <AnimatedSpan delay={5000} className="text-green-500">
   <span>✔ C#.</span>
 </AnimatedSpan>

 <AnimatedSpan delay={6000} className="text-green-500">
   <span>✔ Lua.</span>
 </AnimatedSpan>

 <AnimatedSpan delay={7000} className="text-blue-500">
   <span>ℹ Updated 1 file:</span>
   <span className="pl-2">- readME</span>
 </AnimatedSpan>

 <TypingAnimation delay={8000} className="text-muted-foreground">
   Information about Languages Complete.
 </TypingAnimation>

 <TypingAnimation delay={9000} className="text-muted-foreground">
   Additional Frameworks like Next JS were installed.
 </TypingAnimation>
          </Terminal>
          <div className="flex justify-center bg-white rounded-full">
            <IconCloud images={images} />
          </div>
        
      </div>
      <div>
        <TextReveal text="Here are some of my projects. \/" className="bg-gradient-to-b from-black to-gray-500"/>
        

        <Particles
          className="absolute inset-0 z-300"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        
      </div>
      <div className="flex p-3 justify-center">
        <div className=" relative flex size-full max-w-lg items-center justify-center overflow-hidden  bg-background">
      
          <div className="p-5 flex h-[500px] w-full gap-4 lg:h-[250px]">
            <MagicCard
              className="flex cursor-pointer items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
              gradientColor={"dark" === "dark" ? "#262626" : "#D9D9D955"}
            >
              <a className="bg-gradient-to-r from-purple-900 to-blue-700 text-transparent bg-clip-text" href="https://github.com/AlistairMaul/ContagionSim">
                Contagion Simulation
              </a>
            </MagicCard>
            
          </div>
        
        </div>
        <div className=" relative flex size-full max-w-lg items-center justify-center overflow-hidden  bg-background">
      
          <div className="p-5 flex h-[500px] w-full gap-4 lg:h-[250px]">
            <MagicCard
              className="flex cursor-pointer items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
              gradientColor={"dark" === "dark" ? "#262626" : "#D9D9D955"}
            >
              <a className="bg-gradient-to-r from-purple-900 to-blue-700 text-transparent bg-clip-text" href="https://github.com/AlistairMaul/ContagionSim">
                Stock Game
              </a>
            </MagicCard>
            
          </div>
        
        </div>
      </div>
      

    </div>
  );
}
