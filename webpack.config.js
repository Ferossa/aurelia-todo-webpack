var path = require("path");
var { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = {
    entry: {"main": "aurelia-bootstrapper"},
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: ["src", "node_modules"]
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"]},
            { test: /\.ts$/i, use: "ts-loader"},
            { test: /\.html$/i, use: "html-loader" }
        ]
    },
    plugins: [
        new AureliaPlugin()
    ]
};
