import d3 from 'd3';
import objectAssign from 'object-assign';
import messages from './../src/helpers/messages';
import store from './../src/Store';
import {assert, isHTMLElement, isFunction} from './../src/Helpers/Common';
import methods from './shapes/Interface/Methods';

/**
 * @property ELEMENT
 * @type {Symbol}
 */
export const ELEMENT = Symbol('element');

/**
 * @module Lenin
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default class Lenin {

    /**
     * @method constructor
     * @param {HTMLElement} domElement
     * @return {Lenin}
     */
    constructor(domElement) {
        assert(isHTMLElement(domElement), messages.ELEMENT_EXPECTED);
        this[ELEMENT] = d3.select(domElement);
        store.set(domElement, []);
    }

    /**
     * @method append
     * @param {String} name
     * @return {Object}
     */
    append(name) {

        const domElement = this[ELEMENT];
        const group      = domElement.append('g');
        const shape      = group.append(name);

        // Push shape into the collection for the associated DOM element.
        const collection = store.get(domElement.node());
        collection.push({ shape, group });

        // Extend D3's methods with Lenin-specific methods.
        const extension  = methods({ group, shape, collection });
        const assign     = isFunction(Object.assign) ? Object.assign : objectAssign;

        // Yield the amalgamated methods.
        return assign(shape, extension);

    }

}


/**
 * @module Lenin
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
//export default class Lenin {
//
//    /**
//     * @constructor
//     * @param {HTMLElement} domElement
//     * @param {Object} [options={}]
//     * @return {Lenin}
//     */
//    constructor(domElement, options = {}) {
//        assert(isHTMLElement(domElement), messages.ELEMENT_EXPECTED);
//        this[ELEMENT] = d3.select(domElement);
//        this[OPTIONS] = options;
//        store.set(this, []);
//    }
//
//    /**
//     * @method create
//     * @param {Shape[]} shapes
//     * @return {Shape[]}
//     */
//    create(...shapes) {
//
//        const attach = canvas.attach(this.getElement());
//
//        return shapes.map(shape => {
//
//            assert(isShape(shape), messages.SHAPE_EXPECTED);
//
//            store.get(this).push(shape);
//
//            const { group, element } = attach(shape);
//            shape.setGroup(group);
//            shape.setElement(element);
//
//            return shape;
//
//        });
//
//    }
//
//    /**
//     * @method destroy
//     * @param {Shape[]} shapes
//     * @return {Shape[]}
//     */
//    destroy(...shapes) {
//
//        const detach = canvas.detach();
//
//        shapes.map(shape => {
//
//            assert(isShape(shape), messages.SHAPE_EXPECTED);
//
//            const index = store.get(this).indexOf(shape);
//            ~index && store.get(this).splice(index, 1);
//
//            detach(shape);
//            shape.removeGroup();
//            shape.removeElement();
//
//            return shape;
//
//        });
//
//    }
//
//    /**
//     * @method getElement
//     * @return {HTMLElement}
//     */
//    getElement() {
//        return this[ELEMENT];
//    }
//
//}
