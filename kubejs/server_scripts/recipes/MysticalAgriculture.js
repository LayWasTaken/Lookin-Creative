ServerEvents.recipes(e => {
    ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium'].forEach((tier, key, tiers) => {
        e.custom({
            "type": "advanced_ae:reaction",
            "input_energy": 50000 * (key+1),
            "input_fluid": {
                "amount": 4000,
                "ingredient": {
                    "fluid": tier == "inferium" ? "justdirethings:refined_t4_fluid_source" : `mysticalagradditions:molten_${tiers[--key]}`
                }
            },
            "input_items": [
                {
                    "amount": 9,
                    "ingredient": {
                        "item": `mysticalagradditions:${tier}_coal_block`
                    }
                }
            ],
            "output": {
                "#": 1000,
                "#t": "ae2:f",
                "id": `mysticalagradditions:molten_${tier}`
            }
        });
    });
});