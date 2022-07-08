/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import * as os from 'os';
import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';

// const util = require('node:util');
// const exec = util.promisify(require('node:child_process').exec);
import { exec, ShellString } from 'shelljs';

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
// TODO: replace the package name with your new package's name
const messages = Messages.loadMessages('@salesforce/plugin-template', 'org');

export default class Org extends SfdxCommand {
  public static description = messages.getMessage('commandDescription');

  public static examples = messages.getMessage('examples').split(os.EOL);

  public static args = [{ name: 'file' }];

  protected static flagsConfig = {
    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: 'n',
      description: messages.getMessage('flags.name'),
    }),
    force: flags.boolean({
      char: 'f',
      description: messages.getMessage('flags.force'),
    }),
    customWord: flags.string({
      char: 'c',
      description: messages.getMessage('flags.customWord'),
    }),
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = true;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<string> {
    const executablePath: string = '/Users/smit.dagli/GoNodeIntegrationPluginTemplate/plugin-template/dadjoke';

    const customWord: string = this.flags.customWord as string;

    if (customWord.length > 0) {
      const shellOutput = exec(executablePath + '--term' + customWord);
      this.ux.log(shellOutput.stdout)
    } else {
      //const { stdout, stderr } = await exec(executablePath);
      //console.log('stdout:', stdout);
      //console.error('stderr:', stderr);
    }
    return '';
  }
}
