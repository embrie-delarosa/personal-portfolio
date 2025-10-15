import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
        <main className="flex-shrink-0">
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white py-3">
            <div className="container px-5">
                <Link className="navbar-brand" to="/projects">
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
            {/* Projects Section*/}
            <section className="py-5">
            <div className="container px-5 mb-5">
                <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0">
                    <span className="text-gradient d-inline">Projects</span>
                </h1>
                </div>
                <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                    {/* Project Card 1*/}
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                    <div className="card-body p-0">
                        <div className="d-flex align-items-center">
                        <div className="p-5">
                            <h2 className="fw-bolder">Note App</h2>
                            <div className="small fw-bolder">Description:</div>
                            <p>A web-based note-taking application that allows users to create, read, update, and delete notes with up to 10,000 characters. Notes are displayed in a horizontal scroll layout for easy navigation.</p>
                            <div className="small fw-bolder">Technologies Used:</div>
                            <p>Laravel, PHP, MySQL, HTML, CSS, JavaScript</p>
                            <div className="small fw-bolder">Key Takeaways / Challenges:</div>
                            <p>Learned to implement full CRUD functionality, design responsive note cards, and manage large text inputs efficiently.</p>
                            <div className="small fw-bolder">Repository / Demo:</div>
                            <p>
                                <a href="https://github.com/embriedelarosa/note1-app" target="_blank">
                                    Note App GitHub Repo
                                </a>
                            </p>
                        </div>
                        <img
                            className="img-fluid"
                            src="https://theninehertz.com/wp-content/uploads/2021/11/Docket-Management-Web-App.jpg"
                            alt="..."
                        />
                        </div>
                    </div>
                    </div>
                    {/* Project Card 2*/}
                    <div className="card overflow-hidden shadow rounded-4 border-0">
                    <div className="card-body p-0">
                        <div className="d-flex align-items-center">
                        <div className="p-5">
                            <h2 className="fw-bolder">Personal Portfolio</h2>
                            <div className="small fw-bolder">Description:</div>
                            <p>A personal portfolio website showcasing my personal background, skills, and experience. The site is designed to be visually appealing and easy to navigate.</p>
                            <div className="small fw-bolder">Technologies Used:</div>
                            <p>HTML, CSS</p>
                            <div className="small fw-bolder">Key Takeaways / Challenges:</div>
                            <p>Learned to implement responsive design principles and optimize the user experience across different devices.</p>
                        </div>
                        <img
                            className="img-fluid"
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxWJPkgzVnXRrxFy6aadrY93gZQrt0Rcy-AA3LdM4hgAlW7cFDZtFtOHOtLIDPZZ44HRP1H51WN9AV2OQBo7QkN1L0pu70CWEzGT7KOcTabDexM_xVvDyqNIPEbYosjciex8uet1d5GDUR/s600/Create+a+Responsive+Personal+Portfolio+Website+using+HTML+CSS.jpg"
                            alt="..."
                        />
                        </div>
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

export default Projects;
