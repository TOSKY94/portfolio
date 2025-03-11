import NextRetailLogo from '../assets/next-retail.jpg';
import EProcessLogo from '../assets/eprocess.png';
import UnionBankLogo from '../assets/union-bank.jpeg';

export interface Experience {
    company: string;
    logo: string;
    location: string;
    duration: string;
    role: string;
    description: string;
    achievements: string[];
  }
  
  export const experiences: Experience[] = [
    {
      company: "Next Retail Ltd",
      logo: NextRetailLogo,
      location: "Leicester, UK",
      duration: "2023 — Present",
      role: "Software Developer",
      description: "Leading UK-based fashion and homeware retailer with £4 billion+ annual revenue",
      achievements: [
        "Developed scalable .NET Core microservices for product lifecycle management",
        "Reduced deployment times by 40% through CI/CD pipeline optimization",
        "Implemented caching strategies cutting manual work by 50% during sales",
        "Enhanced system observability reducing debugging time by 60%"
      ]
    },
    {
      company: "eProcess (Ecobank Transnational)",
      logo: EProcessLogo,
      location: "Lagos, Nigeria",
      duration: "2022",
      role: "Software Developer",
      description: "Pan-African banking group operating in 33 countries with $20bn+ assets",
      achievements: [
        "Optimized PL/SQL packages improving database performance by 30%",
        "Automated daily FX rate uploads saving 45-60 mins/day",
        "Reduced human intervention by 70% through process automation",
        "Implemented robust exception-handling mechanisms"
      ]
    },
    {
      company: "Union Bank",
      logo: UnionBankLogo,
      location: "Lagos, Nigeria",
      duration: "2019 — 2022",
      role: "Application Support",
      description: "Established Nigerian commercial bank with 100+ branches nationwide",
      achievements: [
        "Optimized core banking database performance",
        "Conducted UAT for critical banking modules",
        "Managed Oracle WebLogic Server configurations",
        "Maintained 99.9% system uptime for core banking processes"
      ]
    }
  ];