# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Channel(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the channel
    """
    channel_id: pulumi.Output[str]
    """
    A unique identifier describing the channel
    """
    description: pulumi.Output[str]
    """
    A description of the channel
    """
    hls_ingests: pulumi.Output[list]
    """
    A single item list of HLS ingest information
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, channel_id=None, description=None, tags=None, __name__=None, __opts__=None):
        """
        Provides an AWS Elemental MediaPackage Channel.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] channel_id: A unique identifier describing the channel
        :param pulumi.Input[str] description: A description of the channel
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if channel_id is None:
            raise TypeError("Missing required property 'channel_id'")
        __props__['channel_id'] = channel_id

        __props__['description'] = description

        __props__['tags'] = tags

        __props__['arn'] = None
        __props__['hls_ingests'] = None

        super(Channel, __self__).__init__(
            'aws:mediapackage/channel:Channel',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

