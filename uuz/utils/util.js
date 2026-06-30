const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${year}-${formatNumber(month)}-${formatNumber(day)} ${formatNumber(hour)}:${formatNumber(minute)}:${formatNumber(second)}`;
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

const formatPrice = price => {
  return price.toFixed(2);
};

const showToast = (title, icon = 'none', duration = 2000) => {
  wx.showToast({
    title,
    icon,
    duration
  });
};

const showLoading = (title = '加载中...') => {
  wx.showLoading({
    title,
    mask: true
  });
};

const hideLoading = () => {
  wx.hideLoading();
};

const showModal = (title, content, options = {}) => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title,
      content,
      confirmColor: '#ff6b35',
      ...options,
      success: res => {
        if (res.confirm) {
          resolve(true);
        } else if (res.cancel) {
          resolve(false);
        }
      },
      fail: reject
    });
  });
};

const navigateTo = url => {
  wx.navigateTo({
    url
  });
};

const switchTab = url => {
  wx.switchTab({
    url
  });
};

const redirectTo = url => {
  wx.redirectTo({
    url
  });
};

const navigateBack = (delta = 1) => {
  wx.navigateBack({
    delta
  });
};

const getEventParam = (event, param) => {
  return event.currentTarget.dataset[param] || event.detail[param];
};

const throttle = (fn, delay = 200) => {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
};

const debounce = (fn, delay = 300) => {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

module.exports = {
  formatTime,
  formatNumber,
  formatPrice,
  showToast,
  showLoading,
  hideLoading,
  showModal,
  navigateTo,
  switchTab,
  redirectTo,
  navigateBack,
  getEventParam,
  throttle,
  debounce
};
