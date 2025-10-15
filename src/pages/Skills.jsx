import { Link } from "react-router-dom";

function Skills() {
  return (
    <>
        <main className="flex-shrink-0">
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white py-3">
            <div className="container px-5">
                <Link className="navbar-brand" to="/skills">
                <span className="fw-bolder text-primary">Portfolio</span>
                </Link>
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
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/projects">
                            Projects
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/skills">
                            Skills
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            {/* Page Content*/}
            <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0">
                <span className="text-gradient d-inline">Skills</span>
                </h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                
                {/* Divider*/}
                <div className="pb-5" />
                {/* Skills Section*/}
                <section>
                    {/* Skillset Card*/}
                    <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        {/* Professional skills list*/}
                        <div className="mb-5">
                        <div className="d-flex align-items-center mb-4">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                            <i className="bi bi-tools" />
                            </div>
                            <h3 className="fw-bolder mb-0">
                            <span className="text-gradient d-inline">
                                Professional Skills
                            </span>
                            </h3>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                            <div className="col mb-4 mb-md-0">
                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                E-Commerce Marketing
                            </div>
                            </div>
                            <div className="col mb-4 mb-md-0">
                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                Web Development
                            </div>
                            </div>
                            <div className="col">
                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                UI/UX Awareness
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Languages list*/}
                        <div className="mb-0">
                        <div className="d-flex align-items-center mb-4">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                            <i className="bi bi-code-slash" />
                            </div>
                            <h3 className="fw-bolder mb-0">
                            <span className="text-gradient d-inline">Languages</span>
                            </h3>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                            <div className="col mb-4 mb-md-0">
                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                HTML
                            </div>
                            </div>
                            <div className="col mb-4 mb-md-0">
                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                Java
                            </div>
                            </div>
                            <div className="col">
                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                Laravel
                            </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col mb-4 mb-md-0">
                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                PHP
                            </div>
                            </div>
                            <div className="col mb-4 mb-md-0">
                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                C#
                            </div>
                            </div>
                       </div>
                        </div>
                    </div>
                    </div>
                </section>
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

export default Skills;
