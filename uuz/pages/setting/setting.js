const app = getApp();
const util = require('../../utils/util.js');

Page({
  data: {
    userInfo: null,
    notifyOn: true,
    cacheSize: '12.5MB'
  },

  onLoad() {
    this.loadUserInfo();
    this.calcCacheSize();
  },

  onShow() {
    this.loadUserInfo();
  },

  loadUserInfo() {
    const userInfo = app.globalData.userInfo || wx.getStorageSync('userInfo');
    this.setData({ userInfo });
  },

  calcCacheSize() {
    const size = (Math.random() * 20 + 5).toFixed(1);
    this.setData({
      cacheSize: size + 'MB'
    });
  },

  goProfile() {
    if (!this.data.userInfo) {
      util.navigateTo('/pages/login/login');
      return;
    }
    util.navigateTo('/pages/profile/profile');
  },

  changePhone() {
    const userInfo = this.data.userInfo;
    if (userInfo && userInfo.phone) {
      util.showToast('手机号即账号，暂不支持修改');
    } else {
      util.navigateTo('/pages/login/login');
    }
  },

  changePassword() {
    util.showToast('功能开发中');
  },

  toggleNotify(e) {
    this.setData({
      notifyOn: e.detail.value
    });
    util.showToast(e.detail.value ? '通知已开启' : '通知已关闭');
  },

  clearCache() {
    util.showModal('提示', '确定要清除缓存吗？').then(confirmed => {
      if (confirmed) {
        wx.clearStorageSync();
        app.globalData.cartList = [];
        app.globalData.addressList = [];
        app.globalData.orderList = [];
        if (this.data.userInfo) {
          wx.setStorageSync('userInfo', this.data.userInfo);
          app.globalData.userInfo = this.data.userInfo;
        }
        this.setData({
          cacheSize: '0MB'
        });
        util.showToast('缓存已清除', 'success');
      }
    });
  },

  aboutUs() {
    wx.showModal({
      title: '关于鲜物',
      content: '鲜物 v1.0.0\n\n新鲜直达，品质保证\n产地直采，冷链配送',
      showCancel: false,
      confirmColor: '#ff6b35'
    });
  },

  service() {
    util.showToast('客服功能开发中');
  },

  logout() {
    util.showModal('提示', '确定要退出登录吗？').then(confirmed => {
      if (confirmed) {
        wx.removeStorageSync('userInfo');
        app.globalData.userInfo = null;
        this.setData({ userInfo: null });
        util.showToast('已退出登录', 'success');
        setTimeout(() => {
          util.navigateBack();
        }, 1500);
      }
    });
  }
});
