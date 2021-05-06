import React, { useEffect, useRef } from 'react';
import mv from './mv.module.scss';
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import AppContents from '../AppContes'

type Props = {
  component: string;
  name: string;
  url: string;
  loading: boolean
}

function AppMvContent(props:Props) {
  const textRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    if (props.loading) {
      const el = textRef.current
      if (null !== el) {
        const text = el.innerHTML;
        el.innerHTML = ''
        el.style.opacity = '1'
        const numText: number = text.length
        gsap.registerPlugin(TextPlugin)
        gsap.to(el, {
          duration: numText * 0.05,
          text: {
            value: text,
          },
          ease: 'none',
        });
      }
    }
  },[props.loading])
  return (
    <section>
      <div className={mv.app_mv}>
        {props.loading ?
          <p ref={textRef} className={mv.app_mv_text} style={{
            opacity : 0
          }}>
          Hello!!<br />My name is Toru Sakari.<br />I'm a front-end engineer</p> :
          ''}
      </div>
    </section>
  );
}

export default AppMvContent;
