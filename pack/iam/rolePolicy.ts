// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class RolePolicy extends lumi.NamedResource implements RolePolicyArgs {
    public readonly rolePolicyName: string;
    public readonly namePrefix?: string;
    public readonly policy: string;
    public readonly role: string;

    public static get(id: lumi.ID): RolePolicy {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): RolePolicy[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(name: string, args: RolePolicyArgs) {
        super(name);
        this.rolePolicyName = args.rolePolicyName;
        this.namePrefix = args.namePrefix;
        if (lumirt.defaultIfComputed(args.policy, "") === undefined) {
            throw new Error("Property argument 'policy' is required, but was missing");
        }
        this.policy = args.policy;
        if (lumirt.defaultIfComputed(args.role, "") === undefined) {
            throw new Error("Property argument 'role' is required, but was missing");
        }
        this.role = args.role;
    }
}

export interface RolePolicyArgs {
    readonly rolePolicyName?: string;
    readonly namePrefix?: string;
    readonly policy: string;
    readonly role: string;
}
