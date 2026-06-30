App({
  globalData: {
    userInfo: null,
    cartList: [],
    addressList: [],
    orderList: []
  },

  onLaunch() {
    this.loadCart();
    this.loadAddress();
    this.loadOrders();
  },

  loadCart() {
    try {
      const cartList = wx.getStorageSync('cartList') || [];
      this.globalData.cartList = cartList;
    } catch (e) {
      console.error('加载购物车失败', e);
    }
  },

  saveCart() {
    try {
      wx.setStorageSync('cartList', this.globalData.cartList);
    } catch (e) {
      console.error('保存购物车失败', e);
    }
  },

  addToCart(product, quantity = 1, spec = null) {
    const cartList = this.globalData.cartList;
    const specKey = spec ? spec.id : 'default';
    const existingItem = cartList.find(
      item => item.id === product.id && item.specKey === specKey
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartList.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        originalPrice: product.originalPrice,
        quantity: quantity,
        spec: spec,
        specKey: specKey,
        selected: true
      });
    }

    this.saveCart();
  },

  updateCartItem(itemId, specKey, quantity) {
    const cartList = this.globalData.cartList;
    const item = cartList.find(i => i.id === itemId && i.specKey === specKey);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
    }
  },

  removeFromCart(itemId, specKey) {
    const cartList = this.globalData.cartList;
    const index = cartList.findIndex(i => i.id === itemId && i.specKey === specKey);
    if (index > -1) {
      cartList.splice(index, 1);
      this.saveCart();
    }
  },

  toggleCartItemSelect(itemId, specKey) {
    const cartList = this.globalData.cartList;
    const item = cartList.find(i => i.id === itemId && i.specKey === specKey);
    if (item) {
      item.selected = !item.selected;
      this.saveCart();
    }
  },

  toggleAllCartItems(selected) {
    this.globalData.cartList.forEach(item => {
      item.selected = selected;
    });
    this.saveCart();
  },

  getCartTotal() {
    const cartList = this.globalData.cartList.filter(item => item.selected);
    let total = 0;
    let count = 0;
    cartList.forEach(item => {
      total += item.price * item.quantity;
      count += item.quantity;
    });
    return { total, count };
  },

  clearSelectedCart() {
    this.globalData.cartList = this.globalData.cartList.filter(item => !item.selected);
    this.saveCart();
  },

  loadAddress() {
    try {
      const addressList = wx.getStorageSync('addressList') || [];
      this.globalData.addressList = addressList;
    } catch (e) {
      console.error('加载地址失败', e);
    }
  },

  saveAddress() {
    try {
      wx.setStorageSync('addressList', this.globalData.addressList);
    } catch (e) {
      console.error('保存地址失败', e);
    }
  },

  addAddress(address) {
    if (address.isDefault) {
      this.globalData.addressList.forEach(item => {
        item.isDefault = false;
      });
    }
    address.id = Date.now();
    this.globalData.addressList.push(address);
    this.saveAddress();
  },

  updateAddress(address) {
    const index = this.globalData.addressList.findIndex(item => item.id === address.id);
    if (index > -1) {
      if (address.isDefault) {
        this.globalData.addressList.forEach(item => {
          item.isDefault = false;
        });
      }
      this.globalData.addressList[index] = address;
      this.saveAddress();
    }
  },

  deleteAddress(id) {
    const index = this.globalData.addressList.findIndex(item => item.id === id);
    if (index > -1) {
      this.globalData.addressList.splice(index, 1);
      this.saveAddress();
    }
  },

  getDefaultAddress() {
    return this.globalData.addressList.find(item => item.isDefault) || this.globalData.addressList[0];
  },

  loadOrders() {
    try {
      const orderList = wx.getStorageSync('orderList') || [];
      this.globalData.orderList = orderList;
    } catch (e) {
      console.error('加载订单失败', e);
    }
  },

  saveOrders() {
    try {
      wx.setStorageSync('orderList', this.globalData.orderList);
    } catch (e) {
      console.error('保存订单失败', e);
    }
  },

  createOrder(orderData) {
    const order = {
      id: Date.now(),
      orderNo: 'XTE' + Date.now(),
      status: 0,
      statusText: '待付款',
      createTime: new Date().toLocaleString(),
      items: orderData.items,
      totalPrice: orderData.totalPrice,
      address: orderData.address,
      remark: orderData.remark || ''
    };
    this.globalData.orderList.unshift(order);
    this.saveOrders();
    return order;
  },

  updateOrderStatus(orderId, status) {
    const order = this.globalData.orderList.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      const statusMap = {
        0: '待付款',
        1: '待发货',
        2: '待收货',
        3: '已完成',
        4: '已取消'
      };
      order.statusText = statusMap[status] || '未知状态';
      this.saveOrders();
    }
  }
});
