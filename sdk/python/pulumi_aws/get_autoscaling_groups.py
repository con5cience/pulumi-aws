# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class GetAutoscalingGroupsResult:
    """
    A collection of values returned by getAutoscalingGroups.
    """
    def __init__(__self__, arns=None, filters=None, names=None, id=None):
        if arns and not isinstance(arns, list):
            raise TypeError("Expected argument 'arns' to be a list")
        __self__.arns = arns
        """
        A list of the Autoscaling Groups Arns in the current region.
        """
        if filters and not isinstance(filters, list):
            raise TypeError("Expected argument 'filters' to be a list")
        __self__.filters = filters
        if names and not isinstance(names, list):
            raise TypeError("Expected argument 'names' to be a list")
        __self__.names = names
        """
        A list of the Autoscaling Groups in the current region.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_autoscaling_groups(filters=None,opts=None):
    """
    The Autoscaling Groups data source allows access to the list of AWS
    ASGs within a specific region. This will allow you to pass a list of AutoScaling Groups to other resources.
    """
    __args__ = dict()

    __args__['filters'] = filters
    __ret__ = await pulumi.runtime.invoke('aws:index/getAutoscalingGroups:getAutoscalingGroups', __args__, opts=opts)

    return GetAutoscalingGroupsResult(
        arns=__ret__.get('arns'),
        filters=__ret__.get('filters'),
        names=__ret__.get('names'),
        id=__ret__.get('id'))
