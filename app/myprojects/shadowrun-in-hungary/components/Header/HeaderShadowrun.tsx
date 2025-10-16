import NavItem from "@/components/navigation/header/components/NavItem";
import NavMenu from "@/components/navigation/header/components/NavMenu";

export default function HeaderShadowrun() {
    return (
        <>
        <NavItem href={"/myprojects/shadowrun-in-hungary/ujkarakter"} aClassName="text2 neonGreen center hover">+ Új Karakter</NavItem>
        <NavItem href={"/myprojects/shadowrun-in-hungary"}>Karakterek</NavItem>
        <NavItem href={"/myprojects/shadowrun-in-hungary/eszkozok"}>Eszközök</NavItem>
        <NavItem href={"/myprojects/shadowrun-in-hungary/npck"}>Nem Játékos Karakterek</NavItem>
        </>
    );
}