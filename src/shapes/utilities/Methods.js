import {LN_POS_ABSOLUTE, LN_ABL_ALL} from './../Constants';
import {coordinatesHandler} from './../utilities/Common';
import {isUndefined} from './../../helpers/Common';
import selectable from './../abilities/Selectable';
import resizable from './../abilities/Resizable';
import {LN_EVT_DESELECT_ALL} from './../Events';

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
export default function methods({ shape, groups, collection, emitter, canvas }) {

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

    /**
     * @property attributeParameters
     * @type {Object}
     */
    const attributeParameters = { shape, groups, collection, emitter, canvas };

    /**
     * @property attributes
     * @type {Object}
     */
    const attributes = {
        selectable: selectable(attributeParameters),
        resizable: resizable(attributeParameters)
    };

    // Configure any common events for all of the shapes.
    canvas.on('click', () => emitter.emit(LN_EVT_DESELECT_ALL));

    return {

        /**
         * @method selected
         * @return {Boolean}
         */
        selected: function selected() {
            return attributes.selectable.isSelected();
        },

        /**
         * @method select
         * @return {Object}
         */
        select: function select() {
            attributes.selectable.setState(true);
            return this;
        },

        /**
         * @method deselect
         * @return {Object}
         */
        deselect: function deselect() {
            attributes.selectable.setState(false);
            return this;
        },

        /**
         * @method remove
         * @return {void}
         */
        remove: function remove() {
            groups.group.remove();
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

    };

}
