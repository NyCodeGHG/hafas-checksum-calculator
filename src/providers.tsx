import DeutscheBahn from "./components/logos/DeutscheBahn";
import HVV from "./components/logos/HVV";
import IrishRail from "./components/logos/IrishRail";
import OOEVV from "./components/logos/OOEVV";
import SaarVV from "./components/logos/SaarVV";
import SBahnMunich from "./components/logos/SBahnMunich";
import VBN from "./components/logos/VBN";
import VMT from "./components/logos/VMT";
import VOR from "./components/logos/VOR";
import VSN from "./components/logos/VSN";
import VVV from "./components/logos/VVV";

export interface Provider {
  name: string,
  icon: JSX.Element,
  salt: Buffer,
  url: string,
  useMicMac: boolean
}

export const providers: Array<Provider> = [
  {
    name: 'DB',
    icon: <DeutscheBahn />,
    salt: Buffer.from('6264493855566A34304B356676787766', 'hex'),
    url: 'https://reiseauskunft.bahn.de/bin/mgate.exe',
    useMicMac: false,
  },
  {
    name: 'HVV',
    icon: <HVV />,
    salt: Buffer.from('pqjM3iKEGOAhYbX76k9R5zutv', 'utf8'),
    url: 'https://hvv-app.hafas.de/bin/mgate.exe',
    useMicMac: true
  },
  {
    name: 'Irish Rail',
    icon: <IrishRail />,
    salt: Buffer.from('i5s7m3q9z6b4k1c2', 'utf8'),
    url: 'https://journeyplanner.irishrail.ie/bin/mgate.exe',
    useMicMac: true
  },
  {
    name: 'OÖVV',
    icon: <OOEVV />,
    salt: Buffer.from('6633673735743766726667323938336A', 'hex'),
    url: 'https://app.verkehrsauskunft.at/bin/mgate.exe',
    useMicMac: true
  },
  {
    name: 'SaarVV',
    icon: <SaarVV />,
    salt: Buffer.from('HJtlubisvxiJxss', 'utf-8'),
    url: 'https://saarfahrplan.de/bin/mgate.exe',
    useMicMac: true
  },
  {
    name: 'S-Bahn München',
    icon: <SBahnMunich />,
    salt: Buffer.from('ggnvMVV8RTt67gh1', 'utf8'),
    url: 'https://s-bahn-muenchen.hafas.de/bin/540/mgate.exe',
    useMicMac: true
  },
  {
    name: 'VBN',
    icon: <VBN />,
    salt: Buffer.from('SP31mBufSyCLmNxp', 'utf-8'),
    url: 'https://fahrplaner.vbn.de/bin/mgate.exe',
    useMicMac: true
  },
  {
    name: 'VMT',
    icon: <VMT />,
    salt: Buffer.from('7x8d3n2a5m1b3c6z', 'utf-8'),
    url: 'https://vmt.hafas.de/bin/ticketing/mgate.exe',
    useMicMac: true
  },
  {
    name: 'VOR',
    icon: <VOR />,
    salt: Buffer.from('6633673735743766726667323938336A', 'hex'),
    url: 'https://anachb.vor.at/bin/mgate.exe',
    useMicMac: true
  },
  {
    name: 'VSN',
    icon: <VSN />,
    salt: Buffer.from('SP31mBufSyCLmNxp', 'utf8'),
    url: 'https://fahrplaner.vsninfo.de/hafas/mgate.exe',
    useMicMac: true
  },
  {
    name: 'VVV',
    icon: <VVV />,
    salt: Buffer.from('6633673735743766726667323938336A', 'hex'),
    url: 'https://fahrplan.vmobil.at/bin/mgate.exe',
    useMicMac: true
  }
];
