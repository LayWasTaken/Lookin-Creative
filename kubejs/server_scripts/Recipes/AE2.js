ServerEvents.recipes(e => {
    e.remove({id:'create:compat/ae2/milling/sky_stone_block'})
    e.recipes.create.crushing(['ae2:sky_dust', Item.of('ae2:sky_dust').withChance(0.5)], 'ae2:sky_stone_block')
})