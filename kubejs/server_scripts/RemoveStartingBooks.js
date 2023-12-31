ServerEvents.highPriorityData(e => {
    e.addJson('modpack:advancements/removed', {
        display: { hidden: true }
    });
    ['apotheosis:give_book', 'parcool:grant_parcool_guide', ''].forEach(v => {
        let advSplit = v.split(':')
        let advModId = advSplit[0]
        let advName = advSplit[1]

        e.addJson(`${advModId}:advancements/${advName}.json`, {
            parent: 'modpack:advancements/removed',
            display: { hidden: true },
            criteria: {
                impossible: {
                    trigger: 'minecraft:impossible'
                }
            },
            requirements: [['impossible']]
        })
    });
    Java.loadClass('advance')
});