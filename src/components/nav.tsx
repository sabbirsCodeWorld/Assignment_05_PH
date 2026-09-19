import logo from "../assets/logo-text.png";

const navItems = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  return (
    <header className=" sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm font-[Plus Jakarta Sans]">
        {/* //logo */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <img src={logo} alt="Logo" />
        

        {/* //nav items */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item}
              href="#"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-600">
              {item}
            </a>
          ))}
        </nav>
        {/* //sign in and sign up buttons */}
        <div className="flex items-center gap-3">
          <button className="cursor-pointer hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium
           text-slate-700 transition hover:border-slate-300 hover:text-slate-900 sm:inline-flex">
            Sign in
          </button>
          <button className="bg-pink-600 inline-flex rounded-full px-4 py-2 text-sm font-semibold
           text-white shadow-lg shadow-violet-500/30 transition 
           hover:brightness-110 hover:scale-105 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}
