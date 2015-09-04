import Rectangle from '../shapes/rectangle';

/**
 * @method attach
 * @param {HTMLElement} canvas
 * @return {Function}
 */
export function attach(canvas) {

    /**
     * @method anonymous
     * @param {Shape} shape
     * @return {Object}
     */
    return shape => {
        const group   = canvas.append('g');
        const element = group.append(Rectangle.tagName);
        return { group: group.node(), element: element.node() };
    };

}

/**
 * @method detach
 * @return {Function}
 */
export function detach() {

    /**
     * @method anonymous
     * @param {Shape} shape
     * @return {Object}
     */
    return shape => {
        d3.select(shape.getGroup()).remove();
        return { group: null, element: null };
    };

}
