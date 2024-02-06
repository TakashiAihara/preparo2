// @generated by protobuf-ts 2.9.0 with parameter client_generic,server_generic,force_optimize_speed
// @generated from protobuf file "health.proto" (package "grpc.health.v1", syntax proto3)
// tslint:disable
//
// Copyright 2015 The gRPC Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
// The canonical version of this proto can be found at
// https://github.com/grpc/grpc-proto/blob/master/grpc/health/v1/health.proto
//
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Health } from "./health";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { HealthCheckResponse } from "./health";
import type { HealthCheckRequest } from "./health";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service grpc.health.v1.Health
 */
export interface IHealthClient {
    /**
     * If the requested service is unknown, the call will fail with status
     * NOT_FOUND.
     *
     * @generated from protobuf rpc: Check(grpc.health.v1.HealthCheckRequest) returns (grpc.health.v1.HealthCheckResponse);
     */
    check(input: HealthCheckRequest, options?: RpcOptions): UnaryCall<HealthCheckRequest, HealthCheckResponse>;
    /**
     * Performs a watch for the serving status of the requested service.
     * The server will immediately send back a message indicating the current
     * serving status.  It will then subsequently send a new message whenever
     * the service's serving status changes.
     *
     * If the requested service is unknown when the call is received, the
     * server will send a message setting the serving status to
     * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
     * future point, the serving status of the service becomes known, the
     * server will send a new message with the service's serving status.
     *
     * If the call terminates with status UNIMPLEMENTED, then clients
     * should assume this method is not supported and should not retry the
     * call.  If the call terminates with any other status (including OK),
     * clients should retry the call with appropriate exponential backoff.
     *
     * @generated from protobuf rpc: Watch(grpc.health.v1.HealthCheckRequest) returns (stream grpc.health.v1.HealthCheckResponse);
     */
    watch(input: HealthCheckRequest, options?: RpcOptions): ServerStreamingCall<HealthCheckRequest, HealthCheckResponse>;
}
/**
 * @generated from protobuf service grpc.health.v1.Health
 */
export class HealthClient implements IHealthClient, ServiceInfo {
    typeName = Health.typeName;
    methods = Health.methods;
    options = Health.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * If the requested service is unknown, the call will fail with status
     * NOT_FOUND.
     *
     * @generated from protobuf rpc: Check(grpc.health.v1.HealthCheckRequest) returns (grpc.health.v1.HealthCheckResponse);
     */
    check(input: HealthCheckRequest, options?: RpcOptions): UnaryCall<HealthCheckRequest, HealthCheckResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<HealthCheckRequest, HealthCheckResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Performs a watch for the serving status of the requested service.
     * The server will immediately send back a message indicating the current
     * serving status.  It will then subsequently send a new message whenever
     * the service's serving status changes.
     *
     * If the requested service is unknown when the call is received, the
     * server will send a message setting the serving status to
     * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
     * future point, the serving status of the service becomes known, the
     * server will send a new message with the service's serving status.
     *
     * If the call terminates with status UNIMPLEMENTED, then clients
     * should assume this method is not supported and should not retry the
     * call.  If the call terminates with any other status (including OK),
     * clients should retry the call with appropriate exponential backoff.
     *
     * @generated from protobuf rpc: Watch(grpc.health.v1.HealthCheckRequest) returns (stream grpc.health.v1.HealthCheckResponse);
     */
    watch(input: HealthCheckRequest, options?: RpcOptions): ServerStreamingCall<HealthCheckRequest, HealthCheckResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<HealthCheckRequest, HealthCheckResponse>("serverStreaming", this._transport, method, opt, input);
    }
}
