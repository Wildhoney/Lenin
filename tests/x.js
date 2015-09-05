import Lenin from './../src/Lenin';

describe('Lenin', () => {

    it('Should be able to append a shape;', () => {

        const element = document.createElement('svg');
        const lenin   = new Lenin(element);

        lenin.attach(rectangle)
            .position({ x: 100, y: 200 }, LN_POS_RELATIVE)
            .dimensions({ x: 100, y: 100 }, LN_POS_ABSOLUTE)
            .abilities(LN_ABL_ALL ^ LN_ABL_DRAGGABLE | LN_ABL_MOVABLE);

    });

});