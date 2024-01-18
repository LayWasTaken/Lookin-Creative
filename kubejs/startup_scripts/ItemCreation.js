global.minerals = [
    ["copper", 2000, 0xfa977c], 
    ["iron", 1700, 0xe1e1e1], 
    ["diamond", 800, 0xa6fce9], 
    ["coal", 2000, 0x363739], 
    ["emerald", 1500, 0x7df8ac], 
    ["gold", 1500, 0xFFD700], 
    ["redstone", 2000, 0xFf0000],
    ["lapis", 2000, 0x1b53a7],
    ["steel", 1400, 0x232323]
]
StartupEvents.registry('item', e => {
    global.minerals.forEach(v  => {
        e.create('incomplete_'+v[0]+'_singularity', 'create:sequenced_assembly')
        .texture("kubejs:item/singularity")
        .color(0,v[2])
        .rarity('epic');
    });
    e.create('incomplete_botany_pot', 'create:sequenced_assembly')
        .parentModel("botanypots:block/botany_pot_base")
        .textureJson({
            "terracotta": "minecraft:block/terracotta",
            "particle": "minecraft:block/terracotta"
        })
        .rarity('uncommon');
    e.create('incomplete_elite_botany_pot', 'create:sequenced_assembly')
        .parentModel("botanypotstiers:block/botany_pot_base")
        .textureJson({
            "terracotta": "minecraft:block/terracotta",
            "stripe": "botanypotstiers:block/elite",
            "particle": "minecraft:block/terracotta"
        })
        .rarity('uncommon');
    e.create('incomplete_wall', 'create:sequenced_assembly')
        .modelJson({   
            "render_type": "minecraft:cutout",
            "parent": "minecraft:block/cube_all",
            "textures": {
                "particle": 'compactmachines:block/wall',
                "north": 'compactmachines:block/wall',
                "south": 'compactmachines:block/wall',
                "east": 'compactmachines:block/wall',
                "west": 'compactmachines:block/wall',
                "down": 'compactmachines:block/wall',
                "up": 'compactmachines:block/wall'
            }
        })
    e.create('unpowered_catalyst')
        .texture('kubejs:item/unpowered_catalyst')
        .rarity('rare');
});
