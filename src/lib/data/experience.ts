import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-engineer',
		company: 'Alliance Software Inc.',
		description: '',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Cebu, PH',
		period: { from: new Date(2023, 4, 29), to: new Date(2023, 7, 29) },
		skills: getSkills('js', 'reactjs', 'java', 'spring', 'sql', 'mysql', 'dbeaver'),
		name: 'Software Engineer',
		color: 'red',
		links: [],
		logo: Assets.ASI,
		shortDescription: `Revamped and consolidated client's existing branch, warehouse, and related systems 
							to make a centralized web-based system.`
	},
	{
		slug: 'software-developer',
		company: '',
		description: '',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2021, 9, 11), to: new Date(2022, 2, 1) },
		skills: getSkills('dart', 'flutter', 'google-maps'),
		name: 'Software Developer',
		color: 'orange',
		links: [],
		logo: Assets.Unknown,
		shortDescription: `Developed mobile applications for the client's delivery services.`
	},
];

export const title = 'Experience';
