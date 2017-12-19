const listingReducer = (state = null, action) => {
    switch (action.type) {
        case "CHANGE_LISTING":
            return action.listing;
        default:
            return state;
    }
};

export default listingReducer;
