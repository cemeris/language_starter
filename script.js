timeout = null;
const app = new Vue({
    el: "#app",
    data: {
        english_word: "",
        translation: '',
        show_word: '',
        current: {},
        history: {},
        last_number: 0,
        all_words: all_words,
        all_words_lenght: all_words.length
    },
    methods: {
        prevent: function (event) {
            event.preventDefault();
        },
        updateHistory: function () {
            this.$set(this.history[this.last_number], 'translation', this.translation);
            app.generateWord();
            this.translation = '';
            cleartimeout(timeout);
            timeout = null;
        },
        generateWord: function () {
            const obj = this;
            this.current = Object.create(this.all_words[getRandomInt(this.all_words_lenght)]);
            this.show_word = '';
            timeout = setTimeout(function () {
                obj.show_word = obj.current.german;
            }, 3100);
            this.$set(this.history, ++this.last_number, this.current);
        },
        isAnswerRight: function (entry) {
            return (entry.translation === entry.german) ? 'success' : '';
        },
        keyPressed: function(event) {
            if(event.key === " ") {
                if (
                    !this.current.german.startsWith(this.translation) ||
                    this.current.german === this.translation
                ) {
                    event.preventDefault();
                    this.updateHistory();
                }
            }
        }
    }
});

app.generateWord();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}