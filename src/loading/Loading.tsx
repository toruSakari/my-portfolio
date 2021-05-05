import React, { useRef, useEffect, useState } from 'react';
import loader from './loading.module.scss'

type Props = {
  update: ()=>void;
}

function Loading(props: Props) {
  const loadingRef = useRef<HTMLDivElement>(null)
  const [loading, setLoad] = useState(true)
  const checkLoad = () => {
    setTimeout(() => {
      if (document.readyState === 'complete') {
        const { current } = loadingRef;
        if (current !== null) {
          current.addEventListener('transitionend', function end(event) {
            if (event.propertyName === 'opacity') {
              this.removeEventListener('transitionend', end, false)
              props.update()
            }
          })
        }
        setLoad(false);
      } else {
        checkLoad()
      }
    }, 2000)
  }
  useEffect(() => {
    checkLoad()
  }, [])
  return (
    <div ref={loadingRef} className={loader.wrapper}  style={{
      transition: 'all 1s ease-in-out',
      opacity: loading ? 1 : 0,
      visibility: loading ? 'visible' : 'hidden',
      transform: loading ? 'scale(1)':'scale(2)',
    }}>
      <p className={loader.loader_text}>Now Loading</p>
      <span className={loader.loader}></span>
    </div>
  );
}

export default Loading;
