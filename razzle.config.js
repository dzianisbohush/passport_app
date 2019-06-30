// module.exports = {
//   modify: (config, { target, dev }, webpack) => {
//     return {
//       ...config,
//       module: {
//         ...config.module,
//         rules: [
//           ...config.module.rules,
//           {
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//             options: {
//               plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]],
//             },
//           }
//         ],
//       }
//     }
//   },
// };
