const app = getApp();
const util = require('../../utils/util.js');

Page({
  data: {
    form: {
      nickName: '',
      avatarUrl: '',
      gender: 0,
      phone: '',
      birthday: '',
      signature: ''
    },
    genderText: '保密'
  },

  onLoad() {
    this.loadUserInfo();
  },

  loadUserInfo() {
    const userInfo = app.globalData.userInfo || wx.getStorageSync('userInfo');
    if (userInfo) {
      const genderMap = { 0: '保密', 1: '男', 2: '女' };
      this.setData({
        form: {
          nickName: userInfo.nickName || '',
          avatarUrl: userInfo.avatarUrl || '',
          gender: userInfo.gender || 0,
          phone: userInfo.phone || '',
          birthday: userInfo.birthday || '',
          signature: userInfo.signature || ''
        },
        genderText: genderMap[userInfo.gender || 0]
      });
    }
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field;
    const value = e.detail.value;
    this.setData({
      [`form.${field}`]: value
    });
  },

  changeAvatar() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFile = res.tempFiles[0];
        this.setData({
          'form.avatarUrl': tempFile.tempFilePath
        });
      },
      fail: () => {
        util.showToast('选择图片失败');
      }
    });
  },

  chooseGender() {
    wx.showActionSheet({
      itemList: ['保密', '男', '女'],
      success: (res) => {
        const genderMap = ['保密', '男', '女'];
        this.setData({
          'form.gender': res.tapIndex,
          genderText: genderMap[res.tapIndex]
        });
      }
    });
  },

  onBirthdayChange(e) {
    this.setData({
      'form.birthday': e.detail.value
    });
  },

  save() {
    const { form } = this.data;

    if (!form.nickName.trim()) {
      util.showToast('请输入昵称');
      return;
    }

    const userInfo = {
      nickName: form.nickName,
      avatarUrl: form.avatarUrl,
      gender: form.gender,
      phone: form.phone,
      birthday: form.birthday,
      signature: form.signature,
      language: 'zh_CN',
      city: '',
      province: '',
      country: '中国'
    };

    wx.setStorageSync('userInfo', userInfo);
    app.globalData.userInfo = userInfo;

    if (form.phone) {
      const registeredUsers = wx.getStorageSync('registeredUsers') || [];
      const userIndex = registeredUsers.findIndex(u => u.phone === form.phone);
      if (userIndex > -1) {
        registeredUsers[userIndex].nickName = form.nickName;
        registeredUsers[userIndex].avatarUrl = form.avatarUrl;
        registeredUsers[userIndex].gender = form.gender;
        registeredUsers[userIndex].birthday = form.birthday;
        registeredUsers[userIndex].signature = form.signature;
        wx.setStorageSync('registeredUsers', registeredUsers);
      }
    }

    util.showToast('保存成功', 'success');
    setTimeout(() => {
      util.navigateBack();
    }, 1500);
  }
});
