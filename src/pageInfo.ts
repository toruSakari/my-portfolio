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
        displayName: 'マークアップ',
        overview: '最近業務でSassを積極的に使ってます',
        langs: [
          {
            name: 'HTML5',
            level: 5,
            experienceYears: '3年'
          },
          {
            name: 'CSS3',
            level: 5,
            experienceYears: '3年'
          },
          {
            name: 'Sass',
            level: 3,
            experienceYears: '1年'
          }
        ]
      },
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
        name: 'ポートフォリオ',
        pageUrl: '#',
        image: 'portfolio.jpg',
        overview: 'jsonによるページの情報管理',
        usingTechnology: [
          'HTML5',
          'CSS3',
          'React',
          'Sass',
          'TypeScript',
        ]
      },
      {
        name: 'YouTubeApi',
        pageUrl: 'https://myapp-77c9a.firebaseapp.com/home',
        image: 'youtube.jpg',
        overview: '会員登録機能、お気に入り機能、シェア機能、検索機能があります。',
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
        overview: 'スコア機能、ブロック回転機能',
        usingTechnology: [
          'HTML5',
          'JavaScript',
          'canvas'
        ]
      }
    ]
  }
} as { [key: string]: any }


export { PAGE_INFO }
