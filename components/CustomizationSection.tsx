import React from 'react';

const CustomizationSection = () => {
  return (
    <div className="px-1 md:px-2.5">
      <div className="relative z-10 overflow-hidden rounded-2xl pb-2 pt-6 md:py-12 xl:rounded-[28px] xl:py-20" style={{ background: 'linear-gradient(180deg, #1C1C1C 0%, #141414 100%)', boxShadow: '0 16px 8px rgba(31, 31, 31, .01), 0 12px 6px rgba(31, 31, 31, .04), 0 0 0 1px #0F0F0F' }}>
        
        {/* Dark Grid Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden mac:flex">
           <div className="container relative h-full">
              <div className="absolute top-0 h-full w-px -left-8" style={{ background: 'linear-gradient(180deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)' }}></div>
              <div className="absolute top-0 h-full w-px -right-8" style={{ background: 'linear-gradient(180deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)' }}></div>
           </div>
        </div>

        <div className="relative flex items-center justify-start gap-4 px-6 md:justify-center mac:justify-start mac:px-0">
           <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-white/[.02] pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-300 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3" style={{ boxShadow: '0 0 0 1px rgba(0, 0, 0, .08), inset 0 1px 2px rgba(255, 255, 255, .12)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="size-[18px] text-[#707070]"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M3.396 12.937 1.313 15.08m3.75-.428-1.25 1.285m-1.75-6.75s2.827 1.328 4.124 2.625c1.298 1.298 2.625 4.125 2.625 4.125l2.146-1.992a1.5 1.5 0 0 0 .48-1.1V11.25c3-1.5 4.874-3.938 4.5-9.188-5.25-.375-7.688 1.5-9.188 4.5H5.154a1.5 1.5 0 0 0-1.1.48zm10.874-2.812a1.312 1.312 0 1 1-2.624 0 1.312 1.312 0 0 1 2.624 0"></path></svg>
              Core Features
           </div>
        </div>

        <div className="container relative z-20 mt-3 md:mt-4">
           <div className="flex flex-col items-start gap-3 md:items-center md:gap-4 md:text-center text-white">
              <h2 className="text-[28px] leading-[36px] font-550 -tracking-[0.02em] xl:text-[48px] xl:leading-[56px] xl:-tracking-[0.025em]">What's inside AlignUI?</h2>
              <p className="w-full max-w-[564px] text-ln-paragraph-sm text-ln-gray-500 md:text-ln-gray-600 xl:text-ln-paragraph-lg">
                 500+ <span className="font-medium text-ln-gray-400">flexible</span> components with <span className="font-medium text-ln-gray-400">developer-friendly</span>, comprehensive codebase.
              </p>
           </div>

           <div className="relative mt-4 grid divide-y divide-white/[.08] border-t border-white/[.08] md:mt-12 md:grid-cols-2 md:gap-6 md:divide-y-0 md:border-0 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-14">
              <FeatureItem title="180+ Components" desc="180+ versatile UI elements for rapid development." />
              <FeatureItem title="Production Ready" desc="Pre-optimized code for instant project deployment." />
              <FeatureItem title="Figma File" desc="Comprehensive design kit for seamless UI/UX workflow." />
              <FeatureItem title="Customizable" desc="Highly flexible system for unique brand expression." />
              <FeatureItem title="Responsive" desc="Adaptive layouts for multi-device compatibility." />
              <FeatureItem title="Easy for Devs" desc="Intuitive framework for rapid and efficient development." />
              <FeatureItem title="Dark Mode" desc="Effortless integration for enhanced user experience." />
              <FeatureItem title="TypeScript" desc="Strong typing for enhanced code maintainability." />
              <FeatureItem title="Accessible" desc="WCAG-compliant design for inclusive user access." />
           </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ title, desc }) => (
  <div className="flex gap-3 py-4 md:flex-col md:items-center md:gap-0 md:p-4 md:text-center">
     <div className="md:mt-5">
        <div className="text-ln-label-sm text-ln-gray-0 md:text-ln-label-md">{title}</div>
        <div className="mt-1 w-full text-pretty text-ln-paragraph-xs text-ln-gray-600 md:max-w-[272px] md:text-ln-paragraph-sm">{desc}</div>
     </div>
  </div>
);

export default CustomizationSection;
