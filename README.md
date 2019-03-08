# Clipchamp TS Style-Guide

This repository holds all sharable rules between our Typescript based libraries, tools and apps. For example,
if you are writing a Typescript library, you may want to only lint Typescript, with no Angular rules.

Get up and running by installing the npm package: `@clipchamp/tslint-config`

```sh
npm install --save-dev @clipchamp/tslint-config
```

And don't forget the peer dependencies:

  - codelyzer
  - sonar-ts
  - tslint

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
}
```

