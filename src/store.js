/**
 * @constant store
 * @type {WeakMap}
 */
export const store = new WeakMap();

/**
 * @method domElement
 * @param {Renderer} renderer
 * @return {HTMLElement}
 */
export function getDOMElement(renderer) {
    return store.get(renderer).domElement;
}

/**
 * @method getShapeElement
 * @param {Renderer} renderer
 * @param {Shape} shape
 * @return {Object}
 */
export function getShapeElement(renderer, shape) {
    return store.get(renderer).shapes.filter(d => d.shape === shape)[0];
}

/**
 * @method getShapes
 * @param {Renderer} renderer
 * @return {Array}
 */
export function getShapes(renderer) {
    return store.get(renderer).shapes;
}

/**
 * @method getD3
 * @param {Renderer} renderer
 * @return {Object}
 */
export function getD3(renderer) {
    return store.get(renderer).d3;
}
