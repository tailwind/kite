interface Config {
  usesNavigationRestore: boolean;
}

export const config: Config = {
  usesNavigationRestore: __DEV__,
};
