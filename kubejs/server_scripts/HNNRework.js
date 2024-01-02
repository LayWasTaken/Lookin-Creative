ServerEvents.highPriorityData(e => {
    const models_folder_map = global.readJsonFolderFromMod('data', 'hostilenetworks', "data_models");
    const models_folder = models_folder_map.entrySet();
    models_folder_map.put
    models_folder.forEach(entry => {
        const value = entry.getValue();
        const key = entry.getKey();
        value.fabricator_drops.forEach(c => {
            const count = c.get("count");
            if((count % 2) != 0) return;
            console.log(count, (count % 2) === 0, count % 2)
            c.add("count", count / 2);
        });
        if(key == "hostilenetworks:data_models/artifacts/mimic.json") return e.addJson(key, {});
        if(
            key == "hostilenetworks:data_models/iron_golem.json" ||
            key == "hostilenetworks:data_models/ender_dragon.json" ||
            key == "hostilenetworks:data_models/wither.json" ||
            key == "hostilenetworks:data_models/evoker.json" ||
            key == "hostilenetworks:data_models/vindicator.json" ||
            key == "hostilenetworks:data_models/artifacts/mimic.json"
            ){
            value.tier_data = [
                6,
                54,
                354,
                1254
            ];
            value.data_per_kill = [
                1,
                4,
                10,
                18
            ]
        }
        e.addJson(key, value);
    });
});
// (key, v) => {
//     console.log(v)
//     const fd = v.fabricator_drops;
//     fd.forEach((d, k) => {
//         if((d.count % 2) === 0) return;
//         fd[k ?? 0].count = d.count / 2;
//     });
//     v.tier_data.forEach((num, tier) => {
//         v.tierdata[num] = tier*2;
//     });
//     e.addJson(key, v);
// }