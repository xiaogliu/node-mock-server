const Mock = require('mockjs')

const home = {
  index: async ctx => {
    const data = Mock.mock({
      categoryName: '@cname',
      'categoryId|+1': 10,
      logo: '@image(64x64,#eee,Logo)',
      'categoryItems|1-4': [
        {
          cname: '@cname',
          'cid|+1': 100,
          'item|3-7': [
            {
              name: '@cname',
              'id|+1': 0,
              link: '@url'
            }
          ]
        }
      ],
      'seller|8-15': [
        {
          name: '@cname',
          url: '@url'
        }
      ]
    })

    ctx.body = data
  }
}
module.exports = home
