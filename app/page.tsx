import Image from "next/image";
import Tabs, {Tab} from "@/app/components/reusable/tabs";
import ContentBlock from "@/app/components/reusable/content-block";
import Nav from "./components/nav";
import Link from "next/link";
import './styles/home.scss';
import './styles/fonts.scss';

export default function Home() {
  const tabsData: Tab[] = [
  {
    title: "RESIDENTIAL",
    content: (
      <div className="space-y-4">
        <p>
          Cozy Wall Foam Insulation is the perfect solution for homeowners looking to improve
          energy efficiency, comfort, and indoor air quality. Our pour-in-place foam fills every
          gap within your walls, helping regulate indoor temperature while reducing energy bills.
        </p>
        <p>
          Whether you&apos;re renovating an older home or building new, our minimally invasive
          installation process ensures clean, fast upgrades with long-lasting results.
        </p>
      </div>
    ),
    customTabButtonClassName: "lg:w-1/4 w-1/2",
    customTabButtonStyle: { fontSize: "1.2rem" },
  },
  {
    title: "COMMERCIAL",
    content: (
      <div className="space-y-4">
        <p>
          For commercial spaces, Cozy Wall Foam Insulation offers effective thermal and sound
          insulation that enhances comfort for employees and customers alike. Ideal for offices,
          retail spaces, and multi-use buildings.
        </p>
        <p>
          Our team works efficiently to minimize disruption, ensuring your operations can continue
          while improving energy performance and lowering utility costs.
        </p>
      </div>
    ),
    customTabButtonClassName: "lg:w-1/4 w-1/2",
    customTabButtonStyle: { fontSize: "1.2rem" },
  },
  {
    title: "GOVERNMENT",
    content: (
      <div className="space-y-4">
        <p>
          Cozy Wall Foam Insulation is a trusted partner for government and municipal projects,
          providing code-compliant insulation solutions for schools, offices, housing, and public
          buildings.
        </p>
        <p>
          Our team is experienced in meeting government standards and timelines while delivering
          energy-efficient performance, indoor comfort, and long-term durability.
        </p>
      </div>
    ),
    customTabButtonClassName: "lg:w-1/4 w-full",
    customTabButtonStyle: { fontSize: "1.2rem" },
  },
];


  return (
    <>
    <Nav />
    <section className="relative w-full md:pt-[150px] pt-[100px]">
<div
  className="absolute w-full h-full z-[1] top-0 left-0 pointer-events-none"
  style={{
    background: 'linear-gradient(0deg, rgba(27, 56, 100, 1) 0%, rgba(255, 255, 255, 0) 45%)'
  }}
></div>
<Image 
          src="/photos/Cozy-Wall-Foam-Insulation.jpg" 
          alt="Injection Spray Foam Insulation" 
          fill
          objectFit="cover" 
          className="top-0 left-0 z-0"
        />
      <div className="py-[35px] relative w-full h-full">
<div className="bg-[#bb854b] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
        
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
        <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">

          <div className="relative py-2 px-4 rounded-lg w-full">
            <h1 className="text-4xl md:text-4xl font-bold">INJECTION SPRAY FOAM INSULATION</h1>
            <h2 className="minion-pro-italic text-2xl mt-2">Wrap Your Home in Comfort Year-Round with Expert Exterior Wall Insulation</h2>
          </div>

        </div>
      </div>
            <div className="w-full relative z-[1] md:mt-[125px] mt-[50px] pb-[25px]">
              <div className="md:w-3/4 w-full ml-auto">
            <p className="text-3xl uppercase text-white md:pl-[100px] pl-[75px] tracking-[.1em]">Modern Technology</p>
            <div className="my-2 border-t-4 border-[var(--accent-tertiary)] w-full"></div>
            <p className="text-3xl uppercase text-white md:pl-[0px] pl-[25px] tracking-[.1em]">Old Fashioned Values</p>
            </div>
          </div>
    </section>
    {/* start of about section */}
    <section className="py-[50px]">
<div className="max-w-screen-lg mx-auto py-3 px-4">
  <div className="flex flex-wrap relative">
    <div className="md:w-1/12 w-1/6 px-4">
    <Image
  src="/photos/About-Perfection.jpg"
  alt="Injection Spray Foam Insulation"
  width={50}
  height={200}
  className="w-[50px] h-[200px] object-contain object-top" // Ensures strict sizing
/>

    </div>
    <div className="md:w-3/12 w-2/3 px-4">
    <Link href="#about" className="block clip-custom-shape mb-2 uppercase font-proxima-bold italic">ABOUT OUR TEAM</Link>
    <Link href="#about" className="block clip-custom-shape my-2 uppercase font-proxima-bold italic">What Sets Us Apart</Link>
    <Link href="#about" className="block clip-custom-shape my-2 uppercase font-proxima-bold italic">Testimonials / Reviews</Link>
    <Link href="#about" className="block clip-custom-shape my-2 uppercase font-proxima-bold italic">Why Insulate</Link>
    </div>
    <div className="md:w-6/12 w-full md:pt-0 pt-8 px-4">
    <h2 className="text-accent text-4xl font-proxima-light">ABOUT OUR TEAM</h2>
    <p className="proxima-nova-thin">At the heart of our company is a team that genuinely cares — about our customers, the quality of our work, and the experience we deliver every step of the way. We are committed to providing exceptional service with professionalism, integrity, and attention to detail. Every project we undertake reflects our dedication to excellence and our unwavering focus on customer satisfaction. We don&apos;t just complete tasks — we build trust, exceed expectations, and take pride in doing things the right way.</p>
    </div>
  </div>
</div>
    </section>
    {/* end of about section */}
    {/* start of services section */}
    <section>
      <div className="max-w-screen-lg mx-auto py-3 px-4">
  <div className="flex flex-wrap justify-center relative">
    <div className="w-full md:w-3/4 text-center pb-4">
      <h2 className="text-accent text-4xl font-proxima-light">WALL FOAM INSULATION SERVICES</h2>
      <p className="text-lg">Whether you&apos;re dealing with cold spots, high energy costs, or just want a more efficient home, we&apos;ve got you covered.</p>
      </div>
      {/* start of individual service */}
      <div className="md:w-1/2 w-full relative px-4 my-4 group">
      <div className="relative py-[100px] overflow-hidden">
      <Image
  src="/photos/Cozy-Wall-Foam-Insulation.jpg"
  alt="Injection Spray Foam Insulation"
  fill
  className="w-full absolute top-0 left-0 h-100 object-cover object-top transition-transform duration-500 group-hover:scale-110" // Ensures strict sizing
/>

<div className="relative w-3/4 mx-auto py-2">
  <div className="bg-[var(--accent-primary)] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
  <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">
    <h3 className="text-xl font-aspira-bold m-0">Pour-In Foam Insulation</h3>
    <div className="my-1 border-t border-[var(--accent-tertiary)] w-full"></div>
    <p className="font-aspira-bold">Expands to seal every gap and void</p>
</div>
      </div>
      </div>
      </div>
      {/* end of individual service */}
      {/* start of individual service */}
     <div className="md:w-1/2 w-full relative px-4 my-4 group">
      <div className="relative py-[100px] overflow-hidden">
      <Image
  src="/photos/Cozy-Wall-Foam-Insulation.jpg"
  alt="Injection Spray Foam Insulation"
  fill
  className="w-full absolute top-0 left-0 h-100 object-cover object-top transition-transform duration-500 group-hover:scale-110" // Ensures strict sizing
/>

<div className="relative w-3/4 mx-auto py-2">
  <div className="bg-[var(--accent-primary)] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
  <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">
    <h3 className="text-xl font-aspira-bold m-0">Existing Wall Insulation</h3>
    <div className="my-1 border-t border-[var(--accent-tertiary)] w-full"></div>
    <p className="font-aspira-bold">Upgrade without tearing up drywall</p>
</div>
      </div>
      </div>
      </div>
      {/* end of individual service */}
      {/* start of individual service */}
     <div className="md:w-1/2 w-full relative px-4 my-4 group">
      <div className="relative py-[100px] overflow-hidden">
      <Image
  src="/photos/Cozy-Wall-Foam-Insulation.jpg"
  alt="Injection Spray Foam Insulation"
  fill
  className="w-full absolute top-0 left-0 h-100 object-cover object-top transition-transform duration-500 group-hover:scale-110" // Ensures strict sizing
/>

<div className="relative w-3/4 mx-auto py-2">
  <div className="bg-[var(--accent-primary)] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
  <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">
    <h3 className="text-xl font-aspira-bold m-0">Exterior / Interior Install</h3>
    <div className="my-1 border-t border-[var(--accent-tertiary)] w-full"></div>
    <p className="font-aspira-bold">Minimal disruption with maximum efficiency</p>
</div>
      </div>
      </div>
      </div>
      {/* end of individual service */}
      {/* start of individual service */}
     <div className="md:w-1/2 w-full relative px-4 my-4 group">
      <div className="relative py-[100px] overflow-hidden">
      <Image
  src="/photos/Cozy-Wall-Foam-Insulation.jpg"
  alt="Injection Spray Foam Insulation"
  fill
  className="w-full absolute top-0 left-0 h-100 object-cover object-top transition-transform duration-500 group-hover:scale-110" // Ensures strict sizing
/>

<div className="relative w-3/4 mx-auto py-2">
  <div className="bg-[var(--accent-primary)] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
  <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">
    <h3 className="text-xl font-aspira-bold m-0">Cinder Block Wall Insulation</h3>
    <div className="my-1 border-t border-[var(--accent-tertiary)] w-full"></div>
    <p className="font-aspira-bold">Fill block cavities with foam for improved performance</p>
</div>
      </div>
      </div>
      </div>
      {/* end of individual service */}
      </div>
      </div>
    </section>
    {/* end of services section */}
      <ContentBlock
        sectionClassName="pt-[50px]"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-accent text-4xl font-proxima-light">INDUSTRIES SERVED</h2>
      </ContentBlock>
      <Tabs
        tabs={tabsData}
        containerClassName="my-custom-container max-w-screen-lg mx-auto"
        headerClassName="flex flex-wrap overflow-hidden justify-center mb-4 px-4 headerClassName"
        tabButtonClassName="px-4 py-2 border mr-2"
        activeTabButtonClassName="bg-blue-600 text-white activeTabButtonClassName"
        contentClassName="p-4"
      />

      <ContentBlock
        sectionClassName="pt-[150px]"
        containerClassName="py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <Image
          src="/photos/Work-Sets-Us-Apart.jpg"
          alt="Injection Spray Foam Insulation"
          width={2000}
          height={2000}
          className="w-full h-auto object-cover object-center"
        />
      </ContentBlock>
      <ContentBlock
        sectionClassName="pt-[50px]"
        containerClassName="py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <Image
          src="/photos/Our-Process.jpg"
          alt="Injection Spray Foam Insulation"
          width={2000}
          height={2000}
          className="w-full h-auto object-cover object-center"
        />
      </ContentBlock>


    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
    </>
  );
}
