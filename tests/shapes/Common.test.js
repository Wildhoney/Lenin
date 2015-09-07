import d3 from 'd3';
import {coordinatesHandler} from './../../src/shapes/utilities/Common';
import {LN_POS_ABSOLUTE, LN_POS_RELATIVE} from './../../src/shapes/Constants';

describe('Common', () => {

    it('Should be able to handle the coordinates for a shape;', () => {

        const rect    = d3.select(document.createElement('svg')).append('rect');
        const handler = coordinatesHandler(rect);
        const shape   = handler('width', 'height', 250, 450);
        const values  = handler('width', 'height');

        expect(shape).toEqual(rect);
        expect(values.width).toEqual(250);
        expect(values.height).toEqual(450);

        expect(Number(rect.attr('width'))).toEqual(250);
        expect(Number(rect.attr('height'))).toEqual(450);

    });

});
