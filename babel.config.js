module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.ios.js',
          '.android.js',
          '.js',
          '.json',
          'gql',
        ],
      },
    ],
    ['import-graphql'],
  ],
};
