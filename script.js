console.log('In script.js');

// global array to store employee info
let employeeInfo = []; 

$(document).ready(onReady);

function onReady() {
    console.log('so ready!');
    $('#submitBtn').on('click', addItem);
    $(document).on('click', '.deleteBtn', deleteItem);
}

function addItem() {
    console.log('in addItem');
        
    // storing info into employee object

    let employee = getEmployeeInfo();

    // Test
    console.log(`employee: ${employee.firstName}, ${employee.lastName}, ${employee.employeeID}, ${employee.employeeTitle}, ${employee.salary}`);
    // Pushing employee info to array
    employeeInfo.push(employee);
    // Test
    console.log(employeeInfo);
    
    //clearing input and focusing cursor 
    $('input').val('');
    $('#firstName').focus();

    //calling function that will rendor value to DOM
    renderToDOM();

    // If value is over 20000 will highlight red
    let totalCost = calculateTotalCost();
    if (totalCost < 20000) {
        $('#totalCost').text(totalCost.toFixed(2));
    }
    else {
        $('#totalCost').text(totalCost.toFixed(2));
        $('#totalCost').css('background-color' ,'red');
    }
}

function getEmployeeInfo() {
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeID: $('#employeeID').val(),
        employeeTitle: $('#employeeTitle').val(),
        salary: Number($('#salary').val())
    };
     return employee;
 }

function renderToDOM() {
    // Empty the table
    $('#employeeTable').empty();
    // Loop through products array and render each one
    for (let employee of employeeInfo) {
        $('#employeeTable').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeID}</td>
                <td>${employee.employeeTitle}</td>
                <td>$${employee.salary.toFixed(2)}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>        
        `);
    }
}

function calculateTotalCost() {
    let totalCost = 0;
    for (let employee of employeeInfo) {
        totalCost += (employee.salary / 12);
    }

    return totalCost;
}

function deleteItem() {
    console.log('in deleteItem');

    $(this).parent().parent().remove();
    // This will not remove the specific row click only the last item on array
    employeeInfo.pop();
}