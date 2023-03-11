export interface WorkExperienceTree {
    id: number;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    location: string;
    companyName: string;
    jobTitle: string;
    type: string;
    details: string[];
    children: WorkExperienceTree[];
}