import { latitude, longitude } from './Map';

export function shareActualPosition() {
    prompt("This is your position",
        `https://www.google.com/maps/@${latitude},${longitude}z`
    );
}
