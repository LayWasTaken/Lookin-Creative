ServerEvents.recipes(e => {
    e.remove({ id: "botania:petal_apothecary/orechid" });
    e.custom({
        type: "botania:petal_apothecary",
        ingredients: [
            { item: "botania:light_gray_petal" },
            { item: "botania:light_gray_petal" },
            { item: "botania:green_petal" },
            { item: "botania:green_petal" },
            { item: "minecraft:nether_star"},
            { item: "botania:gaia_ingot" },
            { item: "botania:rune_fire" },
            { item: "botania:rune_water" },
            { item: "botania:rune_earth" },
            { item: "botania:rune_air" },
            { item: "botania:rune_mana" }
        ],
        output: { item: "botania:orechid" },
        reagent: { tag: "botania:seed_apothecary_reagent" }
    });
})