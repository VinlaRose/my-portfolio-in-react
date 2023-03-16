import "./nav.css"
export default function Navbar() {
    return(
        <>
        <div className="mainNav">
        <div className="logo">VinlaRose</div>
        <div className="navIcons">
            <ul className="navIconsList">
                <li className="singleNavIcon">
                    <a href="#">Home</a>
                </li>
                <li className="singleNavIcon">
                    <a href="#">Projects</a>
                </li>
                <li className="singleNavIcon">
                    <a href="#">Blogs</a>
                </li>
                <li className="singleNavIcon">
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}