import * as readlineSync from 'readline-sync';

type Book = {
    title: string,
    author:string,
    isbn: string
}

let books: Book[] = [];

function addBook(){
    const title:string = readlineSync.question("Enter book title: ");
    const author:string = readlineSync.question("Enter book author: ");
    const isbn:string = readlineSync.question("Enter book ISBN: ");
    // console.log(title, author, isbn);
    const newBook:Book = {title:title, author:author, isbn:isbn};
    books.push(newBook);

    console.log(`Book ${title} was added successfully!`)
}

function viewBooks(){
    if(books.length > 0){
        let i = 0;
        for(let book of books ){
            i++;
            console.log(`\nBook ${i}`);
            console.log(`Title: ${book.title}, author: ${book.author}, ISBN: ${book.isbn}`);
        }
    }
    else console.log("No books in the library");
}

function deleteBook(){
    const isbn: string  = readlineSync.question("Enter the ISBN of the book you want to delete: ");
    const index = books.findIndex(book => book.isbn === isbn);
    if(index===-1){
        console.log('Book not found')
    } else {
        books.splice(index, 1);
        console.log('Book deleted successfully!');
    }
}

function mainMenu(){
    let shouldExit:boolean = false;
    while(!shouldExit){
        console.log("\n---Main menu ---")
        console.log("\n1. Add book\n2. View books\n3. Delete book\n4. Exit");
        const option = readlineSync.question('Choose an option: ');
        switch (option){
            case '1':
                addBook();
                break;
            case '2':
                viewBooks();
                break;
            case '3':
                deleteBook();
                break;
            case '4':
                shouldExit = true;
                console.log('Bye!')
                break;
            default:
                console.log('Invalid option! Please try again...')
        }
    }
}

mainMenu();