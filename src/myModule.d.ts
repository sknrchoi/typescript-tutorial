// typescript에게 정의를 알려주는 것
interface Config {
    url: string;
}
declare module "myPackage" {
    function init(config:Config): boolean;
    function exit(code:number): number
}