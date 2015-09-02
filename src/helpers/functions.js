/**
 * @method compose
 * @param {Function[]} fns
 * @return {Function}
 */
export function compose(...fns) {
    return model => model => fns.reverse().every(fn => fn(model));
}

/**
 * @method moveHorizontal
 * @param {Number} by
 * @return {Function}
 */
export function moveHorizontal(by) {
    return shape => {}
}
