import Lenin from './../../src/Lenin';

document.addEventListener('DOMContentLoaded', () => {

    const element = document.querySelector('svg');
    const lenin   = new Lenin(element);
    const rect    = lenin.append('rect')
                         .dimensions({ height: 100, width: 150 })
                         .positions({ x: 100, y: 100 });

});
