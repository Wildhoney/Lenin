import {LN_POS_RELATIVE} from './../Constants';
import {isUndefined} from './../../helpers/Common';

/**
 * @method coordinatesHandler
 * @param {Object} shape
 * @return {Function}
 */
export function coordinatesHandler(shape) {

    /**
     * @method isRelative
     * @param {String} strategy
     * @return {Boolean}
     */
    const isRelative = strategy => strategy === LN_POS_RELATIVE;

    /**
     * @param {String} aS
     * @param {String} bS
     * @param {Number} aV
     * @param {Number} bV
     * @param {String} strategy
     * @return {Object}
     */
    return (aS = 'a', bS = 'b', aV, bV, strategy) => {

        const aW = Number(shape.attr(aS));
        const aH = Number(shape.attr(bS));

        const nX = aV || aW;
        const nY = bV || aH;

        if (isUndefined(aV) && isUndefined(bV)) {
            return { [aS]: nX, [bS]: nY };
        }

        const fX = isRelative(strategy) ? aW + nX : nX;
        const fY = isRelative(strategy) ? aH + nY : nY;
        return shape.attr(aS, fX).attr(bS, fY);

    };

}

/**
 * @method unboxEvent
 * @param {Object} event
 * @return {Object}
 */
export function unboxEvent(event) {
    return event.originalEvent || event;
}

/**
 * @method squashEvent
 * @param {Object} event
 * @return {void}
 */
export function squashEvent(event) {
    unboxEvent(event).preventDefault();
    unboxEvent(event).stopPropagation();
}
