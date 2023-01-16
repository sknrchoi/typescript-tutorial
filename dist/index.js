"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myPackage_1 = require("./myPackage");
(0, myPackage_1.init)({
    debug: true,
    url: "test.com"
});
(0, myPackage_1.exit)(1);
localStorage.clear();
