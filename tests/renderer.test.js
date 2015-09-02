import Penne from '../src/renderer';
import Rectangle from '../src/shapes/rectangle';

describe('Renderer', () => {

    it('Should be able to instantiate the Penne component;', () => {
        const penne = new Penne(document.createElement('svg'));
        expect(penne instanceof Penne).toBeTruthy();
    });

    it('Should be able to throw an exception when a non-HTMLElement has been passed in;', () => {
        expect(() => new Penne({})).toThrow(new Error('Penne: You must pass a valid `HTMLElement` object.'));
    });

    it('Should be able to move shape around without being in the DOM;', () => {

        const rectangle = new Rectangle({ y: 100 });
        expect(rectangle.getAttribute('transform')).toEqual('translate(0, 100)');

        rectangle.moveHorizontal(85);
        expect(rectangle.getAttribute('transform')).toEqual('translate(0, 85)');

    });

});
