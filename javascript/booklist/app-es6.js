class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToUi(book){
        console.log(book);

        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.append(row);
    }

    showAlert(message, className){
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

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
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
        ui.clearFields();
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