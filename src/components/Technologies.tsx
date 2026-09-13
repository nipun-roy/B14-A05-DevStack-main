import { useState } from "react";

// Technologies Full info
const technologiesData = [
  {
    id: "react",
    name: "React",
    badge: "Popular",
    badgeColor: "bg-sky-50 text-sky-600 border border-sky-100",
    desc: "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.9",
    iconColor: "text-[#00d8ff]",
    icon: (
      <svg className="w-8 h-8 text-[#00d8ff]" viewBox="0 0 115.3 100" fill="currentColor">
        <ellipse cx="57.65" cy="50" rx="14" ry="49.5" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(30 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="14" ry="49.5" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(90 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="14" ry="49.5" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(150 57.65 50)" />
        <circle cx="57.65" cy="50" r="10" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "vue",
    name: "Vue.js",
    badge: "Versatile",
    badgeColor: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    desc: "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.8",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 256 221">
        <path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" />
        <path fill="#34495E" d="M0 0l128 220.8L256 0h-51.2L128 132.48 49.92 0H0z" />
      </svg>
    ),
  },
  {
    id: "svelte",
    name: "Svelte",
    badge: "Fast",
    badgeColor: "bg-orange-50 text-orange-600 border border-orange-100",
    desc: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.8",
    icon: (
      <svg className="w-8 h-8 text-[#ff3e00]" viewBox="0 0 32 32" fill="currentColor">
        <path d="M26.7 8.3C25 4.9 21.1 3 17 3.2c-4.4.2-8.3 2.6-10.1 6.5-1.9 4-.9 8.8 2.3 11.9L8 23.3c-1.7 3.4.2 7.3 3.9 8.1 4.1.9 8.3-.9 10.3-4.6 2-3.8 1.1-8.5-2.2-11.4l1.3-1.8c1.6-3.4-.3-7.2-3.9-8.1 1.7-.5 3.5-.4 5.1.5.8.5 1.5 1.2 1.9 2l2.3-1.7z" />
      </svg>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js",
    badge: "SSR / Edge",
    badgeColor: "bg-purple-50 text-purple-600 border border-purple-100",
    desc: "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.9",
    icon: (
      <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm tracking-tighter">
        N
      </div>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js",
    badge: "Standard",
    badgeColor: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    desc: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: "4.8",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#539e43] text-white flex items-center justify-center font-bold text-xs">
        JS
      </div>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    badge: "Top SQL",
    badgeColor: "bg-sky-50 text-sky-600 border border-sky-100",
    desc: "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: "4.9",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#336791] text-white flex items-center justify-center font-bold text-xs">
        SQL
      </div>
    ),
  },
  {
    id: "redis",
    name: "Redis",
    badge: "Cache",
    badgeColor: "bg-rose-50 text-rose-500 border border-rose-100",
    desc: "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: "4.8",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#dc382d] text-white flex items-center justify-center font-bold text-xs">
        RD
      </div>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript",
    badge: "Ubiquitous",
    badgeColor: "bg-amber-50 text-amber-600 border border-amber-100",
    desc: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: "4.9",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#f7df1e] text-black font-bold flex items-center justify-center text-xs">
        JS
      </div>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    badge: "Essential",
    badgeColor: "bg-sky-50 text-sky-600 border border-sky-100",
    desc: "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: "4.9",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#3178c6] text-white font-bold flex items-center justify-center text-xs">
        TS
      </div>
    ),
  },
  {
    id: "java",
    name: "Java",
    badge: "Robust",
    badgeColor: "bg-cyan-50 text-cyan-600 border border-cyan-100",
    desc: "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: "4.6",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#e76f00] text-white font-bold flex items-center justify-center text-xs">
        ☕
      </div>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    badge: "Modern",
    badgeColor: "bg-cyan-50 text-cyan-600 border border-cyan-100",
    desc: "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: "4.9",
    icon: (
      <svg className="w-8 h-8 text-[#06b6d4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-4.4 0-6.6 2.2-6.6 6.6 0 2.2 1.1 3.3 2.2 3.3 1.1 0 1.6-.6 2.2-1.1.7-.7 1.7-1.7 3.3-1.7 3.3 0 5.5 1.7 5.5 4.4 0 2.2-1.7 3.9-3.9 3.9-2.2 0-3.3-1.1-4.4-2.2-.6-.6-1.1-1.1-1.7-1.1-.6 0-1.1.6-1.1 1.1 0 2.8 2.2 5 5 5 4.4 0 6.6-2.2 6.6-6.6 0-2.2-1.1-3.3-2.2-3.3-1.1 0-1.6.6-2.2 1.1-.7.7-1.7 1.7-3.3 1.7-3.3 0-5.5-1.7-5.5-4.4C2 4.2 4.2 2 7 2c2.2 0 3.3 1.1 4.4 2.2.6.6 1.1 1.1 1.7 1.1.6 0 1.1-.6 1.1-1.1C14.2 1.8 12.8 1 12 1z" />
      </svg>
    ),
  },
  {
    id: "docker",
    name: "Docker",
    badge: "Containers",
    badgeColor: "bg-sky-50 text-sky-600 border border-sky-100",
    desc: "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: "4.9",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#2496ed] text-white flex items-center justify-center font-bold text-xs">
        🐳
      </div>
    ),
  },
];

const Technologies = () => {
  // default Svelte and Redis selected
  const [selectedIds, setSelectedIds] = useState<string[]>(["svelte", "redis"]);

  //  Function add for stack add
  const handleAddToStack = (id: string) => {
    if (!selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Remove fuction from Stack
  const handleRemoveFromStack = (id: string) => {
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  // All item remove function
  const handleRemoveAll = () => {
    setSelectedIds([]);
  };

  //  selected technology's object list
  const selectedTechs = technologiesData.filter((tech) =>
    selectedIds.includes(tech.id)
  );

  return (
    <section className="max-w-7xl mx-auto px-16 py-8">
      
      {/*  (Header) */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* ২. Main Section: Left side 3 column card and Right side Your Stack  */}
      <div className="flex items-start gap-8">
        
        {/* টেকনোলজি কার্ড গ্রিড Technology card grid 3 column  */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          {technologiesData.map((tech) => (
            <div
              key={tech.id}
              className="border border-gray-100 rounded-2xl p-6 bg-white shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Icon and badge  */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${tech.badgeColor}`}
                  >
                    {tech.badge}
                  </span>
                </div>

                {/* title */}
                <h3 className="text-xl font-bold text-slate-900 mt-4">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 mt-2 leading-relaxed min-h-[48px]">
                  {tech.desc}
                </p>

                {/* category level andm rating */}
                <div className="flex items-center justify-between gap-2 mt-4 text-xs font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md whitespace-nowrap">
                      {tech.category}
                    </span>
                    <span className="whitespace-nowrap">{tech.level}</span>
                  </div>
                  <span className="text-amber-500 font-bold whitespace-nowrap flex items-center gap-0.5">
                    ★ {tech.rating}
                  </span>
                </div>
              </div>

              {/* Add to Stack Button */}
              <button
                onClick={() => handleAddToStack(tech.id)}
                disabled={selectedIds.includes(tech.id)}
                className={`w-full py-2.5 rounded-lg text-sm font-semibold mt-6 transition cursor-pointer ${
                  selectedIds.includes(tech.id)
                    ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                    : "bg-[#0f172a] hover:bg-slate-800 text-white active:scale-98"
                }`}
              >
                {selectedIds.includes(tech.id) ? "Added to Stack" : "Add to Stack"}
              </button>
            </div>
          ))}
        </div>

        {/* Right side "Your Stack" Side Bar */}
        <div className="w-80 shrink-0 border border-gray-100 rounded-2xl p-6 bg-white shadow-xs sticky top-6">
          <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
          <p className="text-xs text-gray-400 mt-1">
            {selectedIds.length} Technology Selected
          </p>

          {/* Selected Technology List  */}
          <div className="mt-5 flex flex-col gap-3 min-h-[140px]">
            {selectedTechs.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-8">
                No technology selected yet.
              </p>
            ) : (
              selectedTechs.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-100 rounded-xl p-3 flex items-center justify-between bg-white shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-gray-400">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveFromStack(item.id)}
                    className="text-gray-400 hover:text-red-500 text-sm font-bold p-1 rounded transition cursor-pointer"
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Remove All  */}
          <button
            onClick={handleRemoveAll}
            disabled={selectedIds.length === 0}
            className={`w-full border border-red-200 text-red-500 hover:bg-red-50 font-semibold py-2 rounded-lg text-sm transition mt-6 cursor-pointer ${
              selectedIds.length === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Remove All
          </button>
        </div>

      </div>

    </section>
  );
};

export default Technologies;
