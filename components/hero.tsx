import Star from "@/components/star";

export default function Hero() {
  return (
    <div className="relative w-[90vw] max-w-[720px] md:w-[75vw] lg:w-[650px]">
    <div className="w-full">
      <Star />
    </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center translate-y-2 md:text-right md:translate-x-10 md:translate-y-5 lg:translate-x-27 lg:translate-y-10">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            HELLO, I'M <br />
            <span className="font-bold">THAIRA!</span>
            </h1>

            <span className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl leading-none block ">
            /ˈtaɪ.rə/
            </span>
        </div>
        </div>
    </div>
  );
}