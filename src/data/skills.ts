export const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', url: 'https://react.dev/learn', iconKey: 'react' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/', iconKey: 'typescript' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', iconKey: 'javascript' },
      { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', iconKey: 'html5' },
      { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', iconKey: 'css3' },
      { name: 'Tailwind', url: 'https://tailwindcss.com/docs', iconKey: 'tailwindcss' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'NestJS', url: 'https://docs.nestjs.com/', iconKey: 'nestjs' },
      { name: '.NET', url: 'https://learn.microsoft.com/en-us/dotnet/', iconKey: 'dotnet' },
      { name: 'Node.js', url: 'https://nodejs.org/docs/latest/api/', iconKey: 'nodedotjs' },
      { name: 'REST APIs', url: 'https://developer.mozilla.org/en-US/docs/Glossary/REST', iconKey: 'swagger' },
      { name: 'SignalR', url: 'https://learn.microsoft.com/en-us/aspnet/core/signalr/javascript-client?view=aspnetcore-10.0', iconKey: 'signal' },
    ],
  },
  {
    name: 'Bases de Datos',
    skills: [
      { name: 'SQL Server', url: 'https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver17', iconKey: 'microsoftsqlserver' },
      { name: 'MySQL', url: 'https://dev.mysql.com/doc/', iconKey: 'mysql' },
    ],
  },
  {
    name: 'Herramientas',
    skills: [
      { name: 'Git', url: 'https://git-scm.com/doc', iconKey: 'git' },
      { name: 'GitHub', url: 'https://docs.github.com/', iconKey: 'github' },
      { name: 'Swagger', url: 'https://swagger.io/docs/', iconKey: 'swagger' },
      { name: 'Postman', url: 'https://learning.postman.com/docs/', iconKey: 'postman' },
    ],
  },
] as const