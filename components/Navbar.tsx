import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative z-50 w-full flex-col items-center xl:container lg:flex xl:mx-auto lg:pt-2">
        <div className="relative z-20 flex w-full items-center justify-center gap-8 bg-ln-gray-900 lg:bg-transparent lg:justify-stretch">
          <div className="relative hidden h-px flex-1 bg-ln-gray-200 lg:block">
             <img src="https://alignui.com/images/landing/dot.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -top-1 -left-[37px]" />
             <img src="https://alignui.com/images/landing/dot.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -right-px -top-1" />
          </div>
          
          <header className="relative z-10 flex h-16 w-full items-center justify-between gap-4 rounded-t-2xl bg-ln-gray-25 px-4 lg:h-auto lg:w-auto lg:justify-start lg:rounded-3xl lg:bg-ln-gray-0 lg:p-[18px] lg:shadow-ln-xs">
            <div className="flex items-center gap-2.5 pr-3">
              <a className="focus:outline-none" href="/">
                <div className="relative size-9">
                  <img src="/images/logo.png" alt="" className="absolute -top-0.5 left-1/2 max-w-none -translate-x-1/2 object-contain" width="52" height="58" />
                </div>
              </a>
              <button className="group flex items-center gap-0.5 rounded-[7px] bg-ln-gray-50 pl-2 pr-1.5 py-1 text-ln-label-xs font-medium text-ln-gray-600 shadow-ln-badge-gray hover:bg-ln-gray-100 hover:text-ln-gray-700 transition-colors duration-200 focus:outline-none">
                v1.2
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="size-4 transition-transform duration-200">
                  <path fill="currentColor" fillRule="evenodd" d="M10.177 10.763a.25.25 0 0 1-.354 0L6.53 7.47a.75.75 0 0 0-1.06 1.06l3.293 3.293a1.75 1.75 0 0 0 2.474 0L14.53 8.53a.75.75 0 1 0-1.06-1.06z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>

            <nav className="hidden items-center gap-2.5 lg:flex">
              <div className="group relative z-50">
                <button type="button" className="flex items-center text-ln-label-sm text-ln-gray-600 transition duration-200 ease-linear group-hover:text-ln-gray-800">
                  Products
                  <ChevronDown size={14} className="ml-1 text-ln-gray-500 transition duration-200 ease-out group-hover:-rotate-180 group-hover:text-ln-orange" />
                </button>
              </div>
              <div className="flex items-center gap-5">
                <a className="text-ln-label-sm text-ln-gray-600 transition duration-200 ease-linear hover:text-ln-gray-800" href="#">Docs</a>
                <a className="text-ln-label-sm text-ln-gray-600 transition duration-200 ease-linear hover:text-ln-gray-800" href="#">Roadmap</a>
                <div className="group relative z-50">
                  <button type="button" className="flex items-center text-ln-label-sm text-ln-gray-600 transition duration-200 ease-linear group-hover:text-ln-gray-800">
                    Resources
                    <ChevronDown size={14} className="ml-1 text-ln-gray-500 transition duration-200 ease-out group-hover:-rotate-180 group-hover:text-ln-orange" />
                  </button>
                </div>
              </div>
            </nav>

            <div className="flex items-center gap-4 lg:hidden">
              <button type="button" className="flex size-6 items-center justify-center transition duration-200 ease-linear lg:size-9">
                <Search size={24} className="text-ln-gray-700" />
              </button>
              <button type="button" className="flex size-6 items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} className="text-ln-gray-700" /> : <Menu size={24} className="text-ln-gray-700" />}
              </button>
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <div className="h-5 w-px bg-ln-gray-200"></div>
              <button type="button" className="group flex h-8 w-[290px] shrink-0 items-center gap-1.5 rounded-[9px] bg-ln-gray-25 pl-2 pr-1.5 text-left ring-1 ring-[#333]/10 transition duration-200 ease-linear hover:bg-ln-gray-0">
                <Search size={18} className="text-ln-gray-400" />
                <div className="flex-1 text-ln-paragraph-sm text-ln-gray-500 transition duration-200 ease-linear group-hover:text-ln-gray-700">Quick search...</div>
                <div className="flex h-5 w-7 items-center justify-center rounded-[5px] bg-ln-gray-25 text-[12px] font-medium text-ln-gray-500 shadow-ln-button-white transition duration-200 ease-linear group-hover:bg-ln-gray-50 group-hover:shadow-none">
                  ⌘K
                </div>
              </button>
              <div className="flex items-center gap-2">
                <SocialLink href="#" icon={<TwitterIcon />} />
                <SocialLink href="#" icon={<GithubIcon />} />
                <SocialLink href="#" icon={<DiscordIcon />} />
              </div>
            </div>
          </header>

          <div className="relative hidden h-px flex-1 bg-ln-gray-200 lg:block">
             <img src="https://alignui.com/images/landing/dot.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -top-1 -right-[37px] left-auto" />
             <img src="https://alignui.com/images/landing/dot.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -top-1 -left-px" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-ln-gray-200 p-4 shadow-lg z-40 flex flex-col gap-4">
          <a href="#" className="text-sm font-medium py-2 border-b border-ln-gray-100">Products</a>
          <a href="#" className="text-sm font-medium py-2 border-b border-ln-gray-100">Docs</a>
          <a href="#" className="text-sm font-medium py-2 border-b border-ln-gray-100">Roadmap</a>
          <a href="#" className="text-sm font-medium py-2">Resources</a>
        </div>
      )}
    </>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener nofollow" className="flex size-8 items-center justify-center rounded-[9px] bg-ln-gray-0 text-ln-gray-400 shadow-ln-button-white transition duration-200 ease-linear hover:bg-ln-gray-25 hover:text-ln-gray-500 hover:shadow-none">
    {icon}
  </a>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M13.053 2.625h2.16l-4.721 5.4 5.555 7.35h-4.35l-3.406-4.457-3.899 4.457H2.23l5.05-5.777-5.329-6.973h4.46l3.08 4.074zm-.76 11.455h1.199L5.76 3.852H4.476l7.819 10.228Z"></path></svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M9 1.463c4.144 0 7.5 3.356 7.5 7.5a7.51 7.51 0 0 1-5.11 7.116c-.374.075-.515-.16-.515-.357 0-.253.01-1.059.01-2.062 0-.703-.235-1.153-.507-1.388 1.669-.187 3.422-.825 3.422-3.703 0-.825-.29-1.49-.769-2.015.075-.188.338-.957-.075-1.988 0 0-.628-.206-2.062.769a7 7 0 0 0-1.875-.253 7 7 0 0 0-1.875.253c-1.435-.966-2.063-.769-2.063-.769-.412 1.031-.15 1.8-.075 1.988a2.92 2.92 0 0 0-.769 2.015c0 2.869 1.744 3.516 3.413 3.703-.216.188-.413.516-.478 1.003-.431.197-1.51.516-2.184-.618-.141-.225-.563-.778-1.154-.769-.628.01-.253.356.01.497.318.178.684.844.768 1.06.15.421.638 1.227 2.522.88 0 .629.01 1.22.01 1.397 0 .197-.14.422-.516.357A7.5 7.5 0 0 1 1.5 8.963c0-4.144 3.356-7.5 7.5-7.5"></path></svg>
);

const DiscordIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M14.727 3.767a13.6 13.6 0 0 0-3.404-1.053q-.24.435-.436.891a12.6 12.6 0 0 0-3.778 0 10 10 0 0 0-.436-.89A13.7 13.7 0 0 0 3.266 3.77C1.112 6.974.528 10.099.82 13.179a13.7 13.7 0 0 0 4.175 2.107q.508-.687.894-1.45a9 9 0 0 1-1.408-.675q.178-.13.345-.261a9.76 9.76 0 0 0 8.348 0q.17.14.345.26-.677.401-1.41.678.385.762.893 1.448a13.6 13.6 0 0 0 4.178-2.106c.343-3.572-.585-6.668-2.453-9.413M6.26 11.285c-.814 0-1.486-.743-1.486-1.656s.649-1.662 1.483-1.662 1.502.749 1.488 1.662-.656 1.655-1.485 1.655Zm5.482 0c-.815 0-1.485-.743-1.485-1.656s.65-1.662 1.485-1.662 1.498.749 1.483 1.662-.654 1.655-1.483 1.655Z"></path></svg>
);

export default Navbar;
