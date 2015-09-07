import d3 from 'd3';
import {coordinatesHandler} from './../../src/shapes/utilities/Common';
import {LN_POS_RELATIVE} from './../../src/shapes/Constants';

describe('Common', () => {

    it('Should be able to handle the coordinates for a shape;', () => {

        const rect    = d3.select(document.createElement('svg')).append('rect');
        const handler = coordinatesHandler(rect);

        expect(handler('width', 'height', 250, 450)).toEqual(rect);
        const first  = handler('width', 'height');
        expect(first.width).toEqual(250);
        expect(first.height).toEqual(450);
        expect(Number(rect.attr('width'))).toEqual(250);
        expect(Number(rect.attr('height'))).toEqual(450);

        expect(handler('width', 'height', 50, -100, LN_POS_RELATIVE)).toEqual(rect);
        const second  = handler('width', 'height');
        expect(second.width).toEqual(300);
        expect(second.height).toEqual(350);
        expect(Number(rect.attr('width'))).toEqual(300);
        expect(Number(rect.attr('height'))).toEqual(350);

    });

});
