import React from 'react';
import skill from './skill.module.scss';
import AppSkillCard from './AppSkillCard';
import AppContent from '../AppContes';
import { Skills, Skill } from '../../types/pageInfo'

type Props = {
  name: string;
  component: string;
  url: string;
  skills: Skills;
}

function AppSkill(props:Props) {
  const skillItems = props.skills.map((item: Skill) => {
    return <AppSkillCard key={item.displayName} {...item} />
  })
  return (
    <AppContent name={props.name}>
      <div className={skill.app_skill}>
        <h2 className={skill.title}>Skill</h2>
        {skillItems}
      </div>
    </AppContent>

  );
}

export default AppSkill;
