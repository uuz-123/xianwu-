const app = getApp();
const mockData = require('../../utils/mockData.js');
const util = require('../../utils/util.js');

Page({
  data: {
    cartList: [],
    allSelected: false,
    totalPrice: '0.00',
    totalCount: 0,
    isEdit: false,
    recommendProducts: []
  },

  onShow() {
    this.loadCart();
    this.loadRecommend();
  },

  loadCart() {
    const cartList = app.globalData.cartList;
    const allSelected = cartList.length > 0 && cartList.every(item => item.selected);
    const { total, count } = app.getCartTotal();

    this.setData({
      cartList: cartList,
      allSelected: allSelected,
      totalPrice: total.toFixed(2),
      totalCount: count
    });

    if (count > 0) {
      wx.setTabBarBadge({
        index: 2,
        text: count > 99 ? '99+' : count.toString()
      });
    } else {
      wx.removeTabBarBadge({
        index: 2
      });
    }
  },

  loadRecommend() {
    const allProducts = mockData.allProducts;
    const shuffled = allProducts.sort(() => Math.random() - 0.5);
    this.setData({
      recommendProducts: shuffled.slice(0, 6)
    });
  },

  toggleEdit() {
    this.setData({
      isEdit: !this.data.isEdit
    });
  },

  toggleSelect(e) {
    const { id, spec } = e.currentTarget.dataset;
    app.toggleCartItemSelect(id, spec);
    this.loadCart();
  },

  toggleSelectAll() {
    const allSelected = !this.data.allSelected;
    app.toggleAllCartItems(allSelected);
    this.loadCart();
  },

  increaseQty(e) {
    const { id, spec } = e.currentTarget.dataset;
    const item = this.data.cartList.find(i => i.id === id && i.specKey === spec);
    if (item) {
      app.updateCartItem(id, spec, item.quantity + 1);
      this.loadCart();
    }
  },

  decreaseQty(e) {
    const { id, spec } = e.currentTarget.dataset;
    const item = this.data.cartList.find(i => i.id === id && i.specKey === spec);
    if (item && item.quantity > 1) {
      app.updateCartItem(id, spec, item.quantity - 1);
      this.loadCart();
    } else if (item && item.quantity === 1) {
      util.showModal('提示', '确定要删除该商品吗？').then(confirmed => {
        if (confirmed) {
          app.removeFromCart(id, spec);
          this.loadCart();
        }
      });
    }
  },

  deleteItem(e) {
    const { id, spec } = e.currentTarget.dataset;
    util.showModal('提示', '确定要删除该商品吗？').then(confirmed => {
      if (confirmed) {
        app.removeFromCart(id, spec);
        this.loadCart();
      }
    });
  },

  deleteSelected() {
    const selectedCount = this.data.cartList.filter(item => item.selected).length;
    if (selectedCount === 0) {
      util.showToast('请选择要删除的商品');
      return;
    }

    util.showModal('提示', `确定要删除选中的${selectedCount}件商品吗？`).then(confirmed => {
      if (confirmed) {
        app.clearSelectedCart();
        this.loadCart();
        util.showToast('删除成功', 'success');
      }
    });
  },

  settle() {
    const userInfo = app.globalData.userInfo || wx.getStorageSync('userInfo');
    if (!userInfo) {
      util.showModal('提示', '请先登录后再结算').then(confirmed => {
        if (confirmed) {
          util.navigateTo('/pages/login/login');
        }
      });
      return;
    }

    const selectedItems = this.data.cartList.filter(item => item.selected);
    if (selectedItems.length === 0) {
      util.showToast('请选择要结算的商品');
      return;
    }

    const address = app.getDefaultAddress();
    if (!address) {
      util.showToast('请先添加收货地址');
      setTimeout(() => {
        util.navigateTo('/pages/address/address');
      }, 1500);
      return;
    }

    const { total, count } = app.getCartTotal();
    
    util.showModal('确认订单', `共${count}件商品，合计¥${total.toFixed(2)}，是否提交订单？`).then(confirmed => {
      if (confirmed) {
        const order = app.createOrder({
          items: selectedItems,
          totalPrice: total.toFixed(2),
          address: address
        });
        app.clearSelectedCart();
        this.loadCart();
        util.showToast('下单成功', 'success');
        setTimeout(() => {
          util.navigateTo('/pages/order/order');
        }, 1500);
      }
    });
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    util.navigateTo(`/pages/detail/detail?id=${id}`);
  },

  goShopping() {
    util.switchTab('/pages/index/index');
  },

  onPullDownRefresh() {
    this.loadCart();
    this.loadRecommend();
    wx.stopPullDownRefresh();
  }
});
