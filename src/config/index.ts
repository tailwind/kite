interface Config {
  usesNavigationRestore: boolean;
  whyDidYouRender: boolean;
}

export const config: Config = {
  usesNavigationRestore: __DEV__ && process.env.JEST_WORKER_ID === undefined,
  whyDidYouRender: __DEV__,
};
