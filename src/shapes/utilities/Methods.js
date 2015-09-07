import objectAssign from 'object-assign';
import {LN_POS_ABSOLUTE, LN_POS_RELATIVE, LN_ABL_ALL} from './../Constants';
import {coordinatesHandler} from './../utilities/Common';
import {isUndefined} from './../../helpers/Common';

/**
 * @constant DEFAULT_POSITION_STRATEGY
 * @type {String}
 */
const DEFAULT_POSITION_STRATEGY = LN_POS_ABSOLUTE;

/**
 * @constant DEFAULT_ABILITY_PERMISSION
 * @type {Number}
 */
const DEFAULT_ABILITY_PERMISSION = LN_ABL_ALL;

/**
 * @module Lenin
 * @submodule Methods
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default function methods({ shape, group, collection, emitter }) {

    /**
     * @property options
     * @type {Object}
     */
    const options = { abilities: DEFAULT_ABILITY_PERMISSION };

    /**
     * @property handleCoordinates
     * @type {Function}
     */
    const handleCoordinates = coordinatesHandler(shape);

    return {

        /**
         * @method remove
         * @return {void}
         */
        remove: function() {
            group.remove();
        },

        /**
         * @method abilities
         * @param {Number} value
         * @return {Object|Number}
         */
        abilities: function abilities(value) {

            if (isUndefined(value)) {
                return options.abilities;
            }

            options.abilities = value;
            return this;

        },

        /**
         * @method positions
         * @param {Number} [x]
         * @param {Number} [y]
         * @param {String} [strategy=DEFAULT_POSITION_STRATEGY]
         * @return {Object}
         */
        positions: function positions({ x, y } = {}, strategy = DEFAULT_POSITION_STRATEGY) {
            return handleCoordinates('x', 'y', x, y, strategy);
        },

        /**
         * @method dimensions
         * @param {Number} [width]
         * @param {Number} [height]
         * @param {String} [strategy=DEFAULT_POSITION_STRATEGY]
         * @return {Object}
         */
        dimensions: function dimensions({ width, height } = {}, strategy = DEFAULT_POSITION_STRATEGY) {
            return handleCoordinates('width', 'height', width, height, strategy);
        }

    }

}
