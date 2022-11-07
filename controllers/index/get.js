const END_TIME = new Date('11.14.2022');

module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: 'Scale the Future of Blockchain',
    includes: {
      external: {
        css: ['general', 'page'],
        js: ['page']
      },
      meta: {
        title: 'Scale the Future of Blockchain',
        description: 'Istanbul Blockchain Summit is a conference where solutions that will take blockchain technologies to the next level will be presented. This Summit will take place in the Spring of 2023. Participants from blockchain companies, developer communities, and community managers will evaluate solutions for the ecosystem\'s problems, such as sustainability, scalability, privacy, and financial volatility.',
        image: '/res/images/open-graph/header.png'
      }
    },
    end_time: END_TIME,
    time_left: {
      days: parseInt((END_TIME - new Date()) / 1000 / 60 / 60 / 24),
      hours: parseInt((END_TIME - new Date()) / 1000 / 60 / 60) % 24,
      minutes: parseInt((END_TIME - new Date()) / 1000 / 60) % 60,
      seconds: parseInt((END_TIME - new Date()) / 1000) % 60
    }
  });
}
