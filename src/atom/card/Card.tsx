import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

type Props = {
  element: 'div' | 'li' | 'span' | 'p'
  children: React.ReactNode
  elementClass: string
}

function Card(props: Props) {
  const [scale , setTransform] = useState({})
  const show = ( inView:boolean,entry:any) => {
    const { target } = entry
    if (target && inView) {
      setTransform({
        transform: 'scale(1)',
        opacity: 1,
        boxShadow: '0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)',
      })
    } else {
      setTransform({})
    }
  }
  return (
    <InView as={props.element} onChange={(inView, entry) => show(inView, entry)}
      className={props.elementClass} style={scale} >
      {props.children}
    </InView>
  );
}



export default Card;
