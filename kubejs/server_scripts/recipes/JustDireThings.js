ServerEvents.recipes(e => {
    e.custom({
        "type": "justdirethings:fluiddrop",
        "catalyst": "justdirethings:polymorphic_catalyst",
        "id": "justdirethings:polymorphic_fluid",
        "input": {
          "Name": "mekanism:heavy_water",
          "Properties": {
            "level": "0"
          }
        },
        "output": {
          "Name": "justdirethings:polymorphic_fluid_block",
          "Properties": {
            "level": "0"
          }
        }
    }).id('justdirethings:polymorphic_fluid_block-fluiddrop');
    ['ferricore', 'blazegold', "eclipsealloy"].forEach(ore => {
        e.recipes.mekanism.enriching(`4x justdirethings:raw_${ore}`, `justdirethings:raw_${ore}_ore`).id(`lc:enriching/${ore}`);
    });
    ['celestigem', 'coal_t1', 'coal_t2', 'coal_t3', 'coal_t4'].forEach(ore => {
        e.recipes.mekanism.enriching(`4x justdirethings:${ore}`, `justdirethings:raw_${ore}_ore`).id(`lc:enriching/${ore}`);
    });
});