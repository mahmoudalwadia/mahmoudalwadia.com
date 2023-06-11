'use client';

import { useState } from 'react';
import { gTagEvent } from '@/utils/gtag';

const aboutMe = `
Originally from Palestine, living in Germany for the time being. After studying Computer Science for two years at a local university in Gaza, I took a different path. I landed a job as a software engineer and decided to forge my own way. I dropped out and took on the challenge of completing the full four-year curriculum independently. And guess what? I made it happen!

Since then, I've been on an incredible journey as a self-taught engineer. Education has become a big passion of mine, and I strongly believe there are countless ways to improve the current education system. That's why I'm dedicated to positively impacting the future of education.

When I'm not navigating the Internet, you will find me engaging in sports. I'm always thinking about how we can make fitness and health more accessible without the need for excessive time, money, or mental strain.

I'm a "tech bro" at heart, driven by a deep desire to solve real-world problems using the power of technology. I have unwavering faith in its evolution and ability to unlock new human potential. I'm excited to play my part in this incredible human journey.

Feel free to reach out, collaborate, or just share a friendly chat. Looking forward to connecting with you!
`;
const AboutMe = () => {
  const [show, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(true);
    gTagEvent({
      action: 'About Me Clicked',
      category: 'Click',
    });
  };

  const buttonLabel = `More about me${show ? ':' : '?'}`;
  return (
    <>
      <button
        onClick={handleClick}
        className={`overflow-hidden o-none mt-10 text-[14px] text-slate-blue dark:text-cookies-and-cream transition-opacity duration-300 ease-in-out decoration-dotted ${
          show
            ? 'opacity-50 hover:opacity-50 no-underline'
            : 'opacity-70 hover:opacity-100 underline'
        }`}
        disabled={show}
      >
        {buttonLabel}
      </button>
      <div
        className={`w-content rounded-lg max-w-[640px] opacity-0 transition-opacity duration-300 ease-in-out ${
          show ? 'opacity-100' : ''
        }`}
      >
        <p className="text-[16px] leading-[24px] max-w-[560px] text-dark-silver dark:text-quick-silver whitespace-pre-wrap">
          {aboutMe}
        </p>
      </div>
    </>
  );
};

export default AboutMe;
