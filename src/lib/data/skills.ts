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
		color: 'blue',
		description: '',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'java',
		color: 'blue',
		description: '',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'c',
		color: 'blue',
		description: '',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: 'blue',
		description: '',
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description: '',
		logo: Assets.SQL,
		name: 'SQL',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'php',
		color: 'darkorchid',
		description: '',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: '',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'delphi',
		color: 'red',
		description: '',
		logo: Assets.Delphi,
		name: 'Delphi',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.ReactJs,
		name: 'ReactJS',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}), 
	defineSkill({
		slug: 'socketio',
		color: 'white',
		description: '',
		logo: Assets.SocketIO,
		name: 'Socket.IO',
		category: 'library'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'blue',
		description: '',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'scikit-learn',
		color: 'orange',
		description: '',
		logo: Assets.SciKitLearn,
		name: 'SciKit-Learn',
		category: 'library'
	}), 
	defineSkill({
		slug: 'numpy',
		color: 'blue',
		description: '',
		logo: Assets.Numpy,
		name: 'Numpy',
		category: 'library'
	}), 
	defineSkill({
		slug: 'matplotlib',
		color: 'orange',
		description: '',
		logo: Assets.Matplotlib,
		name: 'Matplotlib',
		category: 'library'
	}),
	defineSkill({
		slug: 'seaborn',
		color: 'teal',
		description: '',
		logo: Assets.Seaborn,
		name: 'Seaborn',
		category: 'library'
	}),
	defineSkill({
		slug: 'pytorch',
		color: 'orange',
		description: '',
		logo: Assets.Pytorch,
		name: 'Pytorch',
		category: 'library'
	}), 
	defineSkill({
		slug: 'diffusers',
		color: 'yellow',
		description: '',
		logo: Assets.Huggingface,
		name: 'Diffusers',
		category: 'library'
	}), 
	defineSkill({
		slug: 'opencv',
		color: 'red',
		description: '',
		logo: Assets.OpenCV,
		name: 'OpenCV',
		category: 'library'
	}),
	defineSkill({
		slug: 'beautiful-soup',
		color: 'thistle',
		description: '',
		logo: Assets.BeautifulSoup,
		name: 'Beautiful Soup',
		category: 'library'
	}),
	defineSkill({
		slug: 'selenium',
		color: 'red',
		description: '',
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'library'
	}),
	defineSkill({
		slug: 'whisper',
		color: 'green',
		description: '',
		logo: Assets.OpenAI,
		name: 'OpenAI Whisper',
		category: 'library'
	}),
	defineSkill({
		slug: 'spacy',
		color: 'blue',
		description: '',
		logo: Assets.Spacy,
		name: 'spaCy',
		category: 'library'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'orange',
		description: '',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description: '',
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vuejs',
		color: 'green',
		description: '',
		logo: Assets.VueJs,
		name: 'VueJS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'spring',
		color: 'green',
		description: '',
		logo: Assets.Spring,
		name: 'Java Spring',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description: '',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}), 
	defineSkill({
		slug: 'bootstrap',
		color: 'slateblue',
		description: '',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'framework'
	}), 
	defineSkill({
		slug: 'scrapy',
		color: 'green',
		description: '',
		logo: Assets.Scrapy,
		name: 'Scrapy',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
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
		color: 'brown',
		description: '',
		logo: Assets.Dbeaver,
		name: 'Dbeaver',
		category: 'db' //sql-client
	}), 
	defineSkill({
		slug: 'datagrip',
		color: 'tomato',
		description: '',
		logo: Assets.DataGrip,
		name: 'DataGrip',
		category: 'db' //sql-client
	}),
	defineSkill({
		slug: 'xampp',
		color: 'orange',
		description: '',
		logo: Assets.Xampp,
		name: 'Xampp',
		category: 'db' //web server
	}),
	defineSkill({
		slug: 'phpmyadmin',
		color: 'slateblue',
		description: '',
		logo: Assets.PhpMyAdmin,
		name: 'phpMyAdmin',
		category: 'db' //sql-client
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: '',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'orange',
		description: '',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	defineSkill({
		slug: 'jupyter',
		color: 'blue',
		description: '',
		logo: Assets.Jupyter,
		name: 'Jupyter',
		category: 'app'
	}), 
	defineSkill({
		slug: 'google-maps',
		color: 'green',
		description: '',
		logo: Assets.GoogleMaps,
		name: 'Google Maps API',
		category: 'api'
	}), 
	defineSkill({
		slug: 'stockfish',
		color: 'green',
		description: '',
		logo: Assets.Stockfish,
		name: 'Stockfish',
		category: 'api'
	}), 
	defineSkill({
		slug: 'wandb',
		color: 'yellow',
		description: '',
		logo: Assets.Wandb,
		name: 'Weights & Biases',
		category: 'platform'
	}), 
	defineSkill({
		slug: 'arduino',
		color: 'seagreen',
		description: '',
		logo: Assets.Arduino,
		name: 'Arduino',
		category: 'software'
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
