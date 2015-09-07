import d3 from 'd3';
//import EventEmitter from 'eventemitter2';
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
 * @property EMITTER
 * @type {Symbol}
 */
export const EMITTER = Symbol('emitter');

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

        const EventEmitter = () => {};

        // Initiate D3 using the given canvas element.
        this[ELEMENT] = d3.select(domElement);
        this[EMITTER] = new EventEmitter();

        store.set(domElement, []);

    }

    /**
     * @method register
     * @param {String} name
     * @param {Object} [methods={}]
     * @return {void}
     */
    register(name, methods = {}) {
        shapeMap.set(name, methods);
    }

    /**
     * @method append
     * @param {String} name
     * @return {Object}
     */
    append(name) {

        // Ensure Lenin supports the passed in shape name.
        assert(shapeMap.has(name), messages.SHAPE_UNSUPPORTED);

        const domElement = this[ELEMENT];
        const emitter    = this[EMITTER];
        const group      = domElement.append('g');
        const shape      = group.append(name).datum({});

        // Push shape into the collection for the associated DOM element.
        const collection = store.get(domElement.node());
        collection.push({ shape, group });

        // Extend D3's methods with Lenin-specific methods.
        const extension = methods({ group, shape, collection, emitter });

        // Yield the amalgamated methods.
        return objectAssign(shape, extension);

    }

}
