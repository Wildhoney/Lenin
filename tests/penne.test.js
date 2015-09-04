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

    });

    it('Should be able to destroy shapes;', () => {

        const firstRectangle  = new Rectangle();
        const secondRectangle = new Rectangle();

        penne.destroy(firstRectangle, secondRectangle);
        expect(shapes.length).toEqual(0);

    });

});
