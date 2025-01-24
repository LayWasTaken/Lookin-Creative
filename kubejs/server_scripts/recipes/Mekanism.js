ServerEvents.recipes(e => {
    e.shaped('mekanism:metallurgic_infuser', [
        'IBI',
        'RSR',
        'IBI'
    ], {
        I: 'iron_ingot',
        B: 'blast_furnace',
        R: 'redstone',
        S: 'mekanism:steel_casing'
    }).id('mekanism:metallurgic_infuser');
    e.replaceInput({id:'mekanism:atomic_disassembler'}, 'mekanism:alloy_atomic', 'justdirethings:celestigem_paxel')
});