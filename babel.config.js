module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@layouts': './src/layouts',
          '@pages': './src/pages',
          '@services': './src/services',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
