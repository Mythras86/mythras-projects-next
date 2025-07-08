import { SzakertelemModel } from "./szakertelem.model";

export const szakertelmekData: Array<SzakertelemModel> = [
    // Atlétika
    {key: 'futas', nev: 'Futás', csoport: 'Atlétika', kategoria: 'Aktív', specs: [
        'Távfutás', 'Sprint', 'Terepfutás'
    ]},
    {key: 'uszas', nev: 'Úszás', csoport: 'Atlétika', kategoria: 'Aktív', specs: [
        'Gyorsúszás', 'Távúszás', 'Szabadmerülés'
    ]},
    {key: 'ugras', nev: 'Ugrás', csoport: 'Atlétika', kategoria: 'Aktív', specs: [
        'Távolugrás', 'Magasugrás', 'Akrobatika'
    ]},
    {key: 'gimnasztika', nev: 'Gimnasztika', csoport: 'Atlétika', kategoria: 'Aktív', specs: [
        'Egyensúlyozás', 'Flexibilitás', 'Zsonglőrködés'
    ]},
    // Technikai tevékenységek
    {key: 'buvarkodas', nev: 'Búvárkodás', csoport: 'Technikai tevékenységek', kategoria: 'Aktív', specs: [
        'Mélymerülés', 'Iparibúvár', 'Katonaibúvár'
    ]},
    {key: 'maszas', nev: 'Mászás', csoport: 'Technikai tevékenységek', kategoria: 'Aktív', specs: [
        'Hegymászás', 'Ipari alpinista', 'Gleccsermászás'
    ]},
    {key: 'ejtoernyozes', nev: 'Ejtőernyőzés', csoport: 'Technikai tevékenységek', kategoria: 'Aktív', specs: [
        'Siklóernyőzés', 'Sárkányrepülőzés', 'Szárnyasruha'
    ]},
    {key: 'vadonjaras', nev: 'Vadonjárás: ', placeholder: 'Milyen? Pl.: dzsungel, sivatag stb.', csoport: 'Fizikai', kategoria: 'Aktív', specs: [
        'Túlélés', 'Tájékozódás', 'Nyomkezelés'
    ]},
    {key: 'alvilag', nev: 'Behatolás', csoport: 'Szociális', kategoria: 'Aktív', specs: [
        'Lopakodás', 'Zárnyitás', 'Szabadulás'
    ]},
    {key: 'megtevesztes', nev: 'Megtévesztés', csoport: 'Szociális', kategoria: 'Aktív', specs: [
        'Szinészet', 'Álöltözet', 'Álcázás'
    ]},
    {key: 'etikett', nev: 'Etikett', csoport: 'Szociális', kategoria: 'Aktív', specs: [
        'Céges', 'Katonai', 'Alvilági', 'Utcai'
    ]},
    {key: 'targyalas', nev: 'Tárgyalás', csoport: 'Szociális', kategoria: 'Aktív', specs: [
        'Meggyőzés', 'Megfélelmítés', 'Vallatás',
    ]},
    {key: 'befolyasolas', nev: 'Befolyásolás', csoport: 'Szociális', kategoria: 'Aktív', specs: [
        'Vezetés', 'Tanítás', 'Manipuláció',
    ]},
    {key: 'szakma', nev: 'Szakma: ', placeholder: 'Milyen? Pl.: Orvos, Virágkötő, Kidobó stb.', csoport: 'Szociális', kategoria: 'Aktív', specs: []},
    {key: 'biotechnologia', nev: 'Biotechnológia', csoport: 'Tudományos', kategoria: 'Aktív', specs: [
        'Elsősegély', 'Kibertechnológia', 'Gyógyszerészet',
    ]},
    {key: 'biotechnologia', nev: 'Vegyészet', csoport: 'Tudományos', kategoria: 'Aktív', specs: [
        'Savak', 'Robbanószerek', 'Biokémia',
    ]},
    {key: 'szamitogep', nev: 'Számítógép', csoport: 'Tudományos', kategoria: 'Aktív', specs: [
        'Szoftver', 'Hardver', 'Programozás',
    ]},
    {key: 'elektronika', nev: 'Elektronika', csoport: 'Tudományos', kategoria: 'Aktív', specs: [
        'Felmérés', 'Építés', 'Javítás',
    ]},
    {key: 'dekazas', nev: 'Dekázás', csoport: 'Tudományos', kategoria: 'Aktív', specs: [
        'Hekkelés', 'Kiberharc', 'MI vezérlés',
    ]},
    {key: 'rigozas', nev: 'Rigozás', csoport: 'Tudományos', kategoria: 'Aktív', specs: [
        'Drónirányítás', 'Járműirányítás', 'Fegyverirányítás',
    ]},
    {key: 'erzekeles', nev: 'Érzékelés', csoport: 'Tudományos', kategoria: 'Aktív', specs: [
        'Vizuális', 'Pszichológiai', 'Környezet',
    ]},
    {key: 'mernok', nev: 'Mérnök: ', placeholder: 'Milyen? Pl.: Mechanikai, Elektronikai stb.', csoport: 'Tudományos', kategoria: 'Aktív', specs: [
        'Tervezés', 'Kivitelezés', 'Kezelés', 'Javítás',
    ]},

    // Mágikus
    {key: 'hermetikus', nev: 'Hermetikus Varázslás', csoport: 'Mágikus', kategoria: 'Aktív', specs: [
        'Rituálék', 'Varázsmondás', 'Varázstörés', 'Varázsvédelem'
    ]},
    {key: 'saman', nev: 'Sámáni Tradíciók', csoport: 'Mágikus', kategoria: 'Aktív', specs: [
        'Rituálék', 'Varázsmondás', 'Varázstörés', 'Varázsvédelem'
    ]},
    {key: 'adeptus', nev: 'Adeptusok Útja', csoport: 'Mágikus', kategoria: 'Aktív', specs: [
        'Támadás', 'Védekezés', 'Varázstörés', 'Kontroll'
    ]},
    {key: 'technomancia', nev: 'Technomancia', csoport: 'Mágikus', kategoria: 'Aktív', specs: [
        'Összeállítás', 'Szétbontás', 'Regisztrálás'
    ]},
    {key: 'idezes', nev: 'Szellemidézés', csoport: 'Mágikus', kategoria: 'Aktív', specs: [
        'Idézés', 'Irányítás', 'Elűzés'
    ]},
    {key: 'asztraljaras', nev: 'Asztráljárás', csoport: 'Mágikus', kategoria: 'Aktív', specs: [
        'Auraolvasás', 'Projekció', 'Asztrális harc'
    ]},
    {key: 'elbajolas', nev: 'Elbájolás', csoport: 'Mágikus', kategoria: 'Aktív', specs: [
        'Alkímia', 'Varázsművesség', 'Semlegesítés'
    ]},
    {key: 'jarmuvezetes', nev: 'Járművezetés: ', placeholder: 'Milyen? Pl.: Autók, Motorok, Hajók stb.', csoport: 'Jármű', kategoria: 'Aktív', specs: [
        'Kezelés', 'Javítás', 
    ]},

    // Harci
    {key: 'pusztakezes', nev: 'Fegyvertelen Harc: ', placeholder: 'Milyen? Pl.: box, MMA, Karate', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Támadás', 'Védekezés', 'Visszatámadás'
    ]},
    {key: 'kiberfegyveres', nev: 'Kiberfegyveres Harc: ', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Alkarpenge', 'Ujjpengék', 'Kézpenge'
    ]},
    {key: 'egykezeskezi', nev: 'Egykezes Kézifegyverek', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Kardok', 'Dárdák', 'Kések', 'Bunkók', 'Tonfák', 'Buzogányok'
    ]},
    {key: 'ketkezeskezi', nev: 'Kétkezes Kézifegyverek', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Pallosok', 'Harci kalapácsok',
    ]},
    {key: 'szalfegyverek', nev: 'Szálfegyverek', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Lándzsák', 'Alabárdok', 'Szálfakardok', 'Pikák', 'Botok'
    ]},
    {key: 'dobofegyverek', nev: 'Dobófegyverek', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Dobókések', 'Dobóbalták', 'Dobócsillagok', 'Gerelyek'
    ]},
    {key: 'lofegyverek', nev: 'Lőfegyverek', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Íjak', 'Számszeríjak', 'Arbalestek', 'Atlatl Dárdák'
    ]},
    {key: 'kezituzfegyver', nev: 'Kézi Tűzfegyverek', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Pisztolyok', 'Géppisztolyok', 'Kábítópisztolyok', 'Revolverek', 'Sörétes Pisztolyok'
    ]},
    {key: 'ketkezestuzfegyver', nev: 'Kétkezes Tűzfegyverek', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Puskák', 'Sörétes Puskák', 'Rohampuskák'
    ]},
    {key: 'nehezfegyverek', nev: 'Nehézfegyverek', csoport: 'Harci', kategoria: 'Aktív', specs: [
        'Könnyű géppuskák', 'Nehéz géppuskák', 'Gránátvetők'
    ]},
    {key: 'egyedifegyver', nev: 'Egyedi fegyver: ', csoport: 'Harci', kategoria: 'Aktív', 
        placeholder: 'Írd be a fegyver nevét',
        megjegyzesek: 'Egzotikus fegyvernek minősül mindaz, ami egyéni tréninget kíván a használatához. Ilyen pl.: korbácsok, mesterlövész puskák, rakétavetők, víz alatti fegyverek stb.'
    },

    // ismeret szakértelmek
    {key: '', nev: '', kategoria: 'Ismeret', csoport: 'Érdeklődési Körök',
        placeholder: 'Érdeklődési kör megnevezése', 
        megjegyzesek: 'A karakter egyéni, a jelleméhez köthető érdeklődési körök írhatóak ide. Ilyen pl.: Troll Trash-metál zenekarok, Tünde borok, 20. századi animék, Összeesküvés elméletek stb.', 
    },
    {key: '', nev: '',  kategoria: 'Ismeret',csoport: '6. világbeli ismeretek',
        placeholder: '6. világbeli ismeret megnevezése',
        megjegyzesek: 'A felébredt világ új kihívásai kerülnek ide. Ilyen pl.: Kibertechnológia, Paranormális állatok, Megatársasági politika, Metahumánok, Mágiaelmélet, Sárkányok, Adatkikötők stb.',
    },
    {key: '', nev: '', kategoria: 'Ismeret', csoport: 'Háttér ismeretek', 
        placeholder: 'Háttér ismeret megnevezése', 
        megjegyzesek: 'Az Aktív szakértelmekhez kapcsolódó elméleti tudás. Gyakran olyan esetben választják, amikor egy karakter például nem képes varázsolni, de felveszi a varázsláselméletet, hogy észrevegye a fontos dolgokat: hermetikus, vagy sámán? Varázsol, vagy csak motyog? Az egy fókusz, vagy csak divatkiegészítő?'
    },
    {key: '', nev: '', kategoria: 'Ismeret', csoport: 'Iskolai ismeretek', 
        placeholder: 'Iskolai ismeret megnevezése', 
        megjegyzesek: 'Az iskolában elsajátítható elméleti tudás kerül ebbe a csoportba. Ilyen pl.: Biológia, Kémia, Orvostudomány, Fizika, Geológia, Pszichológia, Történelem, Zene, Politika, Gazdaságtan, Politika.'
    },
    {key: '', nev: '', kategoria: 'Ismeret', csoport: 'Utcai ismeretek', 
        placeholder: 'Utcai ismeret megnevezése', 
        megjegyzesek: 'Egy adott város jellegzetességeinek ismeretét takarja a szakértelem pl.: Budapest utcái. A specializációk között kap helyet pl.: Bandaismeret, Rendőrségi eljárások, Biztonságos házak.',
        specs: [
            'Biztonságos házak', 'Bandaismeret', 'Rendőrségi eljárások', 'Biztonsági eljárások', 'Bűnszervezetek', 'Szekták'
        ]
    },

    // nyelvi szakértelmek
    {key: '', nev: '', kategoria: 'Nyelvi', csoport: 'Beszéd',
        placeholder: 'Írd be a Nyelv nevét',
        megjegyzesek: 'Az adott nyelv beszédére jogosít fel: 1-es szint csak a felismerést teszi lehetővé. A 2-es szint már kézzel lábbal magyarázással talán használható. A 3-as szint a folyékony beszédet, a 4-es szint anyanyelvi szintet jelent.',
        specs: [
            'Dekás zsargon', 'Üzleti nyelv', 'Mérnöki zsargon', 'Utcai szleng' 
        ]
    },
    {key: '', nev: '', kategoria: 'Nyelvi', csoport: 'Írás/olvasás', 
        placeholder: 'Írd be a Nyelv nevét',
        megjegyzesek: 'A karakter írásbeli képességeit jelképezi. A Shadowrun világában az írás/olvasás már kisebb jelentőséggel bír, bár teljesen még nem tűnt el.',
        specs: [
            'Kriptográfia (titkosírás)', 'Grafológia (íráskép elemzés)'
        ]
    },
];
