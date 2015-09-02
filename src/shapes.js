/**
 * @constant shapes
 * @type {Array}
 */
export const shapes = [];

/**
 * @method byElement
 * @param {HTMLElement} element
 * @return {Array}
 */
export function byElement(element) {
    return shapes.filter(shape => shape.domElement === element);
}
