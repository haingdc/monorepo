const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

// our packages that will now be included in the CRA build step
const appIncludes = [resolveApp('src'), resolveApp('../components/src')]

module.exports = function override(config, env) {
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => plugin.constructor.name !== 'ModuleScopePlugin',
  )
  // fs.writeFile('todo.txt', JSON.stringify(config.module.rules, null, 4), function() {})

  config.module.rules[0].include = appIncludes
  config.module.rules[1].oneOf[2].include = appIncludes
  config.module.rules[1].oneOf[2].options.plugins.push(
    require.resolve('babel-plugin-react-native-web'),
  )

  config.plugins.push(
    new webpack.DefinePlugin({ __DEV__: env !== 'production' }),
  )

  // config.module.rules.push({
  //   test: /\.(ttf)$/i,
  //   loader: "url-loader", // or directly file-loader
  //   include: path.resolve("node_modules/react-native-vector-icons"),
  // })

  // fs.writeFile('todo2.txt', path.resolve(__dirname, "../../node_modules/react-native-vector-icons"), function noop() {})

  config.module.rules.push({
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configration for compilation
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-flow'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread'
        ]
      }
    }
  })

  return config
}
