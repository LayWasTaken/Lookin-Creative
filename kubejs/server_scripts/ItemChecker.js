const delay = 6;
let current = delay;

ServerEvents.loaded(e => {
    const server = e.getServer();
    server.scheduleInTicks(20*10, s => {
        const count = server.getEntities("minecraft:item").length;
        if(count <= 3000) {
            server.tell(`[ItemClearerhm] ${Text.green(count)} Items Detected`);
        } else if(count <= 5000) {
            server.tell(`[ItemClearer] ${Text.orange(count)} Items Detected`);
        } else {
            server.tell(`[ItemClearer] ${Text.red(count)} Items Detected`);
            server.tell(`[ItemClearer] ${Text.red('TOO Much items found')}`);
            let pData = server.persistentData;
            pData.clearDelay = delay;
            server.scheduleInTicks(20, sched => {
                let pData = server.persistentData;
                if(pData.clearDelay <= 0) {
                    let count = 0;
                    server.getEntities().filter(ent => ent.item)
                    .forEach(v => {
                        count++;
                        v.kill()
                    });
                    server.tell(`[ItemClearer] ${Text.green('Successfuly cleared '+count+' items')}`);
                    return;
                }
                ++pData.clearDelay;
                server.tell(`[ItemClearer] ${Text.red('Clearing in...'+pData.clearDelay)}`);
                sched.reschedule();
            });
        }
        s.reschedule();
    });
});
