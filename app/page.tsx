export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-16">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">
          Navya Nair
        </h1>
        <p className="mt-4 text-lg text-neutral-600 max-w-prose">
          Physics student interested in machine learning and research.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-medium">About</h2>
        <p className="mt-3 text-neutral-700 max-w-prose">
          Short paragraph about what you study, your interests,
          and what you’re currently working on.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Projects</h2>
        <ul className="mt-4 space-y-3 text-neutral-700">
          <li>Brain Connectivity Viewer</li>
          <li>NeetCode Practice</li>
        </ul>
      </section>
    </main>
  );
}
