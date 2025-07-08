import { DnsModel } from "./dns.model"

export const dnsData: DnsModel = {
  ember: {
    szoveg: 'Ember',
    nemek: {
      ferfi: {
        atlagMagassag: 180,
        atlagSuly: 86,
        varhatoEletkor: 65,
        tulMod: [
          {key: 'kockatartalek', ertek: 2},
          {key: 'fizEro', ertek: 1},
          {key: 'asztUgy', ertek: 1},
        ]
      },
      no: {
        atlagMagassag: 166,
        atlagSuly: 70,
        varhatoEletkor: 75,
        tulMod: [
          {key: 'kockatartalek', ertek: 2},
          {key: 'asztGyo', ertek: 1},
          {key: 'asztAll', ertek: 1},
        ]
      }
    },
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
    kepessegek: []
  },
  tunde: {
    szoveg: 'Tünde',
    nemek: {
      ferfi: {
        atlagMagassag: 186,
        atlagSuly: 80,
        varhatoEletkor: 75,
        tulMod: [
          {key: 'fizEro', ertek: 1},
          {key: 'fizUgy', ertek: 1},
          {key: 'asztEro', ertek: 2},
          {key: 'asztGyo', ertek: 1},
          {key: 'asztUgy', ertek: 1},
        ]
      },
      no: {
        atlagMagassag: 174,
        atlagSuly: 66,
        varhatoEletkor: 85,
        tulMod: [
          {key: 'fizUgy', ertek: 1},
          {key: 'asztEro', ertek: 2},
          {key: 'asztGyo', ertek: 2},
          {key: 'asztAll', ertek: 1},
        ]
      }
    },
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
    kepessegek: [
      'Éjszakai látás'
    ]
  },
  torpe: {
    szoveg: 'Törpe',
    nemek: {
      ferfi: {
        atlagMagassag: 137,
        atlagSuly: 60,
        varhatoEletkor: 70,
        tulMod: [
          {key: 'fizEro', ertek: 3},
          {key: 'fizGyo', ertek: -1},
          {key: 'fizAll', ertek: 1},
          {key: 'asztUgy', ertek: 1},
          {key: 'asztAll', ertek: 1},
        ]
      },
      no: {
        atlagMagassag: 123,
        atlagSuly: 48,
        varhatoEletkor: 80,
        tulMod: [
          {key: 'fizEro', ertek: 2},
          {key: 'fizGyo', ertek: -1},
          {key: 'fizAll', ertek: 1},
          {key: 'asztGyo', ertek: 1},
          {key: 'asztAll', ertek: 2},
        ]
      }
    },
    szorzoRuhazat: 0,
    szorzoEletvitel: 0,
    kepessegek: [
      '+2 Állóképesség Mérgezés ellen',
      'Hőlátás'
    ]
  },
  ork: {
    szoveg: 'Ork',
    nemek: {
      ferfi: {
        atlagMagassag: 200,
        atlagSuly: 135,
        varhatoEletkor: 55,
        tulMod: [
          {key: 'fizEro', ertek: 3},
          {key: 'fizAll', ertek: 2},
          {key: 'asztEro', ertek: -1},
          {key: 'asztUgy', ertek: 1},
        ]
      },
      no: {
        atlagMagassag: 180,
        atlagSuly: 110,
        varhatoEletkor: 65,
        tulMod: [
          {key: 'fizEro', ertek: 2},
          {key: 'fizAll', ertek: 2},
          {key: 'asztEro', ertek: -1},
          {key: 'asztGyo', ertek: 1},
          {key: 'asztAll', ertek: 1},
        ]
      }
    },
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
    kepessegek: [
      '+1 Fizikai Sérülés ellen',
      'Éjszakai látás'
    ]
  },
  troll: {
    szoveg: 'Troll',
    nemek: {
      ferfi: {
        atlagMagassag: 260,
        atlagSuly: 300,
        varhatoEletkor: 55,
        tulMod: [
          {key: 'fizEro', ertek: 4},
          {key: 'fizUgy', ertek: -1},
          {key: 'fizAll', ertek: 3},
          {key: 'asztEro', ertek: -1},
          {key: 'asztUgy', ertek: 1},
          {key: 'pancel', ertek: 1},
        ]
      },
      no: {
        atlagMagassag: 240,
        atlagSuly: 240,
        varhatoEletkor: 65,
        tulMod: [
          {key: 'fizEro', ertek: 3},
          {key: 'fizUgy', ertek: -1},
          {key: 'fizAll', ertek: 3},
          {key: 'asztEro', ertek: -1},
          {key: 'asztGyo', ertek: 1},
          {key: 'asztAll', ertek: 1},
          {key: 'pancel', ertek: 1},
        ]
      }
    },
    szorzoRuhazat: 1.5,
    szorzoEletvitel: 1.5,
    kepessegek: [
      '+2 Fizikai Sérülés ellen',
      'Hőlátás',
      '+1 Páncél'
    ]
  }
}