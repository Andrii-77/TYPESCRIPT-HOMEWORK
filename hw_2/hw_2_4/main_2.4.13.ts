function exchange1(sumUAH: number, currencyValues: {currency: string, value: number}[], exchangeCurrency: string): number {
    let choiceCurrency: {currency: string, value: number};
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choiceCurrency = item;
        }
    }
    return sumUAH / choiceCurrency.value;
}

console.log(exchange1(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));