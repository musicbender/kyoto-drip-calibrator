import Simulate from 'simulate';
import elementFromPoint from 'element-from-point';
import {
    SOUND_ON,
    SOUND_OFF,
    CHANGE_TEMPO
} from '../constants/index';


const initialState = {
    playing: false,
    tempo: 40,
    color: "rgb(121,85,72)"
}

export default function sound(state = initialState, action) {
    switch (action.type) {
        case SOUND_ON:
            return {
                ...state,
                playing: true
            };
        case SOUND_OFF:
            return {
                ...state,
                playing: false
            };
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
        default:
            return state;
    }
}
