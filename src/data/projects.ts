export type Project = {
  id: number
  name: string
  description: string
  images: string[]
  link: string
  tech: string[]
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Device Monitoring System',
    description:
      'A system designed to organize and manage devices (in this project, KiosK) for banking clients.',
    tech: ['Vue 3', 'Option API', 'JavaScript', 'Tailwind CSS', 'Axios'],
    images: [new URL('@/assets/images/dm.png', import.meta.url).href],
    link: 'https://example.com/project-a',
    year: '2025',
  },
]

export default projects
