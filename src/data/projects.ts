import { TECHNOLOGIES } from './technologies'

export interface Project {
	proyectId: string
	coverImage: string
	title: string
	description: Array<string>
	technologies: { name: string; color: string; Icon: any }[]
	repo?: string
	link?: string
	images: Array<string>
}

export const PROJECTS: Project[] = [
	{
		proyectId: 'Portfolio',
		coverImage: '/portfolio-preview.webp',
		title: 'Portfolio Vipeba',
		description: [
			'Porfolio de presentación como desarrollador de software.',
			'Diseñado en Figma buscando un enfoque moderno y atractivo.',
			'Desarrollado con Astro y Tailwind CSS aprovechando su capacidad para generar sitios estáticos rápidos y eficientes.'
		],
		technologies: [TECHNOLOGIES.FIGMA, TECHNOLOGIES.ASTRO, TECHNOLOGIES.TAILWIND],
		link: 'https://vipeba.dev',
		repo: 'https://github.com/VictorPB/Portfolio',
		images: []
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
