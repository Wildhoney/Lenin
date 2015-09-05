import Abstract from './abstract';

/**
 * @property DEFAULTS
 * @type {Object}
 */
const DEFAULTS = { x: 0, y: 0, width: 100, height: 100 };

/**
 * @module Lenin
 * @submodule Shape
 * @extends {Abstract}
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default class Shape extends Abstract {

    /**
     * @constructor
     * @param {Object} [attributes={ ...DEFAULTS }]
     * @return {Shape}
     */
    constructor(attributes = { ...DEFAULTS }) {
        super();
    }

    /**
     * @method setDimensions
     * @param {Number} height
     * @param {Number} width
     * @return {void}
     */
    setDimensions({ height, width }) {

    }

    /**
     * @method setPositions
     * @param {Number} top
     * @param {Number} left
     * @return {void}
     */
    setPositions({ top, left }) {

    }

}
