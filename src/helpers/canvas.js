/**
 * @method place
 * @param {HTMLElement} canvas
 * @return {Function}
 */
export function place(canvas) {

    /**
     * @method anonymous
     * @return {Object}
     */
    return () => {

        const group   = canvas.append('g');
        const element = group.append('rect');

        return { group: group.node(), element: element.node() };

    };

}
