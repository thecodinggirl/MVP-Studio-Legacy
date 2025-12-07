import React from 'react';

const Footer = () => {
  return (
    <div className="mt-10 border-t border-ln-gray-200 xl:mt-[108px]">
      <footer className="container relative flex-col gap-12 xl:flex xl:pt-[68px]">
        {/* Decor */}
        <img src="/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -left-9 -top-[5px] hidden mac:block" />
        <img src="/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -right-9 -top-[5px] hidden mac:block" />

        <div className="flex flex-col items-start gap-5 py-10 md:items-center xl:gap-6 xl:py-0">
          <a href="/">
            <div className="relative size-9">
              <img src="/images/logo.png" alt="" className="absolute -top-0.5 left-1/2 max-w-none -translate-x-1/2 object-contain" width="52" height="58" />
            </div>
          </a>
          <div className="text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 md:text-center">
            Design & development<br />
            <span className="text-ln-gray-500">perfectly aligned.</span>
          </div>
          <div className="flex items-center gap-2">
             <SocialButton href="https://x.com/alignui" icon={<path fill="currentColor" d="M13.053 2.625h2.16l-4.721 5.4 5.555 7.35h-4.35l-3.406-4.457-3.899 4.457H2.23l5.05-5.777-5.329-6.973h4.46l3.08 4.074zm-.76 11.455h1.199L5.76 3.852H4.476l7.819 10.228Z"></path>} />
             <SocialButton href="https://github.com/alignui" icon={<path fill="currentColor" d="M9 1.463c4.144 0 7.5 3.356 7.5 7.5a7.51 7.51 0 0 1-5.11 7.116c-.374.075-.515-.16-.515-.357 0-.253.01-1.059.01-2.062 0-.703-.235-1.153-.507-1.388 1.669-.187 3.422-.825 3.422-3.703 0-.825-.29-1.49-.769-2.015.075-.188.338-.957-.075-1.988 0 0-.628-.206-2.062.769a7 7 0 0 0-1.875-.253 7 7 0 0 0-1.875.253c-1.435-.966-2.063-.769-2.063-.769-.412 1.031-.15 1.8-.075 1.988a2.92 2.92 0 0 0-.769 2.015c0 2.869 1.744 3.516 3.413 3.703-.216.188-.413.516-.478 1.003-.431.197-1.51.516-2.184-.618-.141-.225-.563-.778-1.154-.769-.628.01-.253.356.01.497.318.178.684.844.768 1.06.15.421.638 1.227 2.522.88 0 .629.01 1.22.01 1.397 0 .197-.14.422-.516.357A7.5 7.5 0 0 1 1.5 8.963c0-4.144 3.356-7.5 7.5-7.5"></path>} />
             <SocialButton href="https://discord.gg/alignui" icon={<path fill="currentColor" d="M14.727 3.767a13.6 13.6 0 0 0-3.404-1.053q-.24.435-.436.891a12.6 12.6 0 0 0-3.778 0 10 10 0 0 0-.436-.89A13.7 13.7 0 0 0 3.266 3.77C1.112 6.974.528 10.099.82 13.179a13.7 13.7 0 0 0 4.175 2.107q.508-.687.894-1.45a9 9 0 0 1-1.408-.675q.178-.13.345-.261a9.76 9.76 0 0 0 8.348 0q.17.14.345.26-.677.401-1.41.678.385.762.893 1.448a13.6 13.6 0 0 0 4.178-2.106c.343-3.572-.585-6.668-2.453-9.413M6.26 11.285c-.814 0-1.486-.743-1.486-1.656s.649-1.662 1.483-1.662 1.502.749 1.488 1.662-.656 1.655-1.485 1.655Zm5.482 0c-.815 0-1.485-.743-1.485-1.656s.65-1.662 1.485-1.662 1.498.749 1.483 1.662-.654 1.655-1.483 1.655Z"></path>} />
          </div>
        </div>

        <div className="hidden flex-col gap-4 xl:flex">
           <div className="flex h-6 w-full shrink-0 items-center">
              <div className="relative h-px w-full bg-ln-gray-200">
                 <img src="/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -left-px top-1/2 -translate-y-1/2" />
                 <img src="/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -right-px top-1/2 -translate-y-1/2" />
              </div>
           </div>
           
           <div className="flex gap-6 px-6">
              <FooterColumn title="Products" links={[
                 { label: 'AlignUI Components', href: '#' },
                 { label: 'AlignUI Pro', href: '#' },
                 { label: 'AlignUI Figma', href: '#' }
              ]} />
              <Separator />
              <FooterColumn title="Components" links={[
                 { label: 'Roadmap', href: '#' },
                 { label: 'Blog', href: '#' },
                 { label: 'Introduction', href: '#' },
                 { label: 'Installation', href: '#' }
              ]} />
              <Separator />
              <FooterColumn title="Pro" links={[
                 { label: 'Blocks', href: '#' },
                 { label: 'HR Management', href: '#' },
                 { label: 'Finance & Banking', href: '#' },
                 { label: 'Pricing', href: '#' },
                 { label: 'FAQ', href: '#' },
                 { label: 'License', href: '#' }
              ]} />
              <Separator />
              <FooterColumn title="Figma" links={[
                 { label: 'Components', href: '#' },
                 { label: 'HR Management', href: '#' },
                 { label: 'Finance & Banking', href: '#' },
                 { label: 'Marketing & Sales', href: '#' },
                 { label: 'Pricing', href: '#' },
                 { label: 'Updates', href: '#' },
                 { label: 'Changelog', href: '#' },
                 { label: 'FAQ', href: '#' },
                 { label: 'License', href: '#' }
              ]} />
              <Separator />
              <FooterColumn title="Company" links={[
                 { label: 'Contact us', href: '#' },
                 { label: 'About', href: '#' }
              ]} />
           </div>
        </div>

        <div className="flex justify-center pb-8 xl:pb-0">
           <p className="text-center text-ln-paragraph-sm text-ln-gray-500">© 2026 AlignUI Design System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const SocialButton = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener nofollow" className="flex size-8 items-center justify-center rounded-[9px] bg-ln-gray-0 text-ln-gray-400 shadow-ln-button-white transition duration-200 ease-linear hover:bg-ln-gray-25 hover:text-ln-gray-500 hover:shadow-none">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="size-[18px]">
      {icon}
    </svg>
  </a>
);

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-1 flex-col gap-6">
    <h3 className="text-ln-label-sm text-ln-gray-900">{title}</h3>
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.label}>
          <a className="block text-ln-paragraph-sm text-ln-gray-600 hover:text-ln-gray-900 transition-colors" href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Separator = () => (
  <div className="flex w-6 shrink-0 justify-center">
    <div className="relative w-px bg-ln-gray-200">
      <img src="/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-1/2 top-0 -translate-x-1/2" />
      <img src="/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  </div>
);

export default Footer;
