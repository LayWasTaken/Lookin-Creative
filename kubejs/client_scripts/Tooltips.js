ItemEvents.tooltip(e => {
    e.add('avaritia:neutron_compressor', [Text.red("THE RECIPE FOR THIS IS DISABLED"), Text.red("Use the sequenced assembly recipe for the singularities")]);
    e.add('avaritia:extreme_crafting_table', [Text.red("THE RECIPE FOR THIS IS DISABLED"), Text.red("Replaced with Mechanical Crafting")]);
    e.add('ars_nouveau:enchanters_sword', [Text.red("DO NOT GIVE THIS TO A GUARD VILLAGER", Text.red("OR IT WILL BE CLEARED ON A FIXED TIMER"))])
});
JEIEvents.removeRecipes(e => {
    e.remove('avaritia:compressing');
});