# Requiring Native (Core) Modules

Some modules within the NodeJS Core are global — they can be used anywhere. However, other modules — like ‘utilities’ — are not and thus need to be required before use.

**Nothing substitutes simply reading the [NodeJS API Docs](https://nodejs.org/dist/latest-v6.x/docs/api/).**

When you require a module, Node will recognize those that are native by default and use them.
