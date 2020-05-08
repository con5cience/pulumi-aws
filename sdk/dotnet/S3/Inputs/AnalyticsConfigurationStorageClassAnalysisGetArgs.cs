// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Inputs
{

    public sealed class AnalyticsConfigurationStorageClassAnalysisGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Data export configuration (documented below).
        /// </summary>
        [Input("dataExport", required: true)]
        public Input<Inputs.AnalyticsConfigurationStorageClassAnalysisDataExportGetArgs> DataExport { get; set; } = null!;

        public AnalyticsConfigurationStorageClassAnalysisGetArgs()
        {
        }
    }
}
