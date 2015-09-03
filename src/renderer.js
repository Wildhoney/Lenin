import {store} from './store';
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
        store.set(this, { domElement, shapes: [] });
        this.options = options;
    }

    /**
     * @method add
     * @param {Shape} shape
     * @return {Shape}
     */
    add(shape) {
        assert(isShape(shape), messages.SHAPE_EXPECTED);
        store.get(this).shapes.push(shape);
        return shape;
    }

    /**
     * @method remove
     * @param {Shape} shape
     * @return {Shape}
     */
    remove(shape) {
        assert(isShape(shape), messages.SHAPE_EXPECTED);
        const shapes = store.get(this).shapes;
        const index  = shapes.indexOf(shape);
        ~index && shapes.splice(index, 1);
        return shape;
    }

    /**
     * @method clear
     * @return {void}
     */
    clear() {
        const shapes = store.get(this).shapes;
        shapes.map(shape => this.remove(shape));
    }

}
