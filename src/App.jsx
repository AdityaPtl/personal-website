import React from "react";
import "@fontsource/roboto-mono";

export default function App() {
  return (
    <div className="bg-neutral-900 text-neutral-200 min-h-screen font-mono text-[15px]">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 px-12 sm:px-16 pt-24 pb-[20vh]">

        {/* Column 1: Name, Info, Links */}
        <div className="col-span-1 space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-0">
              Aditya<br />Patel
            </h1>
            <p className="text-sm text-neutral-400">Figuring it out day by day.</p>
            <p className="text-sm text-neutral-400">aditya.patel@outlook.com.au</p>
          </div>

          <div className="w-[200px] h-[200px]">
            <img
              src="aditya.jpg"
              alt="Portrait"
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
              className="w-full"
              style={{ color: "transparent" }}
            />
          </div>

          <div className="pt-4">
            <p className="font-bold text-xs uppercase tracking-wide mb-2 text-neutral-300">Sydney, NSW</p>
            <ul className="space-y-2 text-[14px]">
              <li><a href="/resume.pdf" target="_blank" className="text-neutral-400 underline underline-offset-4 decoration-dotted hover:text-neutral-300">resume ↗</a></li>
              <li><a href="https://linkedin.com/in/example" target="_blank" className="text-neutral-400 underline underline-offset-4 decoration-dotted hover:text-neutral-300">linkedin ↗</a></li>
              <li><a href="https://github.com/AdityaPtl" target="_blank" className="text-neutral-400 underline underline-offset-4 decoration-dotted hover:text-neutral-300">github ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Column 2: Empty */}
        <div className="col-span-1"></div>

        {/* Column 3: Currently */}
        <div className="col-span-1 space-y-14 text-[15px]">
          <div>
            <p className="font-bold text-[14px] mb-6">Currently</p>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">01</p>
              <p className="text-[13px]">
                Penultimate year, studying Computer Science @{" "}
                <a
                  href="https://www.sydney.edu.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 underline underline-offset-4 decoration-dotted hover:text-neutral-300"
                >
                  USYD ↗
                </a>
              </p>
            </div>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">02</p>
              <p className="text-[13px]">
                Full time customer service rep @{" "}
                <a
                  href="https://www.visy.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 underline underline-offset-4 decoration-dotted hover:text-neutral-300"
                >
                  Visy Board ↗
                </a>
              </p>
            </div>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">03</p>
              <p className="text-[13px]">Committed to the Phoenix Suns 🏀... They’re committed to letting me down.</p>
            </div>
          </div>
        </div>

        {/* Column 4: Projects */}
        <div className="col-span-1 space-y-14 text-[15px]">
          <div>
            <p className="font-bold text-[14px] mb-6">Projects</p>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">01</p>
              <p className="text-[13px]">Worked in both production and warehouse @ Snackbrands making chips</p>
            </div>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">02</p>
              <p className="text-[13px]">Built dozens of projects with Python, SQL, and JavaScript</p>
            </div>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">03</p>
              <p className="text-[13px]">Worked @ Foodworks in Malabar</p>
            </div>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">04</p>
              <p className="text-[13px]">Spent way too long on Stack Overflow and GitHub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Heading Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 px-8 sm:px-16 pt-24">
        <div className="col-span-1 sm:col-start-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-4">Projects</h2>
          <p className="text-[13px] text-neutral-400">Tools I’ve built while learning and exploring software development.</p>
        </div>
      </div>

      {/* Projects Section (Left) */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 px-8 sm:px-16 pt-10 pb-20">
        <div className="col-span-1 sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-24 self-start pr-12">
          <div className="space-y-2">
            <p className="text-[13px] text-neutral-500">01</p>
            <h3 className="text-[14px] font-semibold">Budget Tracker App</h3>
            <p className="text-[13px] text-neutral-400">A full stack finance tool with dynamic budgeting, charts, and secure auth.</p>
            <div className="flex gap-4 text-[13px]">
              <a href="https://github.com/AdityaPtl/budget-tracker" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://your-budget-app-link.com" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[13px] text-neutral-500">02</p>
            <h3 className="text-[14px] font-semibold">Cost of Living Explorer</h3>
            <p className="text-[13px] text-neutral-400">Compares cost-of-living data such as rent and utilities across Australian cities.</p>
            <div className="flex gap-4 text-[13px]">
              <a href="https://github.com/AdityaPtl/cost-of-living-explorer" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://your-notebook-viewer.com" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">Notebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
