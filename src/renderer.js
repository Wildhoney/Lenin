import d3 from 'd3';
import {store} from './store';
import {assert, isShape, isHTMLElement} from './helpers/utilities';
import * as messages from './helpers/messages';

/**
 * @constant ELEMENT
 * @type {Symbol}
 */
const ELEMENT = Symbol('element');

/**
 * @constant OPTIONS
 * @type {Symbol}
 */
const OPTIONS = Symbol('options');

/**
 * @module Penne
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Penne
 */
export default class Renderer {

    /**
     * @constructor
     * @param {HTMLElement} domElement
     * @param {Object} [options={}]
     * @return {Renderer}
     */
    constructor(domElement, options = {}) {
        assert(isHTMLElement(domElement), messages.ELEMENT_EXPECTED);
        this[ELEMENT] = d3.select(domElement);
        this[OPTIONS] = options;
        store.set(this, []);
    }

    /**
     * @method add
     * @param {Shape} shape
     * @return {Shape}
     */
    add(shape) {
        assert(isShape(shape), messages.SHAPE_EXPECTED);
        store.get(this).push(shape);
        return shape;
    }

    /**
     * @method remove
     * @param {Shape} shape
     * @return {Shape}
     */
    remove(shape) {
        assert(isShape(shape), messages.SHAPE_EXPECTED);
        const index  = store.get(this).indexOf(shape);
        ~index && store.get(this).splice(index, 1);
        return shape;
    }

    /**
     * @method clear
     * @return {void}
     */
    clear() {
        store.get(this).map(shape => this.remove(shape));
    }

}
