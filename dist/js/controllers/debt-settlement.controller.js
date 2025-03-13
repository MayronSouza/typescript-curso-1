import { DebtSettlement } from "../models/debt-settlement.js";
export class DebtSettlementController {
    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        const debt = this.createDebtSettlement();
        console.log('Negociação criada => ', debt);
        this.cleanForm();
    }
    createDebtSettlement() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, '-'));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new DebtSettlement(date, quantity, value);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
