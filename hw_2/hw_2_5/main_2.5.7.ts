let listCountedWithText = (text: string, counter: number): void => {
    document.write(`<ul>`)
    for (let i: number = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}

listCountedWithText( 'Hello!!!',30);