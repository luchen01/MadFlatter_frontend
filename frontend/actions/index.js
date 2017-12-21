// Action Creators

// import * as types from './types';

export function changeListing(listing) {
    console.log("Called selectListing()");
    console.log(listing);
    return({
        type: 'SELECT_LISTING',
        listing,
    });
}

export function findApartments(apartments) {
    console.log("Called findApartments()");
    return({
        type: 'FIND_APARTMENTS',
        apartments,
    });
}

export function questionnaireResults(answers) {
    console.log('in questionnaireResults:', answers);
    return({
        type: 'QUESTIONNAIRE',
        answers,
    });
}
