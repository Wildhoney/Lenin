import d3 from 'd3';
import objectAssign from 'object-assign';
import messages from './../src/helpers/Messages';
import store from './../src/Store';
import {assert, isHTMLElement, isFunction} from './../src/helpers/Common';
import methods from './shapes/utilities/Methods';
import shapeMap from './shapes/utilities/Map';

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

        // Assert that we have a valid DOM element.
        assert(isHTMLElement(domElement), messages.ELEMENT_EXPECTED);

        // Initiate D3 using the given canvas element.
        this[ELEMENT] = d3.select(domElement);
        store.set(domElement, []);

    }

    /**
     * @method append
     * @param {String} name
     * @return {Object}
     */
    append(name) {

        // Ensure Lenin supports the passed in shape name.
        assert(!!~shapeMap.indexOf(name), messages.SHAPE_UNSUPPORTED);

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
