import AboutMe from './components/AboutMe';
import Logo from './components/Logo';
import SocialLinks from './components/SocialLinks';

export const metadata = {
  title: 'Mahmoud Alwaida - A builder.',
  description: 'I’m a software engineer who works on building a better future.',
};

const content = {
  heading: 'I break and build things. I learn, and I have fun in between.',
  subheading:
    "Hi, I'm Mahmoud, a software engineer who likes to build great products that return value to the world and make people's lives easier.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 lg:py-24 px-4">
      <div className="container">
        <Logo />
        <div className="mt-10 lg:mt-16">
          <h1 className="font-bold text-[40px] lg:text-[56px] leading-[48px] lg:leading-[64px] overflow-ellipsis tracking-[-0.06em] my-0  max-w-[658px] mb-[16px]">
            {content.heading}
          </h1>
          <h2 className="text-[16px] leading-[24px] max-w-[560px] text-dark-silver dark:text-quick-silver">
            {content.subheading}
          </h2>
        </div>
        <SocialLinks />
        <AboutMe />
      </div>
    </main>
  );
}
