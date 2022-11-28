// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ClosedStreamEndDate extends ethereum.Event {
  get params(): ClosedStreamEndDate__Params {
    return new ClosedStreamEndDate__Params(this);
  }
}

export class ClosedStreamEndDate__Params {
  _event: ClosedStreamEndDate;

  constructor(event: ClosedStreamEndDate) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SuperfluidEndResolverRoleAdminChanged extends ethereum.Event {
  get params(): SuperfluidEndResolverRoleAdminChanged__Params {
    return new SuperfluidEndResolverRoleAdminChanged__Params(this);
  }
}

export class SuperfluidEndResolverRoleAdminChanged__Params {
  _event: SuperfluidEndResolverRoleAdminChanged;

  constructor(event: SuperfluidEndResolverRoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class SuperfluidEndResolverRoleGranted extends ethereum.Event {
  get params(): SuperfluidEndResolverRoleGranted__Params {
    return new SuperfluidEndResolverRoleGranted__Params(this);
  }
}

export class SuperfluidEndResolverRoleGranted__Params {
  _event: SuperfluidEndResolverRoleGranted;

  constructor(event: SuperfluidEndResolverRoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SuperfluidEndResolverRoleRevoked extends ethereum.Event {
  get params(): SuperfluidEndResolverRoleRevoked__Params {
    return new SuperfluidEndResolverRoleRevoked__Params(this);
  }
}

export class SuperfluidEndResolverRoleRevoked__Params {
  _event: SuperfluidEndResolverRoleRevoked;

  constructor(event: SuperfluidEndResolverRoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SuperfluidEndResolverWrappedTokenToPreventLiquidation extends ethereum.Event {
  get params(): SuperfluidEndResolverWrappedTokenToPreventLiquidation__Params {
    return new SuperfluidEndResolverWrappedTokenToPreventLiquidation__Params(
      this
    );
  }
}

export class SuperfluidEndResolverWrappedTokenToPreventLiquidation__Params {
  _event: SuperfluidEndResolverWrappedTokenToPreventLiquidation;

  constructor(event: SuperfluidEndResolverWrappedTokenToPreventLiquidation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SuperfluidEndResolver__checkerResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }

  getCanExec(): boolean {
    return this.value0;
  }

  getExecPayload(): Bytes {
    return this.value1;
  }
}

export class SuperfluidEndResolver extends ethereum.SmartContract {
  static bind(address: Address): SuperfluidEndResolver {
    return new SuperfluidEndResolver("SuperfluidEndResolver", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  GELATO(): Bytes {
    let result = super.call("GELATO", "GELATO():(bytes32)", []);

    return result[0].toBytes();
  }

  try_GELATO(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("GELATO", "GELATO():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  checker(): SuperfluidEndResolver__checkerResult {
    let result = super.call("checker", "checker():(bool,bytes)", []);

    return new SuperfluidEndResolver__checkerResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_checker(): ethereum.CallResult<SuperfluidEndResolver__checkerResult> {
    let result = super.tryCall("checker", "checker():(bool,bytes)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SuperfluidEndResolver__checkerResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ibAlluoAddresses(param0: BigInt): Address {
    let result = super.call(
      "ibAlluoAddresses",
      "ibAlluoAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_ibAlluoAddresses(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ibAlluoAddresses",
      "ibAlluoAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _ibAlluoAddresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _gelato(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddToCheckerCall extends ethereum.Call {
  get inputs(): AddToCheckerCall__Inputs {
    return new AddToCheckerCall__Inputs(this);
  }

  get outputs(): AddToCheckerCall__Outputs {
    return new AddToCheckerCall__Outputs(this);
  }
}

export class AddToCheckerCall__Inputs {
  _call: AddToCheckerCall;

  constructor(call: AddToCheckerCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get duration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddToCheckerCall__Outputs {
  _call: AddToCheckerCall;

  constructor(call: AddToCheckerCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class LiquidateSenderCall extends ethereum.Call {
  get inputs(): LiquidateSenderCall__Inputs {
    return new LiquidateSenderCall__Inputs(this);
  }

  get outputs(): LiquidateSenderCall__Outputs {
    return new LiquidateSenderCall__Outputs(this);
  }
}

export class LiquidateSenderCall__Inputs {
  _call: LiquidateSenderCall;

  constructor(call: LiquidateSenderCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class LiquidateSenderCall__Outputs {
  _call: LiquidateSenderCall;

  constructor(call: LiquidateSenderCall) {
    this._call = call;
  }
}

export class RemoveFromCheckerCall extends ethereum.Call {
  get inputs(): RemoveFromCheckerCall__Inputs {
    return new RemoveFromCheckerCall__Inputs(this);
  }

  get outputs(): RemoveFromCheckerCall__Outputs {
    return new RemoveFromCheckerCall__Outputs(this);
  }
}

export class RemoveFromCheckerCall__Inputs {
  _call: RemoveFromCheckerCall;

  constructor(call: RemoveFromCheckerCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveFromCheckerCall__Outputs {
  _call: RemoveFromCheckerCall;

  constructor(call: RemoveFromCheckerCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}