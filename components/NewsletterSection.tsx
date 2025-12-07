import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="container pt-10 bleed-ln-gray-200 bleed-border-t md:pt-14 xl:pt-[70px] xl:bleed-none">
      <div className="flex flex-col items-start md:items-center">
        <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-ln-gray-0 pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-700 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" className="size-[18px] text-ln-gray-400">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="m9.5 4.735-5.111-1.14A1.5 1.5 0 0 0 2.562 5.06v7.755a1.5 1.5 0 0 0 1.174 1.464L9.5 15.563m0-10.828 5.111-1.14a1.5 1.5 0 0 1 1.826 1.464v7.755a1.5 1.5 0 0 1-1.173 1.464L9.5 15.563m0-10.828v10.828"></path>
          </svg>
          Stay Informed
        </div>
        <h4 className="mt-4 text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 md:text-center md:text-ln-title-h4 xl:text-[32px] xl:leading-[40px] xl:-tracking-[0.028em]">
          Subscribe to our newsletter
        </h4>
        <p className="mt-2 text-ln-paragraph-md text-ln-gray-600 md:text-center xl:text-ln-paragraph-lg">
          Get the <span className="font-medium text-ln-gray-800">latest updates</span>, <span className="font-medium text-ln-gray-800">tips</span>, and <span className="font-medium text-ln-gray-800">exclusive</span> offers from AlignUI.
        </p>

        <form className="mt-5 flex w-full flex-col gap-2 md:w-auto xl:mt-8 xl:gap-3">
          <div className="group relative flex h-12 w-full items-center gap-2 rounded-[13px] bg-ln-gray-25 px-3 shadow-[0_4px_8px_-1.5px_rgba(51,51,51,.06)] ring-1 transition md:w-[416px] ring-ln-gray-200 focus-within:ring-[1.5px] focus-within:ring-ln-orange">
            <div className="flex flex-1 items-center gap-2 xl:gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 shrink-0 text-ln-gray-400 transition group-focus-within:text-ln-gray-500">
                <path fill="currentColor" d="M21.588 8.67a.75.75 0 1 0-.675-1.34zm-18.5-1.34a.75.75 0 1 0-.675 1.34zM20.5 6.75v10.5H22V6.75zM19.25 18.5H4.75V20h14.5zM3.5 17.25V6.75H2v10.5zM4.75 5.5h14.5V4H4.75zm16.163 1.83-8.35 4.207.675 1.34 8.35-4.207zm-9.475 4.207L3.088 7.33l-.675 1.34 8.35 4.207zM3.5 6.75c0-.69.56-1.25 1.25-1.25V4A2.75 2.75 0 0 0 2 6.75zM4.75 18.5c-.69 0-1.25-.56-1.25-1.25H2A2.75 2.75 0 0 0 4.75 20zm15.75-1.25c0 .69-.56 1.25-1.25 1.25V20A2.75 2.75 0 0 0 22 17.25zm-7.937-5.713a1.25 1.25 0 0 1-1.125 0l-.675 1.34a2.75 2.75 0 0 0 2.475 0zM22 6.75A2.75 2.75 0 0 0 19.25 4v1.5c.69 0 1.25.56 1.25 1.25z"></path>
              </svg>
              <input type="email" required className="w-full bg-transparent bg-none text-ln-label-md text-ln-gray-925 caret-ln-orange placeholder:text-ln-paragraph-md placeholder:text-ln-gray-500 focus:outline-none" placeholder="Enter your email..." />
              <button type="submit" aria-label="Submit form" className="relative isolate flex h-5 w-8 shrink-0 items-center justify-center rounded-[5px] transition bg-ln-gray-0 text-[#bbb] shadow-ln-button-white hover:text-ln-orange">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" className="size-3">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="m4.552 9 2.47-2.47a.75.75 0 0 0 0-1.06L4.551 3"></path>
                </svg>
              </button>
            </div>
          </div>
          <p className="text-ln-paragraph-sm text-ln-gray-450 md:text-center">We respect your privacy</p>
        </form>

        <div className="mt-5 flex flex-wrap gap-4 md:justify-center xl:mt-8 xl:gap-7">
          <FeatureCheck text="Weekly updates" />
          <FeatureCheck text="Exclusive content" />
          <FeatureCheck text="Early access for features" />
        </div>
      </div>
    </div>
  );
};

const FeatureCheck = ({ text }) => (
  <div className="flex items-center gap-2 text-ln-label-sm text-ln-gray-600 xl:text-ln-paragraph-sm xl:text-ln-gray-800">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" className="size-[18px] text-template-ai">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24" d="M11.75 7.125 8.375 11.25l-1.5-1.5M16.438 9A6.937 6.937 0 1 1 2.563 9a6.937 6.937 0 0 1 13.874 0Z"></path>
    </svg>
    {text}
  </div>
);

export default NewsletterSection;
