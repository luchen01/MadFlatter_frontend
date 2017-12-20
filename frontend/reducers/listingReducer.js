const listingReducer = (state = null, action) => {
    switch (action.type) {
        case "SELECT_LISTING":
            console.log('in select listing reducer');
            console.log(action.listing);
            return action.listing;
        default:
            return state;
    }
};

export default listingReducer;
