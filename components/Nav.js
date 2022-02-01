import NavItem from "../components/Navitem";  

export default function Nav() {
    return(
        <ul className="flex justify-center space-x-10">
            <NavItem href="#profile">Profile</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
        </ul>
    );
}