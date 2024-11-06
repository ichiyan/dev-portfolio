import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Gabriela';

export const lastName = 'Balisacan';

export const description =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!';

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

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
