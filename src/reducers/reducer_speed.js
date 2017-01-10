import { CHANGE_TEMPO, CHANGE_RIPPLE } from '../constants/index';


const initialState = {
    tempo: 40,
    color: "rgb(121,85,72)",
    ripple: 0
}

export default function speed(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEMPO:
            function getTheColor(value) {
                var colors = {
                    red: 0,
                    green: 0,
                    blue: 0
                };
                var percent = {
                    a: ((value - 10) * 100) / (50 - 10),
                    b: ((value - 51) * 100) / (120 - 51)
                };

                if (value < 51) {
                    colors.red = parseInt((percent.a * (120 - 70)) / 100) + 70;
                    colors.green = parseInt((percent.a * (86 - 50)) / 100) + 50;
                    colors.blue = parseInt((percent.a * (73 - 42)) / 100) + 42;
                } else {
                    colors.red = parseInt((percent.b * (166 - 121)) / 100) + 121;
                    colors.green = 86;
                    colors.blue = 73;
                }
                let theColor = "rgb(" + colors.red + "," + colors.green + "," + colors.blue + ")";
                return (theColor);
            }

            var newColor = getTheColor(action.value);

            return {
                ...state,
                tempo: action.value,
                color: newColor
            };

        case CHANGE_RIPPLE:
            var newNum;
            if (state.ripple === 1) {
                newNum = 2;
            } else if (state.ripple === 2 || state.ripple === 0) {
                newNum = 3;
            } else if (state.ripple === 3) {
                newNum = 1;
            }
            return { ...state, ripple: newNum };

        default:
            return state;
    }
}
