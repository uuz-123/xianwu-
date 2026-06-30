const app = getApp();
const mockData = require('../../utils/mockData.js');
const util = require('../../utils/util.js');

Page({
  data: {
    statusBarHeight: 20,
    banners: [],
    categories: [],
    seckillProducts: [],
    newProducts: [],
    hotProducts: [],
    countdown: '02:30:00',
    refreshTime: 0
  },

  onLoad() {
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      statusBarHeight: systemInfo.statusBarHeight || 20
    });

    this.loadData();
    this.startCountdown();
  },

  onShow() {
    const cartCount = app.globalData.cartList.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount > 0) {
      wx.setTabBarBadge({
        index: 2,
        text: cartCount > 99 ? '99+' : cartCount.toString()
      });
    } else {
      wx.removeTabBarBadge({
        index: 2
      });
    }
  },

  loadData() {
    // 随机从全部商品中选取秒杀、新品、热销商品
    const allProducts = mockData.allProducts;
    const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
    
    // 随机生成秒杀商品（6个）
    const seckillProducts = shuffled.slice(0, 6).map(p => ({
      ...p,
      tag: ['热卖', '特惠', '爆款', '新品'][Math.floor(Math.random() * 4)],
      originalPrice: p.originalPrice || (p.price * 2).toFixed(2),
      sold: Math.floor(Math.random() * 5000) + 500,
      stock: Math.floor(Math.random() * 200) + 50
    }));
    
    // 随机生成新品商品（6个）
    const newProducts = shuffled.slice(6, 12).map(p => ({
      ...p,
      isNew: true,
      originalPrice: p.originalPrice || (p.price * 1.5).toFixed(2),
      sales: Math.floor(Math.random() * 1000) + 100
    }));
    
    // 随机生成热销商品（6个）
    const hotProducts = shuffled.slice(12, 18).map(p => ({
      ...p,
      isHot: true,
      originalPrice: p.originalPrice || (p.price * 1.8).toFixed(2),
      sales: Math.floor(Math.random() * 5000) + 500
    }));
    
    this.setData({
      banners: mockData.banners,
      categories: mockData.categories,
      seckillProducts: seckillProducts,
      newProducts: newProducts,
      hotProducts: hotProducts,
      refreshTime: Date.now()
    });
  },

  startCountdown() {
    let hours = 2;
    let minutes = 30;
    let seconds = 0;

    this.countdownTimer = setInterval(() => {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
          }
        }
      }

      const timeStr = `${util.formatNumber(hours)}:${util.formatNumber(minutes)}:${util.formatNumber(seconds)}`;
      this.setData({
        countdown: timeStr
      });
    }, 1000);
  },

  onUnload() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
    }
  },

  goSearch() {
    util.navigateTo('/pages/search/search');
  },

  goBanner(e) {
    const item = e.currentTarget.dataset.item;
    if (item && item.link) {
      if (item.link.includes('tabBar')) {
        util.switchTab(item.link);
      } else {
        util.navigateTo(item.link);
      }
    }
  },

  goCategory(e) {
    const id = e.currentTarget.dataset.id;
    util.switchTab('/pages/category/category');
    setTimeout(() => {
      const pages = getCurrentPages();
      const categoryPage = pages[pages.length - 1];
      if (categoryPage && categoryPage.setCurrentCategory) {
        categoryPage.setCurrentCategory(id);
      }
    }, 100);
  },

  goSeckillMore() {
    util.navigateTo('/pages/search/search?type=seckill');
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    util.navigateTo(`/pages/detail/detail?id=${id}`);
  },

  addCart(e) {
    const id = e.currentTarget.dataset.id;
    const product = mockData.allProducts.find(p => p.id == id) || 
                   mockData.hotProducts.find(p => p.id == id) ||
                   mockData.newProducts.find(p => p.id == id) ||
                   mockData.seckillProducts.find(p => p.id == id);
    
    if (product) {
      app.addToCart(product, 1);
      util.showToast('已加入购物车', 'success');
      
      const cartCount = app.globalData.cartList.reduce((sum, item) => sum + item.quantity, 0);
      if (cartCount > 0) {
        wx.setTabBarBadge({
          index: 2,
          text: cartCount > 99 ? '99+' : cartCount.toString()
        });
      }
    }
  },

  onPullDownRefresh() {
    // 每次下拉刷新重新随机加载商品
    this.loadData();
    wx.stopPullDownRefresh();
    util.showToast('发现新商品', 'success');
  },

  loadMore() {
    console.log('加载更多');
  }
});
