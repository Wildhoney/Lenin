import {LN_POS_ABSOLUTE} from './../Constants';

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
export default function methods({ shape, group, collection }) {

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
         * @param {Array} list
         * @return {void}
         */
        abilities: function abilities(...list) {

        },

        /**
         * @method position
         * @param {Number} [x]
         * @param {Number} [y]
         * @param {String} [strategy=DEFAULT_POSITION_STRATEGY]
         * @return {Object|void}
         */
        position: function position({ x, y }, strategy = DEFAULT_POSITION_STRATEGY) {

        },

        /**
         * @method dimensions
         * @param {Number} [width]
         * @param {Number} [height]
         * @param {String} [strategy=DEFAULT_POSITION_STRATEGY]
         * @return {Object|void}
         */
        dimensions: function position({ width, height }, strategy = DEFAULT_POSITION_STRATEGY) {

        }

    }

}