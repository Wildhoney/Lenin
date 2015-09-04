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

    it('Should be able to create shapes;', () => {

        const firstRectangle  = new Rectangle();
        const secondRectangle = new Rectangle();

        penne.create(firstRectangle, secondRectangle);
        expect(shapes.length).toEqual(2);

        const gElements    = element.querySelectorAll('g');
        const rectElements = element.querySelectorAll('rect');

        expect(gElements.length).toEqual(2);
        expect(rectElements.length).toEqual(2);

        expect(firstRectangle.getGroup()).toBe(gElements[0]);
        expect(firstRectangle.getElement()).toBe(rectElements[0]);
        expect(secondRectangle.getGroup()).toBe(gElements[1]);
        expect(secondRectangle.getElement()).toBe(rectElements[1]);

    });

    it('Should be able to destroy shapes;', () => {

        const firstRectangle  = new Rectangle();
        const secondRectangle = new Rectangle();

        penne.create(firstRectangle, secondRectangle);
        expect(shapes.length).toEqual(2);

        penne.destroy(firstRectangle, secondRectangle);
        expect(shapes.length).toEqual(0);

        const gElements    = element.querySelectorAll('g');
        const rectElements = element.querySelectorAll('rect');

        expect(gElements.length).toEqual(0);
        expect(rectElements.length).toEqual(0);

        expect(firstRectangle.getGroup()).toBeUndefined();
        expect(firstRectangle.getElement()).toBeUndefined();
        expect(secondRectangle.getGroup()).toBeUndefined();
        expect(secondRectangle.getElement()).toBeUndefined();

    });

});
