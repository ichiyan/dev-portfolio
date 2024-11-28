import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Science in Computer Science',
		description: '',
		location: 'Cebu, Philippines',
		logo: Assets.USC,
		name: '',
		organization: 'University of San Carlos',
		period: { from: new Date(2019, 7, 12), to: new Date(2023, 4, 20) },
		shortDescription: '',
		slug: 'usc-computer-science',
		subjects: ['C', 'Java', 'Algorithms', 'Data Structures', 'Web Development', 'Mobile App Development', 'Software Engineering', 'Information Management', 
					'Information Security', 'Discrete Structures', 'Data Analytics'], 
		color: 'lawngreen',
		honors: ['magna cum laude', 'cum laude caroli sancti']
	},
	{
		degree: 'Elementary to Senior High School (STEM)',
		description: '',
		location: 'Cebu, Philippines',
		logo: Assets.DLSASMC,
		name: '',
		organization: 'De La Salle Andres Soriano Memorial College',
		period: { from: new Date(2007, 5, 1), to: new Date(2019, 2, 30) },
		shortDescription: '',
		slug: 'dls-asmc',
		subjects: ['Science, Technology, Engineering, and Math Strand'], 
		color: 'springgreen',
		honors: ['valedictorian']
	},
];

export const title = 'Education';
