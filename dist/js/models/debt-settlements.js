export class DebtSettlements {
    constructor() {
        this.debtSettlements = [];
    }
    add(debt) {
        this.debtSettlements.push(debt);
    }
    listAll() {
        return this.debtSettlements;
    }
}
