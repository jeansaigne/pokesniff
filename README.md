oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pokesniff
$ pokesniff COMMAND
running command...
$ pokesniff (--version)
pokesniff/0.0.0 darwin-x64 node-v16.13.1
$ pokesniff --help [COMMAND]
USAGE
  $ pokesniff COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pokesniff hello PERSON`](#pokesniff-hello-person)
* [`pokesniff hello world`](#pokesniff-hello-world)
* [`pokesniff help [COMMAND]`](#pokesniff-help-command)
* [`pokesniff plugins`](#pokesniff-plugins)
* [`pokesniff plugins:install PLUGIN...`](#pokesniff-pluginsinstall-plugin)
* [`pokesniff plugins:inspect PLUGIN...`](#pokesniff-pluginsinspect-plugin)
* [`pokesniff plugins:install PLUGIN...`](#pokesniff-pluginsinstall-plugin-1)
* [`pokesniff plugins:link PLUGIN`](#pokesniff-pluginslink-plugin)
* [`pokesniff plugins:uninstall PLUGIN...`](#pokesniff-pluginsuninstall-plugin)
* [`pokesniff plugins:uninstall PLUGIN...`](#pokesniff-pluginsuninstall-plugin-1)
* [`pokesniff plugins:uninstall PLUGIN...`](#pokesniff-pluginsuninstall-plugin-2)
* [`pokesniff plugins update`](#pokesniff-plugins-update)

## `pokesniff hello PERSON`

Say hello

```
USAGE
  $ pokesniff hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/jeansaigne/pokesniff/blob/v0.0.0/dist/commands/hello/index.ts)_

## `pokesniff hello world`

Say hello world

```
USAGE
  $ pokesniff hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ pokesniff hello world
  hello world! (./src/commands/hello/world.ts)
```

## `pokesniff help [COMMAND]`

Display help for pokesniff.

```
USAGE
  $ pokesniff help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for pokesniff.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `pokesniff plugins`

List installed plugins.

```
USAGE
  $ pokesniff plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ pokesniff plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `pokesniff plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ pokesniff plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ pokesniff plugins add

EXAMPLES
  $ pokesniff plugins:install myplugin 

  $ pokesniff plugins:install https://github.com/someuser/someplugin

  $ pokesniff plugins:install someuser/someplugin
```

## `pokesniff plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ pokesniff plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ pokesniff plugins:inspect myplugin
```

## `pokesniff plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ pokesniff plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ pokesniff plugins add

EXAMPLES
  $ pokesniff plugins:install myplugin 

  $ pokesniff plugins:install https://github.com/someuser/someplugin

  $ pokesniff plugins:install someuser/someplugin
```

## `pokesniff plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ pokesniff plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ pokesniff plugins:link myplugin
```

## `pokesniff plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pokesniff plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pokesniff plugins unlink
  $ pokesniff plugins remove
```

## `pokesniff plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pokesniff plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pokesniff plugins unlink
  $ pokesniff plugins remove
```

## `pokesniff plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pokesniff plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pokesniff plugins unlink
  $ pokesniff plugins remove
```

## `pokesniff plugins update`

Update installed plugins.

```
USAGE
  $ pokesniff plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
