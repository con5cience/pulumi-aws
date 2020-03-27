// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package iam

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an IAM role policy.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/iam_role_policy.html.markdown.
type RolePolicy struct {
	pulumi.CustomResourceState

	// The name of the role policy. If omitted, this provider will
	// assign a random, unique name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix pulumi.StringPtrOutput `pulumi:"namePrefix"`
	// The policy document. This is a JSON formatted string.
	Policy pulumi.StringOutput `pulumi:"policy"`
	// The IAM role to attach to the policy.
	Role pulumi.StringOutput `pulumi:"role"`
}

// NewRolePolicy registers a new resource with the given unique name, arguments, and options.
func NewRolePolicy(ctx *pulumi.Context,
	name string, args *RolePolicyArgs, opts ...pulumi.ResourceOption) (*RolePolicy, error) {
	if args == nil || args.Policy == nil {
		return nil, errors.New("missing required argument 'Policy'")
	}
	if args == nil || args.Role == nil {
		return nil, errors.New("missing required argument 'Role'")
	}
	if args == nil {
		args = &RolePolicyArgs{}
	}
	var resource RolePolicy
	err := ctx.RegisterResource("aws:iam/rolePolicy:RolePolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRolePolicy gets an existing RolePolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRolePolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RolePolicyState, opts ...pulumi.ResourceOption) (*RolePolicy, error) {
	var resource RolePolicy
	err := ctx.ReadResource("aws:iam/rolePolicy:RolePolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering RolePolicy resources.
type rolePolicyState struct {
	// The name of the role policy. If omitted, this provider will
	// assign a random, unique name.
	Name *string `pulumi:"name"`
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix *string `pulumi:"namePrefix"`
	// The policy document. This is a JSON formatted string.
	Policy *string `pulumi:"policy"`
	// The IAM role to attach to the policy.
	Role *string `pulumi:"role"`
}

type RolePolicyState struct {
	// The name of the role policy. If omitted, this provider will
	// assign a random, unique name.
	Name pulumi.StringPtrInput
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix pulumi.StringPtrInput
	// The policy document. This is a JSON formatted string.
	Policy pulumi.StringPtrInput
	// The IAM role to attach to the policy.
	Role pulumi.StringPtrInput
}

func (RolePolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*rolePolicyState)(nil)).Elem()
}

type rolePolicyArgs struct {
	// The name of the role policy. If omitted, this provider will
	// assign a random, unique name.
	Name *string `pulumi:"name"`
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix *string `pulumi:"namePrefix"`
	// The policy document. This is a JSON formatted string.
	Policy interface{} `pulumi:"policy"`
	// The IAM role to attach to the policy.
	Role interface{} `pulumi:"role"`
}

// The set of arguments for constructing a RolePolicy resource.
type RolePolicyArgs struct {
	// The name of the role policy. If omitted, this provider will
	// assign a random, unique name.
	Name pulumi.StringPtrInput
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix pulumi.StringPtrInput
	// The policy document. This is a JSON formatted string.
	Policy pulumi.Input
	// The IAM role to attach to the policy.
	Role pulumi.Input
}

func (RolePolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*rolePolicyArgs)(nil)).Elem()
}
