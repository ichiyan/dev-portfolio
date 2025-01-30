import { Platform } from '$lib/types';
import { getAllSkillsExcept } from './skills';
import { Icons, getPlatfromIcon } from '$lib/utils';
import { base } from '$app/paths';


export const title = 'Home';

export const name = 'Gabriela';

export const lastName = 'Balisacan';

// export const description = `With a solid foundation in full-stack web development and data science, I am passionate about tackling 
// 							complex real-world challenges through innovative and impactful tech and data-driven solutions. My strong 
// 							analytical, technical, problem-solving, and collaborative skills, coupled with my adaptability, keen attention
// 							to detail, and commitment to quality, enable me to deliver exceptional results, even in fast-paced environments
// 							and with minimal supervision. Dedicated to continuous learning and growth, I strive to further refine my skills 
// 							while contributing to meaningful projects.`;

export const description = `A Computer Science graduate with a solid foundation in full-stack web development and data science and a
							drive to solve complex real-world challenges through innovative and impactful tech and data-driven solutions`;

export const links: Array<{ name: string; icon: Icons; link: string;}> = [
	{ 
		name: Platform.GitHub,
		icon: getPlatfromIcon(Platform.GitHub), 
		link: 'https://github.com/ichiyan', 
	},
	// {
	// 	platform: Platform.Linkedin,
	// 	link: 'https://www.linkedin.com/'
	// },
	{
		name: Platform.Email,
		icon: getPlatfromIcon(Platform.Email),
		link: 'gabriela.mbalisacan01@gmail.com', 
	},
	{
		name: "resume",
		icon: Icons.Resume,
		link: `${base}/Balisacan-Gabriela-CV.pdf`, 
	},
];

export const skills = getAllSkillsExcept('cpp', 'delphi', 'whisper', 'spring', 'vuejs', 'stockfish', 'firebase', 'arduino', 'google-maps');
