import {init, exit} from "./myPackage";

init({
    debug:true,
    url:"test.com"
})

exit(1)

localStorage.clear()