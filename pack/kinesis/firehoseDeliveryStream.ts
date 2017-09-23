// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a Kinesis Firehose Delivery Stream resource. Amazon Kinesis Firehose is a fully managed, elastic service to easily deliver real-time data streams to destinations such as Amazon S3 and Amazon Redshift.
 * 
 * For more details, see the [Amazon Kinesis Firehose Documentation][1].
 */
export class FirehoseDeliveryStream extends pulumi.Resource {
    /**
     * The Amazon Resource Name (ARN) specifying the Stream
     */
    public readonly arn: pulumi.Computed<string>;
    /**
     * This is the destination to where the data is delivered. The only options are `s3` (Deprecated, use `extended_s3` instead), `extended_s3`, `redshift`, and `elasticsearch`.
     */
    public readonly destination: pulumi.Computed<string>;
    public readonly destinationId: pulumi.Computed<string>;
    public readonly elasticsearchConfiguration?: pulumi.Computed<{ bufferingInterval?: number, bufferingSize?: number, cloudwatchLoggingOptions: { enabled?: boolean, logGroupName?: string, logStreamName?: string }[], domainArn: string, indexName: string, indexRotationPeriod?: string, retryDuration?: number, roleArn: string, s3BackupMode?: string, typeName?: string }[]>;
    /**
     * Enhanced configuration options for the s3 destination. More details are given below.
     */
    public readonly extendedS3Configuration?: pulumi.Computed<{ bucketArn: string, bufferInterval?: number, bufferSize?: number, cloudwatchLoggingOptions: { enabled?: boolean, logGroupName?: string, logStreamName?: string }[], compressionFormat?: string, kmsKeyArn?: string, prefix?: string, processingConfiguration?: { enabled?: boolean, processors?: { parameters?: { parameterName: string, parameterValue: string }[], type: string }[] }[], roleArn: string }[]>;
    /**
     * A name to identify the stream. This is unique to the
     * AWS account and region the Stream is created in.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * Configuration options if redshift is the destination.
     * Using `redshift_configuration` requires the user to also specify a
     * `s3_configuration` block. More details are given below.
     */
    public readonly redshiftConfiguration?: pulumi.Computed<{ cloudwatchLoggingOptions: { enabled?: boolean, logGroupName?: string, logStreamName?: string }[], clusterJdbcurl: string, copyOptions?: string, dataTableColumns?: string, dataTableName: string, password: string, retryDuration?: number, roleArn: string, username: string }[]>;
    /**
     * Configuration options for the s3 destination (or the intermediate bucket if the destination
     * is redshift). More details are given below.
     */
    public readonly s3Configuration?: pulumi.Computed<{ bucketArn: string, bufferInterval?: number, bufferSize?: number, cloudwatchLoggingOptions: { enabled?: boolean, logGroupName?: string, logStreamName?: string }[], compressionFormat?: string, kmsKeyArn?: string, prefix?: string, roleArn: string }[]>;
    public readonly versionId: pulumi.Computed<string>;

    /**
     * Create a FirehoseDeliveryStream resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this FirehoseDeliveryStream instance
     * @param args A collection of arguments for creating this FirehoseDeliveryStream intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: FirehoseDeliveryStreamArgs, dependsOn?: pulumi.Resource[]) {
        if (args.destination === undefined) {
            throw new Error("Missing required property 'destination'");
        }
        super("aws:kinesis/firehoseDeliveryStream:FirehoseDeliveryStream", urnName, {
            "arn": args.arn,
            "destination": args.destination,
            "destinationId": args.destinationId,
            "elasticsearchConfiguration": args.elasticsearchConfiguration,
            "extendedS3Configuration": args.extendedS3Configuration,
            "name": args.name,
            "redshiftConfiguration": args.redshiftConfiguration,
            "s3Configuration": args.s3Configuration,
            "versionId": args.versionId,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a FirehoseDeliveryStream resource.
 */
export interface FirehoseDeliveryStreamArgs {
    readonly arn?: pulumi.ComputedValue<string>;
    /**
     * This is the destination to where the data is delivered. The only options are `s3` (Deprecated, use `extended_s3` instead), `extended_s3`, `redshift`, and `elasticsearch`.
     */
    readonly destination: pulumi.ComputedValue<string>;
    readonly destinationId?: pulumi.ComputedValue<string>;
    readonly elasticsearchConfiguration?: pulumi.ComputedValue<{ bufferingInterval?: pulumi.ComputedValue<number>, bufferingSize?: pulumi.ComputedValue<number>, cloudwatchLoggingOptions?: pulumi.ComputedValue<{ enabled?: pulumi.ComputedValue<boolean>, logGroupName?: pulumi.ComputedValue<string>, logStreamName?: pulumi.ComputedValue<string> }>[], domainArn: pulumi.ComputedValue<string>, indexName: pulumi.ComputedValue<string>, indexRotationPeriod?: pulumi.ComputedValue<string>, retryDuration?: pulumi.ComputedValue<number>, roleArn: pulumi.ComputedValue<string>, s3BackupMode?: pulumi.ComputedValue<string>, typeName?: pulumi.ComputedValue<string> }>[];
    /**
     * Enhanced configuration options for the s3 destination. More details are given below.
     */
    readonly extendedS3Configuration?: pulumi.ComputedValue<{ bucketArn: pulumi.ComputedValue<string>, bufferInterval?: pulumi.ComputedValue<number>, bufferSize?: pulumi.ComputedValue<number>, cloudwatchLoggingOptions?: pulumi.ComputedValue<{ enabled?: pulumi.ComputedValue<boolean>, logGroupName?: pulumi.ComputedValue<string>, logStreamName?: pulumi.ComputedValue<string> }>[], compressionFormat?: pulumi.ComputedValue<string>, kmsKeyArn?: pulumi.ComputedValue<string>, prefix?: pulumi.ComputedValue<string>, processingConfiguration?: pulumi.ComputedValue<{ enabled?: pulumi.ComputedValue<boolean>, processors?: pulumi.ComputedValue<{ parameters?: pulumi.ComputedValue<{ parameterName: pulumi.ComputedValue<string>, parameterValue: pulumi.ComputedValue<string> }>[], type: pulumi.ComputedValue<string> }>[] }>[], roleArn: pulumi.ComputedValue<string> }>[];
    /**
     * A name to identify the stream. This is unique to the
     * AWS account and region the Stream is created in.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * Configuration options if redshift is the destination.
     * Using `redshift_configuration` requires the user to also specify a
     * `s3_configuration` block. More details are given below.
     */
    readonly redshiftConfiguration?: pulumi.ComputedValue<{ cloudwatchLoggingOptions?: pulumi.ComputedValue<{ enabled?: pulumi.ComputedValue<boolean>, logGroupName?: pulumi.ComputedValue<string>, logStreamName?: pulumi.ComputedValue<string> }>[], clusterJdbcurl: pulumi.ComputedValue<string>, copyOptions?: pulumi.ComputedValue<string>, dataTableColumns?: pulumi.ComputedValue<string>, dataTableName: pulumi.ComputedValue<string>, password: pulumi.ComputedValue<string>, retryDuration?: pulumi.ComputedValue<number>, roleArn: pulumi.ComputedValue<string>, username: pulumi.ComputedValue<string> }>[];
    /**
     * Configuration options for the s3 destination (or the intermediate bucket if the destination
     * is redshift). More details are given below.
     */
    readonly s3Configuration?: pulumi.ComputedValue<{ bucketArn: pulumi.ComputedValue<string>, bufferInterval?: pulumi.ComputedValue<number>, bufferSize?: pulumi.ComputedValue<number>, cloudwatchLoggingOptions?: pulumi.ComputedValue<{ enabled?: pulumi.ComputedValue<boolean>, logGroupName?: pulumi.ComputedValue<string>, logStreamName?: pulumi.ComputedValue<string> }>[], compressionFormat?: pulumi.ComputedValue<string>, kmsKeyArn?: pulumi.ComputedValue<string>, prefix?: pulumi.ComputedValue<string>, roleArn: pulumi.ComputedValue<string> }>[];
    readonly versionId?: pulumi.ComputedValue<string>;
}

