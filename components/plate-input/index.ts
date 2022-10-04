Component({
  properties: {
    plate: {
      type: Array,
    },
  },
  data: {},
  methods: {
    onFocusTap() {
      this.triggerEvent('focus');
    },
  },
});
