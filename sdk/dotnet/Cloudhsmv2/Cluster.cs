// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CloudHsmV2
{
    /// <summary>
    /// Creates an Amazon CloudHSM v2 cluster.
    /// 
    /// For information about CloudHSM v2, see the
    /// [AWS CloudHSM User Guide][1] and the [Amazon
    /// CloudHSM API Reference][2].
    /// 
    /// &gt; **NOTE:** CloudHSM can take up to several minutes to be set up.
    /// Practically no single attribute can be updated except TAGS.
    /// If you need to delete a cluster, you have to remove its HSM modules first.
    /// To initialize cluster, you have to add an hsm instance to the cluster then sign CSR and upload it.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudhsm_v2_cluster.html.markdown.
    /// </summary>
    public partial class Cluster : Pulumi.CustomResource
    {
        /// <summary>
        /// The list of cluster certificates.
        /// * `cluster_certificates.0.cluster_certificate` - The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
        /// * `cluster_certificates.0.cluster_csr` - The certificate signing request (CSR). Available only in UNINITIALIZED state after an hsm instance is added to the cluster.
        /// * `cluster_certificates.0.aws_hardware_certificate` - The HSM hardware certificate issued (signed) by AWS CloudHSM.
        /// * `cluster_certificates.0.hsm_certificate` - The HSM certificate issued (signed) by the HSM hardware.
        /// * `cluster_certificates.0.manufacturer_hardware_certificate` - The HSM hardware certificate issued (signed) by the hardware manufacturer.
        /// </summary>
        [Output("clusterCertificates")]
        public Output<ImmutableArray<Outputs.ClusterClusterCertificates>> ClusterCertificates { get; private set; } = null!;

        /// <summary>
        /// The id of the CloudHSM cluster.
        /// </summary>
        [Output("clusterId")]
        public Output<string> ClusterId { get; private set; } = null!;

        /// <summary>
        /// The state of the cluster.
        /// </summary>
        [Output("clusterState")]
        public Output<string> State { get; private set; } = null!;

        /// <summary>
        /// The type of HSM module in the cluster. Currently, only hsm1.medium is supported.
        /// </summary>
        [Output("hsmType")]
        public Output<string> HsmType { get; private set; } = null!;

        /// <summary>
        /// The ID of the security group associated with the CloudHSM cluster.
        /// </summary>
        [Output("securityGroupId")]
        public Output<string> SecurityGroupId { get; private set; } = null!;

        /// <summary>
        /// The id of Cloud HSM v2 cluster backup to be restored.
        /// </summary>
        [Output("sourceBackupIdentifier")]
        public Output<string?> SourceBackupIdentifier { get; private set; } = null!;

        /// <summary>
        /// The IDs of subnets in which cluster will operate.
        /// </summary>
        [Output("subnetIds")]
        public Output<ImmutableArray<string>> SubnetIds { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, object>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The id of the VPC that the CloudHSM cluster resides in.
        /// </summary>
        [Output("vpcId")]
        public Output<string> VpcId { get; private set; } = null!;


        /// <summary>
        /// Create a Cluster resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Cluster(string name, ClusterArgs args, CustomResourceOptions? options = null)
            : base("aws:cloudhsmv2/cluster:Cluster", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Cluster(string name, Input<string> id, ClusterState? state = null, CustomResourceOptions? options = null)
            : base("aws:cloudhsmv2/cluster:Cluster", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Cluster resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Cluster Get(string name, Input<string> id, ClusterState? state = null, CustomResourceOptions? options = null)
        {
            return new Cluster(name, id, state, options);
        }
    }

    public sealed class ClusterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The type of HSM module in the cluster. Currently, only hsm1.medium is supported.
        /// </summary>
        [Input("hsmType", required: true)]
        public Input<string> HsmType { get; set; } = null!;

        /// <summary>
        /// The id of Cloud HSM v2 cluster backup to be restored.
        /// </summary>
        [Input("sourceBackupIdentifier")]
        public Input<string>? SourceBackupIdentifier { get; set; }

        [Input("subnetIds", required: true)]
        private InputList<string>? _subnetIds;

        /// <summary>
        /// The IDs of subnets in which cluster will operate.
        /// </summary>
        public InputList<string> SubnetIds
        {
            get => _subnetIds ?? (_subnetIds = new InputList<string>());
            set => _subnetIds = value;
        }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        public ClusterArgs()
        {
        }
    }

    public sealed class ClusterState : Pulumi.ResourceArgs
    {
        [Input("clusterCertificates")]
        private InputList<Inputs.ClusterClusterCertificatesGetArgs>? _clusterCertificates;

        /// <summary>
        /// The list of cluster certificates.
        /// * `cluster_certificates.0.cluster_certificate` - The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
        /// * `cluster_certificates.0.cluster_csr` - The certificate signing request (CSR). Available only in UNINITIALIZED state after an hsm instance is added to the cluster.
        /// * `cluster_certificates.0.aws_hardware_certificate` - The HSM hardware certificate issued (signed) by AWS CloudHSM.
        /// * `cluster_certificates.0.hsm_certificate` - The HSM certificate issued (signed) by the HSM hardware.
        /// * `cluster_certificates.0.manufacturer_hardware_certificate` - The HSM hardware certificate issued (signed) by the hardware manufacturer.
        /// </summary>
        public InputList<Inputs.ClusterClusterCertificatesGetArgs> ClusterCertificates
        {
            get => _clusterCertificates ?? (_clusterCertificates = new InputList<Inputs.ClusterClusterCertificatesGetArgs>());
            set => _clusterCertificates = value;
        }

        /// <summary>
        /// The id of the CloudHSM cluster.
        /// </summary>
        [Input("clusterId")]
        public Input<string>? ClusterId { get; set; }

        /// <summary>
        /// The state of the cluster.
        /// </summary>
        [Input("clusterState")]
        public Input<string>? State { get; set; }

        /// <summary>
        /// The type of HSM module in the cluster. Currently, only hsm1.medium is supported.
        /// </summary>
        [Input("hsmType")]
        public Input<string>? HsmType { get; set; }

        /// <summary>
        /// The ID of the security group associated with the CloudHSM cluster.
        /// </summary>
        [Input("securityGroupId")]
        public Input<string>? SecurityGroupId { get; set; }

        /// <summary>
        /// The id of Cloud HSM v2 cluster backup to be restored.
        /// </summary>
        [Input("sourceBackupIdentifier")]
        public Input<string>? SourceBackupIdentifier { get; set; }

        [Input("subnetIds")]
        private InputList<string>? _subnetIds;

        /// <summary>
        /// The IDs of subnets in which cluster will operate.
        /// </summary>
        public InputList<string> SubnetIds
        {
            get => _subnetIds ?? (_subnetIds = new InputList<string>());
            set => _subnetIds = value;
        }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// The id of the VPC that the CloudHSM cluster resides in.
        /// </summary>
        [Input("vpcId")]
        public Input<string>? VpcId { get; set; }

        public ClusterState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class ClusterClusterCertificatesGetArgs : Pulumi.ResourceArgs
    {
        [Input("awsHardwareCertificate")]
        public Input<string>? AwsHardwareCertificate { get; set; }

        [Input("clusterCertificate")]
        public Input<string>? ClusterCertificate { get; set; }

        [Input("clusterCsr")]
        public Input<string>? ClusterCsr { get; set; }

        [Input("hsmCertificate")]
        public Input<string>? HsmCertificate { get; set; }

        [Input("manufacturerHardwareCertificate")]
        public Input<string>? ManufacturerHardwareCertificate { get; set; }

        public ClusterClusterCertificatesGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class ClusterClusterCertificates
    {
        public readonly string AwsHardwareCertificate;
        public readonly string ClusterCertificate;
        public readonly string ClusterCsr;
        public readonly string HsmCertificate;
        public readonly string ManufacturerHardwareCertificate;

        [OutputConstructor]
        private ClusterClusterCertificates(
            string awsHardwareCertificate,
            string clusterCertificate,
            string clusterCsr,
            string hsmCertificate,
            string manufacturerHardwareCertificate)
        {
            AwsHardwareCertificate = awsHardwareCertificate;
            ClusterCertificate = clusterCertificate;
            ClusterCsr = clusterCsr;
            HsmCertificate = hsmCertificate;
            ManufacturerHardwareCertificate = manufacturerHardwareCertificate;
        }
    }
    }
}
