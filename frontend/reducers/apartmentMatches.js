const apartmentMatchesReducer = (state = [], action) => {
    switch (action.type) {
        case "APARTMENT_MATCHES":
            console.log('in apartmentMatches reducer');
            console.log(action.apartments);
            return action.apartments;
        default:
            return state;
    }
};

export default apartmentMatchesReducer;
