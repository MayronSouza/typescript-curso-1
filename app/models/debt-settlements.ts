import { DebtSettlement } from "./debt-settlement.js";

export class DebtSettlements {
  private debtSettlements: DebtSettlement[] = []

  add(debt: DebtSettlement): void {
    this.debtSettlements.push(debt)
  }

  listAll(): readonly DebtSettlement[] {
    return this.debtSettlements
  }
}