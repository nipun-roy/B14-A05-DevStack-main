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
  const [techList, setTechList] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [myStack, setMyStack] = useState<Technology[]>([]);

  // load data from json
  useEffect(() => {
    fetch("./technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Could not load data");
      });
  }, []);

  // add to my stack
  const addToStack = (item: Technology) => {
    const exists = myStack.some((tech) => tech.id === item.id);
    if (exists) {
      toast.warn(`${item.name} is already added!`);
      return;
    }
    setMyStack([...myStack, item]);
    toast.success(`${item.name} added to stack!`);
  };

  // remove single item
  const removeFromStack = (id: string, name: string) => {
    const updated = myStack.filter((tech) => tech.id !== id);
    setMyStack(updated);
    toast.info(`${name} removed`);
  };

  // clear entire stack
  const clearAll = () => {
    if (myStack.length === 0) return;
    setMyStack([]);
    toast.info("All items removed");
  };

  const getIconUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    if (path.startsWith("./")) return path;
    if (path.startsWith("/")) return `.${path}`;
    return `./${path}`;
  };

  const getBadgeStyle = (badge: string) => {
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
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-10 h-10 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm">Loading technologies...</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Card Grid */}
          <div className="w-full lg:flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {techList.map((tech) => {
              const isAdded = myStack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="border border-gray-100 rounded-2xl p-6 bg-white shadow-xs hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 flex items-center justify-center p-1 bg-slate-50 rounded-lg">
                        <img
                          src={getIconUrl(tech.icon)}
                          alt={tech.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeStyle(tech.badge)}`}>
                        {tech.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mt-4">
                      {tech.name}
                    </h3>

                    <p className="text-xs text-gray-500 mt-2 leading-relaxed min-h-[48px]">
                      {tech.description}
                    </p>

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

                  <button
                    onClick={() => addToStack(tech)}
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

          {/* Your Stack Sidebar */}
          <div className="w-full lg:w-80 shrink-0 border border-gray-100 rounded-2xl p-6 bg-white shadow-xs sticky top-24">
            <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
            <p className="text-xs text-gray-400 mt-1">
              {myStack.length} Technology Selected
            </p>

            <div className="mt-5 flex flex-col gap-3 min-h-[160px]">
              {myStack.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xl mb-3">
                    🧰
                  </div>
                  <p className="text-sm font-medium text-slate-700">Your stack is empty</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Click "Add to Stack" on any card to add it here.
                  </p>
                </div>
              ) : (
                myStack.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-100 rounded-xl p-3 flex items-center justify-between bg-white shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 flex items-center justify-center p-0.5 bg-slate-50 rounded">
                        <img src={getIconUrl(item.icon)} alt={item.name} className="w-6 h-6 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                        <span className="text-[11px] text-gray-400">{item.category}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromStack(item.id, item.name)}
                      className="text-gray-400 hover:text-red-500 hover:bg-red-50 text-sm font-bold p-1 rounded-md transition cursor-pointer"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={clearAll}
              disabled={myStack.length === 0}
              className={`w-full border border-red-200 text-red-500 hover:bg-red-50 font-semibold py-2 rounded-lg text-sm transition mt-6 cursor-pointer ${
                myStack.length === 0 ? "opacity-40 cursor-not-allowed" : ""
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
