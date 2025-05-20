import Image from "next/image";
import Tabs, {Tab} from "@/app/components/reusable/tabs";
import ContentBlock from "@/app/components/reusable/content-block";
import Nav from "./components/nav";

export default function Home() {
  const tabsData: Tab[] = [
    {
      title: "Integrity",
      content: (
        <div>
          <p>
            At Paint Innovators, integrity is our highest priority. We are
            committed to delivering excellent customer service with ethics and
            morals, and we diligently take responsibility for our work to ensure
            your complete satisfaction.
          </p>
        </div>
      ),
      customTabButtonClassName: "lg:w-1/4 w-1/2", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
    {
      title: "Safety",
      content: (
        <div>
          <p>
            Safety is paramount in everything we do. We strictly adhere to CDC
            Safety Guidelines during all our in-person estimates and painting
            projects.
          </p>
        </div>
      ),
      // No custom classes/styles; will use defaults.
      customTabButtonClassName: "lg:w-1/4 w-1/2", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
    {
      title: "Respect",
      content: (
        <div>
          <p>
            We believe in treating every client and their property with the
            utmost respect. We are committed to fostering a positive and
            professional environment
          </p>
        </div>
      ),
      customTabButtonClassName: "lg:w-1/4 w-full", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
  ];

  return (
    <>
    <Nav />
    <section className="relative w-full pt-[260px] pb-[260px]">
<div
  className="absolute w-full h-full z-[1] top-0 left-0"
  style={{
    background: 'linear-gradient(0deg, rgba(27, 56, 100, 1) 0%, rgba(255, 255, 255, 0) 45%)'
  }}
></div>
<Image 
          src="/photos/Cozy-Wall-Foam-Insulation.jpg" 
          alt="Injection Spray Foam Insulation" 
          fill
          objectFit="cover" 
          className="opacity-75 top-0 left-0 z-0"
        />
<div className="bg-[#bb854b] absolute w-full mix-blend-multiply h-[175px] top-[215px]"></div>
      <div className="relative w-full h-full">
        
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
        <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">

          <div className="relative py-2 px-4 rounded-lg w-full">
            <h1 className="text-2xl md:text-4xl font-bold">INJECTION SPRAY FOAM INSULATION</h1>
            <p className="text-base md:text-lg italic mt-2">Wrap Your Home in Comfort Year-Round with Expert Exterior Wall Insulation</p>
          </div>

        </div>
      </div>
            <div className="w-3/4 absolute bottom-10 right-0 z-[1]">
            <p className="text-3xl uppercase text-white lg:pl-[100px]">Modern Technology</p>
            <div className="border-t border-[var(--accent-tertiary)] w-full"></div>
            <p className="text-3xl uppercase text-white">Old Fashioned Values</p>
          </div>
    </section>
      <ContentBlock
        sectionClassName="pt-[50px]"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-5xl font-aspira-thin">CORE VALUES</h2>
      </ContentBlock>
      <Tabs
        tabs={tabsData}
        containerClassName="my-custom-container max-w-screen-lg mx-auto"
        headerClassName="flex flex-wrap overflow-hidden justify-center mb-4 px-4 headerClassName"
        tabButtonClassName="px-4 py-2 border mr-2"
        activeTabButtonClassName="bg-blue-600 text-white activeTabButtonClassName"
        contentClassName="p-4"
      />


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
