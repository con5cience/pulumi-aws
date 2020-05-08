// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Outputs
{

    [OutputType]
    public sealed class AnalyticsConfigurationStorageClassAnalysisDataExport
    {
        /// <summary>
        /// Specifies the destination for the exported analytics data (documented below).
        /// </summary>
        public readonly Outputs.AnalyticsConfigurationStorageClassAnalysisDataExportDestination Destination;
        /// <summary>
        /// The schema version of exported analytics data. Allowed values: `V_1`. Default value: `V_1`.
        /// </summary>
        public readonly string? OutputSchemaVersion;

        [OutputConstructor]
        private AnalyticsConfigurationStorageClassAnalysisDataExport(
            Outputs.AnalyticsConfigurationStorageClassAnalysisDataExportDestination destination,

            string? outputSchemaVersion)
        {
            Destination = destination;
            OutputSchemaVersion = outputSchemaVersion;
        }
    }
}
