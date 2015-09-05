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
