// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a directory registration in AWS WorkSpaces Service
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const mainVpc = new aws.ec2.Vpc("main", {
 *     cidrBlock: "10.0.0.0/16",
 * });
 * const privateA = new aws.ec2.Subnet("private-a", {
 *     availabilityZone: "us-east-1a",
 *     cidrBlock: "10.0.0.0/24",
 *     vpcId: mainVpc.id,
 * });
 * const privateB = new aws.ec2.Subnet("private-b", {
 *     availabilityZone: "us-east-1b",
 *     cidrBlock: "10.0.1.0/24",
 *     vpcId: mainVpc.id,
 * });
 * const mainDirectory = new aws.directoryservice.Directory("main", {
 *     password: "#S1ncerely",
 *     size: "Small",
 *     vpcSettings: {
 *         subnetIds: [
 *             private_a.id,
 *             private_b.id,
 *         ],
 *         vpcId: mainVpc.id,
 *     },
 * });
 * const mainWorkspacesDirectory = new aws.workspaces.Directory("main", {
 *     directoryId: mainDirectory.id,
 *     selfServicePermissions: {
 *         increaseVolumeSize: true,
 *         rebuildWorkspace: true,
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/workspaces_directory.html.markdown.
 */
export class Directory extends pulumi.CustomResource {
    /**
     * Get an existing Directory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DirectoryState, opts?: pulumi.CustomResourceOptions): Directory {
        return new Directory(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:workspaces/directory:Directory';

    /**
     * Returns true if the given object is an instance of Directory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Directory {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Directory.__pulumiType;
    }

    /**
     * The directory alias.
     */
    public /*out*/ readonly alias!: pulumi.Output<string>;
    /**
     * The user name for the service account.
     */
    public /*out*/ readonly customerUserName!: pulumi.Output<string>;
    /**
     * The directory identifier for registration in WorkSpaces service.
     */
    public readonly directoryId!: pulumi.Output<string>;
    /**
     * The name of the directory.
     */
    public /*out*/ readonly directoryName!: pulumi.Output<string>;
    /**
     * The directory type.
     */
    public /*out*/ readonly directoryType!: pulumi.Output<string>;
    /**
     * The IP addresses of the DNS servers for the directory.
     */
    public /*out*/ readonly dnsIpAddresses!: pulumi.Output<string[]>;
    /**
     * The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.
     */
    public /*out*/ readonly iamRoleId!: pulumi.Output<string>;
    /**
     * The identifiers of the IP access control groups associated with the directory.
     */
    public /*out*/ readonly ipGroupIds!: pulumi.Output<string[]>;
    /**
     * The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.
     */
    public /*out*/ readonly registrationCode!: pulumi.Output<string>;
    /**
     * The permissions to enable or disable self-service capabilities.
     */
    public readonly selfServicePermissions!: pulumi.Output<outputs.workspaces.DirectorySelfServicePermissions>;
    /**
     * The identifiers of the subnets where the directory resides.
     */
    public readonly subnetIds!: pulumi.Output<string[]>;
    /**
     * A map of tags assigned to the WorkSpaces directory.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The identifier of the security group that is assigned to new WorkSpaces.
     */
    public /*out*/ readonly workspaceSecurityGroupId!: pulumi.Output<string>;

    /**
     * Create a Directory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DirectoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DirectoryArgs | DirectoryState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DirectoryState | undefined;
            inputs["alias"] = state ? state.alias : undefined;
            inputs["customerUserName"] = state ? state.customerUserName : undefined;
            inputs["directoryId"] = state ? state.directoryId : undefined;
            inputs["directoryName"] = state ? state.directoryName : undefined;
            inputs["directoryType"] = state ? state.directoryType : undefined;
            inputs["dnsIpAddresses"] = state ? state.dnsIpAddresses : undefined;
            inputs["iamRoleId"] = state ? state.iamRoleId : undefined;
            inputs["ipGroupIds"] = state ? state.ipGroupIds : undefined;
            inputs["registrationCode"] = state ? state.registrationCode : undefined;
            inputs["selfServicePermissions"] = state ? state.selfServicePermissions : undefined;
            inputs["subnetIds"] = state ? state.subnetIds : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["workspaceSecurityGroupId"] = state ? state.workspaceSecurityGroupId : undefined;
        } else {
            const args = argsOrState as DirectoryArgs | undefined;
            if (!args || args.directoryId === undefined) {
                throw new Error("Missing required property 'directoryId'");
            }
            inputs["directoryId"] = args ? args.directoryId : undefined;
            inputs["selfServicePermissions"] = args ? args.selfServicePermissions : undefined;
            inputs["subnetIds"] = args ? args.subnetIds : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["alias"] = undefined /*out*/;
            inputs["customerUserName"] = undefined /*out*/;
            inputs["directoryName"] = undefined /*out*/;
            inputs["directoryType"] = undefined /*out*/;
            inputs["dnsIpAddresses"] = undefined /*out*/;
            inputs["iamRoleId"] = undefined /*out*/;
            inputs["ipGroupIds"] = undefined /*out*/;
            inputs["registrationCode"] = undefined /*out*/;
            inputs["workspaceSecurityGroupId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Directory.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Directory resources.
 */
export interface DirectoryState {
    /**
     * The directory alias.
     */
    readonly alias?: pulumi.Input<string>;
    /**
     * The user name for the service account.
     */
    readonly customerUserName?: pulumi.Input<string>;
    /**
     * The directory identifier for registration in WorkSpaces service.
     */
    readonly directoryId?: pulumi.Input<string>;
    /**
     * The name of the directory.
     */
    readonly directoryName?: pulumi.Input<string>;
    /**
     * The directory type.
     */
    readonly directoryType?: pulumi.Input<string>;
    /**
     * The IP addresses of the DNS servers for the directory.
     */
    readonly dnsIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.
     */
    readonly iamRoleId?: pulumi.Input<string>;
    /**
     * The identifiers of the IP access control groups associated with the directory.
     */
    readonly ipGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.
     */
    readonly registrationCode?: pulumi.Input<string>;
    /**
     * The permissions to enable or disable self-service capabilities.
     */
    readonly selfServicePermissions?: pulumi.Input<inputs.workspaces.DirectorySelfServicePermissions>;
    /**
     * The identifiers of the subnets where the directory resides.
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A map of tags assigned to the WorkSpaces directory.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The identifier of the security group that is assigned to new WorkSpaces.
     */
    readonly workspaceSecurityGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Directory resource.
 */
export interface DirectoryArgs {
    /**
     * The directory identifier for registration in WorkSpaces service.
     */
    readonly directoryId: pulumi.Input<string>;
    /**
     * The permissions to enable or disable self-service capabilities.
     */
    readonly selfServicePermissions?: pulumi.Input<inputs.workspaces.DirectorySelfServicePermissions>;
    /**
     * The identifiers of the subnets where the directory resides.
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A map of tags assigned to the WorkSpaces directory.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
