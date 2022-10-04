import type { IObject } from 'typings/interface';

Component({
  properties: {},
  data: {},
  methods: {
    submit(e: IObject): void {
      this.triggerEvent('submit', e.detail);
    },
  },
});
