export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-24">
      {/* Hero */}
      <header className="flex gap-8 items-start">
        {/* Profile Picture */}
        <img
          src="/path-to-your-photo.jpg" 
          alt="Navya Nair"
          className="w-32 h-32 rounded-full object-cover border border-neutral-200 shrink-0"
        />

        {/* Text Content Column */}
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold tracking-tight">
            Navya Nair
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-prose leading-relaxed">
            Physics and neural engineering student at UIUC focused on health technology.
          </p>

          <div className="flex gap-6 pt-2 text-sm font-medium">
            <a href="https://www.linkedin.com/in/navya-nair-/" target="_blank" className="hover:underline">
              Linkedin →
            </a>
            <a href="https://github.com/nairnavya" target="_blank" className="hover:underline">
              GitHub →
            </a>
            <a href="mailto:nairnavya@gmail.com" target="_blank" className="hover:underline">
              Email →
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="rounded-2xl border border-neutral-200 p-8 space-y-4">
        <h2 className="text-lg font-medium tracking-tight">About</h2>
        <p className="text-neutral-700 leading-relaxed max-w-prose">
          I study physics and am working toward a second degree in neural engineering,
          with a minor in computer science. I’m drawn to problems at the intersection
          of math, biology, and computation—especially questions about how brain
          activity can be recorded, modeled, interpreted, and visualized.
        </p>
        <p className="text-neutral-700 leading-relaxed max-w-prose">
          Currently, I’m building technical depth through coursework while experimenting
          with data analysis, algorithms, and neuroscience-related projects as a way
          to understand both the tools and the systems they’re applied to.
        </p>
      </section>

      {/* Projects */}
      <section className="rounded-2xl border border-neutral-200 p-8 space-y-6">
        <h2 className="text-lg font-medium tracking-tight">Projects</h2>

        <ul className="space-y-4">
          <li>
            <a
              href="https://github.com/nairnavya/brain-connectivity-viewer"
              target="_blank"
              className="block rounded-xl p-4 hover:bg-neutral-50 transition"
            >
              <h3 className="font-medium">Brain Connectivity Viewer</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Interactive visualization of functional brain networks.
              </p>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/nairnavya/gnn-brain-classifier"
              target="_blank"
              className="block rounded-xl p-4 hover:bg-neutral-50 transition"
            >
              <h3 className="font-medium">Graph Neural Network Brain Classifier</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Applying GNNs to classify brain connectivity patterns.
              </p>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/nairnavya/eeg-preprocessing-pipeline"
              target="_blank"
              className="block rounded-xl p-4 hover:bg-neutral-50 transition"
            >
              <h3 className="font-medium">EEG Data Cleaning Pipeline</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Signal preprocessing and artifact removal for neural recordings.
              </p>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/nairnavya/nuclear-physics-projects"
              target="_blank"
              className="block rounded-xl p-4 hover:bg-neutral-50 transition"
            >
              <h3 className="font-medium">Nuclear Physics Projects</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Coursework and simulations in nuclear and particle physics.
              </p>
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-sm text-neutral-500">
        © {new Date().getFullYear()} Navya Nair
      </footer>
    </main>
  );
}
