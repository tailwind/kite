const prodPlugins = (process.env.NODE_ENV === 'production' && ['transform-remove-console']) || [];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ...prodPlugins,
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
        root: ['.'],
      },
    ],
  ],
};
