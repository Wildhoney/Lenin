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

        const attach = canvas.attach(this[ELEMENT]);

        return shapes.map(shape => {

            assert(isShape(shape), messages.SHAPE_EXPECTED);

            store.get(this).push(shape);

            const { group, element } = attach(shape);
            shape.setGroup(group);
            shape.setElement(element);

            return shape;

        });

    }

    /**
     * @method destroy
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    destroy(...shapes) {

        const detach = canvas.detach(this[ELEMENT]);

        shapes.map(shape => {

            assert(isShape(shape), messages.SHAPE_EXPECTED);

            const index = store.get(this).indexOf(shape);
            ~index && store.get(this).splice(index, 1);

            detach(shape);
            shape.removeGroup();
            shape.removeElement();

            return shape;

        });

    }

    /**
     * @method remove
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    //remove(...shapes) {
    //    assert(isShape(shape), messages.SHAPE_EXPECTED);
    //    const index  = store.get(this).indexOf(shape);
    //    ~index && store.get(this).splice(index, 1);
    //    return shape;
    //}

}
