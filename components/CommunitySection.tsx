import React from 'react';

const CommunitySection = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-start md:items-center">
        <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-ln-gray-0 pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-700 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" className="size-[18px] text-ln-gray-400">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M15.578 10.907q.107-.565.108-1.161a6.17 6.17 0 0 0-1.521-4.066M3.61 7.81a6.2 6.2 0 0 1 3.723-3.869m3.322 11.888a6 6 0 0 1-1.161.108 6.17 6.17 0 0 1-3.873-1.36M9.5 6a2.062 2.062 0 1 0 0-4.125A2.062 2.062 0 0 0 9.5 6m-6.228 5.152a2.062 2.062 0 1 1 2.062 3.572 2.062 2.062 0 0 1-2.062-3.572m10.388 3.571a2.062 2.062 0 1 1 2.063-3.571 2.062 2.062 0 0 1-2.063 3.571"></path>
          </svg>
          Community
        </div>
        <h4 className="mt-4 text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 md:text-center md:text-ln-title-h4 xl:text-[48px] xl:leading-[56px] xl:-tracking-[0.028em]">
          Join our community
        </h4>
        <p className="mt-2 text-ln-paragraph-md text-ln-gray-600 md:text-center xl:mt-3 xl:text-ln-paragraph-lg">
          Connect, <span className="font-medium text-ln-gray-800">learn</span>, and <span className="font-medium text-ln-gray-800">grow</span> with fellow designers and developers.
        </p>

        <div className="mt-6 flex w-full flex-col flex-wrap justify-center gap-3 md:flex-row md:gap-6 xl:mt-12">
          <CommunityCard 
            href="https://x.com/alignui"
            icon={<path fill="currentColor" d="M13.053 2.625h2.16l-4.721 5.4 5.555 7.35h-4.35l-3.406-4.457-3.899 4.457H2.23l5.05-5.777-5.329-6.973h4.46l3.08 4.074zm-.76 11.455h1.199L5.76 3.852H4.476l7.819 10.228Z"></path>}
            title="Twitter"
            desc="Stay updated with tips, announcements, and general info"
          />
          <CommunityCard 
            href="https://github.com/alignui"
            icon={<path fill="currentColor" d="M9 1.463c4.144 0 7.5 3.356 7.5 7.5a7.51 7.51 0 0 1-5.11 7.116c-.374.075-.515-.16-.515-.357 0-.253.01-1.059.01-2.062 0-.703-.235-1.153-.507-1.388 1.669-.187 3.422-.825 3.422-3.703 0-.825-.29-1.49-.769-2.015.075-.188.338-.957-.075-1.988 0 0-.628-.206-2.062.769a7 7 0 0 0-1.875-.253 7 7 0 0 0-1.875.253c-1.435-.966-2.063-.769-2.063-.769-.412 1.031-.15 1.8-.075 1.988a2.92 2.92 0 0 0-.769 2.015c0 2.869 1.744 3.516 3.413 3.703-.216.188-.413.516-.478 1.003-.431.197-1.51.516-2.184-.618-.141-.225-.563-.778-1.154-.769-.628.01-.253.356.01.497.318.178.684.844.768 1.06.15.421.638 1.227 2.522.88 0 .629.01 1.22.01 1.397 0 .197-.14.422-.516.357A7.5 7.5 0 0 1 1.5 8.963c0-4.144 3.356-7.5 7.5-7.5"></path>}
            title="GitHub"
            desc="Report bugs, request features and contribute to the project."
          />
          <CommunityCard 
            href="https://discord.gg/alignui"
            icon={<path fill="currentColor" d="M14.727 3.767a13.6 13.6 0 0 0-3.404-1.053q-.24.435-.436.891a12.6 12.6 0 0 0-3.778 0 10 10 0 0 0-.436-.89A13.7 13.7 0 0 0 3.266 3.77C1.112 6.974.528 10.099.82 13.179a13.7 13.7 0 0 0 4.175 2.107q.508-.687.894-1.45a9 9 0 0 1-1.408-.675q.178-.13.345-.261a9.76 9.76 0 0 0 8.348 0q.17.14.345.26-.677.401-1.41.678.385.762.893 1.448a13.6 13.6 0 0 0 4.178-2.106c.343-3.572-.585-6.668-2.453-9.413M6.26 11.285c-.814 0-1.486-.743-1.486-1.656s.649-1.662 1.483-1.662 1.502.749 1.488 1.662-.656 1.655-1.485 1.655Zm5.482 0c-.815 0-1.485-.743-1.485-1.656s.65-1.662 1.485-1.662 1.498.749 1.483 1.662-.654 1.655-1.483 1.655Z"></path>}
            title="Discord"
            desc="Join the community, ask questions, and share tips."
          />
        </div>
      </div>
    </div>
  );
};

interface CommunityCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const CommunityCard = ({ href, icon, title, desc }: CommunityCardProps) => (
  <a href={href} target="_blank" rel="noopener nofollow" className="flex w-full items-center gap-4 rounded-2xl bg-ln-gray-0 px-4 py-3 shadow-ln-xs md:w-[calc(50%-12px)] md:flex-col md:p-7 md:text-center xl:w-[368px] xl:gap-6 xl:rounded-3xl xl:p-8 hover:shadow-md transition-shadow">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="size-8 shrink-0 text-ln-gray-300 md:size-12 xl:size-16">
      {icon}
    </svg>
    <div className="space-y-1 xl:space-y-2">
      <div className="text-ln-label-sm text-ln-gray-900 md:text-ln-label-lg">{title}</div>
      <p className="text-balance text-ln-paragraph-xs text-ln-gray-600 md:text-ln-paragraph-sm">{desc}</p>
    </div>
  </a>
);

export default CommunitySection;
export { CommunityCard };
