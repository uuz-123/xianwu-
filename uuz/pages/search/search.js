const app = getApp();
const mockData = require('../../utils/mockData.js');
const util = require('../../utils/util.js');

Page({
  data: {
    keyword: '',
    autoFocus: true,
    hasSearched: false,
    historyList: [],
    hotKeywords: ['草莓', '车厘子', '牛排', '三文鱼', '苹果', '牛奶', '鸡蛋', '橙子'],
    productList: [],
    sortType: 'default',
    sortOrder: 'desc'
  },

  onLoad(options) {
    this.loadHistory();
    
    if (options.keyword) {
      this.setData({ keyword: options.keyword });
      this.doSearch();
    }
  },

  loadHistory() {
    try {
      const historyList = wx.getStorageSync('searchHistory') || [];
      this.setData({ historyList: historyList.slice(0, 10) });
    } catch (e) {
      console.error('加载搜索历史失败', e);
    }
  },

  saveHistory(keyword) {
    if (!keyword) return;
    
    try {
      let historyList = wx.getStorageSync('searchHistory') || [];
      historyList = historyList.filter(item => item !== keyword);
      historyList.unshift(keyword);
      historyList = historyList.slice(0, 10);
      wx.setStorageSync('searchHistory', historyList);
      this.setData({ historyList });
    } catch (e) {
      console.error('保存搜索历史失败', e);
    }
  },

  onInput(e) {
    this.setData({
      keyword: e.detail.value
    });
  },

  onSearch(e) {
    const keyword = e.detail.value || this.data.keyword;
    if (!keyword.trim()) {
      util.showToast('请输入搜索关键词');
      return;
    }
    this.setData({ keyword: keyword.trim() });
    this.doSearch();
  },

  searchHistory(e) {
    const keyword = e.currentTarget.dataset.keyword;
    this.setData({ keyword });
    this.doSearch();
  },

  doSearch() {
    const keyword = this.data.keyword;
    if (!keyword) return;

    this.saveHistory(keyword);

    const allProducts = mockData.allProducts;
    const result = allProducts.filter(product => 
      product.name.includes(keyword)
    );

    this.setData({
      productList: result,
      hasSearched: true,
      sortType: 'default'
    });
  },

  clearKeyword() {
    this.setData({
      keyword: '',
      hasSearched: false,
      productList: []
    });
  },

  clearHistory() {
    util.showModal('提示', '确定要清空搜索历史吗？').then(confirmed => {
      if (confirmed) {
        wx.removeStorageSync('searchHistory');
        this.setData({ historyList: [] });
        util.showToast('已清空', 'success');
      }
    });
  },

  changeSort(e) {
    const type = e.currentTarget.dataset.type;
    let order = 'desc';
    
    if (type === this.data.sortType && type === 'price') {
      order = this.data.sortOrder === 'desc' ? 'asc' : 'desc';
    }

    let productList = [...this.data.productList];
    
    if (type === 'sales') {
      productList.sort((a, b) => b.sales - a.sales);
    } else if (type === 'price') {
      if (order === 'asc') {
        productList.sort((a, b) => a.price - b.price);
      } else {
        productList.sort((a, b) => b.price - a.price);
      }
    }

    this.setData({
      sortType: type,
      sortOrder: order,
      productList
    });
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

  goBack() {
    util.navigateBack();
  }
});
