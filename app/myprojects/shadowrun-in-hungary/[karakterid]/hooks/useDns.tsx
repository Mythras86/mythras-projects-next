import { useSelector } from "react-redux";
import { dnsData } from "../components/Jellemzok/store/dns.data";
import { DnsModel } from "../components/Jellemzok/store/dns.model";

export default function useDns() {

    const dns: string = useSelector((state: any)=>state.shadowrunKarakter.dns);

    function getYourDns(): DnsModel | undefined {
        const yourDns = dnsData.find(x=>x.szoveg === dns);
        return yourDns;
    }

    function getDnsModosito(tulajdonsagKey: string): number {
        const modosito = getYourDns()?.tulMod.find(x=>x.key === tulajdonsagKey);
        return modosito ? modosito.ertek : 0;
    }

    return {dns, getYourDns, getDnsModosito};
}