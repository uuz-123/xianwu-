const app = getApp();
const util = require('../../utils/util.js');

Page({
  data: {
    isEdit: false,
    editId: null,
    form: {
      name: '',
      phone: '',
      province: '',
      city: '',
      district: '',
      detail: '',
      isDefault: false
    },
    regionText: ''
  },

  onLoad(options) {
    if (options.id) {
      const id = parseInt(options.id);
      const address = app.globalData.addressList.find(a => a.id === id);
      if (address) {
        this.setData({
          isEdit: true,
          editId: id,
          form: {
            name: address.name,
            phone: address.phone,
            province: address.province,
            city: address.city,
            district: address.district,
            detail: address.detail,
            isDefault: address.isDefault
          },
          regionText: address.province + address.city + address.district
        });
        wx.setNavigationBarTitle({
          title: '编辑地址'
        });
      }
    } else {
      wx.setNavigationBarTitle({
        title: '新增地址'
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

  onDefaultChange(e) {
    this.setData({
      'form.isDefault': e.detail.value
    });
  },

  onRegionChange(e) {
    const value = e.detail.value;
    this.setData({
      'form.province': value[0],
      'form.city': value[1],
      'form.district': value[2],
      regionText: value.join('')
    });
  },

  saveAddress() {
    const { form, isEdit, editId } = this.data;

    if (!form.name.trim()) {
      util.showToast('请输入收货人姓名');
      return;
    }

    if (!form.phone.trim()) {
      util.showToast('请输入手机号码');
      return;
    }

    if (!/^1\d{10}$/.test(form.phone)) {
      util.showToast('请输入正确的手机号');
      return;
    }

    if (!form.province) {
      form.province = '北京市';
      form.city = '北京市';
      form.district = '朝阳区';
    }

    if (!form.detail.trim()) {
      util.showToast('请输入详细地址');
      return;
    }

    if (isEdit) {
      app.updateAddress({
        id: editId,
        ...form
      });
      util.showToast('修改成功', 'success');
    } else {
      app.addAddress({ ...form });
      util.showToast('添加成功', 'success');
    }

    setTimeout(() => {
      util.navigateBack();
    }, 1500);
  }
});
