const initialState = {
    1: {
        personal: 3,
        others: 1
    },
    2: {
        personal: 3,
        others: 1
    },
    3: {
        personal: 3,
        others: 1
    },
    4: {
        personal: 3,
        others: 1
    },
    5: {
        personal: 3,
        others: 1
    },
    6: {
        personal: 3,
        others: 1
    },
    7: {
        personal: 3,
        others: 1
    },
    8: {
        personal: 3,
        others: 1
    },
    9: {
        personal: 3,
        others: 1
    },
    10: {
        personal: 3,
        others: 1
    },
    11: {
        personal: 3,
        others: 1
    },
    12: {
        personal: 3,
        others: 1
    },
    13: {
        personal: 3,
        others: 1
    },
    14: {
        personal: 3,
        others: 1
    },
    15: {
        personal: 3,
        others: 1
    },
    16: {
        personal: 3,
        others: 1
    },
    17: {
        personal: 3,
        others: 1
    },
    18: {
        personal: 3,
        others: 1
    },
    19: {
        personal: 3,
        others: 1
    },
    20: {
        personal: 3,
        others: 1
    }
};


// const iterateQuestionnaire = (answers) => {
//     const responses = {};
//     Object.keys(answers).map((question) => {
//         responses[question] = {};
//         responses[question].personal = answers[question].personal;
//         responses[question].others = answers[question].others;
//     });
//     console.log(responses);
//     return responses;
// };


const questionnaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case "QUESTIONNAIRE":
            return action.answers;
        default:
            return state;
    }
};

export default questionnaireReducer;
