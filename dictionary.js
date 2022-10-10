var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    Dict.prototype.def = function (term) {
        return this.words[term];
    };
    Dict.prototype["delete"] = function (term) {
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    };
    Dict.prototype.update = function (word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    };
    Dict.prototype.showAll = function () {
        for (var key in this.words) {
            console.log("".concat(key, " : ").concat(this.def(key)));
        }
    };
    Dict.prototype.count = function () {
        return Object.keys(this.words).length;
    };
    return Dict;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var dict = new Dict();
var kimchi = new Word("kimchi", "한국의 음식");
var cake = new Word("cake", "디저트");
var apple = new Word("apple", "과일");
var korea = new Word("korea", "대한민국");
var japan = new Word("japan", "일본");
dict.add(kimchi);
dict.add(cake);
dict.add(apple);
dict.add(korea);
dict.add(japan);
dict.def("kimchi");
dict.def("korea");
dict.count();
dict.showAll();
kimchi.def = "배추와 고춧가루로 만듬 한국의 음식";
dict.update(kimchi);
dict.def("kimchi");
dict["delete"]('cake');
dict.showAll();
