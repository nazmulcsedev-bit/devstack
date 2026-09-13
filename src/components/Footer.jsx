export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="section-container py-12">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-xs font-bold text-white">
                DS
              </span>

              <span className="font-bold text-gray-900">
                Dev <span className="brand-gradient">Stack</span>
              </span>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5 text-xs font-medium text-gray-600">
              <a href="#" className="hover:text-pink-500">GitHub</a>
              <a href="#" className="hover:text-pink-500">Twitter</a>
              <a href="#" className="hover:text-pink-500">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase text-gray-800">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">
              <a href="#home">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#projects">Projects</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase text-gray-800">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-5">
          <div className="flex flex-col justify-between gap-3 text-[10px] text-gray-400 sm:flex-row">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-5">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}