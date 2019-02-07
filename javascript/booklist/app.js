// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Add book to list
UI.prototype.addBookToUi = function(book){
    console.log(book);

    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `

    list.append(row);
}

// Clear the form

UI.prototype.clearUi = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// Show alert
UI.prototype.showAlert = function(message, className){
    // Create the alert
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    // Append it
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Timeout after 2 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000);
}

// Event Listener for add
document.getElementById('book-form').addEventListener('submit', function(e){
    e.preventDefault();
    const title = document.getElementById('title').value,
            author = document.getElementById('author').value;
            isbn = document.getElementById('isbn').value;

    book = new Book(title, author, isbn);
    
    // Instantiate UI
    const ui = new UI();

    // Validate form
    if(title === '' || author === '' || isbn === ''){
        // Error alert
        ui.showAlert('Please fill all fields', 'error');
    } else {
        // Add to the UI
        ui.addBookToUi(book);
        // Clear UI fields
        ui.clearUi();
        // Show success
        ui.showAlert('Book added', 'success');
    }
});

// Event Listener for delete

document.getElementById('book-list').addEventListener('click', function(e){
    // Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);
    ui.showAlert('Book successfuly removed', 'success')
    e.preventDefault();
});