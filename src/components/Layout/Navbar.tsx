import Link from "next/link";

export default function Navbar(){
    return (
        <div id="navbar">
            <Link className="navbar-item" href="/">Home</Link>
            <Link className="navbar-item" href="about">About</Link>
            <Link className="navbar-item" href="profile">Profile</Link>
            <Link className="navbar-item" href="contact-us">Contact Us</Link>
        </div>
    )
}