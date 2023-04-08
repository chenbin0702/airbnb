const path=require("path")
const CracoLessPlugin = require('craco-less');
const resolve=pathname=>path.resolve(__dirname,pathname)
module.exports={
  webpack:{
    alias:{
      "@":resolve("src"),
      "components":resolve("src/utils")
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    },
  ],
}