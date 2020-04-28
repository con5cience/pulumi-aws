# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetSnapshotIdsResult:
    """
    A collection of values returned by getSnapshotIds.
    """
    def __init__(__self__, filters=None, id=None, ids=None, owners=None, restorable_by_user_ids=None):
        if filters and not isinstance(filters, list):
            raise TypeError("Expected argument 'filters' to be a list")
        __self__.filters = filters
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if ids and not isinstance(ids, list):
            raise TypeError("Expected argument 'ids' to be a list")
        __self__.ids = ids
        if owners and not isinstance(owners, list):
            raise TypeError("Expected argument 'owners' to be a list")
        __self__.owners = owners
        if restorable_by_user_ids and not isinstance(restorable_by_user_ids, list):
            raise TypeError("Expected argument 'restorable_by_user_ids' to be a list")
        __self__.restorable_by_user_ids = restorable_by_user_ids
class AwaitableGetSnapshotIdsResult(GetSnapshotIdsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetSnapshotIdsResult(
            filters=self.filters,
            id=self.id,
            ids=self.ids,
            owners=self.owners,
            restorable_by_user_ids=self.restorable_by_user_ids)

def get_snapshot_ids(filters=None,owners=None,restorable_by_user_ids=None,opts=None):
    """
    Use this data source to get a list of EBS Snapshot IDs matching the specified
    criteria.




    :param list filters: One or more name/value pairs to filter off of. There are
           several valid keys, for a full reference, check out
           [describe-volumes in the AWS CLI reference][1].
    :param list owners: Returns the snapshots owned by the specified owner id. Multiple owners can be specified.
    :param list restorable_by_user_ids: One or more AWS accounts IDs that can create volumes from the snapshot.

    The **filters** object supports the following:

      * `name` (`str`)
      * `values` (`list`)
    """
    __args__ = dict()


    __args__['filters'] = filters
    __args__['owners'] = owners
    __args__['restorableByUserIds'] = restorable_by_user_ids
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('aws:ebs/getSnapshotIds:getSnapshotIds', __args__, opts=opts).value

    return AwaitableGetSnapshotIdsResult(
        filters=__ret__.get('filters'),
        id=__ret__.get('id'),
        ids=__ret__.get('ids'),
        owners=__ret__.get('owners'),
        restorable_by_user_ids=__ret__.get('restorableByUserIds'))
