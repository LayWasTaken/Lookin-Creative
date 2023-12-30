ItemEvents.tooltip(e => {
    e.add('avaritia:neutron_compressor', [Text.red("THE RECIPE FOR THIS IS DISABLED"), Text.red("Use the sequenced assembly recipe for the singularities")]);
    e.add('avaritia:extreme_crafting_table', [Text.red("THE RECIPE FOR THIS IS DISABLED"), Text.red("Replaced with Mechanical Crafting")])
});
JEIEvents.removeRecipes(e => {
    e.remove('avaritia:compressing');
});