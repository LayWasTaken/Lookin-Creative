// Change the first number to change the interval in minutes
const interval = 10;

// It's a 1:2 ratio so every 20 borderExpansion is 10 full blocks in the overworld
const borderExpansion = 10;

function borderExpansionInit(server){
    server.scheduleInTicks(interval*(20*60), sched => {
        server.runCommandSilent(`worldborder add ${borderExpansion} 10`);
        server.tell([Text.green('[Lookin-Creative] '), Text.blue('The border was expanded by '+borderExpansion+' blocks')]);
        server.tell([Text.green('[Lookin-Creative] '), Text.blue('Next border expansion is in the next '+interval+' minutes')]);
        sched.reschedule();
    });
}

ServerEvents.loaded(e => {
    const server = e.getServer();
    borderExpansionInit(server);
});
