import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-[1365px] relative flex items-center justify-center bg-[#1FC7DE] px-5 py-0 max-md:h-auto max-md:px-5 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="max-w-[1200px] w-full flex flex-col items-center relative">
        <header className="text-center mb-10">
          <h2 className="text-[#1F2B44] text-[26px] font-bold leading-[41px] mb-5">
            Explore the Best Projects
          </h2>
          <h1 className="text-white text-[74px] font-semibold leading-[80px] text-center max-md:text-5xl max-md:leading-[56px] max-sm:text-[32px] max-sm:leading-10">
            Welcome to our Flappy Bird Game
          </h1>
        </header>
        <div className="w-[646px] h-[646px] flex items-center justify-center bg-[#D9D9D9] mb-10 rounded-[20px] border-[10px] border-solid border-white max-md:w-[500px] max-md:h-[500px] max-sm:w-[300px] max-sm:h-[300px]">
          <div className="text-[#666] text-2xl font-medium">ubbox Game</div>
        </div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/2ac9cc594e42506d4e754956503cab6ff5eadcd8?width=992"
        alt="Decorative game elements"
        className="absolute right-[-100px] w-[496px] h-[607px] bottom-0 max-md:relative max-md:w-[300px] max-md:h-[367px] max-md:mt-10 max-md:right-auto max-md:bottom-auto max-sm:w-[200px] max-sm:h-[245px]"
      />
    </section>
  );
};

export default HeroSection;
