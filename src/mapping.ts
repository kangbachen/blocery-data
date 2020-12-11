import { BigInt } from "@graphprotocol/graph-ts"
import {
  BLY,
  Freeze,
  Unfreeze,
  Lock,
  Unlock,
  Paused,
  Unpaused,
  PauserAdded,
  PauserRemoved,
  OwnershipTransferred,
  Transfer,
  Approval
} from "../generated/BLY/BLY"
import { Freeze_, Lock_, Paused_, Pauser_, OwnershipTransferred_, Transfer_, Approval_ } from "../generated/schema"

export function handleFreeze(event: Freeze): void {
  let entity = Freeze_.load(event.params.holder.toHex())

  if (entity == null) {
    entity = new Freeze_(event.params.holder.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.holder = event.params.holder
  entity.save()
}

export function handleUnfreeze(event: Unfreeze): void {}

export function handleLock(event: Lock): void {
  let entity = Lock_.load(event.params.holder.toHex())

  if (entity == null) {
    entity = new Lock_(event.params.holder.toHex())
  }
  entity.holder = event.params.holder
  entity.value = event.params.value
  entity.releaseTime = event.params.releaseTime
  entity.save()
}

export function handleUnlock(event: Unlock): void {}

export function handlePaused(event: Paused): void {
  let entity = Paused_.load(event.params.account.toHex())

  if (entity == null) {
    entity = new Paused_(event.params.account.toHex())
  }
  entity.account = event.params.account
  entity.save()
}

export function handleUnpaused(event: Unpaused): void {}

export function handlePauserAdded(event: PauserAdded): void {
  let entity = Pauser_.load(event.params.account.toHex())

  if (entity == null) {
    entity = new Pauser_(event.params.account.toHex())
  }
  entity.account = event.params.account
  entity.save()
}

export function handlePauserRemoved(event: PauserRemoved): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let entity = OwnershipTransferred_.load(event.params.previousOwner.toHex())

  if (entity == null) {
    entity = new OwnershipTransferred_(event.params.previousOwner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = Transfer_.load(event.params.from.toHex())

  if (entity == null) {
    entity = new Transfer_(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleApproval(event: Approval): void {
  let entity = Approval_.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new Approval_(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}
