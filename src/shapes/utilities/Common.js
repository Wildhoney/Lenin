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
    return (aS, bS, aV, bV, strategy) => {

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
