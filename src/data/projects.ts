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
			'https://www.figma.com/design/eP9KnXSCUVSPVzJb0mcM2W/Portfolio-Vipeba?node-id=19-1772&m=dev',
		images: [],
		date: '22/09/2024'
	}
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
