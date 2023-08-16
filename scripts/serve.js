const express = require('express');
const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const chalk = require('chalk');
const appRootPath = require('app-root-path');

const mocks = path.resolve(`${appRootPath}`, 'src/wormholes');

const serveTranspiledFile = () => async (req, res, next) => {
  try {
    const {params} = req;
    const {wormhole} = params;
    const file = path.resolve(mocks, wormhole);
    if (!fs.existsSync(file)) {
      throw new Error(`Unable to find ${file}`);
    }
    console.log(chalk.white.bold`${wormhole} requested...`);
    const src = child_process
      .execSync(
        `npx babel --presets=@babel/preset-env,@babel/preset-react ${wormhole}`,
        {cwd: `${mocks}`},
      )
      .toString();
    return res.status(200).set({'X-Csrf-Token': 'tokeb'}).send(src);
  } catch (e) {
    return next(e);
  }
};

(async () => {
  const PORT = 3000;

  await new Promise(resolve =>
    express()
      .get('/wormhole/:wormhole', serveTranspiledFile())
      .listen(PORT, resolve),
  );
  console.clear();
  console.log(chalk.white.bold`🕳️ 🐛 Wormholes are being served!`);
  console.log(
    'Note, request latency will be increased since files will be lazily recompiled on every request.',
  );
  console.log(chalk.green.bold`Port: ${PORT}`);
})();
