const app = getApp();
const mockData = require('../../utils/mockData.js');
const util = require('../../utils/util.js');

Page({
  data: {
    categories: [],
    currentCategoryId: 1,
    currentCategory: {},
    productList: []
  },

  onLoad(options) {
    const categories = mockData.categories;
    const currentCategoryId = options.id ? parseInt(options.id) : categories[0].id;
    
    this.setData({
      categories: categories
    });

    this.selectCategoryById(currentCategoryId);
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

  setCurrentCategory(id) {
    this.selectCategoryById(id);
  },

  selectCategory(e) {
    const id = e.currentTarget.dataset.id;
    this.selectCategoryById(id);
  },

  selectCategoryById(id) {
    const category = mockData.categories.find(c => c.id === id);
    const productList = mockData.allProducts.filter(p => p.categoryId === id);
    
    this.setData({
      currentCategoryId: id,
      currentCategory: category || {},
      productList: productList
    });
  },

  goSearch() {
    util.navigateTo('/pages/search/search');
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    util.navigateTo(`/pages/detail/detail?id=${id}`);
  },

  addCart(e) {
    const id = e.currentTarget.dataset.id;
    const product = mockData.allProducts.find(p => p.id === id);
    
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
    this.selectCategoryById(this.data.currentCategoryId);
    setTimeout(() => {
      wx.stopPullDownRefresh();
      util.showToast('刷新成功', 'success');
    }, 800);
  }
});
