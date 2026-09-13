import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load JSON data
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technology data.");
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAdd = (technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one
  const handleRemove = (id) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  const isAdded = (id) => {
    return stack.some((item) => item.id === id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* Technologies */}
      <section
        id="technologies"
        className="scroll-mt-20 pb-16"
      >
        <div className="section-container">

          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Explore the{" "}
              <span className="brand-gradient">
                Technologies
              </span>
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex min-h-64 items-center justify-center">
              <div className="flex items-center gap-3">
                <span className="loading loading-spinner loading-md text-pink-500" />
                <span className="text-sm text-gray-500">
                  Loading technologies...
                </span>
              </div>
            </div>
          ) : (
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_280px]">

              {/* Cards */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={isAdded(technology.id)}
                    onAdd={handleAdd}
                  />
                ))}
              </div>

              {/* Stack */}
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          )}
        </div>
      </section>

      {/* Placeholder sections for navbar */}
      <section
        id="projects"
        className="scroll-mt-20 py-20"
      >
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900">
            Projects
          </h2>
          <p className="mt-2 text-gray-500">
            Explore projects built with modern development technologies.
          </p>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-20 py-20"
      >
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900">
            About
          </h2>
          <p className="mt-2 max-w-2xl text-gray-500">
            Dev Stack helps developers compare technologies and
            create the right development stack for their projects.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 py-20"
      >
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900">
            Contact
          </h2>
          <p className="mt-2 text-gray-500">
            Get in touch with the Dev Stack team.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;