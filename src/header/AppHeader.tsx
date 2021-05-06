import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import header from './header.module.scss';
import AppNavigation from './AppNavigation';
import { useRef } from 'react';

type Props = {
  [key: string]: {
    url : string
  }
}

function AppHeader(props: Props) {
  smoothScroll.polyfill()
  const headerEl = useRef<HTMLElement>(null)
  const jumpToSection = (event: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    event.preventDefault()
    const target = id ? document.querySelector(id) : null;
    const headerH = headerEl.current !== null ? headerEl.current.clientHeight : 0
    const targetPos = target ? target.getBoundingClientRect().top + window.scrollY - headerH : 0;
    window.scrollTo({
      behavior: 'smooth',
      top: targetPos
    })
  }
  const navigationInfo: Props = {}
  Object.keys(props).forEach(_item => {
    if (props[_item].url !== '#') navigationInfo[_item] = props[_item]
  })
  return (
    <header ref={headerEl} className={header.card}>
      <h1 className={header.card_title}>
        <a onClick={e=>jumpToSection(e)} href="#">Toru Sakari</a>
      </h1>
      <AppNavigation jumpToSection={jumpToSection} navigationInfo={navigationInfo} />
    </header>
  );
}

export default AppHeader;
