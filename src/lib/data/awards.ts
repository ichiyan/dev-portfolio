import Assets from './assets';
import type { Award } from '../types';
import { base } from '$app/paths';



export const items: Array<Award> = [
    {
        slug: 'cmlds-best-presenter',
        color: 'blue',
        name: 'International Conference on Computing, Machine Learning, and Data Science', 
        award: 'Best Presenter', 
        location: 'Bugis, Singapore',
        period: { from: new Date(2024, 3, 13) },
        description: `I was awarded as the best presenter in my track for my presentation on our deep learning research paper on brain decoding entitled
        "Neuro-Vis: Guided Complex Image Reconstruction from Brain Signals Using Multiple Semantic and Perceptual Controls".`,
        links: [
            {to: `${base}/projects/neuro-vis`, label: 'Project Details'}, 
        ]
    },
    {
        slug: 'usc-honors',
        color: 'lawngreen',
        name: 'University of San Carlos', 
        award: 'magna cum laude, cum laude caroli sancti', 
        location: 'Cebu, Philippines',
        period: { from: new Date(2024, 5, 20) },
        description:`Apart from the standard Latin honor, I was also granted the cum laude caroli sancti (with praise of San Carlos)
        award for participating in activities exhibiting professional competence and skills (Scientia), noble character (Virtus), 
        and dedication to social transformation (Devotio).`,
    },
    {
        slug: 'diliman-solutions-challenge',
        color: 'red',
        name: 'Diliman Solutions Challenge', 
        award: '8th Place', 
        location: 'Remote',
        period: { from: new Date(2021, 2, 30) },
        description:`The Diliman Solutions Challenge is a nationwide flagship event of Developer Students Clubs UP Diliman.
        The challenge was to address local issues that are in line with the United Nations' Sustainable Development Goals (SDGs) by providing 
        an innovation proposal, working prototype, and a pitch presentation. Out of 250 participants and the initial top 30 teams, 
        we ranked 8th for our financial literacy application.`,
        links: [
            {to: `${base}/projects/finlit`, label: 'Project Details'}, 
        ]
    },
    {
        slug: 'ococosda-participant',
        color: 'orchid',
        name: '22nd Oriental COCOSDA', 
        award: 'Participant', 
        location: 'Univerity of San Carlos, Cebu',
        period: { from: new Date(2019, 9, 25), to: new Date(2019, 9, 27) },
        description:`I was one of the USC participants for the 22nd O-COCOSDA international conference. The Oriental COCOSDA (O-COCOSDA) is 
        the Oriental chapter of COCOSDA, an acronym of the International Committee for the Coordination and Standardisation of Speech 
        Databases and Assessment Techniques. The purpose of O-COCOSDA is to exchange ideas, share information, and discuss regional matters 
        on the creation, utilization, and dissemination of spoken language corpora of oriental languages and also on the assessment methods 
        of speech recognition/synthesis systems as well as promote speech research on oriental languages.`,
    },
    {
        slug: 'stem-fair-best-capstone',
        color: 'silver',
        name: 'DLS ASMC STEM  Fair', 
        award: 'Best Capstone Project', 
        location: 'Cebu, Philippines',
        period: { 
            from: new Date(2019, 1, 18),  
            to: new Date(2019, 1, 19),
        }, 
        description:`Among 20 teams, we bagged the top award for our rover-type mine search and rescue robot prototype equipped with a first-person view camera, temperature and gas sensors, and mobile application.`,
        links: [
            {to: `${base}/projects/search-and-rescue-robot`, label: 'Project Details'}, 
        ]
    },
    {
        slug: 'divrcon-best-research',
        color: 'mediumturquoise',
        name: 'Toledo Divison Research Conference', 
        award: 'Best Research Project, Best Poster Presentation', 
        location: 'Cebu, Philippines',
        period: { from: new Date(2019, 2, 22) }, 
        description:`DivRCon is a yearly research conference with more than 20 participating schools. I presented our quantitative research project on 
        the relationship among multiple intelligences, academic achievement, and 21st-century skills of grade 10 students. For this research, 
        we performed pilot testing, administered four sets of research instruments, and applied statistical tools or techniques such as proportion, 
        weighted mean, and Chi-square.`,
    },
    {
        slug: 'dlsp-fair-presenter',
        color: 'springgreen',
        name: 'De La Salle Philippines Academic and Cultural Fair', 
        award: 'Research Presenter', 
        location: 'Ozamiz, Philippines',
        period: { from: new Date(2019, 0, 31) }, 
        description:`I presented our quantitative research project on the relationship among multiple intelligences, academic achievement, 
        and 21st-century skills of grade 10 students during the DLSP academic and cultural fair participated by all 16 La Salle schools.`,
    },
    {
        slug: 'dlsasmc-gs-valedictorian',
        color: 'forestgreen',
        name: 'De La Salle ASMC', 
        award: 'STEM Valedictorian with High Honors', 
        location: 'Cebu, Philippines',
        period: { from: new Date(2019, 3, 1) }, //not sure exact date
        description:`I graduated senior high school under the science, technology, engineering, and mathematics (STEM) strand as the batch 
        valedictorian with high honors and multiple special awards.`,
    },
    {
        slug: 'dlsasmc-shs-valedictorian',
        color: 'chartreuse',
        name: 'De La Salle ASMC', 
        award: 'Valedictorian with High Honors', 
        location: 'Cebu, Philippines',
        period: { from: new Date(2013, 3, 1) }, //not sure exact date
        description:`I graduated as batch valedictorian with high honors and multiple special awards.`,
    },
]

export const title = 'Awards and Recognition';