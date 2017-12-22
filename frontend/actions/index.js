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

export function saveRegions(regions) {
    console.log('in saveRegions');
    return({
        type: 'SAVE_REGIONS',
        regions,
    });
}

export function changeFilters(filters) {
    console.log('in changeFilters');
    return({
        type: 'CHANGE_FILTERS',
        filters
    });
}

export function userData(userid) {
    return({
        type: 'USER_DATA',
        userid
    });
}

export function saveMatches(matches) {
  return({
    type: 'SAVE_MATCHES',
    matches
  })
}
