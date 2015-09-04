import Penne from '../src/penne';
import Rectangle from '../src/shapes/rectangle';
import {store} from '../src/store';
import {ELEMENT, GROUP} from '../src/helpers/symbols';

let penne, element, shapes;

beforeEach(() => {

    element = document.createElement('svg');
    penne   = new Penne(element);
    shapes  = store.get(penne);

    expect(penne instanceof Penne).toBeTruthy();

});

describe('Penne', () => {

    it('Should be able to create a shape;', () => {

        const firstRectangle  = new Rectangle();
        const secondRectangle = new Rectangle();

        penne.create(firstRectangle, secondRectangle);
        expect(shapes.length).toEqual(2);
        expect(element.querySelectorAll('g rect').length).toEqual(2);

        const firstGroup    = element.querySelector('g');
        const secondGroup   = element.querySelector('g');
        const firstElement  = firstGroup.querySelector('rect');
        const secondElement = secondGroup.querySelector('rect');

        expect(firstRectangle[GROUP].node()).toEqual(firstGroup);
        expect(firstRectangle[ELEMENT].node()).toEqual(firstElement);

        expect(secondRectangle[GROUP].node()).toEqual(secondGroup);
        expect(secondRectangle[ELEMENT].node()).toEqual(secondElement);

    });

});
