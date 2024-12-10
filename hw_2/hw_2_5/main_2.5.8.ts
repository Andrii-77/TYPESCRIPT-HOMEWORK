let listOfPrimitives = (arrayOfPrimitives: any[]): void => {
    document.write(`<ul>`)
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}

listOfPrimitives([523, -743, true, 'Hello!!!', false])