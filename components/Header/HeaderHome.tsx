import NavItem from "../navigation/header/NavItem";
import NavMenu from "../navigation/header/NavMenu";

export default function HeaderHome() {

    return (
        <NavMenu id={"home"}>
            <NavItem href={'/myprojects'} liClassName="navMenu">My Projects</NavItem>
            <NavItem href={'/aboutme'} liClassName="navMenu">About Me</NavItem>
            <NavItem href={'/contactme'} liClassName="navMenu">Contact Me</NavItem>
        </NavMenu>
    );
}