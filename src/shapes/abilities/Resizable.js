import {LN_EVT_RESIZABLE_CREATE, LN_EVT_RESIZABLE_DESTROY} from './../Events';

/**
 * @constant handleRadius
 * @type {Number}
 */
const handleRadius = 18;

/**
 * @constant edges
 * @type {Map}
 */
const edges = new Map();

/**
 * @module Lenin
 * @submodule Resizable
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default ({ shape, groups, collection, emitter }) => {

    return new class Resizable {

        /**
         * @constructor
         * @return {Resizable}
         */
        constructor() {

            // Configure the events for resizable to create and destroy the handles.
            emitter.on(LN_EVT_RESIZABLE_CREATE, () => this.createHandles());
            emitter.on(LN_EVT_RESIZABLE_DESTROY, () => edges.forEach(edge => edge.remove()));

        }

        /**
         * @method createHandles
         * @return {void}
         */
        createHandles() {

            const boundingBox = shape.node().getBBox();
            const x           = boundingBox.x;
            const y           = boundingBox.y;
            const width       = boundingBox.width;
            const height      = boundingBox.height;

            const edgeMap = {
                topLeft:      { x,                  y },
                topMiddle:    { x: x + (width / 2), y },
                topRight:     { x: x + width,       y },
                leftMiddle:   { x: x,               y: y + (height / 2) },
                bottomLeft:   { x: x,               y: y + height },
                bottomMiddle: { x: x + (width / 2), y: y + height },
                bottomRight:  { x: x + width,       y: y + height },
                rightMiddle:  { x: x + width,       y: y + (height / 2) }
            };

            Object.keys(edgeMap).forEach(key => {

                const edge   = edgeMap[key];
                const handle = groups.meta.append('image')
                                          .attr('xlink:href', 'images/handle-main.png')
                                          .attr('x', edge.x - (handleRadius / 2))
                                          .attr('y', edge.y - (handleRadius / 2))
                                          .attr('stroke', 'red')
                                          .attr('stroke-width', 3)
                                          .attr('width', handleRadius)
                                          .attr('height', handleRadius)
                                          .on('click', () => d3.event.stopPropagation());

                edges.set(key, handle);

            });

        }

    };

};
