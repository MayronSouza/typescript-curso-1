import { DebtSettlementController } from "./controllers/debt-settlement.controller.js";

const debtSettlementController = new DebtSettlementController()

const form = document.querySelector('#form_debt_settlement')
form.addEventListener('submit', event => {
  event.preventDefault()
  debtSettlementController.add()
})