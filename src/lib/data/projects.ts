import Assets from './assets';
import { base } from '$app/paths';
import { getSkills } from './skills';
import { getProjectTypes } from './project-types';
import { type Project, AspectRatio } from '../types';


const getFileSrc = (file: string): string => `${base}/project-screenshots/${file}`

export const items: Array<Project> = [
	{
		slug: 'happibuy',
		color: 'plum',
		description: `This ongoing project is a backend for a full-featured e-commerce application using Django REST Framework. This RESTful API 
						supports secure authentication and authorization with JSON Web Tokens (JWT) and CRUD (create, read, update, delete) operations, 
						search, sorting, and pagination for managing staff, customers, products, product tags, collections, carts, and orders.
						<br><br>
						This project also contains development and production-ready configuration for simple mail transfer protocol (SMTP), task or job queueing
						with Celery and Redis, caching with Redis, and serving with Green Unicorn. The development environment has also been configured 
						for running with Docker, automated testing using PyTest, performance testing using Locust, and profiling with Silk. 
						<br><br>
						The API documentation built using Swagger UI is available at <a href="https://happibuy-prod-f5b6d9b30d3e.herokuapp.com/api/schema/docs" target="_blank">this link</a>.
						`, 
		shortDescription: `A backend for a full-featured e-commerce store using Django REST Framework`,
		links: [
			{ to: 'https://happibuy-prod-f5b6d9b30d3e.herokuapp.com/', label: 'Deployed App' },
			{ to: 'https://happibuy-prod-f5b6d9b30d3e.herokuapp.com/api/schema/docs', label: 'API Documentation' },  
			{ to: 'https://github.com/ichiyan/happibuy', label: 'GitHub'}
		],
		logo: Assets.HappiBuy,
		name: 'HappiBuy: E-Commerce API',
		period: {
			from: new Date(2024, 10, 26)
		},
		skills: getSkills('python', 'sql', 'django', 'mysql', 'celery', 'redis', 'datagrip', 'docker', 'pytest','locust'),
		types: getProjectTypes('web-application'), 
		screenshots: [
			{
				label: 'home page',
				src: getFileSrc('happibuy-home.png')
			},
			{
				label: 'API documentation',
				src: getFileSrc('happibuy-api-docs.png')
			},
			{
				label: 'admin interface',
				src: getFileSrc('happibuy-admin-interface.png')
			},
			{
				label: 'admin interface - add user',
				src: getFileSrc('happibuy-admin-add-user.png')
			},
			{
				label: 'admin interface - add group',
				src: getFileSrc('happibuy-admin-add-group.png')
			},
			{
				label: 'admin interface - add user permissions',
				src: getFileSrc('happibuy-admin-add-user-permissions.png')
			},
			{
				label: 'admin interface - add user permissions',
				src: getFileSrc('happibuy-admin-add-user-permissions.png')
			},
			{
				label: 'admin interface - product list',
				src: getFileSrc('happibuy-admin-products.png')
			},
			{
				label: 'admin interface - product details',
				src: getFileSrc('happibuy-admin-product-details.png')
			},
			{
				label: 'cart item list',
				src: getFileSrc('happibuy-cart-item-list.png')
			},
			{
				label: 'order list (unauthenticated user)',
				src: getFileSrc('happibuy-order-list-unauthenticated.png')
			},
			{
				label: 'create JWT tokens',
				src: getFileSrc('happibuy-create-jwt-tokens.png')
			},
			{
				label: 'order list (authenticated user)',
				src: getFileSrc('happibuy-order-list-authenticated.png')
			},
			{
				label: 'SMTP server (development)',
				src: getFileSrc('happibuy-smtp-server.png')
			},
			{
				label: 'partial Locust performance tests (development)',
				src: getFileSrc('happibuy-locust-tests.png')
			},
		]
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
		types: getProjectTypes('data-science-project'), 
		awards: [`CMLDS '24 Best Presenter Award`], 
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
		types: getProjectTypes('data-science-project')
	},
	{
		slug: 'english-character-recognition',
		color: 'azure',
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
		types: getProjectTypes(''), 
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
		slug: 'camera-capture-shape-detection',
		color: 'royalblue',
		description: `The Java implementation of this project utilizes OpenCV to capture images using the device's camera and to provide real-time
						shape detection. The Python implementation also uses OpenCV for capturing photos but the non-real-time shape detection
						is coded from scratch—without using existing libraries like OpenCV for processing images and detecting shapes. 
						<br><br>
						The Python implementation attempts to code from scratch the algorithms used for shape detection: Gaussian blur, Canny edge detection, 
						Suzuki contour, finding the perimeter, and Ramer-Douglas-Peucker (RDP) algorithm for simplifying the contours and reducing the number
						of points.`,
		shortDescription: `Captures photos using the device's camera and also provides real-time shape detection (for Java implementation)`,
		links: [
			{ to: 'https://github.com/ichiyan/Camera-Capture-and-Shape-Detection-Java', label: 'Java Implementation GitHub' }, 
			{ to: 'https://github.com/ichiyan/Camera-and-Shape-Recognition', label: 'Python Implementation GitHub' }
		],
		logo: Assets.CameraCaptureShapeDetection,
		name: 'Camera Capture and Shape Detection',
		period: {
			from: new Date(2022, 10, 1) //not sure exact datr
		},
		skills: getSkills('python', 'java', 'opencv'),
		types: getProjectTypes('data-science-project'), 
		aspect_ratio: AspectRatio.Square,
		screenshots: [
			{
				label: 'camera',
				src: getFileSrc('camera.gif')
			},
			{
				label: 'save image',
				src: getFileSrc('camera-save.png')
			},
			{
				label: 'detect shapes (Java)',
				src: getFileSrc('camera-shape-detection1.png')
			},
			{
				label: 'detect shapes (Java)',
				src: getFileSrc('camera-shape-detection2.png')
			},
			{
				label: 'detect shapes (Python)',
				src: getFileSrc('shape-detection.png')
			},
		]
	},
	{
		slug: 'data-scraping',
		color: 'thistle',
		description: `This repository contains the code and other resources for different data scraping projects. As of 2024, the projects include
						scraping data from websites and videos with the latter implementing automatic speech recognition and diarization
						using WhisperX.`,
		shortDescription: `Collection of data scraping projects`,
		links: [{ to: 'https://github.com/ichiyan/data-scraping', label: 'GitHub' }],
		logo: Assets.DataScraping,
		name: 'Data Scraping',
		period: {
			from: new Date(2024, 7, 1)
		},
		skills: getSkills('python', 'beautiful-soup', 'selenium', 'whisper', 'scrapy', 'spacy', 'jupyter'),
		types: getProjectTypes('data-science-project')
	},
	{
		slug: 'data-science',
		color: 'orchid',
		description: `This repository contains data science-related mini projects and activities. As of 2024, 
		the uploaded projects cover exploratory data analysis, data visualization, data cleaning and preparation for modeling, 
		and application of machine learning techniques for predictive modeling.`,
		shortDescription: `Collection of data science mini projects or activities`,
		links: [{ to: 'https://github.com/ichiyan/data-science-projects', label: 'GitHub' }],
		logo: Assets.DataScience,
		name: 'Collection of Data Science Projects',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'pandas', 'scikit-learn', 'numpy', 'matplotlib', 'seaborn', 'jupyter'),
		types: getProjectTypes('data-science-project')
	},
	{
		slug: 'cpu-scheduling',
		color: 'springgreen',
		description: `This program simulates CPU scheduling algorithms and shows tabular and Gantt chart visualizations of the processes 
						from scratch—without using existing CPU scheduling simulators and existing visualization libraries.
						<br><br>
						There are six CPU scheduling algorithms implemented in this simulator: (1) First Come, First Served, (2) Non-Preemptive Shortest Job First, 
						(3) Preemptive Shortest Job First, (4) Round Robin, (5) Non-Preemptive Priority, and (6) Preemptive Priority.`,
		shortDescription: `Simulation of operating system CPU scheduling algorithms and visualizations built from scratch`,
		links: [{ to: 'https://github.com/ichiyan/CPU-Scheduling-Algorithms-Simulation', label: 'GitHub' }],
		logo: Assets.CPU,
		name: 'CPU Scheduling Algorithms Simulation',
		period: {
			from: new Date(2022, 0, 11)
		},
		skills: getSkills('python' ),
		types: getProjectTypes('console-application'), 
		screenshots: [
			{
				label: 'First Come, First Served',
				src: getFileSrc('cpu-fcfs.png')
			},
			{
				label: 'Non-Preemptive Shortest Job First',
				src: getFileSrc('cpu-np-sjf.png')
			},
			{
				label: 'Preemptive Shortest Job First',
				src: getFileSrc('cpu-p-sjf.png')
			},
			{
				label: 'Round Robin',
				src: getFileSrc('cpu-rr.png')
			},
			{
				label: 'Non-Preemptive Priority',
				src: getFileSrc('cpu-np-p.png')
			},
			{
				label: 'Preemptive Priority',
				src: getFileSrc('cpu-p-p.png')
			},
		]
	},
	{
		slug: 'rsa-encryption',
		color: 'red',
		description: `This project implements and simulates the Rivest-Shamir-Adleman (RSA) encryption algorithm. RSA is an asymmetric public-private key cryptosystem 
		 				wherein the encryption key is public and distinct from the decryption key, which is kept secret (private). An RSA user creates and publishes a 
						public key based on two large prime numbers, along with an auxiliary value. The prime numbers are kept secret. Messages can be encrypted by anyone, 
						via the public key, but can only be decrypted by someone who knows the private key. The security of RSA relies on the practical difficulty of factoring 
						the product of two large prime numbers, the "factoring problem".
						<br><br>
						The RSA algorithm involves four steps: key generation, key distribution, encryption, and decryption.
						The public and private key generation algorithm involves choosing two large prime numbers, p and q, which are generated using a primality test algorithm. 
						A modulus, n, is calculated by multiplying p and q. This number is used by both the public and private keys and provides the link between them. The public 
						key consists of the modulus n and a public exponent, e. The private key consists of the modulus n and the private exponent d, which can be calculated using 
						the extended Euclidean algorithm to find the multiplicative inverse with respect to the totient of n. The modular exponentiation to e and d corresponds to 
						encryption and decryption, respectively.
						<br><br>
						This program implements all four steps and also allows users the option to choose the values of the variables themselves to better understand the process.`, 
		shortDescription: `Code implementing the Rivest-Shamir-Adleman (RSA) encryption algorithm used in cryptography`,
		links: [{ to: 'https://github.com/ichiyan/Sample-RSA-Encryption', label: 'GitHub' }],
		logo: Assets.RSA,
		name: 'RSA Encryption',
		period: {
			from: new Date(2021, 10, 10)
		},
		skills: getSkills('python'),
		types: getProjectTypes('console-application'), 
		screenshots: [
			{
				label: 'using sample given values',
				src: getFileSrc('rsa-given-values.png')
			},
			{
				label: 'using generated values',
				src: getFileSrc('rsa-generated-values.png')
			},
			{
				label: 'using inputted primes and generated keys',
				src: getFileSrc('rsa-input-primes.png')
			},
			{
				label: 'using inputted values',
				src: getFileSrc('rsa-input-all-values.png')
			},
		]
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
		types: getProjectTypes('desktop-application'), 
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
		types: getProjectTypes('web-application'),
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
		types: getProjectTypes('web-application'), 
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
				label: 'shop',
				src: getFileSrc('taskvenator-shop.gif')
			},
			{
				label: 'inventory',
				src: getFileSrc('taskvenator-inventory.gif')
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
			{
				label: 'party chat (sped up)',
				src: getFileSrc('taskvenator-chat.gif')
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
		types: getProjectTypes('web-application'), 
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
		types: getProjectTypes('web-application'), 
		screenshots: [
			{
				label: 'landing page hero',
				src: getFileSrc('doggo-landing-page-hero.png')
			},
			{
				label: 'landing page',
				src: getFileSrc('doggo-landing-page.png')
			},
			{
				label: 'registration and log in',
				src: getFileSrc('doggo-authentication.png')
			},
			{
				label: 'PCCI member registration',
				src: getFileSrc('doggo-register-pcci.png')
			},
			{
				label: 'non-PCCI registration',
				src: getFileSrc('doggo-register-non-pcci.png')
			},
			{
				label: 'shop',
				src: getFileSrc('doggo-shop.png')
			},
			{
				label: 'post details',
				src: getFileSrc('doggo-post-details.png')
			},
			{
				label: 'user profile (all posts for PCCI members)',
				src: getFileSrc('doggo-profile-posts.png')
			},
			{
				label: 'user profile (bookmarks)',
				src: getFileSrc('doggo-profile-bookmarks.png')
			},
			{
				label: 'new post (zoomed out)',
				src: getFileSrc('doggo-new-post.png')
			},
			{
				label: 'edit post (zoomed out)',
				src: getFileSrc('doggo-edit-post.png')
			},
		]
	},
	{
		slug: 'isekai-express',
		color: 'royalblue',
		description: `A simple anime merchandise shop with user authentication and CRUD (create, read, update, delete) functionalities.`,
		shortDescription: `A simple online anime merchandise shop`,
		links: [{ to: 'https://github.com/ichiyan/Merch-Shop', label: 'GitHub' }],
		logo: Assets.IsekaiExpress,
		name: 'Isekai Express: Anime Merchandise Shop',
		period: {
			from: new Date(2021, 8, 3)
		},
		skills: getSkills('js', 'php', 'sql', 'css', 'bootstrap', 'laravel', 'mysql', 'xampp', 'phpmyadmin'),
		types: getProjectTypes('web-application'), 
		screenshots: [
			{
				label: 'landing page hero',
				src: getFileSrc('isekai-express-landing-page-hero.png')
			},
			{
				label: 'shop',
				src: getFileSrc('isekai-express-shop.png')
			},
			{
				label: 'shop',
				src: getFileSrc('isekai-express-shop-full.gif')
			},
		]
	},
	{
		slug: 'openwhyd',
		color: 'royalblue',
		description: `This is a mobile application for Openwhyd, a platform to collect & share musical gems from YouTube, SoundCloud, and more.
		Specifically, it uses the Openwhyd API to allow users to create playlists of music tracks from various streaming platforms and to discover the music posted by other users. 
		Through the mobile application, users can also listen to videos and audios more easily.`,
		shortDescription: `A mobile application for Openwhyd, a platform to collect, curate, and share musical gems from YouTube, SoundCloud, and more`,
		links: [{ to: 'https://github.com/ichiyan/Flutter-Openwhyd-API-Music-App', label: 'GitHub' }],
		logo: Assets.Openwhyd,
		name: 'Openwhyd: Music Streaming and Curation',
		period: {
			from: new Date(2021, 5, 24)
		},
		skills: getSkills('dart', 'flutter'),
		types: getProjectTypes('mobile-application'), 
		aspect_ratio: 'aspect-[9/16]',
		width: 'w-55%',
		screenshots: [
			{
				label: 'welcome',
				src: getFileSrc('openwhyd-landing-page.png')
			},
			{
				label: 'sign up',
				src: getFileSrc('openwhyd-sign-up.png')
			},
			{
				label: 'log in',
				src: getFileSrc('openwhyd-log-in.png')
			},
			{
				label: 'home',
				src: getFileSrc('openwhyd-home.png')
			},
			{
				label: 'popular tracks',
				src: getFileSrc('openwhyd-popular-tracks.png')
			},
			{
				label: 'liked tracks',
				src: getFileSrc('openwhyd-liked-tracks.png')
			},
			{
				label: 'playlist',
				src: getFileSrc('openwhyd-playlist.png')
			},
			{
				label: 'add new playlist',
				src: getFileSrc('openwhyd-add-playlist.png')
			},
			{
				label: 'playlist tracks',
				src: getFileSrc('openwhyd-playlist-tracks.png')
			},
			{
				label: 'add new playlist track',
				src: getFileSrc('openwhyd-add-track.png')
			},
			{
				label: 'audio player',
				src: getFileSrc('openwhyd-audio-player.png')
			},
			{
				label: 'video player',
				src: getFileSrc('openwhyd-video-player.png')
			},
		]
	},
	{
		slug: 'finlit',
		color: 'palegreen',
		description: `This application is a minimum viable product (MVP) or prototype of a mobile simulation game designed to 
					instill financial literacy among the younger generation in an <b>immersive visual-novel-like simulation</b> where they primarily 
					play the role of a financial adviser catering to clients with varied financial issues. By experiencing and 
					applying concepts learned in a realistic, controlled environment and by being able to connect with relatable 
					characters, users can acquire knowledge faster and retain it longer.
					<br><br>
					Other features include a <b>stock market simulation</b> for more advanced users to learn how to trade stocks in real-time 
					using virtual currency, how to assess risks, and how to manage their own stock portfolio. In the <b>info corner</b>, 
					users can learn economic-related news and to further encourage a community of financially responsible individuals, 
					a <b>monitored forum</b> is accessible within the app. Through the forum,  users can share their experiences, give tips, consult with 
					professionals, and be part of a community that aims to promote financial education. This section will offer various incentives 
					for the financial professionals so that they will be encouraged to contribute and help those who are in the process of 
					learning financial literacy.
					<br><br>
					With this project, we ranked 8th out of 250 participants and initial top 30 teams during the 2021 Diliman Solutions Challenge.`,
		shortDescription: `An app that instills financial literacy through a simulation visual-novel like game, stock market simulation, 
		info corner, and forum`, 
		links: [
			{ to: '', label: 'GitHub' }, 
			{ to: 'https://youtu.be/WWDfOiD8Szc', label: 'Introductory Video' }
		],
		logo: Assets.FinLit,
		name: 'FinLit: Financial Literacy Game MVP',
		period: {
			from: new Date(2021, 2, 30)
		},
		skills: getSkills('dart', 'flutter', 'firebase'),
		types: getProjectTypes('mobile-application'), 
		awards: ['Diliman Solutions Challenge Top 8'], 
		aspect_ratio: 'aspect-[9/20]',
		width: 'w-55%',
		screenshots: [
			{
				label: 'home',
				src: getFileSrc('finlit-home.png')
			},
			{
				label: 'financial literacy assessment',
				src: getFileSrc('finlit-assessment.png')
			},
			{
				label: 'stock market simulation',
				src: getFileSrc('finlit-stock-market.png')
			},
			{
				label: 'info corner',
				src: getFileSrc('finlit-info-corner.png')
			},
			{
				label: 'forum',
				src: getFileSrc('finlit-forum.png')
			},
		]
	},
	{
		slug: 'search-and-rescue-robot',
		color: 'silver',
		description: `A rover type search and rescue robot prototype intended to be used in search and rescue operations in mines.
						It is equipped with a first-person view camera, DHT11 temperature and humidity sensor,  MQ135 air quality sensor 
						for detecting carbon dioxide levels, and MQ4 sensor for detecting methane levels.`,
		shortDescription: `A rover type mine search and rescue robot prototype equipped with camera and gas sensors`,
		links: [
			{ to: '', label: 'GitHub' },
			{ to: 'https://youtu.be/4TE59BsnxTA', label: 'The Making'}
		],
		logo: Assets.SAR,
		name: 'Soteria: Search and Rescue Robot Prototype',
		period: {
			from: new Date(2019, 2, 1) //not sure of date
		},
		skills: getSkills('cpp', 'delphi', 'arduino'),
		types: getProjectTypes('robotics-project'),
		awards: ['STEM Fair Best Capstone Project'], 
		screenshots: [
			{
				label: 'top view (without cover)',
				src: getFileSrc('sar-top-view.jpg')
			},
			{
				label: 'front view (without cover)',
				src: getFileSrc('sar-front-view.jpg')
			},
			{
				label: 'back view (without cover)',
				src: getFileSrc('sar-back-view.jpg')
			},
			{
				label: 'side view (without cover)',
				src: getFileSrc('sar-side-view.jpg')
			},
			{
				label: 'mobile application',
				src: getFileSrc('sar-app.png')
			},
			{
				label: 'mobile application with camera',
				src: getFileSrc('sar-app-cam.png')
			},
			{
				label: 'mobile application with camera',
				src: getFileSrc('sar-app-cam2.png')
			},
		]
	},
	// {
	// 	slug: 'front-end',
	// 	color: 'silver',
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	shortDescription:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	links: [{ to: '', label: 'GitHub' }],
	// 	logo: Assets.Unknown,
	// 	name: 'Collection of Early Front-End Works',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('html', 'css', 'sass', 'js', 'photoshop'),
	// 	types: getProjectTypes('web-application')
	// },
];

export const title = 'Projects';
