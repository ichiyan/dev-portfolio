import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-engineer',
		company: 'Alliance Software Inc.',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Cebu, PH',
		period: { from: new Date(2023, 4, 29), to: new Date(2023, 7, 29) },
		skills: getSkills('reactjs', 'java', 'spring', 'hibernate', 'sql', 'mysql', 'dbeaver'),
		name: 'Software Engineer',
		color: 'red',
		links: [],
		logo: Assets.ASI,
		shortDescription: `Revamped and consolidated client's existing branch, warehouse, and related systems 
							to make a centralized web-based system.`
	},
];

export const title = 'Experience';
