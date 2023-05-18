const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);


const upgradeRecipe = {
  description: 'Upgrade',
  enabled: 1,
  version: 100,
  numinputs: 2,
  // input 1 defined below
  'input 2': config.itemUpgrade,
  output: `usetype,mod,${config.quality}`,
  ilvl: 1000,
  '*eol': 0,
};

if (config.freeUpgrade) {
  upgradeRecipe['output b'] = config.itemUpgrade;
}

const disenchantRecipeNoe = {
  description: 'Disenchant',
  enabled: 1,
  version: 100,
  numinputs: 2,
  // input 1 defined below
  'input 2': config.itemDisenchantNoe,
  output: `usetype,hiq,noe,nos,reg`,
  ilvl: 1000,
  '*eol': 0,
};

const disenchantRecipeEth = {
  description: 'Disenchant',
  enabled: 1,
  version: 100,
  numinputs: 2,
  // input 1 defined below
  'input 2': config.itemDisenchantEth,
  output: `usetype,hiq,eth,nos,reg`,
  ilvl: 1000,
  '*eol': 0,
};

if (config.freeDisenchant) {
  disenchantRecipeNoe['output b'] = config.itemDisenchantNoe;
  disenchantRecipeEth['output b'] = config.itemDisenchantEth;
}

cubemain.rows.push({
  ...upgradeRecipe,
  description: `${upgradeRecipe.description} armor`,
  'input 1': `"armo"`,
});

cubemain.rows.push({
  ...upgradeRecipe,
  description: `${upgradeRecipe.description} weapon`,
  'input 1': `"weap"`,
});

cubemain.rows.push({
  ...disenchantRecipeNoe,
  description: `${disenchantRecipeNoe.description} armor`,
  'input 1': `"armo"`,
});

cubemain.rows.push({
  ...disenchantRecipeEth,
  description: `${disenchantRecipeEth.description} armor`,
  'input 1': `"armo"`,
});

cubemain.rows.push({
  ...disenchantRecipeNoe,
  description: `${disenchantRecipeNoe.description} weapon`,
  'input 1': `"weap"`,
});

cubemain.rows.push({
  ...disenchantRecipeEth,
  description: `${disenchantRecipeEth.description} weapon`,
  'input 1': `"weap"`,
});

if (config.copyJewelRecipeEnabled) {
  cubemain.rows.push({
    description: 'Copy juwel',
    enabled: 1,
    version: 100,
    numinputs: 1,
    'input 1': "jewl",
    output: "useitem",
    'output b': "jewl",
    ilvl: 1000,
    '*eol': 0,
  });
}

if (config.createJewelRecipeEnabled) {
cubemain.rows.push({
  description: 'Create juwel',
  enabled: 1,
  version: 100,
  numinputs: 1,
  'input 1': "tsc",
  output: "jewl",
  'output b': "tsc",
  ilvl: 1000,
  '*eol': 0,
});
}

D2RMM.writeTsv(cubemainFilename, cubemain);
