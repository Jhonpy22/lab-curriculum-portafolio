import type { IconType } from 'react-icons'
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiNestjs,
    SiDotnet,
    SiNodedotjs,
    SiMysql,
    SiGithub,
    SiGit,
    SiSwagger,
    SiPostman,
} from 'react-icons/si'
import { TbApi, TbDatabase } from 'react-icons/tb'
import { RiSignalTowerLine } from 'react-icons/ri'

export const techIcons: Record<string, IconType> = {
    react: SiReact,
    typescript: SiTypescript,
    javascript: SiJavascript,
    html5: SiHtml5,
    css3: SiCss,
    tailwindcss: SiTailwindcss,
    nestjs: SiNestjs,
    dotnet: SiDotnet,
    nodedotjs: SiNodedotjs,
    mysql: SiMysql,
    github: SiGithub,
    git: SiGit,
    swagger: SiSwagger,
    postman: SiPostman,
    microsoftsqlserver: TbDatabase,
    signal: RiSignalTowerLine,
    api: TbApi,
}