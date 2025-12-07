import React from 'react';

const TemplatesSection = () => {
  return (
    <div className="container mt-16 md:mt-0">
      <div>
        <div className="flex flex-col items-start md:items-center">
          <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-ln-gray-0 pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-700 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-[18px] text-ln-gray-400"><path fill="currentColor" d="M16.75 5.792v8.416H18V5.792zM14.708 16.25H6.292v1.25h8.416zM4.25 14.208V5.792H3v8.416zM6.292 3.75h8.416V2.5H6.292zm0 12.5c-.477 0-.798 0-1.044-.02-.24-.02-.354-.055-.43-.093l-.567 1.113c.281.143.579.2.895.225.31.025.69.025 1.146.025zM3 14.208c0 .457 0 .837.025 1.146.026.317.082.614.225.895l1.114-.568c-.039-.075-.074-.19-.093-.429-.02-.247-.021-.567-.021-1.044zm1.819 1.929a1.04 1.04 0 0 1-.455-.456l-1.114.568c.22.43.57.782 1.001 1.001zm11.931-1.929c0 .477 0 .797-.02 1.044-.02.24-.055.354-.093.43l1.113.567c.143-.281.2-.578.225-.895.025-.31.025-.69.025-1.146zM14.708 17.5c.457 0 .837 0 1.146-.025.317-.026.614-.082.895-.225l-.568-1.113c-.075.038-.19.073-.429.092-.247.02-.567.021-1.044.021zm1.929-1.819c-.1.196-.26.356-.456.456l.568 1.113c.43-.22.782-.57 1.001-1.001zM18 5.791c0-.456 0-.836-.025-1.145-.026-.316-.082-.614-.225-.895l-1.113.568c.038.075.073.19.092.429.02.246.021.567.021 1.044H18ZM14.708 3.75c.477 0 .797 0 1.044.02.24.02.354.055.43.094l.567-1.114c-.281-.143-.578-.2-.895-.225-.31-.025-.69-.025-1.146-.025zm3.042.001a2.3 2.3 0 0 0-1-1.001l-.568 1.114c.196.1.356.259.456.455zm-13.5 2.04c0-.476 0-.797.02-1.043.02-.24.055-.354.094-.43L3.25 3.752c-.143.281-.2.579-.225.895C3 4.956 3 5.336 3 5.792zM6.292 2.5c-.457 0-.837 0-1.146.025-.316.026-.614.082-.895.225l.568 1.114c.075-.039.19-.074.429-.093.246-.02.567-.021 1.044-.021zM4.364 4.319c.1-.196.259-.356.455-.455L4.25 2.75c-.43.22-.782.57-1.001 1.001z"></path><path fill="currentColor" d="M9.25 3.125V2.5H8v.625zM8 16.875v.625h1.25v-.625zM9.25 10V3.125H8V10zM8 10v6.875h1.25V10z"></path><path stroke="currentColor" strokeWidth="1.25" d="M8.833 10h8.334"></path></svg>
            Sector-specific Templates
            <div className="rounded-[5px] bg-ln-orange/[.12] px-[5px] py-[3px] text-ln-subheading-xs text-ln-orange shadow-ln-badge-orange">PRO</div>
          </div>
          <h4 className="mt-4 text-pretty text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 md:text-center xl:text-[48px] xl:leading-[56px] xl:-tracking-[0.028em]">
            Ready-made multi-page <br /> user flows for apps
          </h4>
        </div>

        {/* Desktop Tabs */}
        <div className="mx-auto mt-12 hidden w-full max-w-3xl flex-wrap justify-center gap-4 xl:flex">
          <TemplateTab active iconColor="bg-template-hr" text="HR Management" />
          <TemplateTab iconColor="bg-template-finance" text="Finance & Banking" />
          <TemplateTab iconColor="bg-template-marketing" text="Marketing & Sales" />
          <TemplateTab iconColor="bg-template-crypto" text="Cryptocurrency" soon />
          <TemplateTab iconColor="bg-template-ai" text="AI Product" soon />
        </div>

        {/* Template Showcase */}
        <div className="relative hidden overflow-hidden xl:block mt-12">
           <div className="flex justify-center gap-8">
              <div className="w-[300px] rounded-3xl overflow-hidden shadow-2xl border border-ln-gray-200">
                 <img src="/images/landing/template-hr-overview.webp" alt="HR Dashboard" className="w-full h-auto" />
              </div>
              <div className="w-[300px] rounded-3xl overflow-hidden shadow-2xl border border-ln-gray-200 mt-12">
                 <img src="/images/landing/template-hr-calendar.webp" alt="HR Calendar" className="w-full h-auto" />
              </div>
              <div className="w-[300px] rounded-3xl overflow-hidden shadow-2xl border border-ln-gray-200 mt-24">
                 <img src="/images/landing/template-hr-settings.webp" alt="HR Settings" className="w-full h-auto" />
              </div>
           </div>
           
           <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ln-gray-25 to-transparent z-10"></div>
           
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
              <a className="group inline-flex items-center justify-center whitespace-nowrap transition duration-200 ease-out outline-none focus:outline-none disabled:pointer-events-none bg-ln-gray-900 text-ln-gray-0 shadow-ln-button-gray hover:bg-ln-gray-800 disabled:bg-ln-gray-25 disabled:text-ln-gray-450 disabled:shadow-none h-11 gap-3.5 rounded-[13px] px-[18px] text-ln-label-sm" href="#">
                 <span className="flex items-center gap-1">
                    <span>Explore Template </span>
                    <span className="text-ln-paragraph-sm text-ln-gray-0/[.32]">-</span>
                    <span className="relative text-ln-gray-0/[.72]">HR Management</span>
                 </span>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="-mx-1.5 size-5 shrink-0 group-disabled:text-ln-gray-450 text-ln-gray-0/[.72]"><path stroke="currentColor" strokeLinecap="square" strokeWidth="1.25" d="M8.333 13.333 11.667 10 8.333 6.667"></path></svg>
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

interface TemplateTabProps {
  active?: boolean;
  iconColor: string;
  text: string;
  soon?: boolean;
}

const TemplateTab = ({ active = false, iconColor, text, soon = false }: TemplateTabProps) => (
  <button type="button" className={`flex h-12 items-center gap-3 rounded-[15px] px-3 transition duration-200 ease-nc ${active ? 'bg-ln-gray-100' : 'bg-ln-gray-25 ring-1 ring-ln-gray-100'} ${soon ? 'opacity-50 cursor-not-allowed' : ''}`}>
    <div className={`size-6 overflow-hidden rounded-[7px] ${iconColor}`}></div>
    <span className="pr-1 text-ln-label-md text-ln-gray-800">{text}</span>
    {soon && <div className="flex h-5 items-center rounded-full bg-ln-gray-100 px-1.5 text-ln-subheading-xs text-ln-gray-500 -ml-2.5">SOON</div>}
  </button>
);

export default TemplatesSection;
