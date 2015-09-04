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
        const element = group.append('rect');
        return { group: group.node(), element: element.node() };
    };

}

/**
 * @method detach
 * @param {HTMLElement} canvas
 * @return {Function}
 */
export function detach(canvas) {

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
