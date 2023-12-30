ServerEvents.recipes(e => {
    e.remove({mod:'botanypotstiers'});
    [false, 'white', 'black', 'red', 'green', 'blue', 'yellow', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'brown']
    .forEach(color => {
        const Lore = JSON.stringify({text: "Color: "+color ?? 'none', color:(color ? (color === 'black' ? color : 'gray')  : 'orange')})
        const inter = Item.of('kubejs:incomplete_botany_pot', {display:{Lore:[Lore]}});
        const eliteInter = Item.of('kubejs:incomplete_elite_botany_pot', {display:{Lore:[Lore]}});
        const dep = e.recipes.createDeploying;
        const press = e.recipes.createPressing;
        ['terracotta', 'glazed_terracotta', 'concrete'].forEach(type => {
            if(!color && !(type === 'terracotta')) return;
            const name = color ? color + '_' + type + '_': 'terracotta' + '_';
            const hopper = 'botanypots:'+name+'hopper_botany_pot';
            const elite = 'botanypotstiers:elite_'+name+'hopper_botany_pot';
            const ultra = 'botanypotstiers:ultra_'+name+'hopper_botany_pot';
            const creative = 'botanypotstiers:creative_'+name+'hopper_botany_pot';

            e.remove({output: '#botanypots:hopper_botany_pots'});

            // Hopping BotanyPots
            e.recipes.create.sequenced_assembly([Item.of(hopper)], 
            'botanypots:'+name+'botany_pot', [
                dep(inter, [inter, Item.of('hopper')]),
                dep(inter, [inter, Item.of('create:mechanical_saw')]),
                dep(inter, [inter, Item.of('create:mechanical_harvester')]),
                press(inter, inter)
            ]).transitionalItem(inter).loops(1);
            
            // Elite BotanyPots
            e.recipes.create.sequenced_assembly([Item.of(elite)], 
            hopper, [
                dep(eliteInter, [eliteInter, Item.of('ender_pearl')]),
                dep(eliteInter, [eliteInter, Item.of('iron_block')]),
                dep(eliteInter, [eliteInter, Item.of('iron_block')]),
                press(eliteInter, eliteInter)
            ]).transitionalItem(eliteInter).loops(1);

            // Ultra BotanyPots
            e.custom({
                type: 'ars_nouveau:enchanting_apparatus',
                keepNbtOfReagent: false,
                output: {
                    item: ultra
                },
                pedestalItems: [
                    {
                        item: 'botania:mana_diamond'
                    },
                    {
                        item: 'nether_star'
                    },
                    {
                        item: 'botania:mana_diamond'
                    },
                    {
                        item: 'botania:rune_earth'
                    }
                ],
                reagent: [
                    {
                      item: elite
                    }
                  ],
                sourceCost: 0
            });            
            
            e.custom({
                type: 'ars_nouveau:enchanting_apparatus',
                keepNbtOfReagent: false,
                output: {
                    item: creative
                },
                pedestalItems: [
                    {
                        item: 'netherite_block'
                    },
                    {
                        item: 'enchanted_golden_apple'
                    },
                    {
                        item: 'netherite_block'
                    },
                    {
                        item: 'avaritia:infinity_catalyst'
                    }
                ],
                reagent: [
                    {
                      item: ultra
                    }
                  ],
                sourceCost: 300
            });
        })
    })
})