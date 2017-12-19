// Action Creators

// import * as types from './types';

export function changeListing(listing) {
    console.log("Called selectListing()");
    return({
        type: 'SELECT_LISTING',
        listing,
    });
}

export function findApartments(apartments) {
    console.log("Called selectListing()");
    return({
        type: 'FIND_APARTMENTS',
        apartments,
    });
}
