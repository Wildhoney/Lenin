import Lenin from './../../src/Lenin';
import {getLenin} from './../Setup';
import * as c from './../../src/shapes/Constants';

describe('Methods', () => {

    it('Should be able to set the dimensions both relatively and absolutely;', () => {

        const {lenin} = getLenin();
        const rect = lenin.append('rect');

        const firstDimensions = rect.attr('height', 25).dimensions({ height: 5, width: 150 }).dimensions();
        expect(firstDimensions.height).toEqual(5);
        expect(Number(rect.attr('height'))).toEqual(5);
        expect(firstDimensions.width).toEqual(150);
        expect(Number(rect.attr('width'))).toEqual(150);

        const secondDimensions = rect.dimensions({ height: 70 }).dimensions();
        expect(secondDimensions.height).toEqual(70);
        expect(Number(rect.attr('height'))).toEqual(70);
        expect(secondDimensions.width).toEqual(150);
        expect(Number(rect.attr('width'))).toEqual(150);

        const thirdDimensions = rect.dimensions({ height: 70, width: -20 }, c.LN_POS_RELATIVE).dimensions();
        expect(thirdDimensions.height).toEqual(140);
        expect(Number(rect.attr('height'))).toEqual(140);
        expect(thirdDimensions.width).toEqual(130);
        expect(Number(rect.attr('width'))).toEqual(130);

    });

    it('Should be able to set the positions both relatively and absolutely;', () => {

        const {lenin} = getLenin();
        const rect = lenin.append('rect');

        const firstDimensions = rect.attr('height', 80).positions({ x: 60, y: 90 }).positions();
        expect(firstDimensions.x).toEqual(60);
        expect(Number(rect.attr('x'))).toEqual(60);
        expect(firstDimensions.y).toEqual(90);
        expect(Number(rect.attr('y'))).toEqual(90);

        const secondDimensions = rect.positions({ x: 20 }).positions();
        expect(secondDimensions.x).toEqual(20);
        expect(Number(rect.attr('x'))).toEqual(20);
        expect(secondDimensions.y).toEqual(90);
        expect(Number(rect.attr('y'))).toEqual(90);

        const thirdDimensions = rect.positions({ x: 20, y: -60 }, c.LN_POS_RELATIVE).positions();
        expect(thirdDimensions.x).toEqual(40);
        expect(Number(rect.attr('x'))).toEqual(40);
        expect(thirdDimensions.y).toEqual(30);
        expect(Number(rect.attr('y'))).toEqual(30);

    });

    it('Should be able to set the abilities for a given shape;', () => {

        const {lenin} = getLenin();
        const abilities = lenin.append('circle').abilities(c.LN_ABL_DRAGGABLE & c.LN_ABL_MOVABLE).abilities();
        expect(abilities).toEqual(c.LN_ABL_DRAGGABLE & c.LN_ABL_MOVABLE);

    });

    describe('Selectable', () => {

        it('Should be able to determine when a shape has been selected;', () => {

            const {lenin} = getLenin();
            const rect = lenin.append('rect');
            const eventOptions = { bubbles: true, cancelable: true };

            expect(rect.selected()).toEqual(false);

            rect.node().dispatchEvent(new MouseEvent('click', eventOptions));
            expect(rect.selected()).toEqual(true);

            rect.node().dispatchEvent(new MouseEvent('click', eventOptions));
            expect(rect.selected()).toEqual(false);

        });

        it('Should be able to select/deselect using the utility functions;', () => {

            const {lenin} = getLenin();
            const rect = lenin.append('rect');

            expect(rect.select().selected()).toEqual(true);
            expect(rect.deselect().selected()).toEqual(false);

        });

        it('Should be able to deselect all shapes by clicking on the canvas;', () => {

            const {lenin, element} = getLenin();
            const shapes  = { first:  lenin.append('rect').select(),
                              second: lenin.append('rect').select(),
                              third:  lenin.append('rect').select() };

            expect(shapes.first.selected()).toEqual(true);
            expect(shapes.second.selected()).toEqual(true);
            expect(shapes.third.selected()).toEqual(true);

            element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

            expect(shapes.first.selected()).toEqual(false);
            expect(shapes.second.selected()).toEqual(false);
            expect(shapes.third.selected()).toEqual(false);

        });

    });

});
