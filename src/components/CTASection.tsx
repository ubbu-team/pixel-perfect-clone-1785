import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="w-full h-[563px] flex items-center justify-center relative bg-[#363880] px-5 py-0">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center">
        <header>
          <p className="text-white text-lg font-medium leading-6 mb-5">
            Create &amp; Code your own Game
          </p>
          <h2 className="text-white text-[74px] font-semibold leading-[80px] mb-10 max-md:text-5xl max-md:leading-[56px] max-sm:text-[28px] max-sm:leading-9">
            Clone a Flappy Bird of your own
          </h2>
        </header>
        
        <button className="flex items-center justify-center w-[297px] h-[53px] text-white text-lg font-bold tracking-[0.36px] cursor-pointer bg-[#2580FF] rounded-[40px] hover:bg-[#1e6fd9] transition-colors max-sm:w-full max-sm:max-w-[297px]">
          Faz um clone e cria o teu
        </button>
      </div>
      
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/6d7e9f4826222a001372f9180e497d0184462039?width=269"
        alt="Game bot character"
        className="absolute -translate-y-2/4 w-[134px] h-[134px] right-[100px] top-2/4 max-md:hidden"
      />
    </section>
  );
};

export default CTASection;
