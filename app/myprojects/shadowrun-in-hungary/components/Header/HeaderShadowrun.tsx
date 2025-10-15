import NavItem from "@/components/navigation/header/NavItem";
import NavMenu from "@/components/navigation/header/NavMenu";

export default function HeaderShadowrun() {
    return (
        <NavMenu id={"shadowrun"}>
            <NavItem href={"/myprojects/shadowrun-in-hungary/ujkarakter"}>Új Karakter</NavItem>
            <NavItem href={"/myprojects/shadowrun-in-hungary"}>Karakterek</NavItem>
            <NavItem href={"/myprojects/shadowrun-in-hungary/eszkozok"}>Eszközök</NavItem>
            <NavItem href={"/myprojects/shadowrun-in-hungary/npck"}>Nem Játékos Karakterek</NavItem>
        </NavMenu>
        
    );
}