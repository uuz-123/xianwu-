const app = getApp();
const util = require('../../utils/util.js');

Page({
  data: {
    tabs: [
      { name: '全部', status: -1 },
      { name: '待付款', status: 0 },
      { name: '待发货', status: 1 },
      { name: '待收货', status: 2 },
      { name: '已完成', status: 3 }
    ],
    currentTab: -1,
    orderList: [],
    filteredOrders: []
  },

  onLoad(options) {
    const status = options.status ? parseInt(options.status) : -1;
    this.setData({ currentTab: status });
    this.loadOrders();
  },

  onShow() {
    this.loadOrders();
  },

  loadOrders() {
    const orderList = app.globalData.orderList.map(order => {
      const totalCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
      return { ...order, totalCount };
    });

    this.setData({ orderList });
    this.filterOrders();
  },

  filterOrders() {
    const { orderList, currentTab } = this.data;
    let filteredOrders = orderList;

    if (currentTab >= 0) {
      filteredOrders = orderList.filter(order => order.status === currentTab);
    }

    this.setData({ filteredOrders });
  },

  switchTab(e) {
    const status = e.currentTarget.dataset.status;
    this.setData({ currentTab: status });
    this.filterOrders();
  },

  cancelOrder(e) {
    const id = e.currentTarget.dataset.id;
    util.showModal('提示', '确定要取消该订单吗？').then(confirmed => {
      if (confirmed) {
        app.updateOrderStatus(id, 4);
        this.loadOrders();
        util.showToast('订单已取消', 'success');
      }
    });
  },

  payOrder(e) {
    const id = e.currentTarget.dataset.id;
    util.showLoading('支付中...');
    setTimeout(() => {
      util.hideLoading();
      app.updateOrderStatus(id, 1);
      this.loadOrders();
      util.showToast('支付成功', 'success');
      
      setTimeout(() => {
        app.updateOrderStatus(id, 2);
        this.loadOrders();
      }, 2000);
    }, 1500);
  },

  remindShip(e) {
    util.showToast('已提醒商家发货', 'success');
  },

  confirmReceive(e) {
    const id = e.currentTarget.dataset.id;
    util.showModal('提示', '确认已收到商品吗？').then(confirmed => {
      if (confirmed) {
        app.updateOrderStatus(id, 3);
        this.loadOrders();
        util.showToast('已确认收货', 'success');
      }
    });
  },

  buyAgain(e) {
    const id = e.currentTarget.dataset.id;
    const order = this.data.orderList.find(o => o.id === id);
    if (order) {
      order.items.forEach(item => {
        app.addToCart(item, item.quantity, item.spec);
      });
      util.showToast('已加入购物车', 'success');
      setTimeout(() => {
        util.switchTab('/pages/cart/cart');
      }, 1500);
    }
  },

  goAfterSale() {
    util.showToast('售后功能开发中');
  },

  goOrderDetail(e) {
    const id = e.currentTarget.dataset.id;
    util.showToast('订单详情开发中');
  },

  goShopping() {
    util.switchTab('/pages/index/index');
  }
});
