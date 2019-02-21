# Clipchamp TS Style-Guide

This repository holds all sharable rules between our Typescript based libraries, tools and apps. For example,
if you are writing a Typescript library, you may want to only lint Typescript, with no Angular rules.

## Setting Up For Your Project

The most common scenarios you will have is:

  - With Angular Base Rules
  - Without Angular Base Rules

## No Angular Base Rules

You can achieve this via:

```json
{
  "extends": [
    "@clipchamp/tslint-config"
  ]
}
```

## Angular Base Rules

You can achieve this via:

```json
{
  "rulesDirectory": [
    "node_modules/codelyzer"
  ],
  "extends": [
    "@clipchamp/tslint-config/tslint-config-angular"
  ],
  //... Any Extra Rules Here. i.e.: component-selector && directive-selector
}
```

Notice how we are pointing to a local copy of codelyzer? This assumes we have installed codelyzer as a dependencies
in the angular project. This repo also will extend from the base `tslint-config.json` file, so regular TypeScript
rules are also enforced.
