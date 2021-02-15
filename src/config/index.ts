interface Config {
  usesNavigationRestore: boolean;
}

export const config: Config = {
  usesNavigationRestore: __DEV__ && process.env.JEST_WORKER_ID === undefined,
};
