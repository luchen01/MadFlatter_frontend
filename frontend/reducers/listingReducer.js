const listingReducer = (state = null, action) => {
    switch (action.type) {
        case "CHANGE_LISTING":
            console.log('in change listing reducer');
            console.log(action.listing);
            return action.listing;
        default:
            return state;
    }
};

export default listingReducer;
