import { DebtSettlement } from "./models/debt-settlement.js";
const debtSettlement = new DebtSettlement(new Date());
debtSettlement.quantity = 10;
console.log('data da negociação => ', debtSettlement.date);
console.log('quantidade de negociações => ', debtSettlement.quantity);
console.log('valor da negociação => ', debtSettlement.value);
console.log('volume da negociação => ', debtSettlement.volume);
