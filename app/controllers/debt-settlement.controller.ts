import { DebtSettlement } from "../models/debt-settlement.js"
import { DebtSettlements } from "../models/debt-settlements.js"

export class DebtSettlementController {
  private inputDate: HTMLInputElement
  private inputQuantity: HTMLInputElement
  private inputValue: HTMLInputElement
  private debtSettlements = new DebtSettlements()

  constructor() {
    this.inputDate = document.querySelector('#date')
    this.inputQuantity = document.querySelector('#quantity')
    this.inputValue = document.querySelector('#value')
  }

  public add(): void {
    const debt = this.createDebtSettlement()
    this.debtSettlements.add(debt)
    console.log('Negociações => ', this.debtSettlements.listAll())
    this.cleanForm()
  }

  private createDebtSettlement(): DebtSettlement {
    const exp = /-/g
    const date = new Date(this.inputDate.value.replace(exp, '-'))
    const quantity = parseInt(this.inputQuantity.value)
    const value = parseFloat(this.inputValue.value)
    return new DebtSettlement(date, quantity, value)
  }

  private cleanForm(): void {
    this.inputDate.value = ''
    this.inputQuantity.value = ''
    this.inputValue.value = ''
    this.inputDate.focus()
  }
}