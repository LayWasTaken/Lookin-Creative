StartupEvents.registry('item', e => {
    e.create('chaos_container')
        .maxStackSize(1)
        .rarity('uncommon');
    e.create('contained_chaos')
        .maxStackSize(1)
        .rarity('epic');
    e.create('queen_bee_flower')
        .displayName("Queen Bee Flower")
        .rarity('epic');
});