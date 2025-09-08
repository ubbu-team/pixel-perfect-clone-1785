import React from 'react';

const EducationalSection: React.FC = () => {
  return (
    <section className="w-full h-56 flex items-center justify-center gap-10 bg-[#ECF4FF] px-5 py-0 max-sm:flex-col max-sm:h-auto max-sm:text-center max-sm:px-5 max-sm:py-10">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a25cb2f402a5446f5ef2dfaa767d1e403648545c"
        alt="Educational project icon"
        className="w-[98px] h-[98px]"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-[#10192E] text-[32px] font-bold leading-[60px] max-sm:text-2xl max-sm:leading-8">
          Educational Benefits and Game Explanation
        </h2>
        <p className="text-[#10192E] text-[26px] font-normal leading-[60px] max-sm:text-lg max-sm:leading-7">
          Educational Benefits and Game Explanation
        </p>
      </div>
    </section>
  );
};

export default EducationalSection;
