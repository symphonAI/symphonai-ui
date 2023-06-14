#!/usr/bin/env node

const cdk = require("aws-cdk-lib");
const { InfraStack } = require("../lib/ui-infra-stack");

const app = new cdk.App();
const stack = new InfraStack(app, "SymphonAIUIInfraStack", {
  env: { account: "349564020337", region: "ap-southeast-2" },
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
