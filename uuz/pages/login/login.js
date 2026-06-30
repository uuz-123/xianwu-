const app = getApp();
const util = require('../../utils/util.js');

Page({
  data: {
    currentTab: 'login',
    form: {
      phone: '',
      password: '',
      confirmPassword: '',
      nickName: ''
    }
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({ currentTab: tab });
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field;
    const value = e.detail.value;
    this.setData({
      [`form.${field}`]: value
    });
  },

  getRegisteredUsers() {
    return wx.getStorageSync('registeredUsers') || [];
  },

  saveRegisteredUser(user) {
    const users = this.getRegisteredUsers();
    const existIndex = users.findIndex(u => u.phone === user.phone);
    if (existIndex > -1) {
      users[existIndex] = user;
    } else {
      users.push(user);
    }
    wx.setStorageSync('registeredUsers', users);
  },

  login() {
    const { phone, password } = this.data.form;

    if (!phone.trim()) {
      util.showToast('请输入手机号');
      return;
    }

    if (!/^1\d{10}$/.test(phone)) {
      util.showToast('请输入正确的手机号');
      return;
    }

    if (!password.trim()) {
      util.showToast('请输入密码');
      return;
    }

    if (password.length < 6) {
      util.showToast('密码不能少于6位');
      return;
    }

    util.showLoading('登录中...');
    
    setTimeout(() => {
      util.hideLoading();
      
      const users = this.getRegisteredUsers();
      const matchedUser = users.find(u => u.phone === phone && u.password === password);
      
      if (!matchedUser) {
        if (users.length === 0) {
          util.showToast('请先注册账号');
        } else {
          const phoneExist = users.find(u => u.phone === phone);
          util.showToast(phoneExist ? '密码错误' : '该手机号未注册');
        }
        return;
      }

      const userInfo = {
        nickName: matchedUser.nickName,
        avatarUrl: matchedUser.avatarUrl || '',
        gender: matchedUser.gender || 0,
        phone: matchedUser.phone,
        language: 'zh_CN',
        city: matchedUser.city || '',
        province: matchedUser.province || '',
        country: '中国',
        birthday: matchedUser.birthday || '',
        signature: matchedUser.signature || ''
      };

      wx.setStorageSync('userInfo', userInfo);
      app.globalData.userInfo = userInfo;

      util.showToast('登录成功', 'success');
      setTimeout(() => {
        const pages = getCurrentPages();
        if (pages.length > 1) {
          util.navigateBack();
        } else {
          util.switchTab('/pages/mine/mine');
        }
      }, 1500);
    }, 1000);
  },

  register() {
    const { phone, password, confirmPassword, nickName } = this.data.form;

    if (!phone.trim()) {
      util.showToast('请输入手机号');
      return;
    }

    if (!/^1\d{10}$/.test(phone)) {
      util.showToast('请输入正确的手机号');
      return;
    }

    if (!nickName.trim()) {
      util.showToast('请输入昵称');
      return;
    }

    if (!password.trim()) {
      util.showToast('请设置密码');
      return;
    }

    if (password.length < 6) {
      util.showToast('密码不能少于6位');
      return;
    }

    if (password !== confirmPassword) {
      util.showToast('两次密码不一致');
      return;
    }

    const users = this.getRegisteredUsers();
    if (users.find(u => u.phone === phone)) {
      util.showToast('该手机号已注册');
      return;
    }

    util.showLoading('注册中...');
    
    setTimeout(() => {
      util.hideLoading();
      
      const registeredUser = {
        phone: phone,
        password: password,
        nickName: nickName,
        avatarUrl: '',
        gender: 0,
        city: '',
        province: '',
        birthday: '',
        signature: ''
      };

      this.saveRegisteredUser(registeredUser);

      const userInfo = {
        nickName: nickName,
        avatarUrl: '',
        gender: 0,
        phone: phone,
        language: 'zh_CN',
        city: '',
        province: '',
        country: '中国',
        birthday: '',
        signature: ''
      };

      wx.setStorageSync('userInfo', userInfo);
      app.globalData.userInfo = userInfo;

      util.showToast('注册成功', 'success');
      setTimeout(() => {
        const pages = getCurrentPages();
        if (pages.length > 1) {
          util.navigateBack();
        } else {
          util.switchTab('/pages/mine/mine');
        }
      }, 1500);
    }, 1000);
  },

  forgetPassword() {
    util.showToast('功能开发中');
  },

  wechatLogin() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        const userInfo = {
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
          gender: res.userInfo.gender,
          phone: '',
          language: res.userInfo.language,
          city: res.userInfo.city,
          province: res.userInfo.province,
          country: res.userInfo.country,
          birthday: '',
          signature: ''
        };

        wx.setStorageSync('userInfo', userInfo);
        app.globalData.userInfo = userInfo;

        util.showToast('登录成功', 'success');
        setTimeout(() => {
          const pages = getCurrentPages();
          if (pages.length > 1) {
            util.navigateBack();
          } else {
            util.switchTab('/pages/mine/mine');
          }
        }, 1500);
      },
      fail: () => {
        util.showToast('登录失败，请重试');
      }
    });
  }
});
