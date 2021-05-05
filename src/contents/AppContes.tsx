import React from 'react';
import section from './section.module.scss'

type Props = {
  children?: React.ReactNode
  name: string
}

function AppSection(props:Props) {
  return (
    <section id={props.name} className={section.app_section}>
      <div className={section.app_section_inner}>
        {props.children}
      </div>
    </section>
  );
}

export default AppSection;
