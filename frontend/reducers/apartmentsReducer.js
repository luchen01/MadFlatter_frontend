const apartmentsReducer = (state = null, action) => {
    switch (action.type) {
        case "FIND_APARTMENTS":
            console.log('in findApartments reducer');
            return action.apartments;
        default:
            return state;
    }
};

export default apartmentsReducer;
