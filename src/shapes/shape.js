import * as f from './../helpers/functions';

/**
 * @constant ELEMENT
 * @type {Symbol}
 */
const ELEMENT = Symbol('element');

/**
 * @property defaults
 * @type {Object}
 */
const defaults = {
    x: 0,
    y: 0,
    width: 100,
    height: 100
};


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
     * @param {Object} [attributes=defaults]
     * @return {Shape}
     */
    //constructor(attributes = defaults) {
    //    this.attributes = f.parseAttributes(Object.assign(defaults, attributes));
    //}
    //
    ///**
    // * @method setX
    // * @param {Number} value
    // * @return {void}
    // */
    //setX(value) {
    //    f.compose(f.setX(value))(this);
    //}
    //
    ///**
    // * @method setY
    // * @param {Number} value
    // * @return {void}
    // */
    //setY(value) {
    //    f.compose(f.setY(value))(this);
    //}
    //
    ///**
    // * @method getAttribute
    // * @return {*}
    // */
    //getAttribute(property) {
    //    const attributes = { ...this.attributes };
    //    delete attributes.y;
    //    delete attributes.x;
    //    return attributes[property];
    //}
    //
    ///**
    // * @method setAttribute
    // * @param {String} property
    // * @param {*} value
    // * @return {void}
    // */
    //setAttribute(property, value) {
    //    const attributes     = { ...this.attributes };
    //    attributes[property] = value;
    //    this.attributes      = f.parseAttributes(attributes);
    //}

}
