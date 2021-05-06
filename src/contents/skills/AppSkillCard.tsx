import React , { useState } from 'react';
import skill from './skill.module.scss';
import { Skill, SkillCard } from '../../types/pageInfo';
import Card from '../../atom/card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
// import Swiper core and required modules
import SwiperCore, { Scrollbar } from 'swiper/core';
import "swiper/components/scrollbar/scrollbar.min.css"

SwiperCore.use([Scrollbar]);

function AppSkillCard(props: Skill) {
  const getLevel = (level: number) =>{
    const maxLevel = 5;
    let _skillLevels = []
    for (let i = 0; i < maxLevel; i++) {
      _skillLevels.push(
        <span key={'skill' + i}>
          {i < level ? '★' : '☆'}
        </span>)
    }
    return _skillLevels
  }
  const [activeIndex,setActiveIndex] = useState(0)
  const sliderItem = props.langs.map((_skill: SkillCard,index:number) => {
    const img = require(`../../assets/${_skill.name}.svg`).default
    return <SwiperSlide key={_skill.name} className={skill.sliderItem}>
      <div className={skill.sliderItem_inner}>
        <div className={skill.sliderItem_icon} style={{
          background: `url(${img}) no-repeat center center`,
          backgroundSize: '100% 100%',
          transform: activeIndex === index ? 'scale(1.2)' : 'scale(0.9)',
          opacity: activeIndex === index ? '1' : '0.7'
        }}></div>
      </div>
    </SwiperSlide>

  })
  return (
    <div className={skill.category}>
      <h3 className={skill.category_title}>{props.displayName}</h3>
      <p className={skill.category_overview}>{props.overview}</p>
      <ul className={skill.card_wrapper}>
        <Card element="li" key={props.langs[activeIndex].name} elementClass={skill.card}>
          <div className={skill.card_detail}>
            <h4 className={skill.card_title}>{props.langs[activeIndex].name}</h4>
            <div className={skill.card_2col}>
              <p className={skill.card_2col_item}>スキルレベル</p>
              <div className={skill.card_2col_item}>{getLevel(props.langs[activeIndex].level)}</div>
            </div>
            <div className={skill.card_2col}>
              <p className={skill.card_2col_item}>経験年数</p>
              <div className={skill.card_2col_item}>{props.langs[activeIndex].experienceYears}</div>
            </div>
          </div>
        </Card>
      </ul>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        scrollbar={{
          "hide": false
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {sliderItem}
      </Swiper>
    </div>
  );
}



export default AppSkillCard;
