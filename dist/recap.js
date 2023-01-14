"use strict";
/*불가능
type SingerAA = SingerA & {
    age:string
}*/
const singerA = {
    name: "lee",
    lastName: "gindong"
};
/* 가능
interface SingerBB extends SingerB {
    age:string
}*/
const singerB = {
    name: "hong",
    lastName: "gildong"
};
