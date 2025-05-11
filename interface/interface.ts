interface Skill {
  skillName: string;
  skillImage: string;
}

export interface Project {
  name: string;
  projectImage:string;
  description: string;
  skills: Skill[];
  vercel: string;
  github: string;
}
