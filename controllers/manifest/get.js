module.exports = (req, res) => {
  return res.render('manifest/index', {
    page: 'manifest/index',
    title: 'Our Manifest',
    includes: {
      external: {
        css: ['general', 'header', 'page', 'text'],
        js: ['page']
      },
      meta: {
        title: 'Our Manifest',
        description: 'Many economic problems, such as rising inflation at the global level, decreasing social confidence in fiat currencies offered by central authorities, losing the qualities of safe-haven currencies, and rising interest rates, threaten today\'s world. Moreover, humanity is faced with economic crises, wars, migrations, and climate change which cause socio-political changes. We should have focused on problems such as global warming that threatens our planet while the world is coming out of the pandemic, however, it is dragged into a depression by facing many more problems mentioned above.',
        image: '/res/images/open-graph/header.png'
      }
    }
  });
}
