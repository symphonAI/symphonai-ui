# SymphonAI UI Infra

This is the code comprising the infrastructure for the SymphonAI UI. The most important pieces are the S3 bucket, Cloudfront distribution and Origin Access Identity connecting the two.

The code is executed as part of the Github Actions that run on merging of PRs to the main branch.

The `cdk.json` file tells the CDK Toolkit how to execute the app. The build step is not required when using JavaScript.

## Useful commands

- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
