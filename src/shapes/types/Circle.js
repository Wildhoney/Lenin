import {coordinatesHandler} from './../utilities/Common';
import {DEFAULT_POSITION_STRATEGY} from './../utilities/Methods';

/**
 * @module Lenin
 * @submodule Circle
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default function circle({ shape }) {

    /**
     * @property handleCoordinates
     * @type {Function}
     */
    const handleCoordinates = coordinatesHandler(shape);

    return {

        /**
         * @method positions
         * @param {Number} [x]
         * @param {Number} [y]
         * @param {String} [strategy=DEFAULT_POSITION_STRATEGY]
         * @return {Object}
         */
        positions: function positions({ x, y } = {}, strategy = DEFAULT_POSITION_STRATEGY) {
            return handleCoordinates('cx', 'cy', x, y, strategy);
        },

        /**
         * @method radius
         * @param {Number} r
         * @return {Object}
         */
        radius: function radius(r) {
            return shape.attr('r', r);
        }

    };

}
