const sections = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <div className="text-lg font-semibold tracking-tight">Cyril</div>
          <nav className="hidden gap-8 md:flex">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full border border-red-500 px-4 py-2 text-sm text-red-300 transition hover:bg-red-500/10 hover:text-white md:inline-flex"
          >
            Let's connect
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-16 sm:px-10">
        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-red-300">
              Hi, I’m Cyril
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                I build modern web applications and AI-powered systems with clean design and powerful automation.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                I work with Next.js, TypeScript, Tailwind CSS, and Python to create fast, scalable, and user-friendly digital products. My focus is clean architecture, performance, and intelligent systems that solve real-world problems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
                <p className="text-sm uppercase tracking-[0.18em] text-red-400">What I build</p>
                <p className="mt-4 text-zinc-200 leading-7">
                  AI tools, automation pipelines, bespoke web experiences, and frontend systems built for reliability and scale.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-red-400">My approach</p>
                <p className="mt-4 text-zinc-200 leading-7">
                  Every project starts with strong fundamentals, thoughtful architecture, and a focus on usability, then grows into a polished, maintainable solution.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-red-500 px-6 text-sm font-semibold text-white transition hover:bg-red-400"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 shadow-xl shadow-black/30">
            <p className="text-sm uppercase tracking-[0.2em] text-red-400">Featured skills</p>
            <div className="mt-6 space-y-4 text-zinc-200">
              <p>Next.js · TypeScript · Tailwind CSS · Python</p>
              <p>AI development · automation · clean architecture · performance optimization</p>
              <p>APIs, serverless functions, data workflows, and developer-first tooling.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/15">
              <p className="text-4xl font-semibold text-white">7+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-zinc-400">Years experience</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/15">
              <p className="text-4xl font-semibold text-white">20+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-zinc-400">Global projects</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/15">
              <p className="text-4xl font-semibold text-white">10+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-zinc-400">Tech mastered</p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24 space-y-8">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-red-400">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-red-300 shadow-lg shadow-red-500/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2a5 5 0 0 1 5 5v4.586l1.707 1.707a1 1 0 0 1-1.414 1.414L16 13.414V12a3 3 0 0 0-6 0v1.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L7 11.586V7a5 5 0 0 1 5-5Z" />
                <path d="M8 18a4 4 0 1 0 8 0v-2H8v2Z" />
              </svg>
            </span>
            <span>Discovery</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/80 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl space-y-6">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-red-400">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">A</span>
                  <span className="font-semibold tracking-[0.2em] text-zinc-300">About me</span>
                </div>
                <div className="space-y-4 text-zinc-200 leading-8">
                  <p>
                    I'm Cyril, a dedicated software developer and founder of <span className="font-semibold text-white">Sofdev Inc</span>, a tech company focused on building modern web applications and intelligent systems powered by AI. I blend polished frontend experiences with strong backend logic, automation, and scalable architecture.
                  </p>
                  <p>
                    At Sofdev Inc, we build high-performance products with Next.js, TypeScript, Tailwind CSS, and Python. My work is centered on real-world AI tools, deep learning systems, and efficient automation that delivers value for users and teams.
                  </p>
                  <p>
                    Passionate about clean structure, performance, and thoughtful design, I continuously refine my craft by experimenting, learning, and shipping practical solutions. Whether leading Sofdev Inc's vision or contributing to collaborative projects, I'm driven to create technology that makes a real impact.
                  </p>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6 text-zinc-200 shadow-xl shadow-black/20 sm:w-[20rem]">
                <p className="text-sm uppercase tracking-[0.2em] text-red-400">Core focus</p>
                <ul className="mt-6 space-y-4 text-zinc-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">•</span>
                    <span>AI development, automation, and deep learning solutions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">•</span>
                    <span>Clean architecture for fast and maintainable web systems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">•</span>
                    <span>Smart tooling with Python, MERN, PyTorch, TensorFlow, and LLMs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="tech" className="mt-24">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-red-400">
            <span>Tech</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="mt-8 overflow-x-auto py-6 scrollbar-hide">
            <div className="inline-flex gap-4 pr-6">
              {[
                "Python",
                "MERN",
                "Deep Learning",
                "PyTorch",
                "TensorFlow",
                "LLMs",
              ].map((tech) => (
                <div
                  key={tech}
                  className="min-w-[14rem] rounded-3xl border border-white/10 bg-zinc-900/80 p-6 text-center shadow-xl shadow-black/20"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-red-400">Technology</p>
                  <p className="mt-4 text-xl font-semibold text-white">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="mt-24">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-red-400">
            <span>Professional Journey</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="mt-8 overflow-x-auto pb-6 scrollbar-hide">
            <div className="inline-flex gap-6 snap-x snap-mandatory px-2">
              {[
                {
                  title: "🟢 2025 — The Beginning of My AI Journey",
                  content: [
                    "I started my journey into software development with a strong curiosity about artificial intelligence and how intelligent systems work.",
                    "At this stage, I focused on learning Python programming fundamentals, understanding how code solves real problems, and exploring basic logic behind automation and AI systems.",
                    "This period was about building my foundation and developing consistency in coding and problem-solving.",
                  ],
                },
                {
                  title: "🧠 2025 — First AI Projects & Experimentation Phase",
                  content: [
                    "I began building my first AI-based systems, starting with simple but meaningful projects like a Health AI assistant and other experimental AI models.",
                    "During this phase, I explored prompt engineering, basic AI system design, chat-based intelligent responses, and small automation tools.",
                    "This helped me understand how AI behaves and how to structure intelligent outputs.",
                  ],
                },
                {
                  title: "🤖 2025 – Present — Multi-AI Systems & Advanced Exploration",
                  content: [
                    "I expanded into building multiple AI systems and experimenting with different architectures and use cases.",
                    "I worked on conversational AI systems, automation-based AI tools, AI logic improvements and response tuning, and early integration of AI with web applications.",
                    "This phase strengthened my understanding of how AI systems can be designed beyond simple chatbots.",
                  ],
                },
                {
                  title: "🧩 2025 – Present — Personal LLM Development Journey",
                  content: [
                    "One of my most important ongoing goals is building and understanding my own language model system (LLM).",
                    "I started exploring transformer concepts, context handling and token-based systems, model behavior and reasoning patterns, and how large-scale AI systems are structured.",
                    "This is an ongoing deep-learning journey aimed at mastering AI from the inside out.",
                  ],
                },
                {
                  title: "⚙️ 2025 – Present — Web + AI Integration Development",
                  content: [
                    "I began combining AI systems with modern web technologies to build real-world applications.",
                    "I worked with Python for backend AI logic, Next.js for frontend development, API-based AI communication systems, and building smooth AI user experiences.",
                    "This helped me bridge the gap between AI engineering and product development.",
                  ],
                },
                {
                  title: "🚀 Present & Beyond — Becoming an AI Systems Engineer",
                  content: [
                    "Currently, I am focused on growing into a strong AI + software systems engineer, building scalable intelligent applications and improving my understanding of advanced AI systems.",
                    "My long-term goal is to develop advanced AI agents, intelligent automation systems, real-world AI-powered products, and a personal LLM ecosystem.",
                  ],
                },
              ].map((step) => (
                <article
                  key={step.title}
                  className="snap-start min-w-[22rem] max-w-[26rem] rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20"
                >
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-red-400">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-red-300 shadow-lg shadow-red-500/10">
                      {step.title.split(" ")[0]}
                    </span>
                    <p className="text-base font-semibold text-white">{step.title}</p>
                  </div>
                  <div className="mt-6 space-y-4 text-zinc-300 leading-7">
                    {step.content.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mt-24">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-red-400">
            <span>Skills</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Frontend", items: ["Next.js", "Tailwind CSS", "React", "Responsive UI"] },
              { title: "Backend", items: ["Node.js", "Python", "API design", "Serverless"] },
              { title: "AI & Automation", items: ["ML workflows", "Chatbots", "Automation scripts", "Smart integrations"] },
            ].map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6">
                <p className="text-base font-semibold text-white">{group.title}</p>
                <ul className="mt-4 space-y-3 text-zinc-300">
                  {group.items.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-red-400">
            <span>Cyril’s AI & Software Projects</span>
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">2025 – Present</span>
          </div>
          <div className="mt-6 rounded-[2rem] border border-white/10 bg-zinc-900/80 p-8 shadow-xl shadow-black/20">
            <p className="max-w-3xl text-zinc-300 leading-8">
              A selective portfolio of AI and software systems built from 2025 onward, with a focus on intelligent automation, conversational systems, deep learning, and real-world integration.
            </p>
          </div>
          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {[
              {
                title: "Health AI Assistant",
                badge: "2025",
                description: "An AI system designed to analyze health-related queries and provide intelligent guidance and awareness support.",
                highlights: [
                  "Built with Python and AI prompt systems",
                  "Focused on symptom understanding and response logic",
                  "Early step into real-world AI applications",
                ],
              },
              {
                title: "Multi-AI Experimentation System",
                badge: "2025",
                description: "A collection of AI prototypes exploring chat systems, automation, and reasoning model workflows.",
                highlights: [
                  "Tested multiple AI behaviors and prompts",
                  "Explored structured AI responses",
                  "Improved understanding of model interactions",
                ],
              },
              {
                title: "Personal LLM Development Project",
                badge: "Ongoing",
                description: "A long-term project focused on building and understanding a personal language model system.",
                highlights: [
                  "Studying transformer architecture and token systems",
                  "Experimenting with model behavior and context handling",
                  "Goal: build a simplified custom LLM system",
                ],
              },
              {
                title: "AI Web Integration System",
                badge: "2025",
                description: "A system connecting Python AI logic with modern web applications.",
                highlights: [
                  "Backend AI processing with Python",
                  "Frontend integration using Next.js",
                  "Focus on smooth AI-to-user interaction",
                ],
              },
              {
                title: "AI Automation Tools",
                badge: "Experimental",
                description: "Small tools built to automate repetitive tasks using AI logic.",
                highlights: [
                  "Prompt-based automation systems",
                  "Workflow optimization experiments",
                  "Focused on productivity enhancement",
                ],
              },
              {
                title: "Smart Chatbot Engine",
                badge: "2025",
                description: "A conversational AI prototype designed to simulate intelligent human-like responses.",
                highlights: [
                  "Built using AI prompting techniques",
                  "Focus on context-aware conversations",
                  "Tested different response structures",
                ],
              },
              {
                title: "AI Learning & Data Processing System",
                badge: "2025",
                description: "A system exploring how AI processes and learns from structured data.",
                highlights: [
                  "Worked with Python data tools",
                  "Basic ML concepts applied (Pandas, NumPy, Scikit-learn)",
                  "Focus on data-driven intelligence",
                ],
              },
              {
                title: "Autonomous AI Agent Platform",
                badge: "Vision",
                description: "A future system idea aimed at building autonomous AI agents that can perform tasks independently.",
                highlights: [
                  "Multi-agent AI coordination",
                  "Task automation and decision-making systems",
                  "Integration with web and real-world APIs",
                ],
              },
            ].map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/15 transition hover:border-red-400/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-zinc-300">
                    {project.badge}
                  </span>
                </div>
                <p className="mt-4 text-zinc-300 leading-7">{project.description}</p>
                <ul className="mt-5 space-y-3 text-zinc-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-3xl border border-white/10 bg-zinc-900/80 p-8 shadow-xl shadow-black/20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-[0.35em] text-red-400">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let's build something together.</h2>
              <p className="mt-4 max-w-2xl text-zinc-300 leading-7">
                Have a project idea or want to collaborate on an AI-driven product? Reach out and I'll help turn it into a real solution.
              </p>
              
              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/cyrilsofdevpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.001 12.001 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/cyril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.668-2.237-.909 0-1.449.612-1.688 1.203-.087.212-.109.507-.109.803v5.8h-3.554s.047-9.411 0-10.39h3.554v1.471c.458-.707 1.277-1.712 3.105-1.712 2.267 0 3.965 1.482 3.965 4.667v5.964zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.952.765-1.715 1.959-1.715 1.188 0 1.914.763 1.939 1.715 0 .953-.751 1.715-1.983 1.715zm1.946 11.019H3.39V9.062h3.893v11.39zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="https://cyril.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400"
                  aria-label="Portfolio"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/cyril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 002.856-3.51 9.86 9.86 0 01-2.836.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/2347075175636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.928 1.227l-.344-.179C7.453 6.776 5.567 5.973 3.707 5.973 1.807 5.973 0 7.78 0 9.68v4.642C0 16.515 1.807 18.322 3.707 18.322h.009c.231 0 .46.02.687.058 1.307-.333 2.492-.856 3.414-1.506.471-.357.893-.763 1.253-1.205.024-.02.047-.04.068-.062.306-.352.596-.714.863-1.077.034-.047.069-.093.103-.139a9.865 9.865 0 001.614-5.098V9.68c0-1.9-1.807-3.707-3.707-3.707z" />
                  </svg>
                </a>
                <a
                  href="mailto:cyrilsofdev@gmail.com"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400"
                  aria-label="Email"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-red-500 px-8 text-sm font-semibold text-white transition hover:bg-red-400"
              >
                Let's collaborate 👥
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Get resume ↓
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-zinc-950/95 px-6 py-8 text-sm text-zinc-500 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Cyril. All rights reserved.</span>
          <span>Built with Next.js, TypeScript, Tailwind CSS, and Python.</span>
        </div>
      </footer>
    </div>
  );
}
