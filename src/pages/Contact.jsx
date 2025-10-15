function Contact() {
  return ( 
    <>
    <main className="flex-shrink-0">
        {/* Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white py-3">
        <div className="container px-5">
            <a className="navbar-brand" href="/contact">
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
                <a className="nav-link" href="/personal-portfolio/">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/personal-portfolio/about">
                    About
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/personal-portfolio/projects">
                    Projects
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/personal-portfolio/skills">
                    Skills
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/personal-portfolio/contact">
                    Contact
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        {/* Page content*/}
        <section className="py-5">
        <div className="container px-5">
            {/* Contact form*/}
            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
               <h1 className="fw-bolder">Get in touch</h1>
                <p className="lead fw-normal text-muted mb-0">
                Let's work together! Contact me via social media accounts or email below.
                </p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                                {/* Social media icons*/}
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                    <a className="text-gradient" href="https://www.facebook.com/embrie.dela.rosa/" target="_blank">
                                    <i className="bi bi-facebook"></i>
                                    </a>
                                    <a className="text-gradient" href="https://www.linkedin.com/in/embrie-dela-rosa-65288a323" target="_blank">
                                    <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a className="text-gradient" href="https://github.com/embrie-delarosa" target="_blank">
                                    <i className="bi bi-github"></i>
                                    </a>
                                    <a className="text-gradient" href="https://mail.google.com/mail/?view=cm&fs=1&to=delarosaembriea@gmail.com" target="_blank">
                                    <i className="bi bi-envelope" />
                                    </a>
                                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
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

export default Contact;