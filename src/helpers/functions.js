/**
 * @method compose
 * @param {Function[]} fns
 * @return {Function}
 */
export function compose(...fns) {
    return model => fns.reverse().every(fn => fn(model));
}

/**
 * @method setX
 * @param {Number} value
 * @return {Function}
 */
export function setX(value) {
    return shape => shape.setAttribute('y', value);
}

/**
 * @method setY
 * @param {Number} value
 * @return {Function}
 */
export function setY(value) {
    return shape => shape.setAttribute('x', value);
}

/**
 * @method parseAttributes
 * @param {Object} attributes
 * @return {Object}
 */
export function parseAttributes(attributes) {

    delete attributes.transform;

    const x = attributes.x;
    const y = attributes.y;

    return { transform: `translate(${x}, ${y})`, ...attributes };

}
