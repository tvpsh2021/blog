const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/tvpsh2021/tvpsh2021.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
