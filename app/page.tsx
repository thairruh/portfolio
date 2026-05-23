import Hero from "@/components/hero";
import AboutBlob from "@/components/aboutBlob";
import SmallStar from "@/components/smallStar";
import Music from "@/components/music";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6ECD9] text-[#57072F]">
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center min-h-screen px-4 md:px-10 gap-2 lg:gap-10 overflow-hidden">
        <Hero />

        <div className="-mt-5 md:mt-0 lg:translate-y-5 lg:translate-x-30">
          <Music />
        </div>
      </section>


      {/* ABOUT */}
      <section className="relative h-[110vh] overflow-hidden ">
        <AboutBlob />
        
        <div className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-2 items-center gap-10 px-[8%] py-24">
          {/* text side */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left translate-y-25 lg:translate-y-0">
            <h2 className="text-[#A92F50] text-4xl md:text-5xl lg:text-6xl font-bold">
              ABOUT ME
            </h2>

            <div className="w-56 md:w-83 bg-[#F3EED7] h-0.5 mt-1"></div>

            <p className="mt-6 md:mt-8 max-w-lg text-[#5c2340] text-xl md:text-2xl lg:text-3xl leading-tight">
              My full name is <span className="font-bold">Thaira Choudhury</span> and I'm an undergraduate 
              student at the <span className="font-bold">University of Central Florida</span>. I'm majoring
              in <span className="font-bold">computer science</span> with a minor in digital media. I enjoy coding,
              playing video games, cooking, and thrifting!
            </p>
          </div>

          {/* image side */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/thaira.png"
              alt="Thaira"
              className="w-[70vw] max-w-90 md:max-w-110 lg:max-w-125"
            />

            <div className="absolute bottom-0 translate-x-20 translate-y-2  md:translate-x-30 lg:-right-4 lg:translate-x-0 w-25 md:w-40 lg:w-53">
              <SmallStar />
            </div>
          </div>
        </div>
      </section>

      {/* technologies */}
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
          TECHNOLOGIES
        </h1>
      </section>

      {/* projects */}
      <section className="min-h-screen flex items-center justify-center">
        <p>Projects section</p>
      </section>

      {/* experience */}
      <section className="min-h-screen flex items-center justify-center">
        <p>Experience section</p>
      </section>
    </main>
  );
}