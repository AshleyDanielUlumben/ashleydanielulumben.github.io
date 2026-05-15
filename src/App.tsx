import './App.css'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const experienceItems = [
  {
    title: 'Research Assistant — Data & Web Applications',
    meta: 'Applied analytics and product-focused engineering',
    points: [
      'Built and refined data-centric web interfaces that support research workflows, usability, and decision-making.',
      'Translated technical requirements into practical dashboard and reporting experiences for non-technical stakeholders.',
      'Contributed to data preparation, validation, and lightweight automation that improved analysis readiness.',
    ],
  },
  {
    title: 'Data / Business Analyst',
    meta: 'Analytics, reporting, and insight delivery',
    points: [
      'Created repeatable reporting workflows using SQL, spreadsheet logic, and visualization tools to highlight key trends.',
      'Organized raw datasets into clear metrics, summaries, and presentation-ready insights for operational use.',
      'Supported data storytelling through concise visuals and recommendations grounded in measurable outcomes.',
    ],
  },
  {
    title: 'Software & Analytics Project Developer',
    meta: 'Full-stack prototypes and analytical applications',
    points: [
      'Developed portfolio projects spanning React, TypeScript, Python, machine learning, and simulation-based tooling.',
      'Connected frontend experiences with structured data models to create usable dashboards and interactive systems.',
      'Focused on applied technology projects that balance clean design, technical depth, and real-world usefulness.',
    ],
  },
]

const projects = [
  {
    title: 'Hatchery Analytics Dashboard',
    description:
      'A React and TypeScript dashboard for hatchery data entry, operational reporting, and analytics with a clean interface for decision support.',
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Recharts'],
  },
  {
    title: 'Foodborne Outbreak Risk Prediction',
    description:
      'A machine learning workflow for identifying high-risk outbreak patterns using historical event data, lag features, and environmental covariates.',
    tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'Matplotlib'],
  },
  {
    title: 'Unity Flood Resilience Serious Game',
    description:
      'A simulation-focused Unity project exploring flood behavior, terrain interaction, and player-driven resilience planning through applied technology.',
    tech: ['Unity', 'C#', 'GIS', 'Tilemaps'],
  },
  {
    title: 'Power BI / Data Visualization Workflows',
    description:
      'Reporting and visualization workflows designed to convert large or messy datasets into clear dashboards, summaries, and stakeholder-ready insights.',
    tech: ['Power BI', 'SQL', 'Python', 'Data Visualization'],
  },
]

const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'C#'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'HTML', 'CSS', 'Responsive UI Design'],
  },
  {
    title: 'Data & Machine Learning',
    items: ['pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Feature Engineering'],
  },
  {
    title: 'Databases & Cloud',
    items: ['PostgreSQL', 'Supabase', 'Relational Data Modeling', 'Cloud-Backed Apps'],
  },
  {
    title: 'Tools & Visualization',
    items: ['Git', 'GitHub', 'Power BI', 'Recharts', 'Matplotlib'],
  },
]

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar" aria-label="Primary">
          <a href="#home" className="brand-mark">
            Ashley Daniel Ulumben
          </a>

          <div className="nav-links">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="page">
        <section className="hero section section-hero" id="home">
          <div className="hero-inner">
            <div className="profile-card">
              <img
                src="/profile.jpeg"
                alt="Ashley Daniel Ulumben"
                className="profile-img"
              />
            </div>

            <div className="hero-copy">
              <p className="eyebrow">Data • Software • Analytics</p>
              <h1>Ashley Daniel Ulumben</h1>
              <h2>
                Building thoughtful software, dashboards, and analytical systems for
                real-world decision-making.
              </h2>
              <p className="hero-text">
                I focus on applied technology projects that connect software
                engineering, analytics, and machine learning. My work is centered on
                turning complex data into practical tools, polished interfaces, and
                useful insights for teams, research, and operations.
              </p>

              <div className="hero-actions">
                <a href="#projects">View Projects</a>
                <a href="/resume.pdf" className="secondary">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="section-kicker">About</p>
            <h2>Technical foundation with a product-minded approach.</h2>
          </div>
          <div className="content-card">
            <p>
              I have a computer science background with experience across software
              development, data analytics, and applied machine learning. My work
              includes building React and TypeScript interfaces, designing Python and
              SQL workflows, creating dashboards that communicate clearly, and
              developing analytical tools that make data more useful, accessible, and
              actionable.
            </p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>Work that blends analysis, engineering, and delivery.</h2>
          </div>
          <div className="stack-grid">
            {experienceItems.map((item) => (
              <article className="content-card experience-card" key={item.title}>
                <p className="card-meta">{item.meta}</p>
                <h3>{item.title}</h3>
                <ul className="detail-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">Projects</p>
            <h2>Selected work in dashboards, prediction, and applied systems.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Core technologies across software, data, and visualization.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="content-card skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="section-kicker">Education</p>
            <h2>Academic background in computing and applied problem-solving.</h2>
          </div>
          <article className="content-card education-card">
            <p className="card-meta">Editable section for degree, university, and dates</p>
            <h3>Computer Science</h3>
            <p>
              Add university name, degree details, concentration areas, honors, and
              graduation dates here. This section is structured to stay easy to update
              as academic information changes.
            </p>
          </article>
        </section>

        <section className="section" id="contact">
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2>Open to software, analytics, and data-focused opportunities.</h2>
          </div>
          <div className="content-card contact-card">
            <p>
              I am especially interested in roles involving software engineering,
              analytics engineering, data products, dashboards, and machine learning
              applications.
            </p>
            <div className="contact-links">
              <a href="mailto:ashley.dulumben@gmail.com">ash.racers@gmail.com</a>
              <a
                href="https://github.com/AshleyDanielUlumben"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashley-daniel-ulumben"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
