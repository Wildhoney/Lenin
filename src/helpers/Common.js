import objectAssign from 'object-assign';

/**
 * @method exception
 * @throw {Error}
 * @param {String} message
 * @return {void}
 */
export function exception(message) {
    throw new Error(`Lenin: ${message}.`);
}

/**
 * @method isShape
 * @param {*} item
 * @return {Boolean}
 */
export function isShape(item) {
    return item;
}

/**
 * @method isHTMLElement
 * @param {*} item
 * @return {Boolean}
 */
export function isHTMLElement(item) {
    return item instanceof HTMLElement;
}

/**
 * @method assert
 * @throw {Error}
 * @param {Boolean} validator
 * @param {String} message
 * @return {void}
 */
export function assert(validator, message) {
    !validator && exception(message);
}

/**
 * @method isFunction
 * @param {*} object
 * @return {Boolean}
 */
export function isFunction(object) {
    return typeof object === 'function';
}

/**
 * @method isUndefined
 * @param {*} object
 * @return {Boolean}
 */
export function isUndefined(object) {
    return typeof object === 'undefined';
}
