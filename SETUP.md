## Incorta Components SDK DevEnv Setup

How to set up your development environment for creating new Incorta SDK components.

The Incorta SDK presumes knowledge of HTML, CSS, JSON, Javascript, Node, NPM, React, and Typescript. You will also need to be familiar with Incorta, including Incorta Analyzer, and analytics concepts in general.

### Prerequisites

#### Incorta Account

You'll need access to an Incorta cluster with the SDK enabled. You can request a free account at: `https://cloud.incorta.com/signup`

> Note: The minimum Incorta version needed is 2021.4.2.1 and at present you’ll need to [log a support ticket](https://incortacloudops.zendesk.com/hc/en-us)
> to have the cloud operations team enable the Component SDK in your target cluster.

#### Install Visual Studio Code

Even if you have another favorite editor, the Javascript handling with VSC is just that good.

https://code.visualstudio.com

> Note: These instructions presume that you are running Mac OS. Sorry, I don't have the equivalent instructions for Linux and Windows yet.
> The basic requirements and steps are the same.
> If you have the correct setup instructions for these environments, please issue a pull request.

#### Install NodeJS

On MacOS, I highly recommend using a package manager for installs. The one I use is [HomeBrew](https://brew.sh). Once HomeBrew is installed, NodeJS can be simply installed with the command:

```bash
% brew install node
```

You can also install NodeJS using one of the methods for MacOS per instructions.

https://nodejs.org/en/download

#### Install NPM

The node package manager allows the installation of node packages to projects and commands.

```bash
% brew install npm
```

Note that after you install commands, you will generally need to open a new terminal to use the command. You can also use `hash -r` in zsh/bash and `rehash` in sh/csh.

#### Install Git client

While not strictly necessary (you can download Git projects as .zip files) it is better to clone projects from the repository so that you can easily pull updates.

```brew
% brew install git
```

#### Install the Incorta create-incorta-component package

This lets you create new Incorta components and run the testing server.

```bash
% npm install -g @incorta-org/create-incorta-component
```

### Pull a sample component and test

The cryptocurrency price component is a sample project you can try in Incorta.

```bash
git clone https://github.com/corourke/incorta-crypto.git
```

To test the component in Analyzer:

```bash
cd incorta-crypto
npm install
create-incorta-component start
```

In your tenant (with a custom SDK build installed), load the `historical.csv` data as local file, then use the schema wizard to create a default schema.

Open the Incorta Analyzer and choose the Developer Visual plugin.

To render the component, drag the CoinID and Quantity columns into the corresponding binding trays.

### To Create a new Incorta Component

```bash
% create-incorta-component new
```
