function About() {
  return (
    <>
        <main className="flex-shrink-0">
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white py-3">
            <div className="container px-5">
                <a className="navbar-brand" href="/about">
                <span className="fw-bolder text-primary">Portfolio</span>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li className="nav-item">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">
                            About
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/projects">
                            Projects
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/skills">
                            Skills
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/contact">
                            Contact
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            {/* Page Content*/}
            <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0">
                <span className="text-gradient d-inline">About Me</span>
                </h1>
                <p className="lead fw-light mb-4 " style={{ fontSize: "1.5rem" }}>
                    My name is Embrie Dela Rosa from Quezon City.
                </p>
                <p className="text-muted" style={{ fontSize: "1.5rem" }}>
                    A dedicated and motivated individual with a passion for learning and self-improvement. Works well both
                    independently and as part of a team. An adaptable, responsible, and eager individual to develop skills and
                    contribute to achieving goals effectively.

                </p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                {/* Personal Background Section*/}
                <section>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                    <h2 className="text-primary fw-bolder mb-0">Personal Background</h2>
                    </div>
                    {/* Personal BG Card 1*/}
                    <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                            <div className="text-primary fw-bolder mb-2">
                                2023 - Present
                            </div>
                            <div className="small fw-bolder">Member</div>
                            <div className="small text-muted">La Verdad Dance Troupe</div>
                            <div className="small text-muted">Apalit, Pampanga</div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                            Active member of the La Verdad Dance Troupe from 2023 to present. Participates in school and community performances, representing our course in various events. Contributes to choreography, practices regularly, and collaborates with teammates to promote culture, discipline, and creativity.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Personal Card 2*/}
                    <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                            <div className="text-primary fw-bolder mb-2">
                                2017 - Present
                            </div>
                            <div className="small fw-bolder">Content Creator</div>
                            <div className="small text-muted">Dela Rosa Twins</div>
                            <div className="small text-muted">Various social media platforms</div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                            Content creator for Dela Rosa Twins from 2017 to present with my twin sister. Produces engaging videos on YouTube and TikTok, reaching thousands of viewers and achieving over a million views on a viral post. Focuses on creative, entertaining, and relatable content that connects with a wide audience.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Education Section*/}
                <section>
                    <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                    {/* Education Card 1*/}
                    <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                            <div className="text-secondary fw-bolder mb-2">
                                2025 - Present
                            </div>
                            <div className="mb-2">
                                <div className="small fw-bolder">La Verdad Christian College, Inc</div>
                                <div className="small text-muted">Apalit, Pampanga</div>
                            </div>
                            <div className="fst-italic">
                                <div className="small text-muted">Bachelor of Science in</div>
                                <div className="small text-muted">Information Systems</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                            Specialized in information systems, combining technology and business solutions. Skilled in programming, data management, and problem-solving, with experience in improving systems, organizing projects, and supporting digital processes.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Education Card 2*/}
                    <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                            <div className="text-secondary fw-bolder mb-2">
                                2023 - 2025
                            </div>
                            <div className="mb-2">
                                <div className="small fw-bolder">La Verdad Christian College, Inc</div>
                                <div className="small text-muted">Apalit, Pampanga</div>
                            </div>
                            <div className="fst-italic">
                                <div className="small text-muted">Associate in</div>
                                <div className="small text-muted">Computer Technology</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                            Graduated in Associate in Computer Technology and ladderized to Bachelor of Science in Information Systems, specialized in computer technology, focusing on hardware, software, and networks. Skilled in troubleshooting, system installation, and basic programming. Trained to set up networks, solve technical issues, and ensure computers run efficiently.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Education Card 3*/}
                    <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                            <div className="text-secondary fw-bolder mb-2">
                                2022 - 2023
                            </div>
                            <div className="mb-2">
                                <div className="small fw-bolder">Systems Technology Institute College (STI)</div>
                                <div className="small text-muted">Dasmariñas, Cavite</div>
                            </div>
                            <div className="fst-italic">
                                <div className="small text-muted">Bachelor of Science in</div>
                                <div className="small text-muted">Information Technology</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                            Learned the basics of computer systems, programming, and web development, gaining skills in troubleshooting and maintaining computers and networks. Applied technology to solve simple problems and improve task efficiency.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Divider*/}
                <div className="pb-5" />
                </div>
            </div>
            </div>
        </main>
        {/* Footer*/}
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
            <div className="row align-items-center justify-content-center flex-column flex-sm-row">
                <div className="col-auto">
                <div className="small m-0">Copyright © Portfolio 2025</div>
                </div>
            </div>
            </div>
        </footer>
    </>
  );
}

export default About;
