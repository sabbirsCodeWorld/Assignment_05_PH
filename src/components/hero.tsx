import logo from "../assets/banner-stack.png";

export default function Hero() {
    return (
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-50 lg:flex-row lg:items-center 
                lg:justify-between lg:gap-15">
                {/* Left side: text content */}
                <div className="w-full max-w-xl lg:w-[80%]">
                    <h1 className="text-2xl font-black leading-[1.05] tracking-[-0.04em]
                        text-slate-900 sm:text-5xl lg:text-[4rem] font-[Inter]">
                        Build Your Ideal
                        <span className="font-[Inter] mt-2 block bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className="font-[Plus Jakarta Sans] mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                        Explore frontend, backend, database, and tooling options. Compare them side by side,
                        and put together the stack that fits your next project.
                    </p>
                    {/* two buttons */}
                    <div className="font-[Inter]mt-8 flex flex-wrap items-center gap-4">
                        <button className="inline-flex items-center justify-center rounded-xl 
                            bg-linear-to-r from-orange-500 to-pink-500 text-white px-5 py-3 
                            text-sm font-semibold shadow-lg shadow-purple-500/30 
                            transition hover:brightness-110 hover:scale-105 cursor-pointer">
                            Explore Technologies
                        </button>
                        <button className="inline-flex items-center justify-center 
                        rounded-xl border border-slate-300 bg-white px-5 py-3 
                        text-sm font-semibold text-slate-700 shadow-sm transition 
                        hover:border-slate-400  font-[Inter] hover:text-slate-900 hover:scale-105 
                        cursor-pointer">Learn More</button>
                    </div>
                </div>
                
                {/* Right side: image */}
                <div className="w-full max-w-xl lg:w-[50%] mx-0 lg:mx-auto">
                    <img
                        src={logo}
                        alt="Hero Image"
                        className="aspect-[1.08] w-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
