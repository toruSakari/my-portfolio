import React, { useState } from 'react';
import AppMvContent from './contents/mv/AppMvContent'
import AppSkillContent from './contents/skills/AppSkillContent'
import AppWorksContent from './contents/works/AppWorksContent'
import Loading from './loading/Loading'
import { PAGE_INFO } from './pageInfo'
import AppHeader from './header/AppHeader'

function App() {
  const [animation, setAnimation] = useState(false)
  const update = () => setAnimation(true)
  const pageInfo: { [key: string]: { url: string } } = {}
  Object.keys(PAGE_INFO).forEach((_page: string) => {
    pageInfo[_page] = {url: PAGE_INFO[_page].url}
  })
  return (
    <div className="App">
      <AppHeader {...pageInfo} />
      <Loading update={update} />
      <AppMvContent loading={animation} {...PAGE_INFO['mv']} />
      <AppSkillContent {...PAGE_INFO['skill']} />
      <AppWorksContent {...PAGE_INFO['works']} />
    </div>
  );
}

export default App;
