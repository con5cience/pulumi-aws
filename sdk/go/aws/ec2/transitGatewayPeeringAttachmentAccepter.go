// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages the accepter's side of an EC2 Transit Gateway Peering Attachment.
type TransitGatewayPeeringAttachmentAccepter struct {
	pulumi.CustomResourceState

	// Identifier of the AWS account that owns the EC2 TGW peering.
	PeerAccountId pulumi.StringOutput `pulumi:"peerAccountId"`
	PeerRegion    pulumi.StringOutput `pulumi:"peerRegion"`
	// Identifier of EC2 Transit Gateway to peer with.
	PeerTransitGatewayId pulumi.StringOutput `pulumi:"peerTransitGatewayId"`
	// Key-value tags for the EC2 Transit Gateway Peering Attachment.
	Tags pulumi.MapOutput `pulumi:"tags"`
	// The ID of the EC2 Transit Gateway Peering Attachment to manage.
	TransitGatewayAttachmentId pulumi.StringOutput `pulumi:"transitGatewayAttachmentId"`
	// Identifier of EC2 Transit Gateway.
	TransitGatewayId pulumi.StringOutput `pulumi:"transitGatewayId"`
}

// NewTransitGatewayPeeringAttachmentAccepter registers a new resource with the given unique name, arguments, and options.
func NewTransitGatewayPeeringAttachmentAccepter(ctx *pulumi.Context,
	name string, args *TransitGatewayPeeringAttachmentAccepterArgs, opts ...pulumi.ResourceOption) (*TransitGatewayPeeringAttachmentAccepter, error) {
	if args == nil || args.TransitGatewayAttachmentId == nil {
		return nil, errors.New("missing required argument 'TransitGatewayAttachmentId'")
	}
	if args == nil {
		args = &TransitGatewayPeeringAttachmentAccepterArgs{}
	}
	var resource TransitGatewayPeeringAttachmentAccepter
	err := ctx.RegisterResource("aws:ec2/transitGatewayPeeringAttachmentAccepter:TransitGatewayPeeringAttachmentAccepter", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTransitGatewayPeeringAttachmentAccepter gets an existing TransitGatewayPeeringAttachmentAccepter resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTransitGatewayPeeringAttachmentAccepter(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TransitGatewayPeeringAttachmentAccepterState, opts ...pulumi.ResourceOption) (*TransitGatewayPeeringAttachmentAccepter, error) {
	var resource TransitGatewayPeeringAttachmentAccepter
	err := ctx.ReadResource("aws:ec2/transitGatewayPeeringAttachmentAccepter:TransitGatewayPeeringAttachmentAccepter", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering TransitGatewayPeeringAttachmentAccepter resources.
type transitGatewayPeeringAttachmentAccepterState struct {
	// Identifier of the AWS account that owns the EC2 TGW peering.
	PeerAccountId *string `pulumi:"peerAccountId"`
	PeerRegion    *string `pulumi:"peerRegion"`
	// Identifier of EC2 Transit Gateway to peer with.
	PeerTransitGatewayId *string `pulumi:"peerTransitGatewayId"`
	// Key-value tags for the EC2 Transit Gateway Peering Attachment.
	Tags map[string]interface{} `pulumi:"tags"`
	// The ID of the EC2 Transit Gateway Peering Attachment to manage.
	TransitGatewayAttachmentId *string `pulumi:"transitGatewayAttachmentId"`
	// Identifier of EC2 Transit Gateway.
	TransitGatewayId *string `pulumi:"transitGatewayId"`
}

type TransitGatewayPeeringAttachmentAccepterState struct {
	// Identifier of the AWS account that owns the EC2 TGW peering.
	PeerAccountId pulumi.StringPtrInput
	PeerRegion    pulumi.StringPtrInput
	// Identifier of EC2 Transit Gateway to peer with.
	PeerTransitGatewayId pulumi.StringPtrInput
	// Key-value tags for the EC2 Transit Gateway Peering Attachment.
	Tags pulumi.MapInput
	// The ID of the EC2 Transit Gateway Peering Attachment to manage.
	TransitGatewayAttachmentId pulumi.StringPtrInput
	// Identifier of EC2 Transit Gateway.
	TransitGatewayId pulumi.StringPtrInput
}

func (TransitGatewayPeeringAttachmentAccepterState) ElementType() reflect.Type {
	return reflect.TypeOf((*transitGatewayPeeringAttachmentAccepterState)(nil)).Elem()
}

type transitGatewayPeeringAttachmentAccepterArgs struct {
	// Key-value tags for the EC2 Transit Gateway Peering Attachment.
	Tags map[string]interface{} `pulumi:"tags"`
	// The ID of the EC2 Transit Gateway Peering Attachment to manage.
	TransitGatewayAttachmentId string `pulumi:"transitGatewayAttachmentId"`
}

// The set of arguments for constructing a TransitGatewayPeeringAttachmentAccepter resource.
type TransitGatewayPeeringAttachmentAccepterArgs struct {
	// Key-value tags for the EC2 Transit Gateway Peering Attachment.
	Tags pulumi.MapInput
	// The ID of the EC2 Transit Gateway Peering Attachment to manage.
	TransitGatewayAttachmentId pulumi.StringInput
}

func (TransitGatewayPeeringAttachmentAccepterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*transitGatewayPeeringAttachmentAccepterArgs)(nil)).Elem()
}
