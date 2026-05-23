export default function Music() {
    return (
        <div className="text-center lg:text-right">
        <p className="text-2xl md:text-3xl">
            Currently listening...
        </p>

        <div className="mt-4 rounded-lg bg-[#C5D7F2] w-[92vw] max-w-[400px] md:max-w-[420px] h-32 md:h-40 flex items-center px-4 md:px-6 gap-4 md:gap-6">
            <div className="w-24 h-24 md:w-30 md:h-30 bg-[#D9D9D9] shrink-0"></div>

            <div className="text-left">
            <p className="text-base md:text-lg">blah blah</p>
            <p className="text-base md:text-lg">blah blah blah</p>
            </div>
        </div>
        </div>
    );
}