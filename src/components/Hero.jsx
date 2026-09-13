export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-28">
      <div className="section-container grid items-center gap-12 md:grid-cols-2">

        {/* Left */}
        <div>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Build Your Ideal
            <br />

            <span className="brand-gradient">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-md border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition hover:border-pink-300 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative flex h-72 w-72 items-center justify-center md:h-80 md:w-80">
            <div className="absolute h-56 w-56 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-2xl" />

            <img
              src="/images/hero-stack.png"
              alt="Development stack illustration"
              className="relative z-10 w-64 drop-shadow-[0_20px_40px_rgba(120,80,220,0.35)] md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}