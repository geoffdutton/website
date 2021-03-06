---
id: retrieving-secrets
title: Retrieving Secrets
sidebar_label: Retrieving Secrets
---

## Overview

Laconia encourages you to define the path to your SSM secret string from AWS
Lambda environment variables. This is important as your application code must
not change regardless of where your secret is stored, for example, if you are
migrating your secrets to AWS Secrets manager.

## Retrieving secrets from SSM

A secret can be retrieved in Laconia by using the [`config`](api/config.md)
package:

```js
/**
 * Lambda Environment variables:
 * - LACONIA_CONFIG_SOME_SECRET: ssm://path/to/secret
 */
const config = require("@laconia/config");
const laconia = require("@laconia/core");

// By convention, the name of the variable `someSecret` is derived by
// the environment variable name `LACONIA_CONFIG_SOME_SECRET`
const app = async (input, { someSecret }) => {
  console.log(someSecret); // Prints the SecretString that has been retrieved from SSM
};

exports.handler = laconia(app).register(config.envVarInstances());
```

## Injecting your secret to another object

Most of the times, you would be using a secret because you'd like to talk to
some external services. Instead of using the secret in your application, Laconia
encourages you to create a service that uses this secret. You can do this by
chaining your factories:

```js
/**
 * Lambda Environment variables:
 * - LACONIA_CONFIG_SOME_SECRET: ssm:/path/to/secret
 */
const config = require("@laconia/config");
const laconia = require("@laconia/core");

const instances = ({ mySecret }) => ({
  externalService: new MyService(mySecret)
});

const app = async (input, { externalService }) => {
  /* logic */
};

exports.handler = laconia(app)
  .register(config.envVarInstances())
  .register(instances);
```
