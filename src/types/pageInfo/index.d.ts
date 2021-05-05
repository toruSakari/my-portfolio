export type Work = {
  name: string,
  pageUrl: string,
  image: string,
  overview: string,
  usingTechnology: string[]
}

export type Works = Work[]

export type SkillCard = {
  name: string,
  level: number,
  experienceYears: string
}

export type Skill = {
  displayName: string,
  overview: string,
  langs: SkillCard[],
}

export type Skills = Skill[]
