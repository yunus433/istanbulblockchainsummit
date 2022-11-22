module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: 'Scale the Future of the Blockchain',
    includes: {
      external: {
        css: ['general', 'header', 'page', 'text'],
        js: ['page']
      },
      meta: {
        title: 'Scale the Future of the Blockchain',
        description: 'Istanbul Blockchain Summit is a conference where solutions that will take blockchain technologies to the next level will be presented. This Summit will take place in the Spring of 2023. Participants from blockchain companies, developer communities, and community managers will evaluate solutions for the ecosystem\'s problems, such as sustainability, scalability, privacy, and financial volatility.',
        image: '/res/images/open-graph/header.png'
      }
    }
  });
}
