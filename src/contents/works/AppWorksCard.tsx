import React from 'react';
import { Work } from '../../types/pageInfo'
import work from './works.module.scss'
import Card from '../../atom/card/Card'


function AppWorksCard(props: Work) {
  const img = require('../../assets/' + props.image).default
  const bg = {
    background: `url(${img}) no-repeat center center`,
    backgroundSize: 'contain'
  }
  return (
    <Card element="li" elementClass={work.card}>
      <a href={props.pageUrl} target="_blank">
        <figure className={work.card_fig} style={bg}>
        </figure>
        <div className={work.card_detail}>
          <h3 className={work.card_title}>{props.name}</h3>
          <p className={work.card_overview}>{props.overview}</p>
          <ul className={work.card_tech_list}>
            {props.usingTechnology.map(_tech => {
              return (
                <li key={`tech_${_tech}`} className={work.card_tech_item}>
                  {_tech}
                </li>
              )
            })}
          </ul>
        </div>
      </a>
    </Card>
  );
}

export default AppWorksCard;
