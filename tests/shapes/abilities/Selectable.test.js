import {getLenin, fakeBBox} from './../../Setup';

describe('Selectable', () => {

    it('Should be able to determine when a shape has been selected;', () => {

        const {lenin} = getLenin();
        const rect = fakeBBox(lenin.append('rect'));

        const eventOptions = { bubbles: true, cancelable: true };

        expect(rect.selected()).toEqual(false);

        rect.node().dispatchEvent(new MouseEvent('click', eventOptions));
        expect(rect.selected()).toEqual(true);

        rect.node().dispatchEvent(new MouseEvent('click', eventOptions));
        expect(rect.selected()).toEqual(false);

    });

    it('Should be able to select/deselect using the utility functions;', () => {

        const {lenin} = getLenin();
        const rect = fakeBBox(lenin.append('rect'));

        expect(rect.select().selected()).toEqual(true);
        expect(rect.deselect().selected()).toEqual(false);

    });

    it('Should be able to deselect all shapes by clicking on the canvas;', () => {

        const {lenin, element} = getLenin();
        const shapes  = { first:  fakeBBox(lenin.append('rect')).select(),
            second: fakeBBox(lenin.append('rect')).select(),
            third:  fakeBBox(lenin.append('rect')).select() };

        expect(shapes.first.selected()).toEqual(true);
        expect(shapes.second.selected()).toEqual(true);
        expect(shapes.third.selected()).toEqual(true);

        element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

        expect(shapes.first.selected()).toEqual(false);
        expect(shapes.second.selected()).toEqual(false);
        expect(shapes.third.selected()).toEqual(false);

    });

});
