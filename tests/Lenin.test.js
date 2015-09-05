import Lenin from './../src/Lenin';
import messages from './../src/helpers/Messages';
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

    it('Should raise an exception when a non-HTMLElement is passed;', () => {
        expect(() => new Lenin({})).toThrow(new Error(`Lenin: ${messages.ELEMENT_EXPECTED}.`));
    });

    it('Should raise an exception when a non-supported shape name is passed;', () => {
        const lenin = new Lenin(document.createElement('svg'));
        expect(() => lenin.append('unsupported_shape_name')).toThrow(new Error(`Lenin: ${messages.SHAPE_UNSUPPORTED}.`));
    });

});