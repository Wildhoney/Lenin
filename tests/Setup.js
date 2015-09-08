import Lenin from './../src/Lenin';

/**
 * @method getLenin
 * @return {{lenin: Lenin, element: Element}}
 */
export function getLenin() {

    const element = document.createElement('svg');
    const lenin   = new Lenin(element);

    return { lenin, element };

}

/**
 * @method fakeBBox
 * @param {Object} shape
 * @return {Object}
 */
export function fakeBBox(shape) {

    shape.node().getBBox = () => {

        return {
            x: Number(shape.attr('x')) || 100,
            y: Number(shape.attr('y')) || 200,
            height: Number(shape.attr('height')) || 50,
            width: Number(shape.attr('width')) || 50
        };

    };

    return shape;

}
