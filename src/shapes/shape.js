import * as f from './../helpers/functions';

/**
 * @constant ELEMENT
 * @type {Symbol}
 */
const ELEMENT = Symbol('element');

/**
 * @property DEFAULTS
 * @type {Object}
 */
const DEFAULTS = { x: 0, y: 0, width: 100, height: 100 };

/**
 * @module Penne
 * @submodule Rectangle
 * @extends {Shape}
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Penne
 */
export default class Shape {

    /**
     * @constructor
     * @param {Object} [attributes={ ...DEFAULTS }]
     * @return {Shape}
     */
    constructor(attributes = { ...DEFAULTS }) {

    }

    /**
     * @method dimensions
     * @param {Number} height
     * @param {Number} width
     * @return {Number|null}
     */
    dimension({ height, width }) {

    }

    /**
     * @method position
     * @param {Number} top
     * @param {Number} left
     * @return {Number|null}
     */
    position({ top, left }) {

    }

}
