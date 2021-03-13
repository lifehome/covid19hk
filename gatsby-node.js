const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // failover path aliases
        "&components": path.resolve(__dirname, "src/components"),

        // default path aliases
        "@layout": path.resolve(__dirname, "src/components/layout"),
        "@compositions": path.resolve(__dirname, "src/components/compositions")
      }
    }
  })
}