import {
    SOUND_ON,
    SOUND_OFF,
    CHANGE_TEMPO
} from '../constants/index';

const initialState = {
    playing: false,
    interval: null,
    tempo: 40,
    color: "rgb(121,85,72)"
}

export default function sound(state = initialState, action) {
    switch (action.type) {
        case SOUND_ON:
            function newOscillator() {
                const osc = action.ctx.createOscillator();
                const gain = action.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.value = 2000;
                gain.gain.value = 1;
                osc.connect(gain);
                gain.connect(action.ctx.destination);
                osc.start();
                osc.stop(action.ctx.currentTime + 0.15);
            };

            function convertTempo(num) {
                return 60000 / num;
            }

            newOscillator();

            return {
                ...state,
                playing: true,
                interval: setInterval(newOscillator, convertTempo(state.tempo))
            };
        case SOUND_OFF:
            clearInterval(state.interval);
            return {
                ...state,
                playing: false,
                interval: null
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
