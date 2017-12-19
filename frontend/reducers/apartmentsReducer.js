const apartmentsReducer = (state = null, action) => {
    console.log('in findApartments reducer');
    switch (action.type) {
        case "FIND_APARTMENTS":
            return action.apartments;
        default:
            return state;
    }
};

export default apartmentsReducer;
