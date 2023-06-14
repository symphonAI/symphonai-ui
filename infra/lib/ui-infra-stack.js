const { Stack } = require("aws-cdk-lib");
const {
  Bucket,
  BucketEncryption,
  BlockPublicAccess,
  ObjectOwnership,
} = require("aws-cdk-lib/aws-s3");
const { S3Origin } = require("aws-cdk-lib/aws-cloudfront-origins");
const {
  Distribution,
  ViewerProtocolPolicy,
  CachePolicy,
  AllowedMethods,
  OriginAccessIdentity,
} = require("aws-cdk-lib/aws-cloudfront");
const { Certificate } = require("aws-cdk-lib/aws-certificatemanager");

class UIInfraStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const uiBucket = new Bucket(this, "symphonai-ui-bucket", {
      objectOwnership: ObjectOwnership.BUCKET_OWNER_ENFORCED,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      bucketName: "symphon.ai",
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      "symphonai-ui-oai"
    );
    uiBucket.grantRead(originAccessIdentity);

    const uiCloudfrontDistribution = new Distribution(
      this,
      "symphonai-ui-cfdistribution",
      {
        defaultBehavior: {
          origin: new S3Origin(uiBucket, {
            originAccessIdentity,
          }),
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          cachePolicy: CachePolicy.CACHING_DISABLED,
          allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        },
        domainNames: ["symphon.ai"],
        certificate: Certificate.fromCertificateArn(
          this,
          "symphonai-ui-cert",
          "arn:aws:acm:us-east-1:349564020337:certificate/36971f14-0cb5-49d0-9a61-a743a637cc1f"
        ),
        defaultRootObject: "index.html",
      }
    );
  }
}

module.exports = { InfraStack: UIInfraStack };
