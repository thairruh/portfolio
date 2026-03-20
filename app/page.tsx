import Star from "@/components/star";
import AboutBlob from "@/components/aboutBlob";
import SmallStar from "@/components/smallStar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF0D2] text-[#57072F]">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center">

        <div className="absolute left-25 top-20 w-1/2 h-auto">
          <Star />
        </div>

        <div className="text-8xl z-20 absolute left-74 top-84 text-right">
          HELLO, I'M <br/>
          <span className="font-bold">THAIRA!</span>
          <br/><span className="text-5xl leading-none block">/ˈtaɪ.rə/</span>
        </div>

        <div className="text-3xl absolute right-25 top-136 text-right">
          Currently listening...

          <div className="mt-5 rounded-lg bg-[#C5D7F2] w-100 h-40 flex items-center px-6 gap-6">
            <div className="w-30 h-30 bg-[#D9D9D9] block"></div>
            <div>
              <p className="text-lg ">blah blah</p>
              <p className="text-lg">blah blah blah</p>
            </div>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section className="relative min-h-[120vh] overflow-hidden">
        <AboutBlob />

        <div className="relative z-10 h-full w-full">
          <div className="absolute inset-x-0 top-133 -translate-y-1/2 px-[10%]">
            <h2 className="text-[#A92F50] text-6xl font-bold">ABOUT ME</h2>
            <div className="w-83 bg-[#F3EED7] h-0.5 mt-1"></div>
            <p className="mt-8 max-w-lg text-[#5c2340] text-3xl">
              My full name is <span className="font-bold">Thaira Choudhury</span> and I am an undergraduate 
              student at the <span className="font-bold">University of Central Florida</span>. I'm majoring
              in <span className="font-bold">computer science</span> with a minor in digital media. I enjoy coding,
              playing video games, cooking, and thrifting!
            </p>
          </div>
          <div className="absolute right-30 top-133 -translate-y-1/2 w-125">
            <img src="/thaira.png"></img>
          </div>
          <div className="absolute right-30 top-138">
            <SmallStar/>
          </div>
        </div>
      </section>

      {/* technologies */}
      <section className="min-h-screen flex items-center justify-center">
        <p>Technologies section</p>
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