ServerEvents.recipes(e => {
    /**
     * 
     * @param {OutputItem_} output 
     * @param {InputItem_} resource 
     * @param {InputItem_} component 
     */
    function createMachineRecipe(output, resource, component){
        e.recipes.create.mechanical_crafting(output, [
            'WWWWW',
            'WRFRW',
            'WFCFW',
            'WRFRW',
            'WWWWW'
        ],{
            W: 'compactmachines:wall',
            F: 'ae2:fluix_pearl',
            C: component,
            R: resource
        });
    }
    e.remove({id:'compactmachines:wall'});
    createMachineRecipe("compactmachines:machine_small", "iron_block", "ae2:spatial_cell_component_2");
    createMachineRecipe("compactmachines:machine_normal", "gold_block", "ae2:spatial_cell_component_2");
    createMachineRecipe("compactmachines:machine_large", "obsidian", "ae2:spatial_cell_component_2");
    createMachineRecipe("compactmachines:machine_giant", "diamond_block", "ae2:spatial_cell_component_16");
    createMachineRecipe("compactmachines:machine_maximum", "netherite_ingot", "ae2:spatial_cell_component_16");
    const inter = 'kubejs:incomplete_wall';
    e.recipes.create.sequenced_assembly([
        Item.of('compactmachines:wall')
    ], 'ae2:sky_stone_block', [
        e.recipes.createFilling(inter, [inter, Fluid.lava(1000)]),
        e.recipes.createDeploying(inter, [inter, Item.of('iron_ingot')]),
        e.recipes.createPressing(inter, inter),
        e.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1);
    e.remove({output:'ae2:spatial_storage_cell_2'});
    e.remove({output:'ae2:spatial_storage_cell_16'});
    e.remove({output:'ae2:spatial_storage_cell_128'});
    e.remove({output:'ae2:spatial_anchor'});
    e.remove({output:'ae2:spatial_pylon'});
    e.remove({output:'ae2:spatial_io_port'});
})