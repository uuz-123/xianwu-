const app = getApp();
const util = require('../../utils/util.js');

Page({
  data: {
    addressList: []
  },

  onLoad() {
    this.loadAddressList();
  },

  onShow() {
    this.loadAddressList();
  },

  loadAddressList() {
    this.setData({
      addressList: app.globalData.addressList
    });
  },

  addAddress() {
    util.navigateTo('/pages/addressEdit/addressEdit');
  },

  editAddress(e) {
    const id = e.currentTarget.dataset.id;
    util.navigateTo(`/pages/addressEdit/addressEdit?id=${id}`);
  },

  deleteAddress(e) {
    const id = e.currentTarget.dataset.id;
    util.showModal('提示', '确定要删除该地址吗？').then(confirmed => {
      if (confirmed) {
        app.deleteAddress(id);
        this.loadAddressList();
        util.showToast('删除成功', 'success');
      }
    });
  },

  setDefault(e) {
    const id = e.currentTarget.dataset.id;
    const address = app.globalData.addressList.find(a => a.id === id);
    if (address) {
      address.isDefault = true;
      app.updateAddress(address);
      this.loadAddressList();
    }
  },

  selectAddress(e) {
    const pages = getCurrentPages();
    if (pages.length > 1) {
      const prevPage = pages[pages.length - 2];
      if (prevPage && prevPage.selectAddress) {
        const id = e.currentTarget.dataset.id;
        const address = app.globalData.addressList.find(a => a.id === id);
        prevPage.selectAddress(address);
        util.navigateBack();
      }
    }
  }
});
