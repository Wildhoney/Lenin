import {shapes, byElement} from './shapes';
import {assert, isShape, isHTMLElement} from './helpers/utilities';
import * as messages from './helpers/messages';

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
        this.domElement = domElement;
        this.options    = options;
    }

    /**
     * @method add
     * @param {Shape} shape
     * @return {Shape}
     */
    add(shape) {
        assert(isShape(shape), messages.SHAPE_EXPECTED);
        shapes.push(shape);
        return shape;
    }

    /**
     * @method remove
     * @param {Shape} shape
     * @return {Shape}
     */
    remove(shape) {
        assert(isShape(shape), messages.SHAPE_EXPECTED);
        const index = shapes.indexOf(shape);
        ~index && shapes.splice(index, 1);
        return shape;
    }

    /**
     * @method clear
     * @return {void}
     */
    clear() {
        byElement(this.domElement).map(shape => this.remove(shape));
    }

}
