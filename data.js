const all_words = JSON.parse(
    `[
        {
          "nr": 1,
          "german": "wie",
          "english": "as"
        },
        {
          "nr": 2,
          "german": "ich",
          "english": "I"
        },
        {
          "nr": 3,
          "german": "seine",
          "english": "his"
        },
        {
          "nr": 4,
          "german": "dass",
          "english": "that"
        },
        {
          "nr": 5,
          "german": "er",
          "english": "he"
        },
        {
          "nr": 6,
          "german": "war",
          "english": "was"
        },
        {
          "nr": 7,
          "german": "für",
          "english": "for"
        },
        {
          "nr": 8,
          "german": "auf",
          "english": "on"
        },
        {
          "nr": 9,
          "german": "sind",
          "english": "are"
        },
        {
          "nr": 10,
          "german": "mit",
          "english": "with"
        },
        {
          "nr": 11,
          "german": "sie",
          "english": "they"
        },
        {
          "nr": 12,
          "german": "sein",
          "english": "be"
        },
        {
          "nr": 13,
          "german": "bei",
          "english": "at"
        },
        {
          "nr": 14,
          "german": "ein",
          "english": "one"
        },
        {
          "nr": 15,
          "german": "haben",
          "english": "have"
        },
        {
          "nr": 16,
          "german": "dies",
          "english": "this"
        },
        {
          "nr": 17,
          "german": "aus",
          "english": "from"
        },
        {
          "nr": 18,
          "german": "durch",
          "english": "by"
        },
        {
          "nr": 19,
          "german": "heiß",
          "english": "hot"
        },
        {
          "nr": 20,
          "german": "Wort",
          "english": "word"
        },
        {
          "nr": 21,
          "german": "aber",
          "english": "but"
        },
        {
          "nr": 22,
          "german": "was",
          "english": "what"
        },
        {
          "nr": 23,
          "german": "einige",
          "english": "some"
        },
        {
          "nr": 24,
          "german": "ist",
          "english": "is"
        },
        {
          "nr": 25,
          "german": "es",
          "english": "it"
        },
        {
          "nr": 26,
          "german": "Sie",
          "english": "you"
        },
        {
          "nr": 27,
          "german": "oder",
          "english": "or"
        },
        {
          "nr": 28,
          "german": "hatte",
          "english": "had"
        },
        {
          "nr": 29,
          "german": "die",
          "english": "the"
        },
        {
          "nr": 30,
          "german": "von",
          "english": "of"
        },
        {
          "nr": 31,
          "german": "zu",
          "english": "to"
        },
        {
          "nr": 32,
          "german": "und",
          "english": "and"
        },
        {
          "nr": 33,
          "german": "ein",
          "english": "a"
        },
        {
          "nr": 34,
          "german": "bei",
          "english": "in"
        },
        {
          "nr": 35,
          "german": "wir",
          "english": "we"
        },
        {
          "nr": 36,
          "german": "können",
          "english": "can"
        },
        {
          "nr": 37,
          "german": "aus",
          "english": "out"
        },
        {
          "nr": 38,
          "german": "andere",
          "english": "other"
        },
        {
          "nr": 39,
          "german": "waren",
          "english": "were"
        },
        {
          "nr": 40,
          "german": "die",
          "english": "which"
        },
        {
          "nr": 41,
          "german": "tun",
          "english": "do"
        },
        {
          "nr": 42,
          "german": "ihre",
          "english": "their"
        },
        {
          "nr": 43,
          "german": "Zeit",
          "english": "time"
        },
        {
          "nr": 44,
          "german": "wenn",
          "english": "if"
        },
        {
          "nr": 45,
          "german": "werden",
          "english": "will"
        },
        {
          "nr": 46,
          "german": "wie",
          "english": "how"
        },
        {
          "nr": 47,
          "german": "sagte",
          "english": "said"
        },
        {
          "nr": 48,
          "german": "ein",
          "english": "an"
        },
        {
          "nr": 49,
          "german": "jeder",
          "english": "each"
        },
        {
          "nr": 50,
          "german": "sagen",
          "english": "tell"
        },
        {
          "nr": 51,
          "german": "tut",
          "english": "does"
        },
        {
          "nr": 52,
          "german": "Satz",
          "english": "set"
        },
        {
          "nr": 53,
          "german": "drei",
          "english": "three"
        },
        {
          "nr": 54,
          "german": "wollen",
          "english": "want"
        },
        {
          "nr": 55,
          "german": "Luft",
          "english": "air"
        },
        {
          "nr": 56,
          "german": "gut",
          "english": "well"
        },
        {
          "nr": 57,
          "german": "auch",
          "english": "also"
        },
        {
          "nr": 58,
          "german": "spielen",
          "english": "play"
        },
        {
          "nr": 59,
          "german": "klein",
          "english": "small"
        },
        {
          "nr": 60,
          "german": "Ende",
          "english": "end"
        },
        {
          "nr": 61,
          "german": "setzen",
          "english": "put"
        },
        {
          "nr": 62,
          "german": "Zuhause",
          "english": "home"
        },
        {
          "nr": 63,
          "german": "lesen",
          "english": "read"
        },
        {
          "nr": 64,
          "german": "seits",
          "english": "hand"
        },
        {
          "nr": 65,
          "german": "Hafen",
          "english": "port"
        },
        {
          "nr": 66,
          "german": "groß",
          "english": "large"
        },
        {
          "nr": 67,
          "german": "buchstabieren",
          "english": "spell"
        },
        {
          "nr": 68,
          "german": "hinzufügen",
          "english": "add"
        },
        {
          "nr": 69,
          "german": "auch",
          "english": "even"
        },
        {
          "nr": 70,
          "german": "Lande",
          "english": "land"
        },
        {
          "nr": 71,
          "german": "hier",
          "english": "here"
        },
        {
          "nr": 72,
          "german": "muss",
          "english": "must"
        },
        {
          "nr": 73,
          "german": "groß",
          "english": "big"
        },
        {
          "nr": 74,
          "german": "hoch",
          "english": "high"
        },
        {
          "nr": 75,
          "german": "so",
          "english": "such"
        },
        {
          "nr": 76,
          "german": "folgen",
          "english": "follow"
        },
        {
          "nr": 77,
          "german": "Akt",
          "english": "act"
        },
        {
          "nr": 78,
          "german": "warum",
          "english": "why"
        },
        {
          "nr": 79,
          "german": "fragen",
          "english": "ask"
        },
        {
          "nr": 80,
          "german": "Männer",
          "english": "men"
        },
        {
          "nr": 81,
          "german": "Veränderung",
          "english": "change"
        },
        {
          "nr": 82,
          "german": "ging",
          "english": "went"
        },
        {
          "nr": 83,
          "german": "Licht",
          "english": "light"
        },
        {
          "nr": 84,
          "german": "Art",
          "english": "kind"
        },
        {
          "nr": 85,
          "german": "aus",
          "english": "off"
        },
        {
          "nr": 86,
          "german": "müssen",
          "english": "need"
        },
        {
          "nr": 87,
          "german": "Haus",
          "english": "house"
        },
        {
          "nr": 88,
          "german": "Bild",
          "english": "picture"
        },
        {
          "nr": 89,
          "german": "versuchen",
          "english": "try"
        },
        {
          "nr": 90,
          "german": "uns",
          "english": "us"
        },
        {
          "nr": 91,
          "german": "wieder",
          "english": "again"
        },
        {
          "nr": 92,
          "german": "Tier",
          "english": "animal"
        },
        {
          "nr": 93,
          "german": "Punkt",
          "english": "point"
        },
        {
          "nr": 94,
          "german": "Mutter",
          "english": "mother"
        },
        {
          "nr": 95,
          "german": "Welt",
          "english": "world"
        },
        {
          "nr": 96,
          "german": "in der Nähe von",
          "english": "near"
        },
        {
          "nr": 97,
          "german": "bauen",
          "english": "build"
        },
        {
          "nr": 98,
          "german": "selbst",
          "english": "self"
        },
        {
          "nr": 99,
          "german": "Erde",
          "english": "earth"
        },
        {
          "nr": 100,
          "german": "Vater",
          "english": "father"
        }
      ]`
);