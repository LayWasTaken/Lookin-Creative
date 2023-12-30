ServerEvents.recipes(e => {
    [["hostilenetworks:overworld_prediction", 10], 
    ["hostilenetworks:nether_prediction", 20], 
    ["hostilenetworks:twilight_prediction", 40], 
    ["hostilenetworks:end_prediction", 50]].forEach(v => {
        e.custom({
            type: "create_enchantment_industry:disenchanting",
            ingredients: [{item: v[0]}],
            results: [
                {
                  "fluid": "create_enchantment_industry:experience",
                  "amount": v[1]
                }
              ]
        })
    });
    e.remove({id:'hostilenetworks:living_matter/extraterrestrial/nether_star'});

    e.remove({id: 'hostilenetworks:framework'})
    e.shaped('hostilenetworks:blank_data_model', [
        'MDM',
        'RBR',
        'MNM'
    ], {
        M: "hostilenetworks:empty_prediction",
        D: "ars_nouveau:drygmy_shard",
        R: "minecraft:redstone_block",
        B: "fluxnetworks:flux_block",
        N: "gobber2:gobber2_ingot_nether"
    });
})