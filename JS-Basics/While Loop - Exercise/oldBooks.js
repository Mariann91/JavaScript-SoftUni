function oldBooks(input) {
    let aniBook = input[0];

    let bookNumber = 0;
    let index = 1;
    
    while (true) {
        let currentBook = input[index];

        if (currentBook === aniBook) {
            console.log(`You checked ${bookNumber} books and found it.`);
            break;
        }

        if (currentBook === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${bookNumber} books.`);
            break;
        }
        
        bookNumber++;
        index++;
    }

}
