export enum SkillCategory {
    FRONTEND = 'Front-end',
    BACKEND = 'Back-end',
    TESTING = 'Testing',
    DEVOPS = 'DevOps'
  }
  
  export interface Skill {
    id: number;
    resumeId: number;
    name: string;
    category: SkillCategory;
  }