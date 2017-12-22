const matchesReducer = (state = [], action) => {
    switch (action.type) {
        case "SAVE_MATCHES":
            return action.matches;
        default:
            return state;
    }
};

export default matchesReducer;
