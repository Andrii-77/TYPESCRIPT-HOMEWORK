function listCountedWithText1(text: string, counter: number): void {
    document.write(`<ul>`)
    for (let i: number = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}

listCountedWithText1( 'Hello!!!',30);