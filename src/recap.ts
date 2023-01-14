type SingerA = {
    name:string
}
type SingerAA = SingerA & {
    lastName:string
}

/*불가능
type SingerAA = SingerA & {
    age:string
}*/

const singerA: SingerAA = {
    name: "lee",
    lastName: "gindong"
}
///
interface SingerB {
    name:string
}
interface SingerBB extends SingerB { 
    lastName:string
}

/* 가능
interface SingerBB extends SingerB { 
    age:string
}*/

const singerB: SingerBB = {
    name: "hong",
    lastName: "gildong"
}