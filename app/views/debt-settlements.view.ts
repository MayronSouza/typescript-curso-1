import { DebtSettlements } from "../models/debt-settlements"

export class DebtSettlementsView {
  private element: HTMLElement

  constructor(selector: string) {
    this.element = document.querySelector(selector)
  }

  private template(model: DebtSettlements): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model.listAll().map(debtSettlement => {
            return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(debtSettlement.date)}</td>
                <td>${debtSettlement.quantity}</td>
                <td>${debtSettlement.value}</td>
              </tr>
            `
          })}
        </tbody>
      </table>
    `
  }

  update(model: DebtSettlements): void {
    this.element.innerHTML = this.template(model)
  }
}