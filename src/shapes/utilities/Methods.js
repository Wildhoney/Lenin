import objectAssign from 'object-assign';
import {LN_POS_ABSOLUTE, LN_POS_RELATIVE} from './../Constants';
import {isUndefined} from './../../helpers/Common';

/**
 * @constant DEFAULT_POSITION_STRATEGY
 * @type {String}
 */
const DEFAULT_POSITION_STRATEGY = LN_POS_ABSOLUTE;

/**
 * @method isRelative
 * @param {String} strategy
 * @return {Boolean}
 */
const isRelative = strategy => strategy === LN_POS_RELATIVE;

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
         * @return {Object|void}
         */
        position: function position({ x, y } = {}, strategy = DEFAULT_POSITION_STRATEGY) {

            const aX = Number(shape.attr('x'));
            const aY = Number(shape.attr('y'));

            const nX = x || aX;
            const nY = y || aY;

            if (isUndefined(x) && isUndefined(y)) {
                return { x: nX, y: nY };
            }

            const fX = isRelative(strategy) ? aX + nX : nX;
            const fY = isRelative(strategy) ? aY + nY : nY;
            return shape.attr('x', fX).attr('y', fY);

        },

        /**
         * @method dimensions
         * @param {Number} [width]
         * @param {Number} [height]
         * @param {String} [strategy=DEFAULT_POSITION_STRATEGY]
         * @return {Object|void}
         */
        dimensions: function position({ width, height } = {}, strategy = DEFAULT_POSITION_STRATEGY) {

            const aW = Number(shape.attr('width'));
            const aH = Number(shape.attr('height'));

            const nX = width || aW;
            const nY = height || aH;

            if (isUndefined(width) && isUndefined(height)) {
                return { width: nX, height: nY };
            }

            const fX = isRelative(strategy) ? aW + nX : nX;
            const fY = isRelative(strategy) ? aH + nY : nY;
            return shape.attr('width', fX).attr('height', fY);

        }

    }

}