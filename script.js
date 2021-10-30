const app = new Vue({
    el: "#app",
    data: {
        english_word: "apple",
        translation: '',
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
        },
        generateWord: function () {
            this.current =  Object.create(this.all_words[getRandomInt(this.all_words_lenght)]);
            this.$set(this.history, ++this.last_number, this.current);
        },
        isAnswerRight: function (entry) {
            return (entry.translation === entry.german) ? 'success' : '';
        }
    }
});

app.generateWord();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Make rundom word generator and dataset where the matched word can be typed.
 * When matched word is entered and submited than lookup should be done
 * Matching will be displayed as in 10fastfingers
 */