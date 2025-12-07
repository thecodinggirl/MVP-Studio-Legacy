import React, { useState } from 'react';

const CodePreviewSection = () => {
  const [activeTab, setActiveTab] = useState('base');

  return (
    <div className="pt-11 xl:pt-20">
      <div className="">
        {/* Tabs */}
        <div className="relative -mx-6 mb-4 flex h-[76px] border-y border-ln-gray-200 md:mx-0 xl:mb-0 xl:h-auto xl:gap-8 xl:border-none xl:px-[26px] xl:py-7 xl:before:block xl:after:block before:absolute before:left-0 before:top-0 before:hidden before:h-px before:w-full before:bg-ln-gray-200 after:absolute after:bottom-0 after:left-0 after:hidden after:h-px after:w-full after:bg-ln-gray-200">
          <div className="absolute left-10 top-0 hidden h-px bg-ln-orange transition-all duration-500 xl:block" style={{ left: '16px', width: '36px' }}></div>
          <div className="absolute -top-px left-4 h-px w-9 bg-ln-orange xl:hidden"></div>
          
          <TabButton 
            active={activeTab === 'base'} 
            onClick={() => setActiveTab('base')}
            icon={<path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z"></path>}
            title="Base Components"
            subtitle="40+ open-source components available"
            badge="FREE"
            badgeColor="bg-ln-gray-100"
          />
          <div className="relative hidden w-0 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-ln-gray-200 xl:block"></div>
          <TabButton 
            active={activeTab === 'blocks'} 
            onClick={() => setActiveTab('blocks')}
            icon={<><path fill="currentColor" d="M3.417 14.375v-8.75h-1.25v8.75zm14.166-8.75v8.75h1.25v-8.75zm-1.041 9.792H4.458v1.25h12.084zM4.458 4.583h12.084v-1.25H4.458zm13.125 9.792c0 .575-.466 1.042-1.041 1.042v1.25a2.29 2.29 0 0 0 2.291-2.292zm1.25-8.75a2.29 2.29 0 0 0-2.291-2.292v1.25c.575 0 1.041.467 1.041 1.042zm-15.416 0c0-.575.466-1.042 1.041-1.042v-1.25a2.29 2.29 0 0 0-2.291 2.292zm-1.25 8.75a2.29 2.29 0 0 0 2.291 2.292v-1.25a1.04 1.04 0 0 1-1.041-1.042z"></path><path fill="currentColor" d="M9.875 16.042v.625h1.25v-.625zm1.25-12.084v-.625h-1.25v.625zm0 12.084V3.958h-1.25v12.084z"></path></>}
            title="Components & Blocks"
            subtitle="100+ ready-made components for speed"
            badge="PRO"
            badgeColor="bg-ln-orange/[.12] text-ln-orange"
          />
          <div className="relative hidden w-0 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-ln-gray-200 xl:block"></div>
          {/* Other tabs omitted for brevity but following same pattern */}
        </div>

        {/* Mobile View Placeholder */}
        <div className="-mx-[13px] flex h-[542px] flex-col overflow-hidden p-px md:mx-0 xl:hidden">
           <div className="relative flex flex-1 origin-bottom flex-col rounded-20 bg-ln-gray-50 ring-1 ring-transparent">
              <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center text-center">
                 <div className="relative flex size-[72px] items-center justify-center overflow-hidden rounded-full ring-1 ring-inset ring-ln-gray-100">
                    <div className="flex size-12 items-center justify-center rounded-full bg-ln-gray-0 shadow-ln-toggle-active">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 text-ln-orange"><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 5.75a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v11H3.75zm-2 11h20.5v1.5a2 2 0 0 1-2 2H3.75a2 2 0 0 1-2-2z"></path></svg>
                    </div>
                 </div>
                 <div className="mt-4 text-ln-label-lg text-ln-gray-800">Use desktop for editor</div>
                 <div className="mt-1 text-balance text-ln-paragraph-md text-ln-gray-600">To access the code editor, please open<br /> using a desktop computer.</div>
              </div>
           </div>
        </div>

        {/* Desktop View (Mockup of editor) */}
        <div className="relative mt-8 hidden xl:block">
           <div className="w-full rounded-20 bg-ln-gray-25 ring-1 ring-ln-gray-200 xl:rounded-[28px] overflow-hidden">
              <div className="flex items-center px-4 py-4 xl:px-6 border-b border-ln-gray-200">
                 <div className="flex flex-1 gap-2">
                    <div className="size-2 rounded-full xl:size-2.5 bg-[#ED6A5E]"></div>
                    <div className="size-2 rounded-full xl:size-2.5 bg-[#F4BF4E]"></div>
                    <div className="size-2 rounded-full xl:size-2.5 bg-[#61C655]"></div>
                 </div>
                 <div className="hidden items-center gap-1 text-ln-label-sm text-ln-gray-500 xl:flex">alignui.com</div>
                 <div className="flex-1"></div>
              </div>
              <div className="flex h-[600px] relative">
                 {/* Sidebar Mockup */}
                 <div className="w-60 border-r border-ln-gray-200 bg-ln-gray-50 p-4">
                    <div className="text-ln-label-sm text-ln-gray-500 mb-2">Explorer</div>
                    <div className="space-y-1">
                       <div className="text-ln-label-sm text-ln-gray-800">components</div>
                       <div className="pl-4 text-ln-label-sm text-ln-gray-600">button.tsx</div>
                       <div className="pl-4 text-ln-label-sm text-ln-gray-600">input.tsx</div>
                    </div>
                 </div>
                 {/* Code Area Mockup */}
                 <div className="flex-1 bg-white p-6 font-mono text-sm">
                    <div className="text-ln-gray-400">// Example usage</div>
                    <div className="text-ln-orange">import</div> <div className="text-ln-gray-800 inline">Button</div> <div className="text-ln-orange inline">from</div> <div className="text-green-600 inline">'./components/button'</div>;
                    <br />
                    <div className="text-ln-orange">export default function</div> <div className="text-ln-gray-800 inline">App</div>() {'{'}
                    <br />
                    &nbsp;&nbsp;<div className="text-ln-orange">return</div> (
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<div className="text-ln-gray-800 inline">Button</div> variant="primary"&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click me
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<div className="text-ln-gray-800 inline">Button</div>&gt;
                    <br />
                    &nbsp;&nbsp;);
                    <br />
                    {'}'}
                 </div>
                 {/* Preview Area Mockup */}
                 <div className="w-[400px] border-l border-ln-gray-200 bg-gray-50 flex items-center justify-center">
                    <button className="px-4 py-2 bg-ln-gray-900 text-white rounded-lg shadow-ln-button-gray hover:bg-ln-gray-800 transition-colors">
                       Click me
                    </button>
                 </div>
                 
                 {/* Try Live Overlay */}
                 <button className="absolute inset-0 z-40 bg-white/60 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-ln-gray-200 text-center">
                       <div className="text-xl font-bold mb-2">Try live editor</div>
                       <p className="text-gray-500 mb-4">Click to open the interactive playground</p>
                       <div className="inline-flex items-center gap-2 bg-ln-gray-900 text-white px-4 py-2 rounded-lg">
                          Try Live <span aria-hidden="true">&rarr;</span>
                       </div>
                    </div>
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, title, subtitle, badge, badgeColor }) => (
  <button 
    type="button" 
    onClick={onClick}
    className={`group relative mx-4 flex min-w-0 flex-1 items-center gap-3.5 text-left xl:mx-0 xl:flex-none xl:flex-col xl:gap-0 xl:text-center ${active ? '' : 'opacity-60 hover:opacity-100'}`}
  >
    <div className={`relative flex size-9 shrink-0 items-center justify-center rounded-[9px] bg-ln-gray-100 transition duration-200 xl:h-8 xl:w-11 ${active ? 'text-white' : 'text-ln-gray-500 group-hover:text-ln-orange'}`}>
       {active && <div className="absolute inset-0 rounded-[9px] bg-ln-orange shadow-ln-button-orange"></div>}
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="relative z-10 size-5 transition duration-200">
         {icon}
       </svg>
    </div>
    <div className="min-w-0 xl:mt-4">
      <div className="flex items-center gap-1.5 truncate text-ln-label-sm transition duration-200 xl:justify-center text-ln-gray-900">
        {title}
        {badge && <div className={`rounded-[5px] px-[5px] py-[3px] text-ln-subheading-xs shadow-ln-badge-gray ${badgeColor}`}>{badge}</div>}
      </div>
      <div className="mt-1 text-[13px] leading-relaxed text-ln-gray-600 hidden xl:block">
        {subtitle}
      </div>
    </div>
  </button>
);

export default CodePreviewSection;
