let Book= {
        title : "",
        author : " ",
        yearPublished : " ",
        readStatus : "read",
    getSummary: function(){
        //return `${this.title} by ${this.author} is published in ${yearPublished}.Read : ${readStatus}`;
    },
}

const library = [];
function value(a,b,c,e){
    return {
        title:a,
        author:b,
        yearPublished:c,
        readStatus:e,
    }
}
let Books={
    title : "",
    author : " ",
    yearPublished : " ",
    readStatus : "read",
}
function addBook(book) {
    let a=prompt("Enter the Book Title:");
    let b =prompt("Enter the Book Author")
    let c=prompt("Enter the Book year Published:");
    let e =prompt("Enter the read Status");
    let f = alert("Book added Successfully");
    let d = value(a,b,c,e);
    return library.push(d);
}
function removeLastBook(){
    let d = alert("Last Book Removed Successfully");
    return library.pop();
}
function addBookToFront(){
    let d = alert("Book Added Front Successfully");
    return library.unshift(Books);
}
function removeFirstBook(){
    let d = alert("Book Remove Front Successfully");
    return library.shift();
}
function getAllTitles(){
    let d = alert("Title get Successfully");
    return library.map(book => book.title);
}
function getBooksByAuthor(author){
    let d = alert("Book Author get Successfully");
    return library.filter(book => book.author === author);
}
function getTotalBooksPublishedBefore(year){
    let d = alert("Total Book Published get Successfully");
    return library.filter(book => (book.yearPublished<year).length);
}
function removeBookByTitle(title){
    let x = prompt("Enter the title to remove");
    const index = library.filter(book => book.title === x);
    if(index!=-1){
        library.pop(index);
    }
    let d = alert("Book Title Removed Successfully");
}
function getBooksByReadStatus(status) {
    let y = prompt("Enter read status");
    return library.filter(book => book.readStatus === y);
    let d = alert("Book Read Status Completed Successfully");
}
function get(){
for(let x of library){
alert("THE BOOK DETAILS : The title is: "+x.title+" The Author is: "+x.author+" The Book Year Published: "+x.yearPublished+" The Read Status: "+x.readStatus);
let d = alert("Book Displayed Successfully");
}
}





