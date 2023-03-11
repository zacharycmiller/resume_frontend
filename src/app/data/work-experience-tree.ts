import { WorkExperienceTree } from "../models/work-experience-tree";

export const WORK_EXPERIENCE_TREE: WorkExperienceTree = {
    id: 0,
    startMonth: 'September',
    startYear: '2021',
    endMonth: 'February',
    endYear: '2023',
    location: 'Remote',
    companyName: 'Revature',
    jobTitle: 'Software Developer',
    type: '',
    details: [],
    children: [
        {
            id: 2,
            startMonth: 'February',
            startYear: '2022',
            endMonth: 'February',
            endYear: '2023',
            location: 'Remote',
            companyName: 'Cognizant',
            jobTitle: 'Test Automation Engineer',
            type: 'Contract',
            details: [],
            children: [
                {
                    id: 3,
                    startMonth: 'September',
                    startYear: '2022',
                    endMonth: 'February',
                    endYear: '2023',
                    location: 'Remote',
                    companyName: 'Cognizant',
                    jobTitle: 'Test Automation Engineer',
                    type: 'Bench',
                    details: [
                        'Continued to assist Automation Lead for Bank of New York Mellon project as issues arose',
                        'Began learning basics of Docker, Jenkins, and chatGPT',
                        'Worked through and completed Hackerrank Java to keep fresh on concepts',
                        'Expanded knowledge and experience for SpringBoot, Angular, Maven, Git, HTML, CSS, JavaScript, TypeScript'
                    ],
                    children: []
                },
                {
                    id: 4,
                    startMonth: 'March',
                    startYear: '2022',
                    endMonth: 'August',
                    endYear: '2022',
                    location: 'Remote',
                    companyName: 'Bank of New York Mellon',
                    jobTitle: 'Test Automation Engineer',
                    type: 'Project',
                    details: [
                        'Implemented test reporting and automated attaching scenario level reports to their respective JIRA ticket',
                        'Analyzed code base and modified existing automation scripts which reduced test execution time by 90%',
                        'Re-configured framework to use Oracle database for dynamic test data (previously static excel spreadsheet)'
                    ],
                    children: []
                }
            ]
        },
        {
            id: 1,
            startMonth: 'September',
            startYear: '2021',
            endMonth: 'January',
            endYear: '2022',
            location: 'Remote',
            companyName: '',
            jobTitle: '',
            type: 'Training',
            details: ['Full stack training program | Java | SpringBoot | Angular |'],
            children: []
        }
    ]
}




                        


