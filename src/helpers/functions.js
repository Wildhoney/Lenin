/**
 * @method compose
 * @param {Function[]} fns
 * @return {Function}
 */
export function compose(...fns) {
    return model => fns.reverse().every(fn => fn(model));
}

/**
 * @method moveHorizontal
 * @param {Number} value
 * @return {Function}
 */
export function moveHorizontal(value) {
    return shape => shape.setAttribute('y', value);
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

    //delete attributes.x;
    //delete attributes.y;

    return { transform: `translate(${x}, ${y})`, ...attributes };

}
