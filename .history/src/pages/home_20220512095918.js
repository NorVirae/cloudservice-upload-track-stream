import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <header>
                <nav className="landing__navbar">
                    <Link className="landing__navbar-brand" to = "/">Loooty</Link>

                    <ul className="landing__navbar-inner-container">
                        <li><Link to={""}>Open a Store</Link></li>

                        <li><Link to={""}>Help</Link></li>

                        <li><Link to={""}>Sign In</Link></li>

                        <li><Link to={""}>Open a Store</Link></li>

                        <li></li>

                        <li></li>

                        <li>Sign Up</li>

                    </ul>

                </nav>

                <div className="slogan">

                </div>

            </header>

            <main>

            </main>

            <footer>

            </footer>
        </div>
        )
}

export default Home
