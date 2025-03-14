export class DebtSettlementsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
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
            `;
        })}
        </tbody>
      </table>
    `;
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
