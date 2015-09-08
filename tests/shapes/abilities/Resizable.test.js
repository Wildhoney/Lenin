import {getLenin, fakeBBox} from './../../Setup';
import {handleRadius} from './../../../src/shapes/abilities/Resizable';

describe('Resizable', () => {

    it('Should be able to add the resize handles to the box;', () => {

        const {lenin, element} = getLenin();
        const shape = lenin.append('rect').dimensions({ height: 250, width: 250}).positions({ x: 100, y: 200 });
        const rect  = fakeBBox(shape);

        expect(element.querySelectorAll('image.handle').length).toEqual(0);

        expect(rect.select().selected()).toBeTruthy();
        const handles = Array.from(element.querySelectorAll('image.handle'));
        expect(handles.length).toEqual(8);

        expect(Number(handles[0].getAttribute('x'))).toEqual(100 - (handleRadius / 2));
        expect(Number(handles[0].getAttribute('y'))).toEqual(200 - (handleRadius / 2));

        expect(Number(handles[1].getAttribute('x'))).toEqual(225 - (handleRadius / 2));
        expect(Number(handles[1].getAttribute('y'))).toEqual(200 - (handleRadius / 2));

        expect(Number(handles[2].getAttribute('x'))).toEqual(350 - (handleRadius / 2));
        expect(Number(handles[2].getAttribute('y'))).toEqual(200 - (handleRadius / 2));

        expect(Number(handles[3].getAttribute('x'))).toEqual(100 - (handleRadius / 2));
        expect(Number(handles[3].getAttribute('y'))).toEqual(325 - (handleRadius / 2));

        expect(Number(handles[4].getAttribute('x'))).toEqual(100 - (handleRadius / 2));
        expect(Number(handles[4].getAttribute('y'))).toEqual(450 - (handleRadius / 2));

        expect(Number(handles[5].getAttribute('x'))).toEqual(225 - (handleRadius / 2));
        expect(Number(handles[5].getAttribute('y'))).toEqual(450 - (handleRadius / 2));

        expect(Number(handles[6].getAttribute('x'))).toEqual(350 - (handleRadius / 2));
        expect(Number(handles[6].getAttribute('y'))).toEqual(450 - (handleRadius / 2));

        expect(Number(handles[7].getAttribute('x'))).toEqual(350 - (handleRadius / 2));
        expect(Number(handles[7].getAttribute('y'))).toEqual(325 - (handleRadius / 2));

    });

});
