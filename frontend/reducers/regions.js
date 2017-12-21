const regionsReducer = (state = null, action) => {
    switch (action.type) {
        case "SAVE_REGIONS":
            console.log('in findApartments reducer');
            return action.regions;
        default:
            return state;
    }
};

export default regionsReducer;
