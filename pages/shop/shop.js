// pages/shop/shop.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509020760144&di=6997db05e489ab82ea9fbc60dc3fd3b2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F9f1011b3a8a169fed8335a7b.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509020760144&di=91375c19b7b347cc9dd615d679557f38&imgtype=0&src=http%3A%2F%2Fimage.qmango.com%2Fhotelimg%2Fc2%2F78616%2F20150715180610420_3425_2283.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509020760144&di=f7bdd1eba90bdfca38c96cf8380ef475&imgtype=0&src=http%3A%2F%2Fpic.35pic.com%2Fnormal%2F04%2F28%2F13%2F5713677_135826285137_2.jpg'
    ],
    list: [
      {
        id: 1,
        url: "https://img14.360buyimg.com/mobilecms/s250x250_jfs/t10012/297/2116768277/184390/215a2456/59ee9aefN7928eec3.jpg",
        title: "惠氏（Wyeth）S-26金装幼儿乐奶粉3段 12-36月幼儿配方 1200克（盒装 400克*3袋）",
        price: 165,
        sell: 30
      },
      {
        id: 2,
        url: "https://img12.360buyimg.com/n7/jfs/t7612/199/1077174730/204842/9c17d389/599a3fd5Nab70eb58.jpg",
        title: "清风（APP）抽纸 原木纯品金装系列 3层120抽纸巾*8包",
        price: 42,
        sell: 60
      },
      {
        id: 3,
        url: "https://img13.360buyimg.com/mobilecms/s250x250_jfs/t4852/101/2433214505/192887/f0fae9a3/58ff593bN82e96cfc.jpg",
        title: "清扬(CLEAR)男士去屑洗发水套装 活力运动薄荷型750mlx2送活力运动薄荷100mlx2",
        price: 95,
        sell: 13
      },
      {
        id: 4,
        url: "https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1057/152/561566137/100593/1e7d589e/55306db8N428d7e72.jpg!q70.jpg",
        title: "佰草集肌活新颜套装",
        price: 300,
        sell: 9
      },
      {
        id: 5,
        url: "https://img20.360buyimg.com/mobilecms/s350x350_jfs/t4666/350/4215609111/69234/e1319f2b/590ab873N795c342b.jpg!q70.jpg",
        title: "NEW BALANCE复古鞋",
        price: 438,
        sell: 13
      },
      {
        id: 6,
        url: "https://img14.360buyimg.com/mobilecms/s300x300_jfs/t11968/182/392561265/45264/af8c1487/59ef0577Nd1819760.jpg!q70.jpg",
        title: "书籍：猜猜看 谁的姥姥",
        price: 15,
        sell: 100
      },
      {
        id: 7,
        url: "https://img14.360buyimg.com/mobilecms/s300x300_jfs/t11968/182/392561265/45264/af8c1487/59ef0577Nd1819760.jpg!q70.jpg",
        title: "书籍：猜猜看 谁的姥姥",
        price: 15,
        sell: 100
      }
    ],

    goToShopItem(e){
      var id = e.currentTarget.dataset.id;
      console.log(id);
    }
  }
})