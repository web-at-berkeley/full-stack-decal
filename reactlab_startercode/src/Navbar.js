import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}