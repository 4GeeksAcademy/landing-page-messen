export const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Welcome!!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Arcos</a>
                        <a className="nav-link" href="#">Personajes</a>
                        <a className="nav-link" href="#">Historia</a>
                        <a className="nav-link disabled" aria-disabled="true">Kyubis</a>
                    </div>
                </div>
            </div>
        </nav>
    )

};