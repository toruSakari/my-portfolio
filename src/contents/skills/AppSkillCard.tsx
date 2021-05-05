import React from 'react';
import skill from './skill.module.scss';
import { Skill, SkillCard } from '../../types/pageInfo';
import Card from '../../atom/card/Card';

function AppNavigation(props: Skill) {
  const skillItems = props.langs.map((_skill:SkillCard) => {
    const maxLevel = 5;
    let _skillLevels = []
    for (let i = 0; i < maxLevel; i++) {
      _skillLevels.push(
        <span>
          {i < _skill.level ? '★' : '☆'}
        </span>)
    }
    return (
      <Card element="li" elementClass={skill.card}>
        <div className={skill.card_detail}>
          <h4 className={skill.card_title}>{_skill.name}</h4>
          <div className={skill.card_2col}>
            <p className={skill.card_2col_item}>スキルレベル</p>
            <div className={skill.card_2col_item}>{_skillLevels}</div>
          </div>
          <div className={skill.card_2col}>
            <p className={skill.card_2col_item}>経験年数</p>
            <div className={skill.card_2col_item}>{_skill.experienceYears}</div>
          </div>
        </div>
      </Card>)
  })
  return (
    <div className={skill.category}>
      <h3 className={skill.category_title}>{props.displayName}</h3>
      <p className={skill.category_overview}>{props.overview}</p>
      <ul className={skill.card_wrapper}>
        {skillItems}
      </ul>
    </div>
  );
}



export default AppNavigation;
