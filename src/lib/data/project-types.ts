
import type { ProjectType } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

export const items: Array<ProjectType> = [
    {
        slug: 'web-application', 
        name: 'Web Application',
    }, 
    {
        slug: 'mobile-application', 
        name: 'Mobile Application',
    }, 
    {
        slug: 'desktop-application', 
        name: 'Desktop Application',
    }, 
    {
        slug: 'console-application', 
        name: 'Console Application',
    }, 
    {
        slug: 'data-science-project', 
        name: 'Data Science Project',
    }, 
    {
        slug: 'robotics-project', 
        name: 'Robotics Project',
    }, 
]

export const getProjectTypes = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<ProjectType> => items.filter((it) => slugs.includes(it.slug));