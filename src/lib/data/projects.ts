import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'django-e-commerce',
		color: 'plum',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: '', label: 'Site' }],
		logo: Assets.Unknown,
		name: 'E-Commerce Store',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'sql', 'django', 'mysql', 'datagrip'),
		type: 'Web Application'
	},
	{
		slug: 'neuro-vis',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			`A brain activity to image reconstruction deep learning research presented during the CMLDS 2024 
			at Singapore where we won the best presentation award.`,
		links: [{ to: 'https://dl.acm.org/doi/10.1145/3661725.3661744', label: 'Published Paper' }],
		logo: Assets.NeuroVis,
		name: 'Neuro-Vis: Guided fMRI-to-Image Reconstruction',
		period: {
			from: new Date(2024, 3, 13)
		},
		skills: getSkills('python', 'pytorch',  'diffusers', 'pandas', 'scikit-learn', 'numpy', 'matplotlib', 'jupyter', 'wandb'),
		type: 'Deep Learning Project'
	},
	{
		slug: 'malware-prediction',
		color: 'red',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/Malware-Prediction', label: 'GitHub' }],
		logo: Assets.Malware,
		name: 'Malware Prediction Exploratory Data Analysis',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'pandas', 'scikit-learn', 'numpy', 'matplotlib', 'jupyter'),
		type: 'Data Science Project'
	},
	{
		slug: 'english-character-recognition',
		color: 'orchid',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/English-Character-Recognition', label: 'GitHub' }],
		logo: Assets.EnglishCharacters,
		name: 'English Character Recognition',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'pandas', 'scikit-learn', 'numpy', 'matplotlib', 'jupyter'),
		type: 'Data Science Project'
	},
	{
		slug: 'shape-recognition',
		color: 'royalblue',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/English-Character-Recognition', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Shape Recognition',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'java', 'opencv'),
		type: 'Data Science Project'
	},
	{
		slug: 'data-scraping',
		color: 'thistle',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.DataScraping,
		name: 'Data Scraping',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'beautiful-soup', 'selenium', 'whisper', 'scrapy', 'spacy', 'jupyter'),
		type: 'Data Science Project'
	},
	{
		slug: 'data-science',
		color: 'gold',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Collection of DataCamp Data Science Projects',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'pandas', 'scikit-learn', 'numpy', 'matplotlib', 'seaborn', 'jupyter'),
		type: 'Data Science Project'
	},
	{
		slug: 'cpu-scheduling',
		color: 'springgreen',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/CPU-Scheduling-Algorithms-Simulation', label: 'GitHub' }],
		logo: Assets.CPU,
		name: 'CPU Scheduling Algorithms Simulation',
		period: {
			from: new Date()
		},
		skills: getSkills('python' ),
		type: 'Console Application'
	},
	{
		slug: 'rsa-encryption',
		color: 'red',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/Sample-RSA-Encryption', label: 'GitHub' }],
		logo: Assets.RSA,
		name: 'RSA Encryption',
		period: {
			from: new Date()
		},
		skills: getSkills('python'),
		type: 'Console Application'
	},	
	{
		slug: 'chess',
		color: 'white',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/Chess-Java', label: 'GitHub' }],
		logo: Assets.Chess,
		name: 'Chess (PvP and PvC)',
		period: {
			from: new Date()
		},
		skills: getSkills('java', 'stockfish'),
		type: 'Desktop Application'
	},
	{
		slug: 'interpolation',
		color: 'aqua',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://interpolation-equally-spaced-points.netlify.app/', label: 'Site' }],
		logo: Assets.Interpolation,
		name: 'Numerical Interpolation Calculator',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'css', 'reactjs', 'bootstrap'),
		type: 'Web Application'
	},
	{
		slug: 'taskvenator',
		color: 'slateblue',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/TaskVenator', label: 'GitHub' }],
		logo: Assets.TaskVenator,
		name: 'TaskVenator: Gamified Productivity App',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'php', 'sql', 'sass', 'reactjs', 'bootstrap', 'socketio', 'laravel', 'mysql', 'xampp', 'phpmyadmin', 'redis'),
		type: 'Web Application'
	},
	{
		slug: 'calfitgym',
		color: 'red',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/CalFitGym', label: 'GitHub' }],
		logo: Assets.CalFitGym,
		name: 'CalFitGym',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'php', 'sql', 'css', 'bootstrap', 'laravel', 'mysql', 'xampp', 'phpmyadmin'),
		type: 'Web Application'
	},
	{
		slug: 'doggo',
		color: 'hotpink',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/Doggo', label: 'GitHub' }],
		logo: Assets.Doggo,
		name: 'Doggo',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'php', 'sql', 'css', 'sass', 'bootstrap', 'vuejs', 'laravel', 'mysql', 'xampp', 'phpmyadmin'),
		type: 'Web Application'
	},
	{
		slug: 'isekai-express',
		color: 'royalblue',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/Merch-Shop', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Isekai Express: Anime Merchandise Shop',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'php', 'sql', 'css', 'bootstrap', 'laravel', 'mysql', 'xampp', 'phpmyadmin'),
		type: 'Web Application'
	},
	{
		slug: 'openwhyd',
		color: 'royalblue',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/ichiyan/Flutter-Openwhyd-API-Music-App', label: 'GitHub' }],
		logo: Assets.Openwhyd,
		name: 'Openwhyd: Music Streaming and Curation',
		period: {
			from: new Date()
		},
		skills: getSkills('dart', 'flutter'),
		type: 'Mobile Application'
	},
	{
		slug: 'finlit',
		color: 'palegreen',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'FinLit: Mobile Game MVP',
		period: {
			from: new Date()
		},
		skills: getSkills('dart', 'flutter', 'firebase'),
		type: 'Mobile Application'
	},
	{
		slug: 'search-and-rescue-robot',
		color: 'silver',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Soteria: Search and Rescue Robot Prototype',
		period: {
			from: new Date()
		},
		skills: getSkills('cpp', 'delphi', 'arduino'),
		type: 'Robotics Project'
	},
	{
		slug: 'front-end',
		color: 'silver',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Collection of Early Front-End Works',
		period: {
			from: new Date()
		},
		skills: getSkills('html', 'css', 'sass', 'js', 'photoshop'),
		type: 'Web Application'
	},
	// {
	// 	slug: 'slick-portfolio-angular',
	// 	color: '#5e95e3',
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	shortDescription:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Unknown,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('angular', 'ts', 'tailwind'),
	// 	type: 'Website Template'
	// },
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

export const title = 'Projects';
