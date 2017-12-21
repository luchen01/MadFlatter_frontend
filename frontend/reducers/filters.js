const filtersReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_FILTERS":
            console.log('in changeFilters reducer');
            return action.filters;
        default:
            return state;
    }
};

export default filtersReducer;
