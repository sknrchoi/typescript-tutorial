type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    def(term: string) {
        return this.words[term]
    }

    delete(term: string) {
        if (this.words[term] !== undefined) {
            delete this.words[term]
        }
    }

    update(word: Word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }

    showAll() {
        for (let key in this.words) {
            console.log(`${key} : ${this.def(key)}`)
        }
    }

    count() {
        return Object.keys(this.words).length
    }

}

class Word {
    constructor(
        public term: string,
        public def: string
    ) { }
}

const dict = new Dict()

const kimchi = new Word("kimchi", "한국의 음식")
const cake = new Word("cake", "디저트")
const apple = new Word("apple", "과일")
const korea = new Word("korea", "대한민국")
const japan = new Word("japan", "일본")

dict.add(kimchi)
dict.add(cake)
dict.add(apple)
dict.add(korea)
dict.add(japan)


dict.def("kimchi")
dict.def("korea")
dict.count()
dict.showAll()
kimchi.def = "배추와 고춧가루로 만듬 한국의 음식"
dict.update(kimchi)
dict.def("kimchi")
dict.delete('cake')
dict.showAll()