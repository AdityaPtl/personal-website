import React, { useState, useEffect } from "react";
import "@fontsource/roboto-mono";

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } bg-neutral-900 text-neutral-200 min-h-screen font-mono text-[15px]`}
    >
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
              <h3 className="text-[14px] font-semibold">Budget Tracker App</h3>
              <p className="text-[13px] text-neutral-400">A full stack finance tool with dynamic budgeting, charts, and secure auth.</p>
              <div className="flex gap-4 text-[13px]">
                <a href="https://github.com/AdityaPtl/budget-tracker" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://financial-planning-adi.com/" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">Live</a>
              </div>            
            </div>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">02</p>
              <h3 className="text-[14px] font-semibold">Cost of Living Comparison Tool</h3>
              <p className="text-[13px] text-neutral-400">An interactive data exploration tool that compares cost of living metrics across Australian cities.</p>
              <div className="flex gap-4 text-[13px]">
                <a href="https://github.com/AdityaPtl/cost-of-living" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://cost-of-living-adi.streamlit.app/" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">Live</a>
              </div>                  
            </div>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">03</p>
              <h3 className="text-[14px] font-semibold">Placeholder for 3rd project</h3>
              <p className="text-[13px] text-neutral-400">placeholder for 3rd project.</p>
              <div className="flex gap-4 text-[13px]">
                <a href="https://github.com/AdityaPtl/budget-tracker" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://your-budget-app-link.com" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">Live</a>
              </div>                  
            </div>

            <div className="mb-12">
              <p className="text-sm text-neutral-500 mb-4">04</p>
              <h3 className="text-[14px] font-semibold">More on my Github</h3>
              <p className="text-[13px] text-neutral-400">You can find more tools, experiments, and ongoing projects on my GitHub.</p>
              <div className="flex gap-4 text-[13px]">
                <a href="https://github.com/AdityaPtl/" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">GitHub</a>
              </div>      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
