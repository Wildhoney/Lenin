import Penne from '../src/renderer';
import Rectangle from '../src/shapes/rectangle';
import {store} from '../src/store';

describe('Renderer', () => {

    it('Should be able to instantiate component;', () => {
        const penne = new Penne(document.createElement('svg'));
        expect(penne instanceof Penne).toBeTruthy();
    });

    it('Should be able to add shapes to the DOM element;', () => {

        const element    = document.createElement('svg');
        const penne      = new Penne(element);
        const rectangles = { first: new Rectangle(), second: new Rectangle() };
        const shapes     = store.get(penne);

        expect(shapes.length).toEqual(0);

        penne.add(rectangles.first);
        expect(shapes.length).toEqual(1);

        penne.add(rectangles.second);
        expect(shapes.length).toEqual(2);

        penne.remove(rectangles.first);
        expect(shapes.length).toEqual(1);

        penne.remove(rectangles.second);
        expect(shapes.length).toEqual(0);

    });

    it('Should be able to throw an exception when a non-HTMLElement has been passed in;', () => {
        expect(() => new Penne({})).toThrow(new Error('Penne: You must pass a valid `HTMLElement` object.'));
    });

});
