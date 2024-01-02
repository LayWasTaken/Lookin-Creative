// Change the first number to change the interval in minutes
const interval = 10;

// It's a 1:2 ratio so every 20 borderExpansion is 10 full blocks in the overworld
const borderExpansion = 5;
/**
 * @param {Internal.MinecraftServer} server 
 */
function borderExpansionInit(server){
    server.scheduleInTicks(interval*(20*60), sched => {
        const expand = borderExpansion * (server.getPlayerCount()+1)
        server.runCommandSilent(`worldborder add ${expand} 10`);
        server.tell([Text.green('[Lookin-Creative] '), Text.blue('The border was expanded by '+expand+' blocks')]);
        server.tell([Text.green('[Lookin-Creative] '), Text.blue('Next border expansion is in the next '+interval+' minutes')]);
        sched.reschedule();
    });
}

ServerEvents.loaded(e => {
    const server = e.getServer();
    borderExpansionInit(server);
});
