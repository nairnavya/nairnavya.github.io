export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-16">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">
          Navya Nair
        </h1>
        <p className="mt-4 text-lg text-neutral-600 max-w-prose">
          Physics and neural engineering student learning how to think with data.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-medium">About</h2>
        <p className="mt-3 text-neutral-700 max-w-prose">
          I study physics and am working toward a second degree in neural engineering, with a minor in computer science. 
          I’m drawn to problems where math, biology, and computation overlap—especially questions about how brain activity can be recorded, modeled, 
          interpreted, and visualized. Right now, I’m building technical depth through coursework while experimenting with data analysis, 
          algorithms, and neuroscience-inspired projects, using them as a way to understand both the tools and the systems they’re applied to.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Projects</h2>
        <ul className="mt-4 space-y-3 text-neutral-700">
          <li>
            <a
              href="https://github.com/nairnavya/brain-connectivity-viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Brain Connectivity Viewer
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nairnavya/gnn-brain-classifier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Graph Neural Network Brain Classifier
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername/brain-connectivity-viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Brain Connectivity Viewer
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nairnavya/eeg-preprocessing-pipeline"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              EEG Data Cleaning pipeline
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nairnavya/nuclear-physics-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Nuclear Physics Projects
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
