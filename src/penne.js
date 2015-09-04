import d3 from 'd3';
import {store} from './store';
import {assert, isShape, isHTMLElement} from './helpers/utilities';
import * as messages from './helpers/messages';
import * as canvas from './helpers/canvas';
import {ELEMENT, GROUP, OPTIONS} from './helpers/symbols';

/**
 * @module Penne
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Penne
 */
export default class Penne {

    /**
     * @constructor
     * @param {HTMLElement} domElement
     * @param {Object} [options={}]
     * @return {Penne}
     */
    constructor(domElement, options = {}) {
        assert(isHTMLElement(domElement), messages.ELEMENT_EXPECTED);
        this[ELEMENT] = d3.select(domElement);
        this[OPTIONS] = options;
        store.set(this, []);
    }

    /**
     * @method create
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    create(...shapes) {

        const insert = canvas.insert(this[ELEMENT]);

        return shapes.map(shape => {

            assert(isShape(shape), messages.SHAPE_EXPECTED);

            const { group, element } = insert(shape);
            shape[GROUP]   = group;
            shape[ELEMENT] = element;

            store.get(this).push(shape);
            return shape;

        });

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
