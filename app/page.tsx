import Star from "@/components/star";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF0D2] text-[#57072F]">
      {/* hero */}
      <section className="h-screen flex items-center justify-center">
        <div className="absolute left-0 top-20 w-1/2 h-auto">
          <Star />
        </div>
        <h1 className="text-4xl font-semibold">
          Hello! I’m Thaira
        </h1>
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