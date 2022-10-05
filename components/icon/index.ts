Component({
  properties: {
    url: {
      type: String,
    },
    size: {
      type: String,
      value: '34rpx',
    },
  },
  data: {
    isLoad: false,
  },
  methods: {
    imageLoad() {
      this.setData({
        isLoad: true,
      });
    },
  },
});
