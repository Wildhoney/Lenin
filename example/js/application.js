import Lenin from './../../src/Lenin';

document.addEventListener('DOMContentLoaded', () => {

    const element = document.querySelector('svg');
    const lenin   = new Lenin(element);

    console.log(lenin);

});
