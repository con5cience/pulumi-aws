// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package cloudhsmv2

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Creates an Amazon CloudHSM v2 cluster.
//
// For information about CloudHSM v2, see the
// [AWS CloudHSM User Guide][1] and the [Amazon
// CloudHSM API Reference][2].
//
// > **NOTE:** CloudHSM can take up to several minutes to be set up.
// Practically no single attribute can be updated except TAGS.
// If you need to delete a cluster, you have to remove its HSM modules first.
// To initialize cluster, you have to add an hsm instance to the cluster then sign CSR and upload it.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudhsm_v2_cluster.html.markdown.
type Cluster struct {
	pulumi.CustomResourceState

	// The list of cluster certificates.
	// * `cluster_certificates.0.cluster_certificate` - The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
	// * `cluster_certificates.0.cluster_csr` - The certificate signing request (CSR). Available only in UNINITIALIZED state after an hsm instance is added to the cluster.
	// * `cluster_certificates.0.aws_hardware_certificate` - The HSM hardware certificate issued (signed) by AWS CloudHSM.
	// * `cluster_certificates.0.hsm_certificate` - The HSM certificate issued (signed) by the HSM hardware.
	// * `cluster_certificates.0.manufacturer_hardware_certificate` - The HSM hardware certificate issued (signed) by the hardware manufacturer.
	ClusterCertificates ClusterClusterCertificateArrayOutput `pulumi:"clusterCertificates"`
	// The id of the CloudHSM cluster.
	ClusterId pulumi.StringOutput `pulumi:"clusterId"`
	// The state of the cluster.
	ClusterState pulumi.StringOutput `pulumi:"clusterState"`
	// The type of HSM module in the cluster. Currently, only hsm1.medium is supported.
	HsmType pulumi.StringOutput `pulumi:"hsmType"`
	// The ID of the security group associated with the CloudHSM cluster.
	SecurityGroupId pulumi.StringOutput `pulumi:"securityGroupId"`
	// The id of Cloud HSM v2 cluster backup to be restored.
	SourceBackupIdentifier pulumi.StringPtrOutput `pulumi:"sourceBackupIdentifier"`
	// The IDs of subnets in which cluster will operate.
	SubnetIds pulumi.StringArrayOutput `pulumi:"subnetIds"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.MapOutput `pulumi:"tags"`
	// The id of the VPC that the CloudHSM cluster resides in.
	VpcId pulumi.StringOutput `pulumi:"vpcId"`
}

// NewCluster registers a new resource with the given unique name, arguments, and options.
func NewCluster(ctx *pulumi.Context,
	name string, args *ClusterArgs, opts ...pulumi.ResourceOption) (*Cluster, error) {
	if args == nil || args.HsmType == nil {
		return nil, errors.New("missing required argument 'HsmType'")
	}
	if args == nil || args.SubnetIds == nil {
		return nil, errors.New("missing required argument 'SubnetIds'")
	}
	if args == nil {
		args = &ClusterArgs{}
	}
	var resource Cluster
	err := ctx.RegisterResource("aws:cloudhsmv2/cluster:Cluster", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCluster gets an existing Cluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCluster(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ClusterState, opts ...pulumi.ResourceOption) (*Cluster, error) {
	var resource Cluster
	err := ctx.ReadResource("aws:cloudhsmv2/cluster:Cluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Cluster resources.
type clusterState struct {
	// The list of cluster certificates.
	// * `cluster_certificates.0.cluster_certificate` - The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
	// * `cluster_certificates.0.cluster_csr` - The certificate signing request (CSR). Available only in UNINITIALIZED state after an hsm instance is added to the cluster.
	// * `cluster_certificates.0.aws_hardware_certificate` - The HSM hardware certificate issued (signed) by AWS CloudHSM.
	// * `cluster_certificates.0.hsm_certificate` - The HSM certificate issued (signed) by the HSM hardware.
	// * `cluster_certificates.0.manufacturer_hardware_certificate` - The HSM hardware certificate issued (signed) by the hardware manufacturer.
	ClusterCertificates []ClusterClusterCertificate `pulumi:"clusterCertificates"`
	// The id of the CloudHSM cluster.
	ClusterId *string `pulumi:"clusterId"`
	// The state of the cluster.
	ClusterState *string `pulumi:"clusterState"`
	// The type of HSM module in the cluster. Currently, only hsm1.medium is supported.
	HsmType *string `pulumi:"hsmType"`
	// The ID of the security group associated with the CloudHSM cluster.
	SecurityGroupId *string `pulumi:"securityGroupId"`
	// The id of Cloud HSM v2 cluster backup to be restored.
	SourceBackupIdentifier *string `pulumi:"sourceBackupIdentifier"`
	// The IDs of subnets in which cluster will operate.
	SubnetIds []string `pulumi:"subnetIds"`
	// A mapping of tags to assign to the resource.
	Tags map[string]interface{} `pulumi:"tags"`
	// The id of the VPC that the CloudHSM cluster resides in.
	VpcId *string `pulumi:"vpcId"`
}

type ClusterState struct {
	// The list of cluster certificates.
	// * `cluster_certificates.0.cluster_certificate` - The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
	// * `cluster_certificates.0.cluster_csr` - The certificate signing request (CSR). Available only in UNINITIALIZED state after an hsm instance is added to the cluster.
	// * `cluster_certificates.0.aws_hardware_certificate` - The HSM hardware certificate issued (signed) by AWS CloudHSM.
	// * `cluster_certificates.0.hsm_certificate` - The HSM certificate issued (signed) by the HSM hardware.
	// * `cluster_certificates.0.manufacturer_hardware_certificate` - The HSM hardware certificate issued (signed) by the hardware manufacturer.
	ClusterCertificates ClusterClusterCertificateArrayInput
	// The id of the CloudHSM cluster.
	ClusterId pulumi.StringPtrInput
	// The state of the cluster.
	ClusterState pulumi.StringPtrInput
	// The type of HSM module in the cluster. Currently, only hsm1.medium is supported.
	HsmType pulumi.StringPtrInput
	// The ID of the security group associated with the CloudHSM cluster.
	SecurityGroupId pulumi.StringPtrInput
	// The id of Cloud HSM v2 cluster backup to be restored.
	SourceBackupIdentifier pulumi.StringPtrInput
	// The IDs of subnets in which cluster will operate.
	SubnetIds pulumi.StringArrayInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.MapInput
	// The id of the VPC that the CloudHSM cluster resides in.
	VpcId pulumi.StringPtrInput
}

func (ClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterState)(nil)).Elem()
}

type clusterArgs struct {
	// The type of HSM module in the cluster. Currently, only hsm1.medium is supported.
	HsmType string `pulumi:"hsmType"`
	// The id of Cloud HSM v2 cluster backup to be restored.
	SourceBackupIdentifier *string `pulumi:"sourceBackupIdentifier"`
	// The IDs of subnets in which cluster will operate.
	SubnetIds []string `pulumi:"subnetIds"`
	// A mapping of tags to assign to the resource.
	Tags map[string]interface{} `pulumi:"tags"`
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	// The type of HSM module in the cluster. Currently, only hsm1.medium is supported.
	HsmType pulumi.StringInput
	// The id of Cloud HSM v2 cluster backup to be restored.
	SourceBackupIdentifier pulumi.StringPtrInput
	// The IDs of subnets in which cluster will operate.
	SubnetIds pulumi.StringArrayInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.MapInput
}

func (ClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterArgs)(nil)).Elem()
}
