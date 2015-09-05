import {getLenin} from './Setup';

describe('Lenin', () => {

    it('Should be able to append a shape;', () => {

        const {lenin, element} = getLenin();
        const rect = lenin.append('rect');

        expect(element.querySelectorAll('g').length).toEqual(1);
        expect(element.querySelectorAll('g rect').length).toEqual(1);

        //lenin.attach(rectangle)
        //    .position({ x: 100, y: 200 }, LN_POS_RELATIVE)
        //    .dimensions({ x: 100, y: 100 }, LN_POS_ABSOLUTE)
        //    .abilities(LN_ABL_ALL ^ LN_ABL_DRAGGABLE | LN_ABL_MOVABLE);

    });

});