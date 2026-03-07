import sigadiImg from '../assets/images/projects/SIGADI.png'
import  tukiImg  from '../assets/images/projects/TUKI.png'

export const projects = [
    {
        title: 'SIGADI – Sistema de Gestión Administrativa',
        description:
            'Sistema web para la gestión administrativa de una organización comunitaria. Incluye módulos de usuarios, solicitudes, afiliaciones, materiales educativos y administración del sistema.',
        technologies: [
            { name: 'React', url: 'https://react.dev/learn' },
            { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/' },
            { name: 'NestJS', url: 'https://docs.nestjs.com/' },
            { name: 'MySQL', url: 'https://dev.mysql.com/doc/' },
        ],
        image: sigadiImg,
        demo: 'https://sigadi-rc.org/',
        github: 'https://github.com/crissXcoder/canasysFronEnd',
    },  
    {   
        title: 'Juego de Memoria Multijugador',
        description:
            'Aplicación web que permite a múltiples jugadores participar en una partida de memoria por turnos utilizando comunicación en tiempo real.',
        technologies: [
            { name: 'React', url: 'https://react.dev/learn' },
            { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/' },
            { name: '.NET', url: 'https://learn.microsoft.com/en-us/dotnet/' },
            { name: 'SignalR', url: 'https://learn.microsoft.com/en-us/aspnet/core/signalr/javascript-client?view=aspnetcore-10.0' },
            { name: 'SQL Server', url: 'https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver17' },
        ],
        image: null,
        demo: null,
        github: 'https://github.com/Jhonpy22/Proy_Paradig_Front',
    },  
    {   
        title: 'API REST de Países',
        description:
            'API backend desarrollada en .NET para gestionar información geográfica de países y regiones mediante endpoints REST.',
        technologies: [
            { name: '.NET', url: 'https://learn.microsoft.com/en-us/dotnet/' },
            { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
            { name: 'SQL Server', url: 'https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver17' },
        ],
        image: null,
        demo: null,
        github: 'https://github.com/Jhonpy22/Web-Paises-Back',
    },  
    {   
        title: 'Tuki Tuki – Landing Page',
        description:
            'Landing page visual enfocada en diseño UI y experiencia de usuario.',
        technologies: [
            { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        ],
        image: tukiImg,
        demo: 'https://tuki-tuki-rho.vercel.app/',
        github: 'https://github.com/Jhonpy22/tuki-tuki',
    },
] as const