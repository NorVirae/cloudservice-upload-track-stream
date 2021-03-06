import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <header className="landing__header">
                <nav className="landing__navbar">
                    <Link className="landing__navbar-brand" to = "/">Loooty</Link>

                    <ul className="landing__navbar-inner-container">
                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Open a Store</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Help</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Sign In</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Sign Up</Link>
                        </li>
                    </ul>

                </nav>

                <div className="slogan">

                </div>

            </header>

            <main className="landing__main">

            </main>

            <footer className="landing__footer">

            </footer>
        </div>
        )
}

export default Home
