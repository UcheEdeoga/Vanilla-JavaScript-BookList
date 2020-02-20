class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ='#' class= "btn btn-danger btn-sm delete">X</a></td>
        
        `;

        list.appendChild(row);

    }

    static clearFields(){
        document.querySelector('#title').value = " ";
        document.querySelector('#author').value = " ";
        document.querySelector('#isbn').value = " ";

    }

    static deleteBook(target){
        if(target.className = 'delete'){
            target.parentElement.parentElement.remove()
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Make it clear for 5secs

        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }
}


//  Events Add Book to list

document.querySelector('#book-form').addEventListener('submit', (e) => {

    
    e.preventDefault();


    // Get input values from form

    // To make sure all the input fields are filled

    
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    

    if(title === ' ' || author === ' ' || isbn === ' '){
        UI.showAlert('Please Fill in all the Field', 'danger')

    }else{
            const book = new Book(title, author, isbn); // This instantiate the book class


            UI.addBookToList(book); // Add book to the UI

              // Book Successfully added

              UI.showAlert('You have Successfully added a book to your list', "success");


            // Clear input fields of the form

            UI.clearFields();
          
        }
});


// Event Listener for removing a book from list

document.querySelector('#book-list').addEventListener('click', (e) => {

    UI.deleteBook(e.target);

    UI.showAlert('You just removed a book from your List', 'danger');
})