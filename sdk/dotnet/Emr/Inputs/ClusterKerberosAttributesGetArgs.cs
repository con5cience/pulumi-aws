// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Emr.Inputs
{

    public sealed class ClusterKerberosAttributesGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Active Directory password for `ad_domain_join_user`. This provider cannot perform drift detection of this configuration.
        /// </summary>
        [Input("adDomainJoinPassword")]
        public Input<string>? AdDomainJoinPassword { get; set; }

        /// <summary>
        /// Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain. This provider cannot perform drift detection of this configuration.
        /// </summary>
        [Input("adDomainJoinUser")]
        public Input<string>? AdDomainJoinUser { get; set; }

        /// <summary>
        /// Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms. This provider cannot perform drift detection of this configuration.
        /// </summary>
        [Input("crossRealmTrustPrincipalPassword")]
        public Input<string>? CrossRealmTrustPrincipalPassword { get; set; }

        /// <summary>
        /// The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster. This provider cannot perform drift detection of this configuration.
        /// </summary>
        [Input("kdcAdminPassword", required: true)]
        public Input<string> KdcAdminPassword { get; set; } = null!;

        /// <summary>
        /// The name of the Kerberos realm to which all nodes in a cluster belong. For example, `EC2.INTERNAL`
        /// </summary>
        [Input("realm", required: true)]
        public Input<string> Realm { get; set; } = null!;

        public ClusterKerberosAttributesGetArgs()
        {
        }
    }
}
