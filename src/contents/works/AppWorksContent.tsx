import React from 'react';
import AppContents from '../AppContes'
import AppWorksCard from './AppWorksCard';
import { Work, Works } from '../../types/pageInfo'
import work from './works.module.scss'

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
        <h2 className={work.title}>Works</h2>
        <div className={work.card_wrapper}>
          {worksItems}
        </div>
      </div>
    </AppContents>

  );
}

export default AppWorks;
