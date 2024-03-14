// @generated by protobuf-ts 2.8.3 with parameter long_type_string
// @generated from protobuf file "pb/api/v1/data.proto" (package "testgrid.api.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { TestGridData } from "./data";
import type { GetDashboardSummaryResponse } from "./data";
import type { GetDashboardSummaryRequest } from "./data";
import type { ListDashboardSummariesResponse } from "./data";
import type { ListDashboardSummariesRequest } from "./data";
import type { GetTabSummaryResponse } from "./data";
import type { GetTabSummaryRequest } from "./data";
import type { ListTabSummariesResponse } from "./data";
import type { ListTabSummariesRequest } from "./data";
import type { ListRowsResponse } from "./data";
import type { ListRowsRequest } from "./data";
import type { ListHeadersResponse } from "./data";
import type { ListHeadersRequest } from "./data";
import type { GetDashboardGroupResponse } from "./data";
import type { GetDashboardGroupRequest } from "./data";
import type { GetDashboardResponse } from "./data";
import type { GetDashboardRequest } from "./data";
import type { ListDashboardTabsResponse } from "./data";
import type { ListDashboardTabsRequest } from "./data";
import type { ListDashboardGroupsResponse } from "./data";
import type { ListDashboardGroupsRequest } from "./data";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ListDashboardsResponse } from "./data";
import type { ListDashboardsRequest } from "./data";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service testgrid.api.v1.TestGridData
 */
export interface ITestGridDataClient {
    /**
     * GET /dashboards
     * Lists dashboard names
     *
     * @generated from protobuf rpc: ListDashboards(testgrid.api.v1.ListDashboardsRequest) returns (testgrid.api.v1.ListDashboardsResponse);
     */
    listDashboards(input: ListDashboardsRequest, options?: RpcOptions): UnaryCall<ListDashboardsRequest, ListDashboardsResponse>;
    /**
     * GET /dashboard-groups
     * Lists the dashboard group names
     *
     * @generated from protobuf rpc: ListDashboardGroups(testgrid.api.v1.ListDashboardGroupsRequest) returns (testgrid.api.v1.ListDashboardGroupsResponse);
     */
    listDashboardGroups(input: ListDashboardGroupsRequest, options?: RpcOptions): UnaryCall<ListDashboardGroupsRequest, ListDashboardGroupsResponse>;
    /**
     * GET /dashboards/{dashboard}/tabs
     * Lists the dashboard tab names
     *
     * @generated from protobuf rpc: ListDashboardTabs(testgrid.api.v1.ListDashboardTabsRequest) returns (testgrid.api.v1.ListDashboardTabsResponse);
     */
    listDashboardTabs(input: ListDashboardTabsRequest, options?: RpcOptions): UnaryCall<ListDashboardTabsRequest, ListDashboardTabsResponse>;
    /**
     * GET /dashboards/{dashboard}
     * Returns a Dashboard config's metadata
     * Excludes subtabs, accessed through the /tabs list method instead
     *
     * @generated from protobuf rpc: GetDashboard(testgrid.api.v1.GetDashboardRequest) returns (testgrid.api.v1.GetDashboardResponse);
     */
    getDashboard(input: GetDashboardRequest, options?: RpcOptions): UnaryCall<GetDashboardRequest, GetDashboardResponse>;
    /**
     * GET /dashboard-groups/{dashboard-group}
     * Lists the dashboard names in that group
     *
     * @generated from protobuf rpc: GetDashboardGroup(testgrid.api.v1.GetDashboardGroupRequest) returns (testgrid.api.v1.GetDashboardGroupResponse);
     */
    getDashboardGroup(input: GetDashboardGroupRequest, options?: RpcOptions): UnaryCall<GetDashboardGroupRequest, GetDashboardGroupResponse>;
    /**
     * GET /dashboards/{dashboard}/tabs/{tab}/headers
     * Returns the headers for grid results
     *
     * @generated from protobuf rpc: ListHeaders(testgrid.api.v1.ListHeadersRequest) returns (testgrid.api.v1.ListHeadersResponse);
     */
    listHeaders(input: ListHeadersRequest, options?: RpcOptions): UnaryCall<ListHeadersRequest, ListHeadersResponse>;
    /**
     * GET /dashboards/{dashboard}/tabs/{tab}/rows
     * Returns information on grid rows, and data within those rows
     *
     * @generated from protobuf rpc: ListRows(testgrid.api.v1.ListRowsRequest) returns (testgrid.api.v1.ListRowsResponse);
     */
    listRows(input: ListRowsRequest, options?: RpcOptions): UnaryCall<ListRowsRequest, ListRowsResponse>;
    /**
     * GET /dashboards/{dashboard}/tab-summaries
     * Returns the list of tab summaries for dashboard.
     *
     * @generated from protobuf rpc: ListTabSummaries(testgrid.api.v1.ListTabSummariesRequest) returns (testgrid.api.v1.ListTabSummariesResponse);
     */
    listTabSummaries(input: ListTabSummariesRequest, options?: RpcOptions): UnaryCall<ListTabSummariesRequest, ListTabSummariesResponse>;
    /**
     * GET /dashboards/{dashboard}/tab-summaries/{tab}
     *
     * @generated from protobuf rpc: GetTabSummary(testgrid.api.v1.GetTabSummaryRequest) returns (testgrid.api.v1.GetTabSummaryResponse);
     */
    getTabSummary(input: GetTabSummaryRequest, options?: RpcOptions): UnaryCall<GetTabSummaryRequest, GetTabSummaryResponse>;
    /**
     * GET /dashboard-groups/{dashboard-group}/dashboard-summaries
     *
     * @generated from protobuf rpc: ListDashboardSummaries(testgrid.api.v1.ListDashboardSummariesRequest) returns (testgrid.api.v1.ListDashboardSummariesResponse);
     */
    listDashboardSummaries(input: ListDashboardSummariesRequest, options?: RpcOptions): UnaryCall<ListDashboardSummariesRequest, ListDashboardSummariesResponse>;
    /**
     * GET /dashboards/{dashboard}/summary
     *
     * @generated from protobuf rpc: GetDashboardSummary(testgrid.api.v1.GetDashboardSummaryRequest) returns (testgrid.api.v1.GetDashboardSummaryResponse);
     */
    getDashboardSummary(input: GetDashboardSummaryRequest, options?: RpcOptions): UnaryCall<GetDashboardSummaryRequest, GetDashboardSummaryResponse>;
}
/**
 * @generated from protobuf service testgrid.api.v1.TestGridData
 */
export class TestGridDataClient implements ITestGridDataClient, ServiceInfo {
    typeName = TestGridData.typeName;
    methods = TestGridData.methods;
    options = TestGridData.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * GET /dashboards
     * Lists dashboard names
     *
     * @generated from protobuf rpc: ListDashboards(testgrid.api.v1.ListDashboardsRequest) returns (testgrid.api.v1.ListDashboardsResponse);
     */
    listDashboards(input: ListDashboardsRequest, options?: RpcOptions): UnaryCall<ListDashboardsRequest, ListDashboardsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListDashboardsRequest, ListDashboardsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboard-groups
     * Lists the dashboard group names
     *
     * @generated from protobuf rpc: ListDashboardGroups(testgrid.api.v1.ListDashboardGroupsRequest) returns (testgrid.api.v1.ListDashboardGroupsResponse);
     */
    listDashboardGroups(input: ListDashboardGroupsRequest, options?: RpcOptions): UnaryCall<ListDashboardGroupsRequest, ListDashboardGroupsResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListDashboardGroupsRequest, ListDashboardGroupsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboards/{dashboard}/tabs
     * Lists the dashboard tab names
     *
     * @generated from protobuf rpc: ListDashboardTabs(testgrid.api.v1.ListDashboardTabsRequest) returns (testgrid.api.v1.ListDashboardTabsResponse);
     */
    listDashboardTabs(input: ListDashboardTabsRequest, options?: RpcOptions): UnaryCall<ListDashboardTabsRequest, ListDashboardTabsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListDashboardTabsRequest, ListDashboardTabsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboards/{dashboard}
     * Returns a Dashboard config's metadata
     * Excludes subtabs, accessed through the /tabs list method instead
     *
     * @generated from protobuf rpc: GetDashboard(testgrid.api.v1.GetDashboardRequest) returns (testgrid.api.v1.GetDashboardResponse);
     */
    getDashboard(input: GetDashboardRequest, options?: RpcOptions): UnaryCall<GetDashboardRequest, GetDashboardResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetDashboardRequest, GetDashboardResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboard-groups/{dashboard-group}
     * Lists the dashboard names in that group
     *
     * @generated from protobuf rpc: GetDashboardGroup(testgrid.api.v1.GetDashboardGroupRequest) returns (testgrid.api.v1.GetDashboardGroupResponse);
     */
    getDashboardGroup(input: GetDashboardGroupRequest, options?: RpcOptions): UnaryCall<GetDashboardGroupRequest, GetDashboardGroupResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetDashboardGroupRequest, GetDashboardGroupResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboards/{dashboard}/tabs/{tab}/headers
     * Returns the headers for grid results
     *
     * @generated from protobuf rpc: ListHeaders(testgrid.api.v1.ListHeadersRequest) returns (testgrid.api.v1.ListHeadersResponse);
     */
    listHeaders(input: ListHeadersRequest, options?: RpcOptions): UnaryCall<ListHeadersRequest, ListHeadersResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListHeadersRequest, ListHeadersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboards/{dashboard}/tabs/{tab}/rows
     * Returns information on grid rows, and data within those rows
     *
     * @generated from protobuf rpc: ListRows(testgrid.api.v1.ListRowsRequest) returns (testgrid.api.v1.ListRowsResponse);
     */
    listRows(input: ListRowsRequest, options?: RpcOptions): UnaryCall<ListRowsRequest, ListRowsResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListRowsRequest, ListRowsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboards/{dashboard}/tab-summaries
     * Returns the list of tab summaries for dashboard.
     *
     * @generated from protobuf rpc: ListTabSummaries(testgrid.api.v1.ListTabSummariesRequest) returns (testgrid.api.v1.ListTabSummariesResponse);
     */
    listTabSummaries(input: ListTabSummariesRequest, options?: RpcOptions): UnaryCall<ListTabSummariesRequest, ListTabSummariesResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListTabSummariesRequest, ListTabSummariesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboards/{dashboard}/tab-summaries/{tab}
     *
     * @generated from protobuf rpc: GetTabSummary(testgrid.api.v1.GetTabSummaryRequest) returns (testgrid.api.v1.GetTabSummaryResponse);
     */
    getTabSummary(input: GetTabSummaryRequest, options?: RpcOptions): UnaryCall<GetTabSummaryRequest, GetTabSummaryResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetTabSummaryRequest, GetTabSummaryResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboard-groups/{dashboard-group}/dashboard-summaries
     *
     * @generated from protobuf rpc: ListDashboardSummaries(testgrid.api.v1.ListDashboardSummariesRequest) returns (testgrid.api.v1.ListDashboardSummariesResponse);
     */
    listDashboardSummaries(input: ListDashboardSummariesRequest, options?: RpcOptions): UnaryCall<ListDashboardSummariesRequest, ListDashboardSummariesResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListDashboardSummariesRequest, ListDashboardSummariesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GET /dashboards/{dashboard}/summary
     *
     * @generated from protobuf rpc: GetDashboardSummary(testgrid.api.v1.GetDashboardSummaryRequest) returns (testgrid.api.v1.GetDashboardSummaryResponse);
     */
    getDashboardSummary(input: GetDashboardSummaryRequest, options?: RpcOptions): UnaryCall<GetDashboardSummaryRequest, GetDashboardSummaryResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetDashboardSummaryRequest, GetDashboardSummaryResponse>("unary", this._transport, method, opt, input);
    }
}
