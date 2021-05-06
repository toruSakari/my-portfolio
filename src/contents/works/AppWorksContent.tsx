import React from 'react';
import AppContents from '../AppContes'
import AppWorksCard from './AppWorksCard';
import { Work, Works } from '../../types/pageInfo'
import work from './works.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

type Props = {
  component: string,
  url: string,
  name: string,
  works: Works
}

function AppWorks(props:Props) {
  const worksItems = props.works.map((_work:Work) => {
    return (
      <AppWorksCard key={_work.name} {..._work}/>
    )
  })
  return (
    <AppContents name={props.name}>
      <div className={work.app_work}>
        <h2 className={work.title}><FontAwesomeIcon icon={faLaptopCode} />Works</h2>
        <p className={work.overview}>制作作品の紹介。</p>
        <div className={work.card_wrapper}>
          {worksItems}
        </div>
      </div>
    </AppContents>

  );
}

export default AppWorks;
