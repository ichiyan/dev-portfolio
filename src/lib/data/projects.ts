import Assets from './assets';
import { base } from '$app/paths';
import { getSkills } from './skills';
import { type Project, AspectRatio } from '../types';


const getFileSrc = (file: string): string => `${base}/project-screenshots/${file}`

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
		description: `The externalization of the state of one's mind, which people refer to as “mind reading” in science fiction, 
					  is currently being realized through brain decoding research. This field of study aims to deepen our understanding 
					  of the human brain, which is among the least understood known biological structures, and to build better foundations 
					  for brain-computer interfaces. With the success of state-of-the-art latent diffusion models in image synthesis, 
					  a trend in recent studies is to map fMRI recordings to the image embedding space of these generative models. 
					  While this method significantly improved image reconstructions in terms of semantics, preserving perceptual features 
					  without losing semantic information remains challenging, especially with complex images of natural scenes. 
					  This research introduces Neuro-Vis, a novel fMRI-to-image pipeline based on Stable Diffusion that effectively integrates 
					  multiple semantic controls through predicted image embeddings and captions and multiple lightweight perceptual controls 
					  through predicted blurry initial images, depth maps, and color palettes. Neuro-Vis outperforms the current state-of-the-art 
					  methods in terms of consistency in low-level features while also rivaling them in terms of semantics. Furthermore, ablation 
					  experiments demonstrate the effectiveness of each component in Neuro-Vis for fMRI-to-image reconstruction.`,
		shortDescription:
			`A brain activity to image reconstruction deep learning research presented during the CMLDS 2024 
			in Singapore and published in ACM`,
		links: [{ to: 'https://dl.acm.org/doi/10.1145/3661725.3661744', label: 'Published Paper' }, 
				{ to: 'https://github.com/ichiyan/neuro-vis', label: 'GitHub'}, 
				{ to: 'https://youtu.be/fmPWTzOo61s', label: 'Introductory Video'}
		],
		logo: Assets.NeuroVis,
		name: 'Neuro-Vis: Guided fMRI-to-Image Reconstruction',
		period: {
			from: new Date(2024, 3, 13)
		},
		skills: getSkills('python', 'pytorch',  'diffusers', 'pandas', 'scikit-learn', 'numpy', 'matplotlib', 'jupyter', 'wandb'),
		type: 'Deep Learning Project', 
		awards: ['Best Presenter Award'], 
		screenshots: [
			{
				label: 'Neuro-Vis overall schematic',
				src: getFileSrc('neuro-vis-model.png')
			},
			{
				label: 'Comparison of ground truth images and captions (left) with reconstructed images and predicted captions (right)',
				src: getFileSrc('neuro-vis-recons-caps.png')
			},
			{
				label: 'Comparison of reconstructions from fMRI-to-Image papers that used NSD (Subject 1)',
				src: getFileSrc('neuro-vis-recons-comparison-1.png')
			},
			{
				label: 'Comparison of reconstructions from fMRI-to-Image papers that Used NSD (Subject 1)',
				src: getFileSrc('neuro-vis-recons-comparison-2.png')
			},
			{
				label: 'Quantitative and visual evaluation of reconstructed images',
				src: getFileSrc('neuro-vis-recons-table.png')
			},
			{
				label: 'Ground truth captions and predicted Neuro-Vis beam and nucleus captions compared with predictions using other methods',
				src: getFileSrc('neuro-vis-captions.png')
			},
			{
				label: 'Quantitave evalutation of generated captions',
				src: getFileSrc('neuro-vis-captions-table.png')
			},
			{
				label: 'Predicted inputs and side-by-side comparison among the results of the different pipelines tested',
				src: getFileSrc('neuro-vis-ablations.png')
			},
			{
				label: 'Quantitative and visual evaluation of reconstructed images using different pipelines',
				src: getFileSrc('neuro-vis-ablations-table.png')
			},
			{
				label: 'Additional ablation results',
				src: getFileSrc('neuro-vis-full-ablations.png')
			},
			{
				label: 'Additional ablation results',
				src: getFileSrc('neuro-vis-full-ablations-table.png')
			},
		]
	},
	{
		slug: 'malware-prediction',
		color: 'red',
		description:
			`This project contains a detailed exploratory data analysis and data preparation for the selected dataset 
			in order to select features that would best predict a machine's malware susceptibility and thus help pinpoint future 
			directions to improve security and hasten the containment and/or removal of malware. The dataset used is the 
			2018 Microsoft Malware Prediction dataset which is primarily intended for determining the probability of a Windows machine 
			being infected by different malware families, based on different properties of that machine. The telemetry data containing the 
			system infections and machine properties were generated by combining heartbeat and threat reports collected by Microsoft’s 
			endpoint protection solution, Windows Defender.`,
		shortDescription:
			`An exploratory data analysis and data preparation for the 2018 Microsoft Malware Prediction dataset to determine 
			potential predictors of malware susceptibility`,
		links: [{ to: 'https://github.com/ichiyan/Malware-Prediction', label: 'GitHub' }],
		logo: Assets.Malware,
		name: 'Malware Prediction Exploratory Data Analysis',
		period: {
			from: new Date(2023, 0, 14)
		},
		skills: getSkills('python', 'pandas', 'scikit-learn', 'numpy', 'matplotlib', 'jupyter'),
		type: 'Data Science Project'
	},
	{
		slug: 'english-character-recognition',
		color: 'orchid',
		description: `This project involves two simple programs for handwritten English character recognition (A-E) for different datasets.
					One program implements the k-nearest neighbors (KNN) algorithm for multi-class classification and the other program uses an 
					artifical neural network (ANN) implemented from scratch. While different datasets and sample sizes were used for each program, 
					it is still of note that using ANN resulted in 93% accuracy while KNN resulted in 69% accuracy.`,
		shortDescription: `Labels handwritten English characters using two programs which implement an (1) artificial neural network from scratch
							and (2) the k-nearest neighbors algorithm`,
		links: [{ to: 'https://github.com/ichiyan/English-Character-Recognition', label: 'GitHub' }],
		logo: Assets.EnglishCharacters,
		name: 'English Character Recognition',
		period: {
			from: new Date(2023, 1, 27)
		},
		skills: getSkills('python', 'pandas', 'scikit-learn', 'numpy', 'matplotlib', 'jupyter'),
		type: 'Data Science Project', 
		screenshots: [
			{
				label: 'Sample predictions using KNN',
				src: getFileSrc('ecr-knn.png')
			},
			{
				label: 'Sample predictions using ANN',
				src: getFileSrc('ecr-ann.png')
			},
		]
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
		description: `This Java chess desktop application was built from scratch—without using existing chess libraries 
						except for the Stockfish chess engine that determines the computer's move for player vs computer. 
						The application supports all legal chess moves including special moves (en passant, castling, pawn promotion)
						and employs the 50-move rule for claiming a draw. Players can also set a time limit per turn, view possible moves, 
						undo their move, save the game, resume or start a new game, and view the list of moves in algebraic notation. When
						playing against the computer, players can choose a side (black or white) and set the difficulty.`,
		shortDescription: `A chess program built from scratch that supports player vs player and player vs computer. It 
							is also equipped with timer, moves list, undo move, and new/resume game functions.`,
		links: [{ to: 'https://github.com/ichiyan/Chess-Java', label: 'GitHub' }],
		logo: Assets.Chess,
		name: 'Chess (PvP and PvC)',
		period: {
			from: new Date(2021, 6, 18)
		},
		skills: getSkills('java', 'stockfish'),
		type: 'Desktop Application', 
		aspect_ratio: AspectRatio.Square,
		screenshots: [
			{
				label: 'home screen',
				src: getFileSrc('chess-home-screen.png')
			},
			{
				label: 'time limit',
				src: getFileSrc('chess-time-limit.png')
			},
			{
				label: 'highlighted valid moves',
				src: getFileSrc('chess-highlight-moves.png')
			},
			{
				label: 'en passant',
				src: getFileSrc('chess-en-passant.png')
			},
			{
				label: 'pawn promotion',
				src: getFileSrc('chess-promotion.png')
			},
			{
				label: 'castling',
				src: getFileSrc('chess-castling.png')
			},
			{
				label: 'checkmate',
				src: getFileSrc('chess-checkmate.png')
			},
			{
				label: 'choose side when playing against computer',
				src: getFileSrc('chess-choose-side.png')
			},
			{
				label: 'set difficulty when playing against computer',
				src: getFileSrc('chess-difficulty.png')
			},
			{
				label: 'the board when playing as black',
				src: getFileSrc('chess-board-black.png')
			},
		]
	},
	{
		slug: 'interpolation',
		color: 'aqua',
		description: `The website discusses numerical interpolation—the process of fitting a function through given data—and 
						one of the many methods called the Newton-Gregory forward polynomial approach which is an interpolation 
						that uses equally spaced points. A calculator for this method is also provided which when given equally spaced
						x values, derives the interpolating polynomial. This polynomial is a function that passes through all the given 
						points with no regard to the points between them. A graph of this function is also automatically generated.`,
		shortDescription: `A numerical interpolation calculator for deriving the interpolation polynomial and graph
							using the Newton-Gregory forward polynomial approach`,
		links: [
			{ to: 'https://interpolation-equally-spaced-points.netlify.app/', label: 'Site' },
			{ to: 'https://github.com/ichiyan/Interpolation-at-Equally-Spaced-Points', label: 'GitHub'}, 
		],
		logo: Assets.Interpolation,
		name: 'Numerical Interpolation Calculator',
		period: {
			from: new Date(2023, 4, 21)
		},
		skills: getSkills('js', 'css', 'reactjs', 'bootstrap'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'example where y values are inputted',
				src: getFileSrc('interpolation-example1.png')
			},
			{
				label: 'example where an expression is inputted to get the y values',
				src: getFileSrc('interpolation-example2.png')
			},
		]
	},
	{
		slug: 'taskvenator',
		color: 'slateblue',
		description: `TaskVenator is a productivity application, mainly a task manager, that incorporates immersive gaming elements to boost 
			productivity. The aim is to utilize gamified elements such as task completion rewards, personalized avatars and items, party, and dynamic quests/battles to trigger and foster a gratifying sense 
			of accomplishment, enjoyment, creativity, social influence, and engagement with the mind to ultimately heighten motivation and productivity.
			<br><br>
			Current features include user authentication, to do list, avatar customization, shop and inventory, party (or group) formation, party tasks, and party chat. 
			Party members can also participate in quests/battles where completing verified quest tasks help them defeat monsters, level up, and gain in-game currency and items.`,
		shortDescription: `A task manager that incorporates gamified elements such as task completion rewards, in-game avatar, 
		quests, party, and party "battles"`,
		links: [{ to: 'https://github.com/ichiyan/TaskVenator', label: 'GitHub' }],
		logo: Assets.TaskVenator,
		name: 'TaskVenator: Gamified Productivity App',
		period: {
			from: new Date(2023, 2, 6)
		},
		skills: getSkills('js', 'php', 'sql', 'sass', 'reactjs', 'bootstrap', 'socketio', 'laravel', 'mysql', 'xampp', 'phpmyadmin', 'redis'),
		type: 'Web Application', 
		screenshots: [
			{
				label: 'landing page hero',
				src: getFileSrc('taskvenator-landing-page-hero.png')
			},
			{
				label: 'user registration',
				src: getFileSrc('taskvenator-register.png')
			},
			{
				label: 'user log in',
				src: getFileSrc('taskvenator-login.png')
			},
			{
				label: 'avatar creation (sped up)',
				src: getFileSrc('taskvenator-avatar-creation.gif')
			},
			{
				label: 'tasks page',
				src: getFileSrc('taskvenator-tasks.png')
			},
			{
				label: 'add new task',
				src: getFileSrc('taskvenator-add-new-task.png')
			},
			{
				label: 'create a party',
				src: getFileSrc('taskvenator-create-party.png')
			},
			{
				label: 'join a party',
				src: getFileSrc('taskvenator-join-party.png')
			},
			{
				label: 'party tab of party leader which shows join requests',
				src: getFileSrc('taskvenator-party.png')
			},
		]
	},
	{
		slug: 'calfitgym',
		color: 'red',
		description: `CalFitGym is a proposed online storefront and gym management system for California Fitness Gym. The site features the gym's
						facilities, services, and products and their available inventory. Gym staff can manage employees, customers, gym members,
						products, orders, inventory, and services depending on their position. They can also view a comprehensive dashboard that consolidates 
						and displays crucial performance metrics and insights. It also provides quick links and a quick overivew of trainees information (if logged in
						employee is a trainer), active members, expiring subscriptions and products, and products that are low in inventory. These help facilitate
						 informed decision-making, budget allocation, and strategy optimization.`,
		shortDescription: `A proposed online storefront and gym management system for California Fitness Gym, allowing them to manage employees, 
							customers, products, orders, inventory, and sales`,
		links: [{ to: 'https://github.com/ichiyan/CalFitGym', label: 'GitHub' }],
		logo: Assets.CalFitGym,
		name: 'CalFitGym',
		period: {
			from: new Date(2021, 7, 25)
		},
		skills: getSkills('js', 'php', 'sql', 'css', 'bootstrap', 'laravel', 'mysql', 'xampp', 'phpmyadmin'),
		type: 'Web Application', 
		screenshots: [
			{
				label: 'landing page hero',
				src: getFileSrc('calfitgym-landing-page-hero.png')
			},
			{
				label: 'landing page',
				src: getFileSrc('calfitgym-landing-page.png')
			},
			{
				label: 'facilities',
				src: getFileSrc('calfitgym-facilities.png')
			},
			{
				label: 'products',
				src: getFileSrc('calfitgym-products.png')
			},
			{
				label: 'dashboard',
				src: getFileSrc('calfitgym-dashboard.png')
			},
			{
				label: 'manage employees',
				src: getFileSrc('calfitgym-manage-employees.png')
			},
			{
				label: 'manage customers',
				src: getFileSrc('calfitgym-manage-customers.png')
			},
			{
				label: 'create new customer',
				src: getFileSrc('calfitgym-new-customer.png')
			},
			{
				label: 'customer profile',
				src: getFileSrc('calfitgym-customer-profile.png')
			},
			{
				label: 'manage inventory',
				src: getFileSrc('calfitgym-inventory.png')
			},
			{
				label: 'manage products',
				src: getFileSrc('calfitgym-manage-products.png')
			},
			{
				label: 'manage orders',
				src: getFileSrc('calfitgym-orders.png')
			},
			{
				label: 'create new order',
				src: getFileSrc('calfitgym-new-order.png')
			},
			{
				label: 'view order details',
				src: getFileSrc('calfitgym-order-details.png')
			},
		]
	},
	{
		slug: 'doggo',
		color: 'hotpink',
		description: `This web application was developed specifically for the Philippine Canine Club as the main stakeholder in mind. 
						Its main features addressing the following goals: (1) to provide a platform to buy/sell/adopt dogs coming from 
						registered PCCI members, (2) to support local moral dog breeders and help potential dog owners find trusted sources, 
						and (3) to promote and monitor ethical dog breeding within the PCCI members.
						<br><br>
						The features of the system are limited according to the type of user. PCCI members are able to use most of the major 
						features of the app like post listings of dogs/puppies that they want to sell or put up as a stud for service. Non-members 
						however, can only look through the catalogue of dogs up for sale or adoption and conduct transactions with the dog owners.`,
		shortDescription: `An online platform for the Philippine Canine Club, Inc. (PCCI) and ethical dog breeders to buy/sell/adopt dogs
							and avail stud services`,
		links: [{ to: 'https://github.com/ichiyan/Doggo', label: 'GitHub' }],
		logo: Assets.Doggo,
		name: 'Doggo: Canine Trading and Services',
		period: {
			from: new Date(2021, 4, 7)
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
