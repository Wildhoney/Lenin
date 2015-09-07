import Lenin from './../src/Lenin';
import messages from './../src/helpers/Messages';
import {getLenin} from './Setup';

describe('Lenin', () => {

    it('Should be able to append a shape;', () => {

        const {lenin, element} = getLenin();
        const rect = lenin.append('rect');

        expect(element.querySelectorAll('g').length).toEqual(1);
        expect(element.querySelectorAll('g rect').length).toEqual(1);

    });

    it('Should raise an exception when a non-HTMLElement is passed;', () => {
        expect(() => new Lenin({})).toThrow(new Error(`Lenin: ${messages.ELEMENT_EXPECTED}.`));
    });

    it('Should raise an exception when a non-supported shape name is passed;', () => {
        const lenin = new Lenin(document.createElement('svg'));
        expect(() => lenin.append('unsupported_shape_name')).toThrow(new Error(`Lenin: ${messages.SHAPE_UNSUPPORTED}.`));
    });

    it('Should be able to register a custom shape name;', () => {

        const {lenin, element} = getLenin();
        expect(() => lenin.append('custom_shape')).toThrow(new Error(`Lenin: ${messages.SHAPE_UNSUPPORTED}.`));

        lenin.register('custom_shape');
        expect(() => lenin.append('custom_shape')).not.toThrow(new Error(`Lenin: ${messages.SHAPE_UNSUPPORTED}.`));

        expect(element.querySelectorAll('g').length).toEqual(1);
        expect(element.querySelectorAll('g custom_shape').length).toEqual(1);

    });

    it('Should be able to chain methods;', () => {

        //lenin.append('rect')
        //     .position({ x: 100, y: 200 }, LN_POS_RELATIVE)
        //     .dimensions({ x: 100, y: 100 }, LN_POS_ABSOLUTE)
        //     .abilities(Movable, Draggable);

        const {lenin, element} = getLenin();
        const rect = lenin.append('rect');
        const dimensions = rect.attr('height', 25).dimensions({ height: 5, width: 150 }, 'absolute').dimensions();

        console.log(dimensions);

    });

});
