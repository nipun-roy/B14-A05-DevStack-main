import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  // Data fetch from JSON File (useEffect)
  useEffect(() => {
    setLoading(true);
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load technologies");
        return res.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching technologies:", error);
        setLoading(false);
        toast.error("Failed to load technologies data.");
      });
  }, []);

  // (Add to Stack)
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // Technology remove
  const handleRemoveFromStack = (tech: Technology) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  };

  // (Remove All)
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
  };

  //  Badge background and text color
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Popular":
        return "bg-sky-50 text-sky-600 border border-sky-100";
      case "Versatile":
        return "bg-emerald-50 text-emerald-600 border border-emerald-100";
      case "Fast":
        return "bg-orange-50 text-orange-600 border border-orange-100";
      case "SSR / Edge":
        return "bg-purple-50 text-purple-600 border border-purple-100";
      case "Standard":
        return "bg-green-50 text-green-600 border border-green-100";
      case "Top SQL":
        return "bg-blue-50 text-blue-600 border border-blue-100";
      case "Cache":
        return "bg-rose-50 text-rose-500 border border-rose-100";
      case "Ubiquitous":
        return "bg-amber-50 text-amber-600 border border-amber-100";
      case "Essential":
        return "bg-sky-50 text-sky-600 border border-sky-100";
      case "Robust":
        return "bg-cyan-50 text-cyan-600 border border-cyan-100";
      case "Modern":
        return "bg-teal-50 text-teal-600 border border-teal-100";
      case "Containers":
        return "bg-sky-50 text-sky-600 border border-sky-100";
      default:
        return "bg-slate-50 text-slate-600 border border-slate-200";
    }
  };

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
      {/* Section header */}
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/*  (Loading State) */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium text-sm">Loading technologies...</p>
        </div>
      ) : (
        /* Main content: Left side card grid and right side your stack side bar*/
        <div className="flex flex-col lg:flex-row items-start gap-8">
          
          {/* Card Grid: Mobile 1 column, Tablet 2 column, Desktop 3 column */}
          <div className="w-full lg:flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const isAdded = selectedStack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="border border-gray-100 rounded-2xl p-6 bg-white shadow-xs hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    {/* icon ও badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 flex items-center justify-center p-1 bg-slate-50 rounded-lg">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeColor(tech.badge)}`}>
                        {tech.badge}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-slate-900 mt-4">
                      {tech.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed min-h-[48px]">
                      {tech.description}
                    </p>

                    {/* Category , Defficulty এবং Rating */}
                    <div className="flex items-center justify-between gap-2 mt-4 text-xs font-medium text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md whitespace-nowrap">
                          {tech.category}
                        </span>
                        <span className="whitespace-nowrap">{tech.difficulty}</span>
                      </div>
                      <span className="text-amber-500 font-bold whitespace-nowrap flex items-center gap-0.5">
                        ★ {tech.rating}
                      </span>
                    </div>
                  </div>

                  {/* Add to Stack  */}
                  <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isAdded}
                    className={`w-full py-2.5 rounded-lg text-sm font-semibold mt-6 transition cursor-pointer ${
                      isAdded
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed"
                        : "bg-[#0f172a] hover:bg-slate-800 text-white active:scale-98"
                    }`}
                  >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Your Stack Side bar */}
          <div className="w-full lg:w-80 shrink-0 border border-gray-100 rounded-2xl p-6 bg-white shadow-xs sticky top-24">
            <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
            <p className="text-xs text-gray-400 mt-1">
              {selectedStack.length} Technology Selected
            </p>

            {/* selected technoloy list or emty list */}
            <div className="mt-5 flex flex-col gap-3 min-h-[160px]">
              {selectedStack.length === 0 ? (
                /* Empty State Message */
                <div className="flex flex-col items-center justify-center py-10 text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xl mb-3">
                    🧰
                  </div>
                  <p className="text-sm font-medium text-slate-700">Your stack is empty</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Click "Add to Stack" on any technology card to start building.
                  </p>
                </div>
              ) : (
                selectedStack.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-100 rounded-xl p-3 flex items-center justify-between bg-white shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 flex items-center justify-center p-0.5 bg-slate-50 rounded">
                        <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                        <span className="text-[11px] text-gray-400">{item.category}</span>
                      </div>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => handleRemoveFromStack(item)}
                      className="text-gray-400 hover:text-red-500 hover:bg-red-50 text-sm font-bold p-1 rounded-md transition cursor-pointer"
                      title={`Remove ${item.name}`}
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Remove All Button*/}
            <button
              onClick={handleRemoveAll}
              disabled={selectedStack.length === 0}
              className={`w-full border border-red-200 text-red-500 hover:bg-red-50 font-semibold py-2 rounded-lg text-sm transition mt-6 cursor-pointer ${
                selectedStack.length === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              Remove All
            </button>
          </div>

        </div>
      )}
    </section>
  );
};

export default Technologies;
