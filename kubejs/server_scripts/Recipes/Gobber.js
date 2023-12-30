ServerEvents.recipes(v => {
    v.remove({output: 'gobber2:dragon_star'});
    v.custom({
            type: 'ars_nouveau:enchanting_apparatus',
            keepNbtOfReagent: false,
            output: {
                item: 'gobber2:dragon_star'
            },
            pedestalItems: [
                {
                    item: 'enderitemod:enderite_ingot'
                },
                {
                    item: 'dragon_egg'
                },
                {
                    item: 'enderitemod:enderite_ingot'
                },
                {
                    item: 'dragon_egg'
                },
                {
                    item: 'enderitemod:enderite_ingot'
                },
                {
                    item: 'dragon_egg'
                },
                {
                    item: 'enderitemod:enderite_ingot'
                },
                {
                    item: 'dragon_egg'
                }
            ],
            reagent: [
                {
                    item: 'nether_star'
                }
              ],
            sourceCost: 500
        }
    ).id('dragon_star');
    v.remove({output: 'gobber2:dragon_elytra'});
    v.custom({
            type: 'ars_nouveau:enchanting_apparatus',
            keepNbtOfReagent: false,
            output: {
                item: 'gobber2:dragon_elytra'
            },
            pedestalItems: [
                {
                    item: 'enderitemod:enderite_ingot'
                },
                {
                    item: 'dragon_egg'
                },
                {
                    item: 'enderitemod:enderite_ingot'
                },
                {
                    item: 'dragon_egg'
                },
                {
                    item: 'enderitemod:enderite_ingot'
                },
                {
                    item: 'dragon_egg'
                },
                {
                    item: 'enderitemod:enderite_ingot'
                },
                {
                    item: 'dragon_egg'
                }
            ],
            reagent: [
                {
                    item: 'elytra'
                }
              ],
            sourceCost: 500
        }
    ).id('dragon_elytra');
    v.replaceInput({id:'enderitemod:enderite_ingot_from_scrap', input: 'diamond'},
        'minecraft:diamond',
        Item.of('gobber2:gobber2_ingot_end')
    );
})