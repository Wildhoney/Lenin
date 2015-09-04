/**
 * @method insert
 * @param {HTMLElement} canvas
 * @return {Function}
 */
export function insert(canvas) {

    return shape => {

        const group   = canvas.append('g');
        const element = group.append('rect');

        return { group, element };

    };

}
