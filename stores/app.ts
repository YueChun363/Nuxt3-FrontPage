export const useAppStore = defineStore("appStore", () => {
  const app = reactive({
    appName: "",
  });
  async function getAppConfig() {
    // const { data: { appName } = await fetch('')
    // app.appName = appName;
  }
  return { app };
});
