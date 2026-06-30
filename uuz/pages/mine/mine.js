const app = getApp();
const util = require('../../utils/util.js');

Page({
  data: {
    statusBarHeight: 20,
    userInfo: null,
    orderCount: [0, 0, 0]
  },

  onLoad() {
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      statusBarHeight: systemInfo.statusBarHeight || 20
    });

    this.loadUserInfo();
  },

  onShow() {
    this.loadUserInfo();
    this.loadOrderCount();
  },

  loadUserInfo() {
    try {
      const userInfo = wx.getStorageSync('userInfo') || null;
      app.globalData.userInfo = userInfo;
      this.setData({ userInfo });
    } catch (e) {
      console.error('加载用户信息失败', e);
    }
  },

  loadOrderCount() {
    const orderList = app.globalData.orderList;
    const orderCount = [0, 0, 0];
    
    orderList.forEach(order => {
      if (order.status === 0) orderCount[0]++;
      else if (order.status === 1) orderCount[1]++;
      else if (order.status === 2) orderCount[2]++;
    });

    this.setData({ orderCount });
  },

  login() {
    util.navigateTo('/pages/login/login');
  },

  goProfile() {
    if (!this.data.userInfo) {
      util.navigateTo('/pages/login/login');
      return;
    }
    util.navigateTo('/pages/profile/profile');
  },

  goSetting() {
    util.navigateTo('/pages/setting/setting');
  },

  goOrder(e) {
    const status = e.currentTarget.dataset.status;
    util.navigateTo(`/pages/order/order?status=${status}`);
  },

  goAfterSale() {
    util.showToast('售后功能开发中');
  },

  goAddress() {
    util.navigateTo('/pages/address/address');
  },

  goCoupon() {
    util.showToast('优惠券功能开发中');
  },

  goCollection() {
    util.showToast('收藏功能开发中');
  },

  goHistory() {
    util.showToast('浏览记录功能开发中');
  },

  goService() {
    util.showToast('客服功能开发中');
  },

  goHelp() {
    util.showToast('帮助中心开发中');
  },

  goAbout() {
    util.showToast('关于我们');
  },

  onPullDownRefresh() {
    this.loadUserInfo();
    this.loadOrderCount();
    setTimeout(() => {
      wx.stopPullDownRefresh();
      util.showToast('刷新成功', 'success');
    }, 800);
  }
});
