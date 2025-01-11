const Projects = () => (
    <section id="projects" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-semibold">My Projects</h2>
      <p className="text-lg mt-4">GitHub Repositories</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-600">Project 1</h3>
          <p className="mt-2">This is a sample project description.</p>
          <a
            href="https://github.com/kazinayeem"
            className="text-blue-500 underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-600">Project 2</h3>
          <p className="mt-2">Another amazing project description.</p>
          <a
            href="https://github.com/kazinayeem"
            className="text-blue-500 underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  