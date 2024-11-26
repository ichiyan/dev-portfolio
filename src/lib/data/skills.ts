import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Database-Related', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'python',
		color: '#4a8bbf',
		description: '',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'java',
		color: '#118ec5',
		description: '',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'c',
		color: '#639bd3',
		description: '',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'js',
		color: '#f5e01d',
		description: '',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: '#057ddc',
		description: '',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: '#55ddca',
		description: '',
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'sql',
		color: '#20ccf4',
		description: '',
		logo: Assets.SQL,
		name: 'SQL',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'php',
		color: '#737bb2',
		description: '',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'cpp',
		color: '#0081cc',
		description: '',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'delphi',
		color: '#db252c',
		description: '',
		logo: Assets.Delphi,
		name: 'Delphi',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'html',
		color: '#f4642b',
		description: '',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: '#2b63f3',
		description: '',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: '#d47ba7',
		description: '',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: '#08dcfc',
		description: '',
		logo: Assets.ReactJs,
		name: 'ReactJS',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: '#fc4c24',
		description: '',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}), 
	defineSkill({
		slug: 'socketio',
		color: 'azure',
		description: '',
		logo: Assets.SocketIO,
		name: 'Socket.IO',
		category: 'library'
	}),
	defineSkill({
		slug: 'pandas',
		color: '#14045b',
		description: '',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'scikit-learn',
		color: '#f89939',
		description: '',
		logo: Assets.SciKitLearn,
		name: 'SciKit-Learn',
		category: 'library'
	}), 
	defineSkill({
		slug: 'numpy',
		color: '#4cabcc',
		description: '',
		logo: Assets.Numpy,
		name: 'NumPy',
		category: 'library'
	}), 
	defineSkill({
		slug: 'matplotlib',
		color: '#fe7e2b',
		description: '',
		logo: Assets.Matplotlib,
		name: 'Matplotlib',
		category: 'library'
	}),
	defineSkill({
		slug: 'seaborn',
		color: '#abdbd3',
		description: '',
		logo: Assets.Seaborn,
		name: 'Seaborn',
		category: 'library'
	}),
	defineSkill({
		slug: 'pytorch',
		color: '#f44c2c',
		description: '',
		logo: Assets.Pytorch,
		name: 'Pytorch',
		category: 'library'
	}), 
	defineSkill({
		slug: 'diffusers',
		color: '#fcd41c',
		description: '',
		logo: Assets.Huggingface,
		name: 'Diffusers',
		category: 'library'
	}), 
	defineSkill({
		slug: 'opencv',
		color: '#04fc04',
		description: '',
		logo: Assets.OpenCV,
		name: 'OpenCV',
		category: 'library'
	}),
	defineSkill({
		slug: 'beautiful-soup',
		color: 'azure',
		description: '',
		logo: Assets.BeautifulSoup,
		name: 'Beautiful Soup',
		category: 'library'
	}),
	defineSkill({
		slug: 'selenium',
		color: '#cc0b2b',
		description: '',
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'library'
	}),
	defineSkill({
		slug: 'whisper',
		color: '#0cac84',
		description: '',
		logo: Assets.OpenAI,
		name: 'OpenAI Whisper',
		category: 'library'
	}),
	defineSkill({
		slug: 'spacy',
		color: '#0ca4d4',
		description: '',
		logo: Assets.Spacy,
		name: 'spaCy',
		category: 'library'
	}),
	defineSkill({
		slug: 'laravel',
		color: '#fc2c24',
		description: '',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: '#2cab74',
		description: '',
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vuejs',
		color: '#44bb84',
		description: '',
		logo: Assets.VueJs,
		name: 'VueJS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'spring',
		color: '#60bc34',
		description: '',
		logo: Assets.Spring,
		name: 'Java Spring',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flutter',
		color: '#5bc9fc',
		description: '',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}), 
	defineSkill({
		slug: 'bootstrap',
		color: '#7a13f7',
		description: '',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'framework'
	}), 
	defineSkill({
		slug: 'scrapy',
		color: '#63ab3c',
		description: '',
		logo: Assets.Scrapy,
		name: 'Scrapy',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mysql',
		color: '#24c4fc',
		description: '',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db' //rdbms
	}), 
	// defineSkill({
	// 	slug: 'hibernate',
	// 	color: 'brown',
	// 	description: '',
	// 	logo: Assets.Hibernate,
	// 	name: 'Java Hibernate',
	// 	category: 'orm'
	// }),
	defineSkill({
		slug: 'dbeaver',
		color: '#a48474',
		description: '',
		logo: Assets.Dbeaver,
		name: 'Dbeaver',
		category: 'db' //sql-client
	}), 
	defineSkill({
		slug: 'datagrip',
		color: '#24d38d',
		description: '',
		logo: Assets.DataGrip,
		name: 'DataGrip',
		category: 'db' //sql-client
	}),
	defineSkill({
		slug: 'xampp',
		color: '#fc7c24',
		description: '',
		logo: Assets.Xampp,
		name: 'Xampp',
		category: 'db' //web server
	}),
	defineSkill({
		slug: 'phpmyadmin',
		color: '#737bb2',
		description: '',
		logo: Assets.PhpMyAdmin,
		name: 'phpMyAdmin',
		category: 'db' //sql-client
	}),
	defineSkill({
		slug: 'redis',
		color: '#dc3b2c',
		description: '',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'firebase',
		color: '#fcc400',
		description: '',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	defineSkill({
		slug: 'celery',
		color: '#b7de65',
		description: '',
		logo: Assets.Celery,
		name: 'Celery',
		category: ''
	}), 
	defineSkill({
		slug: 'jupyter',
		color: '#f3742c',
		description: '',
		logo: Assets.Jupyter,
		name: 'Jupyter',
		category: ''
	}), 
	defineSkill({
		slug: 'google-maps',
		color: '#34ac54',
		description: '',
		logo: Assets.GoogleMaps,
		name: 'Google Maps API',
		category: ''
	}), 
	defineSkill({
		slug: 'stockfish',
		color: '#97b991',
		description: '',
		logo: Assets.Stockfish,
		name: 'Stockfish',
		category: ''
	}), 
	defineSkill({
		slug: 'wandb',
		color: '#fccc34',
		description: '',
		logo: Assets.Wandb,
		name: 'Weights & Biases',
		category: ''
	}), 
	defineSkill({
		slug: 'arduino',
		color: '#57adb3',
		description: '',
		logo: Assets.Arduino,
		name: 'Arduino',
		category: ''
	}), 
	defineSkill({
		slug: 'docker',
		color: '#1d63ed',
		description: '',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}), 
	defineSkill({
		slug: 'pytest',
		color: '#009fe3',
		description: '',
		logo: Assets.PyTest,
		name: 'PyTest',
		category: 'test'
	}), 
	defineSkill({
		slug: 'locust',
		color: '#bcec4c',
		description: '',
		logo: Assets.Locust,
		name: 'Locust',
		category: 'test'
	}), 
	
	
	// defineSkill({
	// 	slug: 'photoshop',
	// 	color: 'blue',
	// 	description: '',
	// 	logo: Assets.Photoshop,
	// 	name: 'Photoshop',
	// 	category: ''
	// }), 

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const getAllSkillsExcept = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => !slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
