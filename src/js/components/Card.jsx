export const Card = () => {
    return (
        <div className="card h-150">
            <img
                src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/01/cover-1.jpg?w=1200&h=628&fit=crop"
                className="card-img-top"
                alt="placeholder"
            />
            <div className="card-body text-center">
                <h5 className="card-title">Itachi Uchiha</h5>
                <p className="card-text">
                    Es el mejor personaje de la serie, luego estarian Kakashi y Jiraiya
                </p>
            </div>
            <div className="card-footer text-center">
                <a href="https://www.reddit.com/r/Naruto/comments/1btljw8/how_did_itachi_obtained_totska_bladeyata_mirror/#lightbox" className="btn btn-primary">
                    PULSAME
                </a>
            </div>
        </div>
    );
};