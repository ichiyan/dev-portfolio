import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-engineer',
		company: 'Alliance Software Inc.',
		description: `<ul>
						<li>Worked on the front and back-end development of a web-based supply chain management system and e-commerce system using ReactJS, Java Spring, and MySQL</li>
						<li>Wrote SQL scripts for data fetching, merging, aggregating, and more to create reports</li>
						<li>Streamlined development processes by creating reusable components that could be shared across different parts of the application</li>
						<li>Optimized code performance by identifying bottlenecks and refactoring for improved efficiency</li>
					<ul>`,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Cebu, PH',
		period: { from: new Date(2023, 4, 29), to: new Date(2023, 8, 26) },
		skills: getSkills('js', 'reactjs', 'java', 'spring', 'sql', 'mysql', 'dbeaver'),
		name: 'Software Engineer',
		color: 'red',
		links: [],
		logo: Assets.ASI,
		// shortDescription: `Revamped and consolidated client's existing branch, warehouse, and related systems 
		// 					to make a centralized web-based system.`
		shortDescription: `Worked on the front and back-end development of a web-based supply chain management system and e-commerce system and 
							wrote SQL scripts for data fetching, merging, aggregating, and more to create reports`
	},
	{
		slug: 'software-developer',
		company: 'Trent',
		description: `<ul>
						<li>Implemented the front-end screens of a delivery service mobile application using Flutter</li>
						<li>Used the Google Maps API to track delivery riders' location</li>
					  </ul>`,
		contract: ContractType.Subcontract,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2021, 9, 11), to: new Date(2022, 2, 1) },
		skills: getSkills('dart', 'flutter', 'google-maps', 'android-studio'),
		name: 'Software Developer',
		color: 'orange',
		links: [],
		logo: Assets.Unknown,
		shortDescription: `Developed mobile applications for the client's delivery services`
	},
];

export const title = 'Experience';
