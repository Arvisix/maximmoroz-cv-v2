module.exports = {
  url: 'https://gatsby-starter-blog-and-cv.netlify.app',
  pathPrefix: '/',
  title: 'Blog by Maxim Moroz',
  keywords:
    'account surfer, trello bookmark, trello, productivity, javascript, Maxim Moroz, choosy windows, browser selector',
  subtitle: 'Engineer. Consultant. Traider.',
  copyright: '© 2020 | Minsk, Belarus',
  disqusShortname: 'dospolov',
  postsPerPage: 20,
  googleAnalyticsId: 'UA-6589522-7',
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'CV',
      path: '/cv'
    }
  ],
  author: {
    name: 'Maxim Moroz',
    photo: '/photo.jpg',
    bio: 'Engineer. Consultant. Traider.',
    contacts: {
      // don't remove fields, just make them empty string ''
      // https://github.com/gatsbyjs/gatsby/issues/2392
      github: 'Arvisix',
      twitter: '',
      linkedin: 'maxim-moroz-04465b109',
      telegram: 'dospolov',
      instagram: 'dospolov',
      facebook: 'dospolov',
      email: '',
      rss: '/rss.xml'
    }
  }
}
