import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <li className="navbar_list">
                <ul> <button className="navbar_button">Home</button> </ul>
                <ul> <button>Resume</button> </ul>
                <ul> <button>Links to projects</button> </ul>
            </li>
        </div>
        )
}