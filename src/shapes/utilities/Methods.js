import objectAssign from 'object-assign';
import {LN_POS_ABSOLUTE, LN_POS_RELATIVE} from './../Constants';
import {coordinatesHandler} from './../utilities/Common';

/**
 * @constant DEFAULT_POSITION_STRATEGY
 * @type {String}
 */
const DEFAULT_POSITION_STRATEGY = LN_POS_ABSOLUTE;

/**
 * @module Lenin
 * @submodule Methods
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default function methods({ shape, group, collection, emitter }) {

    /**
     * @constant registeredAbilities
     * @type {Array}
     */
    const registeredAbilities = [];

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
         * @param {Function[]} [list]
         * @return {Object|Array}
         */
        abilities: function abilities(...list) {

            if (!list.length) {
                return registeredAbilities;
            }

            list.forEach(ability => {
                const item = ability({ shape, emitter });
                registeredAbilities.push(item);
            });

            return this;

        },

        /**
         * @method position
         * @param {Number} [x]
         * @param {Number} [y]
         * @param {String} [strategy=DEFAULT_POSITION_STRATEGY]
         * @return {Object}
         */
        position: function position({ x, y } = {}, strategy = DEFAULT_POSITION_STRATEGY) {
            return handleCoordinates('x', 'y', x, y, strategy);
        },

        /**
         * @method dimensions
         * @param {Number} [width]
         * @param {Number} [height]
         * @param {String} [strategy=DEFAULT_POSITION_STRATEGY]
         * @return {Object}
         */
        dimensions: function position({ width, height } = {}, strategy = DEFAULT_POSITION_STRATEGY) {
            return handleCoordinates('width', 'height', width, height, strategy);
        }

    }

}