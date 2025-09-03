export type Project = {
  id: number
  name: string
  description: string
  images: string[]
  link: string
  tech: string[]
  year: string
  onprem: boolean
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Device Monitoring System',
    description:
      'A system designed to organize and manage devices (in this project, KiosK) for banking clients.',
    tech: ['Vue 3', 'Option API', 'JavaScript', 'Tailwind CSS', 'Axios'],
    images: [new URL('@/assets/images/dm.png', import.meta.url).href],
    link: '',
    year: '2025',
    onprem: true,
  },
  {
    id: 2,
    name: 'Queue Management System',
    description:
      'A comprehensive queue system deployed in banks, hospitals, and government institutions. Built 3 interconnected web apps: CMS, Signage, and Caller App',
    tech: ['Vue 3', 'Next.JS', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Axios'],
    images: [
      new URL('@/assets/images/Signage.png', import.meta.url).href,
      new URL('@/assets/images/Caller.png', import.meta.url).href,
      new URL('@/assets/images/cms.png', import.meta.url).href,
    ],
    link: '',
    year: '2025',
    onprem: true,
  },
  {
    id: 3,
    name: 'Full Stack Basic CRUD',
    description: 'Basic CRUD functionality built with MySQL, Express, and React JS.',
    tech: ['React', 'Express', 'JavaScript', 'Bulma CSS', 'Node', 'MySQL'],
    images: [new URL('@/assets/images/fullstack-crud.png', import.meta.url).href],
    link: 'https://github.com/yudhastyoo/Fullstack-Basic-CRUD-React',
    year: '2024',
    onprem: false,
  },
  {
    id: 4,
    name: 'Dashboard Monitoring',
    description:
      'An easy-to-use dashboard for tracking employee task progress and performance in real time.',
    tech: ['React', 'TypeScript', 'CSS', 'ECharts'],
    images: [new URL('@/assets/images/dashboard-monitoring.png', import.meta.url).href],
    link: '',
    year: '2024',
    onprem: true,
  },
  {
    id: 5,
    name: 'Random Quote Machine',
    description:
      'A simple web app that displays and generates a random quote from an open-source API.',
    tech: ['React', 'JavaScript', 'CSS'],
    images: [new URL('@/assets/images/random-quote-machine.png', import.meta.url).href],
    link: 'https://random-quote-machine-ecru-two.vercel.app/',
    year: '2024',
    onprem: false,
  },
  {
    id: 6,
    name: 'Personal Portfolio v3',
    description: 'Third version of my personal portfolio website.',
    tech: ['Vue 3', 'JavaScript', 'Tailwind CSS'],
    images: [new URL('@/assets/images/porto-v3.png', import.meta.url).href],
    link: 'https://portfolio-v3-navy-one.vercel.app/',
    year: '2024',
    onprem: false,
  },
  {
    id: 7,
    name: 'GPS ID v3',
    description:
      'A fleet management system for accessing and controlling more than 30 types of report.',
    tech: ['Vue 2', 'JavaScript', 'Bootstrap', 'Vuesax', 'Vue Leaflet'],
    images: [new URL('@/assets/images/gpsid.png', import.meta.url).href],
    link: 'https://gps.id/',
    year: '2023',
    onprem: false,
  },
  {
    id: 8,
    name: 'Dekka by GPS ID',
    description: 'A landing page to introduce DEKKA product.',
    tech: ['Vue 2', 'JavaScript', 'Bootstrap'],
    images: [new URL('@/assets/images/dekka.png', import.meta.url).href],
    link: 'https://dekka.id/',
    year: '2023',
    onprem: false,
  },
  {
    id: 9,
    name: 'GPS ID Subscription System',
    description:
      'A payment system integrated with a third-party payment gateway for secure and efficient transactions.',
    tech: ['Vue 3', 'JavaScript', 'Bootstrap', 'Xendit', 'Midtrans'],
    images: [new URL('@/assets/images/subscription.png', import.meta.url).href],
    link: 'https://gps.id/',
    year: '2023',
    onprem: false,
  },
  {
    id: 10,
    name: 'Personal Portfolio v2',
    description: 'Second version of my personal portfolio website.',
    tech: ['React', 'JavaScript', 'React-Bootstrap'],
    images: [new URL('@/assets/images/porto-v2.png', import.meta.url).href],
    link: 'https://portfolio-yudha.vercel.app/',
    year: '2023',
    onprem: false,
  },
  {
    id: 11,
    name: 'Personal Portfolio v1',
    description: 'First version of my personal portfolio website.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    images: [new URL('@/assets/images/porto-v1.png', import.meta.url).href],
    link: 'https://yudhastyoo.github.io/',
    year: '2021',
    onprem: false,
  },
  {
    id: 12,
    name: 'AturToko Company Profile',
    description:
      'An e-commerce enabler and omnichannel platform, integrated with local marketplaces.',
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
    images: [new URL('@/assets/images/aturtoko.png', import.meta.url).href],
    link: 'https://aturtoko.id/',
    year: '2021',
    onprem: false,
  },
  {
    id: 13,
    name: 'YourCare Landing Page',
    description: 'A landing page for YourCare, I built it during covid-19.',
    tech: ['HTML', 'CSS'],
    images: [new URL('@/assets/images/yourcare.png', import.meta.url).href],
    link: 'https://github.com/yudhastyoo/YourCare',
    year: '2020',
    onprem: false,
  },
  {
    id: 14,
    name: 'Vista',
    description: 'An online marketplace for customers to buy fashion items.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    images: [new URL('@/assets/images/vista.png', import.meta.url).href],
    link: 'https://github.com/yudhastyoo/Vista',
    year: '2019',
    onprem: false,
  },
  {
    id: 15,
    name: 'Bottle',
    description: 'A simple landing page with a little function for changing color theme.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    images: [new URL('@/assets/images/bottle.png', import.meta.url).href],
    link: 'https://bottle-lake.vercel.app/',
    year: '2018',
    onprem: false,
  },
]

export default projects
