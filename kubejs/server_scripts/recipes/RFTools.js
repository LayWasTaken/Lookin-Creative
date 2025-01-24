ServerEvents.recipes(e => {
    e.shaped('rftoolsbuilder:builder', [
        'FCF',
        'AMA',
        'FCF'
    ], {
        F: 'justdirethings:ferricore_ingot',
        C: 'mekanism:ultimate_control_circuit',
        A: 'mekanism:alloy_reinforced',
        M: 'rftoolsbase:machine_frame'
    }).id('rftoolsbuilder:builder');
});