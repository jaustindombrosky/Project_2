"use strict";

module.exports= function(config) {
    config.set({
        basePath: "",
        frameworks: ["mocha", "browserify"],
        files: ["src/*.js","test/*.js"],
        exclude:[],
        preprocessors:{
            "test/*.js":["browserify"],
            "src/*.js":["browserify"]
        },
        reporters: ["progress", "mocha"],
        port:3036,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: false,
        concurrency: Infinity,
    });
};