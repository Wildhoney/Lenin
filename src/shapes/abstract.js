import {ELEMENT, GROUP} from './../helpers/symbols';

/**
 * @module Lenin
 * @submodule Abstract
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default class Abstract {

    /**
     * @method getElement
     * @return {HTMLElement}
     */
    getElement() {
        return this[ELEMENT];
    }

    /**
     * @method setElement
     * @param {HTMLElement} element
     * @return {void}
     */
    setElement(element) {
        this[ELEMENT] = element;
    }

    /**
     * @method removeElement
     * @return {void}
     */
    removeElement() {
        delete this[ELEMENT];
    }

    /**
     * @method getGroup
     * @return {HTMLElement}
     */
    getGroup() {
        return this[GROUP];
    }

    /**
     * @method setGroup
     * @param {HTMLElement} group
     * @return {void}
     */
    setGroup(group) {
        this[GROUP] = group;
    }

    /**
     * @method removeGroup
     * @return {void}
     */
    removeGroup() {
        delete this[GROUP];
    }

}
