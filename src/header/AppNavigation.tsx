import React from 'react';
import header from './header.module.scss';

type Props = {
  jumpToSection: (event: React.MouseEvent<HTMLAnchorElement>,id:string) => void,
  navigationInfo: {
    [key: string]: {
      url : string
    }
  }
}

function AppNavigation(props: Props) {
  const navigationItem = Object.keys(props.navigationInfo).map((item: string) => {
    return (<li key={`navigation_${item}`} className={header.card_item}>
      <a onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
        props.jumpToSection(event, props.navigationInfo[item].url)
      }}
        href={props.navigationInfo[item].url}>{item}</a>
    </li>)
  })
  return (
    <ul className={header.card_list}>
      {navigationItem}
    </ul>
  );
}

export default AppNavigation;
