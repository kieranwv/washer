import { wxLogin } from "./utils/user";

App<IAppOption>({
  globalData: {},
  onLaunch() {
    wxLogin();
  },
});
