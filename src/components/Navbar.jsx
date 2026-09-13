import { useState } from "react";

const navItems = [
  "Home",
  "Technologies",
  "Projects",
  "About",
  "Contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-sm lg:hidden"
            aria-label="Open menu"
          >
            <span className="text-xl">☰</span>
          </button>

          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-xs font-bold text-white">
              DS
            </span>

            <span className="hidden sm:inline">
              <span className="text-gray-900">Dev </span>
              <span className="brand-gradient">Stack</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm transition hover:text-pink-500 ${
                  index === 0
                    ? "font-medium text-pink-500"
                    : "text-gray-500"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-2">
            <button className="hidden text-sm text-gray-600 transition hover:text-pink-500 sm:block">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-4 py-2 text-xs font-semibold text-white shadow-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="border-t border-gray-100 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-pink-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}