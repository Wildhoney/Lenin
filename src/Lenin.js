import d3 from 'd3';
import ee from 'eventemitter2';
import objectAssign from 'object-assign';
import messages from './../src/helpers/Messages';
import store from './../src/Store';
import {assert, isHTMLElement} from './../src/helpers/Common';
import methods from './shapes/utilities/Methods';
import shapeMap from './shapes/utilities/Map';

/**
 * @property registry
 * @type {Map}
 */
const registry = new Map();

/**
 * @constant DEFAULT_OPTIONS
 * @type {Number}
 */
const DEFAULT_OPTIONS = {
    height: 500,
    width: 500,
    gridSize: [10, 10],
    displayClassNames: true
};

/**
 * @module Lenin
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default class Lenin {

    /**
     * @method constructor
     * @param {HTMLElement} domElement
     * @param {Object} [options={}]
     * @return {Lenin}
     */
    constructor(domElement, options = {}) {

        // Assert that we have a valid DOM element.
        assert(isHTMLElement(domElement), messages.ELEMENT_EXPECTED);

        const eventEmitter  = new ee.EventEmitter2();
        const mergedOptions = objectAssign(options, DEFAULT_OPTIONS);
        const element       = d3.select(domElement).attr('height', mergedOptions.height).attr('width', mergedOptions.width);

        registry.set(this, {

            // Initiate D3 using the given canvas element.
            element,
            emitter: eventEmitter,
            options: mergedOptions,
            groups: {
                shapes: element.append('g').classed('shapes', options.displayClassNames),
                meta: element.append('g').classed('meta', options.displayClassNames)
            }

        });

        store.set(domElement, []);
    }

    /**
     * @method register
     * @param {String} name
     * @param {Object} [functions={}]
     * @return {void}
     */
    register(name, functions = {}) {
        shapeMap.set(name, functions);
    }

    /**
     * @method append
     * @param {String} name
     * @return {Object}
     */
    append(name) {

        // Ensure Lenin supports the passed in shape name.
        assert(shapeMap.has(name), messages.SHAPE_UNSUPPORTED);

        const options    = registry.get(this).options;
        const domElement = registry.get(this).element;
        const etcGroups  = registry.get(this).groups;
        const groups     = { group: etcGroups.shapes.append('g').classed(name, options.displayClassNames), ...etcGroups };
        const emitter    = registry.get(this).emitter;
        const shape      = groups.group.append(name).datum({});

        // Push shape into the collection for the associated DOM element.
        const collection = store.get(domElement.node());
        collection.push({ shape, groups });

        // Extend D3's methods with Lenin-specific methods.
        const params      = { groups, shape, collection, emitter, canvas: domElement };
        const extension   = methods(params);
        const specialised = shapeMap.get(name)(params);

        // Yield the amalgamated methods.
        return objectAssign(shape, extension, specialised);

    }

}
