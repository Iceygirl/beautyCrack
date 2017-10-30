//index.js
var app = getApp()

Page({
  data:{
    imgUrls:[
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509020760144&di=6997db05e489ab82ea9fbc60dc3fd3b2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f1011b3a8a169fed8335a7b.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509020760144&di=91375c19b7b347cc9dd615d679557f38&imgtype=0&src=http%3A%2F%2Fimage.qmango.com%2Fhotelimg%2Fc2%2F78616%2F20150715180610420_3425_2283.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509020760144&di=f7bdd1eba90bdfca38c96cf8380ef475&imgtype=0&src=http%3A%2F%2Fpic.35pic.com%2Fnormal%2F04%2F28%2F13%2F5713677_135826285137_2.jpg'
    ]
  },
  submit(e){
    console.log(e)
    wx.navgateTo({
      url:'/pages/order/order',
    })
  }
})
