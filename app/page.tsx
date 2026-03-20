import Star from "@/components/star";

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

      {/* about */}
      <section className="min-h-screen flex items-center justify-center">
        <p>About section</p>
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