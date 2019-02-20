// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Neptune Parameter Group
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.neptune.ParameterGroup("example", {
 *     family: "neptune1",
 *     name: "example",
 *     parameters: [{
 *         name: "neptune_query_timeout",
 *         value: "25",
 *     }],
 * });
 * ```
 */
export class ParameterGroup extends pulumi.CustomResource {
    /**
     * Get an existing ParameterGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ParameterGroupState, opts?: pulumi.CustomResourceOptions): ParameterGroup {
        return new ParameterGroup(name, <any>state, { ...opts, id: id });
    }

    /**
     * The Neptune parameter group Amazon Resource Name (ARN).
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The description of the Neptune parameter group. Defaults to "Managed by Terraform".
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * The family of the Neptune parameter group.
     */
    public readonly family: pulumi.Output<string>;
    /**
     * The name of the Neptune parameter.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A list of Neptune parameters to apply.
     */
    public readonly parameters: pulumi.Output<{ applyMethod?: string, name: string, value: string }[] | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a ParameterGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ParameterGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ParameterGroupArgs | ParameterGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ParameterGroupState = argsOrState as ParameterGroupState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["family"] = state ? state.family : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ParameterGroupArgs | undefined;
            if (!args || args.family === undefined) {
                throw new Error("Missing required property 'family'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["family"] = args ? args.family : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:neptune/parameterGroup:ParameterGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ParameterGroup resources.
 */
export interface ParameterGroupState {
    /**
     * The Neptune parameter group Amazon Resource Name (ARN).
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The description of the Neptune parameter group. Defaults to "Managed by Terraform".
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The family of the Neptune parameter group.
     */
    readonly family?: pulumi.Input<string>;
    /**
     * The name of the Neptune parameter.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of Neptune parameters to apply.
     */
    readonly parameters?: pulumi.Input<pulumi.Input<{ applyMethod?: pulumi.Input<string>, name: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a ParameterGroup resource.
 */
export interface ParameterGroupArgs {
    /**
     * The description of the Neptune parameter group. Defaults to "Managed by Terraform".
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The family of the Neptune parameter group.
     */
    readonly family: pulumi.Input<string>;
    /**
     * The name of the Neptune parameter.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of Neptune parameters to apply.
     */
    readonly parameters?: pulumi.Input<pulumi.Input<{ applyMethod?: pulumi.Input<string>, name: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The live ParameterGroup resource.
 */
export interface ParameterGroupResult {
    /**
     * The Neptune parameter group Amazon Resource Name (ARN).
     */
    readonly arn: string;
    /**
     * The description of the Neptune parameter group. Defaults to "Managed by Terraform".
     */
    readonly description?: string;
    /**
     * The family of the Neptune parameter group.
     */
    readonly family: string;
    /**
     * The name of the Neptune parameter.
     */
    readonly name: string;
    /**
     * A list of Neptune parameters to apply.
     */
    readonly parameters?: { applyMethod?: string, name: string, value: string }[];
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: {[key: string]: any};
}
