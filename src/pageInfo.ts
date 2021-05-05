const PAGE_INFO = {
  mv: {
    component: 'AppMv',
    name: 'mv',
    url: '#',
  },
  skill: {
    component: 'AppSkill',
    name: 'skill',
    url: '#skill',
    skills: [
      {
        displayName: 'フロントエンド',
        overview: '最近はReact.jsとTypeScriptの勉強に力を入れております',
        langs: [
          {
            name: 'JavaScript',
            level: 5,
            experienceYears: '3年'
          },
          {
            name: 'jQuery',
            level: 5,
            experienceYears: '3年'
          },
          {
            name: 'Vue.js',
            level: 4,
            experienceYears: '1年'

          },
          {
            name: 'React',
            level: 3,
            experienceYears: '半年'
          },
          {
            name: 'TypeScript',
            level: 3,
            experienceYears: '半年'
          }
        ]
      },
      {
        displayName: 'バックエンド',
        overview: '業務効率化のアプリ作成ほか、PHPのカールを用いてプロキシーなどの設定を行いました。',
        langs: [
          {
            name: 'PHP',
            level: 3,
            experienceYears: '1年'
          },
          {
            name: 'Node.js',
            level: 3,
            experienceYears: '1年'
          }
        ]
      }
    ]
  },
  works: {
    component: 'AppWorks',
    name: 'works',
    url: '#works',
    works: [
      {
        name: 'YouTubeApi',
        pageUrl: '',
        image: 'tetris.jpg',
        overview: '',
        usingTechnology: [
          'HTML5',
          'CSS3',
          'JavaScript',
          'Vue.js',
          'Firebase',
        ]
      },
      {
        name: 'TETRIS',
        pageUrl: '',
        image: 'tetris.jpg',
        overview: '',
        usingTechnology: [
          'HTML5',
          'JavaScript',
          'canvas'
        ]
      }
    ]
  }
}


export { PAGE_INFO }
