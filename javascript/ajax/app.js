document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            
            let output = '';    
            

            customers.forEach(function(customer){
                output += `
                <ul>
                    <li>${customer.id}</li>
                    <li>${customer.name}</li>
                    <li>${customer.company}</li>
                    <li>${customer.phone}</li>
                </ul>
            `;
            });
            
            document.getElementById('customers').innerHTML = output;

        }
    }

    xhr.send();
}