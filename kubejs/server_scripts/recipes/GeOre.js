ServerEvents.recipes(e => {
    const geores = [['coal_shard', 'coal'], ['iron_shard', 'iron_ingot'], ['diamond_shard', 'diamond'], 
    ['redstone_shard', 'redstone'], ['gold_shard', 'gold_ingot'], ['quartz_shard', 'quartz'],
    ['copper_shard', 'copper_ingot'], ['emerald_shard', 'emerald'], ['lapis_shard', 'lapis_lazuli']];
    geores.forEach(v => {
        e.recipes.mekanism.enriching(`2x minecraft:${v[1]}`, `geore:${v[0]}`).id(`lc:enriching/${v[0]}`);
    });
});


