const app = getApp();
const mockData = require('../../utils/mockData.js');
const util = require('../../utils/util.js');

Page({
  data: {
    product: {},
    currentPrice: 0,
    selectedSpec: null,
    quantity: 1,
    showSpec: false,
    cartCount: 0
  },

  onLoad(options) {
    const id = parseInt(options.id);
    this.loadProduct(id);
  },

  onShow() {
    const cartCount = app.globalData.cartList.reduce((sum, item) => sum + item.quantity, 0);
    this.setData({ cartCount });
  },

  loadProduct(id) {
    let product = mockData.allProducts.find(p => p.id === id);
    
    if (!product) {
      product = mockData.seckillProducts.find(p => p.id === id);
      if (product) {
        product = {
          ...product,
          images: [product.image, product.image, product.image],
          description: '限时特惠商品，数量有限，先到先得。精选优质商品，品质保证。',
          specs: [{ id: 'default', name: '默认规格', price: product.price, stock: product.stock }],
          unit: '1件'
        };
      }
    }

    if (!product) {
      product = mockData.newProducts.find(p => p.id === id) || mockData.hotProducts.find(p => p.id === id);
      if (product) {
        product = {
          ...product,
          images: [product.image, product.image, product.image],
          description: '精选好物，品质保证。产地直采，新鲜直达。',
          specs: [{ id: 'default', name: '默认规格', price: product.price, stock: 100 }],
          unit: '1件',
          stock: 100
        };
      }
    }

    if (product) {
      const firstSpec = product.specs && product.specs[0];
      this.setData({
        product: product,
        currentPrice: firstSpec ? firstSpec.price : product.price,
        selectedSpec: firstSpec || null
      });
    } else {
      util.showToast('商品不存在');
      setTimeout(() => {
        util.navigateBack();
      }, 1500);
    }
  },

  showSpecPopup() {
    this.setData({ showSpec: true });
  },

  hideSpecPopup() {
    this.setData({ showSpec: false });
  },

  stopPropagation() {
  },

  selectSpec(e) {
    const spec = e.currentTarget.dataset.spec;
    this.setData({
      selectedSpec: spec,
      currentPrice: spec.price
    });
  },

  increaseQty() {
    const maxStock = this.data.selectedSpec ? this.data.selectedSpec.stock : this.data.product.stock;
    if (this.data.quantity < maxStock) {
      this.setData({
        quantity: this.data.quantity + 1
      });
    } else {
      util.showToast('已达库存上限');
    }
  },

  decreaseQty() {
    if (this.data.quantity > 1) {
      this.setData({
        quantity: this.data.quantity - 1
      });
    }
  },

  checkLogin() {
    const userInfo = app.globalData.userInfo || wx.getStorageSync('userInfo');
    if (!userInfo) {
      util.showModal('提示', '请先登录后再操作').then(confirmed => {
        if (confirmed) {
          util.navigateTo('/pages/login/login');
        }
      });
      return false;
    }
    return true;
  },

  confirmAddCart() {
    if (!this.data.selectedSpec) {
      util.showToast('请选择规格');
      return;
    }

    app.addToCart(this.data.product, this.data.quantity, this.data.selectedSpec);
    util.showToast('已加入购物车', 'success');
    this.setData({ showSpec: false });

    const cartCount = app.globalData.cartList.reduce((sum, item) => sum + item.quantity, 0);
    this.setData({ cartCount });
  },

  buyNow() {
    if (!this.checkLogin()) {
      this.setData({ showSpec: false });
      return;
    }

    if (!this.data.selectedSpec) {
      util.showToast('请选择规格');
      return;
    }

    app.addToCart(this.data.product, this.data.quantity, this.data.selectedSpec);
    util.switchTab('/pages/cart/cart');
  },

  goHome() {
    util.switchTab('/pages/index/index');
  },

  goCart() {
    util.switchTab('/pages/cart/cart');
  },

  onShareAppMessage() {
    return {
      title: this.data.product.name,
      path: `/pages/detail/detail?id=${this.data.product.id}`
    };
  }
});
