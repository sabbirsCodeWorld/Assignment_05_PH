import logo from '../assets/logo-text.png'
const productLinks = ['Home', 'Technologies', 'Projects']
const companyLinks = ['About', 'Contact', 'Careers']
const legalLinks = ['Privacy Policy', 'Terms of Service']

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-10 font-[Plus Jakarta Sans]">
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        {/* top footer area: brand + three columns */}
        <div className="grid gap-10 border-b border-slate-200 pb-8 md:grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr]">
          {/* brand information block */}
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="h-8 w-auto" />

            <p className="max-w-xs text-sm leading-6 text-slate-600">
              Curated tools, technologies, and resources for developers building modern web experiences.
            </p>

            <div className="mt-5 flex items-center  gap-4 text-slate-750">
              <a href="#" aria-label="GitHub" className="transition hover:text-slate-900">
                GitHub
              </a>
              <a href="#" aria-label="Twitter" className="transition hover:text-slate-900">
                Twitter
              </a>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* product links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-750">Product</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-violet-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* company links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-750">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-violet-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* legal links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-750">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-violet-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom bar: copyright and links */}
        <div className="flex flex-col gap-3 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
