import NavItem from "../navigation/header/components/NavItem";

export default function HeaderHome() {

    return (
        <>
        <NavItem href={'/myprojects'} liClassName="navMenu">My Projects</NavItem>
        <NavItem href={'/aboutme'} liClassName="navMenu">About Me</NavItem>
        <NavItem href={'/contactme'} liClassName="navMenu">Contact Me</NavItem>
        </>
    );
}