import { TECHNOLOGIES } from './technologies'

export interface Project {
	proyectId: string
	title: string
	logo?: string
	coverImage: string
	description: Array<string>
	technologies: { name: string; color: string; Icon: any }[]
	repo?: string
	link?: string
	diseño?: string
	images: Array<string>
	date?: string
}

export const PROJECTS: Project[] = [
	{
		proyectId: 'Portfolio',
		title: 'Portfolio Vipeba',
		logo: '/logo.webp',
		coverImage: '/portfolio-preview.webp',
		description: [
			'Porfolio de presentación como desarrollador de software.',
			'Diseñado buscando un enfoque moderno y llamativo.',
			'Muestra la experiencia laboral, CV, proyectos y contenido profesional.'
		],
		technologies: [TECHNOLOGIES.FIGMA, TECHNOLOGIES.ASTRO, TECHNOLOGIES.TAILWIND],
		link: 'https://vipeba.dev',
		repo: 'https://github.com/VictorPB/Portfolio',
		diseño:
			'https://www.figma.com/design/DRHniCURB8oFf3D4uo65Ud/Portfolio-Vipeba?node-id=0-1&t=r9HWaeRzQeq1GmRe-1',
		images: [],
		date: '22/09/2024'
	},
  {
		proyectId: 'UI_Tidal_App',
		title: 'UI Tidal App',
		logo: '/logo.webp',
		coverImage: '/uitidal-preview.webp',
		description: [
			'Réplica de la interfaz de usuario de la aplicación de música Tidal.',
			'Descubrimos sus componentes y truquitos de diseño.',
		],
		technologies: [TECHNOLOGIES.FIGMA],
		diseño:
			'https://www.figma.com/design/jof2I2oQao3DKalvYq0Pnx/Dise%C3%B1os-de-Apps-reales?node-id=8-445&t=t0rmCrD49zVCW0Hz-1',
		images: [],
		date: '22/11/2025'
	},
  
]

export function getProjectById(projectId: string): Project | undefined {
	return PROJECTS.find((project) => project.proyectId === projectId)
}

export function getProjectsByIds(projectsIds: string[]): Project[] {
	let projects: Project[] = []
	for (const projectId of projectsIds) {
		const project = getProjectById(projectId)
		if (!project) {
			throw new Error(`Project with id ${projectId} not found`)
		}
		projects.push(project)
	}
	return projects
}
