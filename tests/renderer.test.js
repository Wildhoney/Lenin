import Penne from '../src/renderer';
import Rectangle from '../src/shapes/rectangle';
import {store} from '../src/store';

describe('Renderer', () => {

    it('Should be able to instantiate the Penne component;', () => {
        const penne = new Penne(document.createElement('svg'));
        expect(penne instanceof Penne).toBeTruthy();
    });

    it('Should be able to throw an exception when a non-HTMLElement has been passed in;', () => {
        expect(() => new Penne({})).toThrow(new Error('Penne: You must pass a valid `HTMLElement` object.'));
    });

    it('Should be able to add and remove shapes to and from the store;', () => {

        const penne      = new Penne(document.createElement('svg'));
        const rectangles = { first: new Rectangle(), second: new Rectangle() };
        const shapes     = store.get(penne).shapes;

        expect(shapes.length).toEqual(0);
        penne.add(rectangles.first);
        penne.remove(rectangles.second);
        expect(shapes.length).toEqual(1);
        penne.add(rectangles.second);
        expect(shapes.length).toEqual(2);
        penne.remove(rectangles.first);
        expect(shapes.length).toEqual(1);
        penne.clear();
        expect(shapes.length).toEqual(0);

    });

    it('Should be able to move shape around without being in the DOM;', () => {

        const rectangle = new Rectangle({ y: 100 });
        expect(rectangle.getAttribute('transform')).toEqual('translate(0, 100)');

        rectangle.moveHorizontal(85);
        expect(rectangle.getAttribute('transform')).toEqual('translate(0, 85)');

        rectangle.moveVertical(200);
        expect(rectangle.getAttribute('transform')).toEqual('translate(200, 85)');

    });

});
