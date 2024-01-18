ServerEvents.recipes(e => {
  const singularities = [];
  global.minerals.forEach(v => {
    if(v == "steel"){
      singularity("createindustry:steel_block", v[1]);
      return;
    }
    singularity(v[0], v[1])
  });
  function singularity(mineral, amount) {
    const inter = 'kubejs:incomplete_'+mineral+'_singularity'
    e.recipes.create.sequenced_assembly([
      Item.of('avaritia:singularity', {Id: 'avaritia:'+mineral})
    ], 'avaritia:neutron', [
      e.recipes.createDeploying(inter, [inter, 'minecraft:'+mineral+'_block'])
    ]).transitionalItem(inter).loops(amount);
    singularities.push(Item.of('avaritia:singularity', {Id: 'avaritia:'+mineral}).strongNBT());
  };
  e.remove({id:'avaritia:neutron_compressor'});
  e.remove({output:'avaritia:neutron_collector'});
  e.remove({type:'avaritia:compressor'})
  e.recipes.create.haunting("avaritia:neutron_pile", "ae2:matter_ball");

  e.replaceInput({id: 'avaritia:diamond_lattice', input: 'diamond'},
      'minecraft:diamond',
      'botania:mana_diamond'
  );

  e.custom({
      type: 'ars_nouveau:enchanting_apparatus',
      keepNbtOfReagent: false,
      output: {
          item: 'avaritia:infinity_catalyst'
      },
      pedestalItems: [
          {
              item: 'avaritia:cosmic_meatballs'
          },
          {
              item: 'avaritia:ultimate_stew'
          },
          {
              item: 'avaritia:endest_pearl'
          },
          {
              item: 'avaritia:record_fragment'
          },
          {
              item: 'avaritia:neutron_ingot'
          },
          {
              item: 'avaritia:crystal_matrix_ingot'
          },
          {
              item: 'apotheosis:mythic_material'
          },
          {
              item: 'botania:gaia_ingot'
          }
      ],
      reagent: [
          {
              item: 'kubejs:unpowered_catalyst'
          }
        ],
      sourceCost: 5000
  });
  e.custom({
      "type": 'botania:terra_plate',
      "ingredients": singularities,
      "mana": 100000,
      "result": {
        "item": "kubejs:unpowered_catalyst"
      }
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        "   I   ",
        "  IIIII",
        "  IIXI ",
        "   IN  ",
        "    N  ",
        "    N  ",
        "    N  ",
        "    N  ",
        "    N  "
      ],
      "result": {
        "item": "avaritia:infinity_axe"
      },
      acceptMirrored: false
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        }
      },
      "pattern": [
        " NNN NNN ",
        " NIN NIN ",
        " NIN NIN ",
        "NNIN NINN",
        "NIIN NIIN",
        "NNNN NNNN"
      ],
      "result": {
        "item": "avaritia:infinity_boots"
      },
      acceptMirrored: false
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "W": {
          "tag": "minecraft:wool"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        "   II",
        "  I W",
        " I  W",
        "I   W",
        "X   W",
        "I   W",
        " I  W",
        "  I W",
        "   II"
      ],
      "result": {
        "item": "avaritia:infinity_bow"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        " NN   NN ",
        "NNN   NNN",
        "NNN   NNN",
        " NIIIIIN ",
        " NIIXIIN ",
        " NIIIIIN ",
        " NIIIIIN ",
        " NIIIIIN ",
        "  NNNNN  "
      ],
      "result": {
        "item": "avaritia:infinity_chestplate"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        "  NNNNN  ",
        " NIIIIIN ",
        " N XIX N ",
        " NIIIIIN ",
        " NIIIIIN ",
        " NI I IN "
      ],
      "result": {
        "item": "avaritia:infinity_helmet"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        "     N ",
        "   IIII",
        "  IIIII",
        "  I  XI",
        "     N ",
        "     N ",
        "     N ",
        "     N ",
        "     N "
      ],
      "result": {
        "item": "avaritia:infinity_hoe"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "C": {
          "item": "avaritia:crystal_matrix_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        "NNNNNNNNN",
        "NCXXCXXCN",
        "NXCCXCCXN",
        "NCXXCXXCN",
        "NNNNNNNNN"
      ],
      "result": {
        "item": "avaritia:infinity_ingot"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "C": {
          "item": "avaritia:crystal_matrix_ingot"
        },
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        "NNNNNNNNN",
        "NIIIXIIIN",
        "NINNXNNIN",
        "NIN   NIN",
        "NCN   NCN",
        "NIN   NIN",
        "NIN   NIN",
        "NIN   NIN",
        "NNN   NNN"
      ],
      "result": {
        "item": "avaritia:infinity_pants"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        " IIIIIII ",
        "IIIIXIIII",
        "II  N  II",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    "
      ],
      "result": {
        "item": "avaritia:infinity_pickaxe"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        "      III",
        "     IIXI",
        "      III",
        "     N I ",
        "    N    ",
        "   N     ",
        "  N      ",
        " N       ",
        "N        "
      ],
      "result": {
        "item": "avaritia:infinity_shovel"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "C": {
          "item": "avaritia:crystal_matrix_ingot"
        },
        "I": {
          "item": "avaritia:infinity_ingot"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "X": {
          "item": "avaritia:infinity_catalyst"
        }
      },
      "pattern": [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
      ],
      "result": {
        "item": "avaritia:infinity_sword"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "B": {
          "tag": "forge:bones"
        },
        "D": {
          "tag": "forge:nether_stars"
        },
        "I": {
          "item": "avaritia:neutron_ingot"
        },
        "W": {
          "tag": "minecraft:logs"
        },
        "X": {
          "item": "minecraft:blaze_powder"
        }
      },
      "pattern": [
        "       IX",
        "      IXI",
        "     IXI ",
        "    IXI  ",
        " B IXI   ",
        "  BXI    ",
        "  WB     ",
        " W  B    ",
        "D        "
      ],
      "result": {
        "item": "avaritia:skull_fire_sword"
      },
  });
  e.custom({
      "type": "create:mechanical_crafting",
      "key": {
        "E": {
          "tag": "forge:end_stones"
        },
        "N": {
          "item": "avaritia:neutron_ingot"
        },
        "P": {
          "tag": "forge:ender_pearls"
        },
        "S": {
          "tag": "forge:nether_stars"
        }
      },
      "pattern": [
        "   EEE   ",
        " EEPPPEE ",
        " EPPPPPE ",
        "EPPPNPPPE",
        "EPPNSNPPE",
        "EPPPNPPPE",
        " EPPPPPE ",
        " EEPPPEE ",
        "   EEE   "
      ],
      "result": {
        "item": "avaritia:endest_pearl"
      }
  });
  e.remove({type:"avaritia:shaped_extreme_craft"});
  e.remove({type:"avaritia:shapeless_extreme_craft"});
  e.recipes.create.mechanical_crafting('avaritia:neutron_gear', [
      '  NNN  ',
      ' NNCNN ',
      'NNCNCNN',
      'NCNGNCN',
      'NNCNCNN',
      ' NNCNN ',
      '  NNN  ',
  ], {
      N: 'avaritia:neutron',
      C: 'avaritia:infinity_catalyst',
      G: 'create:large_cogwheel'
  });
  e.remove({id:"avaritia:extreme_crafting_table"});
});