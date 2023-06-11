'use client';

import { gTagEvent } from '@/utils/gtag';

const socialLinks = [
  { title: 'Twitter', href: 'https://twitter.com/mahalwadia' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/mahmoudalwadia/' },
  { title: 'Github', href: 'https://github.com/mahmoudalwadia' },
  { title: 'Writings', href: 'https://mahmoudalwadia.substack.com/' },
];

const SocialLinks = () => {
  const handleClick = (title: string) => {
    gTagEvent({
      action: 'Social Link Clicked',
      category: 'Click',
      label: title,
    });
  };
  return (
    <div className="flex mt-3">
      {socialLinks.map((socialLink) => (
        <a
          href={socialLink.href}
          key={socialLink.href}
          target="_blank"
          className="font-light text-[12px] mr-[8px] leading-[16px] transition-colors duration-300 ease-in-out text-dark-silver underline dark:text-quick-silver hover:text-black-chinese dark:hover:text-lotion"
          onClick={() => handleClick(socialLink.title)}
        >
          {socialLink.title}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
