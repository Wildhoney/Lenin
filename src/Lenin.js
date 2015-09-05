import d3 from 'd3';
import {assert, isShape, isHTMLElement} from './helpers/utilities';
import messages from './helpers/messages';
import {ELEMENT, GROUP, OPTIONS} from './helpers/symbols';

/**
 * @module Lenin
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default class Lenin {

    /**
     * @constructor
     * @param {HTMLElement} domElement
     * @param {Object} [options={}]
     * @return {Lenin}
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

        const attach = canvas.attach(this.getElement());

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

        const detach = canvas.detach();

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
     * @method getElement
     * @return {HTMLElement}
     */
    getElement() {
        return this[ELEMENT];
    }

}
