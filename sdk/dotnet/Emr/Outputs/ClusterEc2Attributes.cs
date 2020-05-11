// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Emr.Outputs
{

    [OutputType]
    public sealed class ClusterEc2Attributes
    {
        /// <summary>
        /// String containing a comma separated list of additional Amazon EC2 security group IDs for the master node
        /// </summary>
        public readonly string? AdditionalMasterSecurityGroups;
        /// <summary>
        /// String containing a comma separated list of additional Amazon EC2 security group IDs for the slave nodes as a comma separated string
        /// </summary>
        public readonly string? AdditionalSlaveSecurityGroups;
        /// <summary>
        /// Identifier of the Amazon EC2 EMR-Managed security group for the master node
        /// </summary>
        public readonly string? EmrManagedMasterSecurityGroup;
        /// <summary>
        /// Identifier of the Amazon EC2 EMR-Managed security group for the slave nodes
        /// </summary>
        public readonly string? EmrManagedSlaveSecurityGroup;
        /// <summary>
        /// Instance Profile for EC2 instances of the cluster assume this role
        /// </summary>
        public readonly string InstanceProfile;
        /// <summary>
        /// Amazon EC2 key pair that can be used to ssh to the master node as the user called `hadoop`
        /// </summary>
        public readonly string? KeyName;
        /// <summary>
        /// Identifier of the Amazon EC2 service-access security group - required when the cluster runs on a private subnet
        /// </summary>
        public readonly string? ServiceAccessSecurityGroup;
        /// <summary>
        /// VPC subnet id where you want the job flow to launch. Cannot specify the `cc1.4xlarge` instance type for nodes of a job flow launched in a Amazon VPC
        /// </summary>
        public readonly string? SubnetId;

        [OutputConstructor]
        private ClusterEc2Attributes(
            string? additionalMasterSecurityGroups,

            string? additionalSlaveSecurityGroups,

            string? emrManagedMasterSecurityGroup,

            string? emrManagedSlaveSecurityGroup,

            string instanceProfile,

            string? keyName,

            string? serviceAccessSecurityGroup,

            string? subnetId)
        {
            AdditionalMasterSecurityGroups = additionalMasterSecurityGroups;
            AdditionalSlaveSecurityGroups = additionalSlaveSecurityGroups;
            EmrManagedMasterSecurityGroup = emrManagedMasterSecurityGroup;
            EmrManagedSlaveSecurityGroup = emrManagedSlaveSecurityGroup;
            InstanceProfile = instanceProfile;
            KeyName = keyName;
            ServiceAccessSecurityGroup = serviceAccessSecurityGroup;
            SubnetId = subnetId;
        }
    }
}