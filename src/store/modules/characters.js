export default {
    state: {
        characterUrls: [],
        characters: []
    },
    getters: {
        getCharacterUrls: (state) => state.characterUrls,
        getCharacters: (state) => state.characters
    },
    mutations: {
        SET_CHARACTER_URLS: (state, value) => {
            console.log(value)
            state.characterUrls = value;
        },
        ADD_CHARACTER: (state, value) => {
            state.characters.push(value)
        },
        RESET_CHARACTERS: (state, value) => {
            state.characters = [];
            state.characterUrls = [];
        }
    }
}
