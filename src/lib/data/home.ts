import { Platform } from '$lib/types';
import { getAllSkillsExcept } from './skills';

export const title = 'Home';

export const name = 'Gabriela';

export const lastName = 'Balisacan';

export const description = ` a Computer Science graduate with a drive to solve real-world problems 
							through data and technology, hone software development skills, and realize continuous 
							technical, professional, and personal growth`;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: 
		Platform.GitHub, 
		link: 'https://github.com/ichiyan' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
	{
		platform: Platform.Email,
		link: 'gabriela.mbalisacan01@gmail.com'
	},
];

export const skills = getAllSkillsExcept('cpp', 'delphi', 'whisper', 'spring', 'vuejs', 'stockfish', 'firebase', 'arduino', 'google-maps');
