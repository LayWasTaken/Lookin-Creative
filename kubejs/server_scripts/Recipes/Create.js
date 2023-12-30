ServerEvents.recipes(e => {
    e.recipes.create.mechanical_crafting('createaddition:creative_energy', 
    [
        'PNPPPNP',
        'NRRFRRN',
        'PRAAARP',
        'NFCCCFN',
        'PRAAARP',
        'NRRFRRN',
        'PNPNPNP'

    ], {
        P: 'purple_concrete',
        R: 'avaritia:infinity',
        N: 'avaritia:neutron',
        F: 'ironfurnaces:million_furnace',
        A: 'createaddition:alternator',
        C: 'create:creative_motor'
    });
    e.recipes.create.mechanical_crafting('create:creative_motor', 
    [
        ' PPPPP ',
        'PIICCNN',
        'PMIIVSR',
        'PIICCNN',
        ' PPPPP '
    ], {
        P: 'purple_concrete',
        I: 'avaritia:infinity_ingot',
        C: 'avaritia:infinity_catalyst',
        N: 'avaritia:neutron',
        M: 'megacells:cell_component_16m',
        V: 'avaritia:neutron_gear',
        S: 'create_new_age:advanced_motor',
        R: 'create_new_age:reinforced_motor'
    });
    e.remove({id:'create_enchantment_industry:crafting/printer'})
    e.recipes.create.mechanical_crafting("create_enchantment_industry:printer", 
    [' CCC ',
     'CCSCC',
     'CGNGC',
     'CCGCC',
     '  D ',
     ' RRR '], {
        C:"copper_block",
        S:"diamond_block",
        G:"create_new_age:reactor_glass",
        N:"nether_star",
        D:"dried_kelp_block",
        R:"netherite_block"
    });
    e.replaceInput({id:'create:mechanical_crafting/ascended_flight_ring'}, 'minecraft:netherite_block', Item.of('enderitemod:enderite_ingot'))
})