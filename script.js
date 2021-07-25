console.log('In script.js');

// global array to store employee info
let employeeInfo = []; 

$(document).ready(onReady);

function onReady() {
    console.log('so ready!');
    $('#submitBtn').on('click', addItem);
    $('#deleteBtn').on('click', deleteItem);
}

function addItem() {
    console.log('in addItem');

    // event.preventDefault();
        
    // storing info into employee object

    let employee = getEmployeeInfo();

    // Test
    console.log(`employee: ${employee.firstName}, ${employee.lastName}, ${employee.employeeID}, ${employee.employeeTitle}, ${employee.salary}`);

    employeeInfo.push(employee);

    console.log(employeeInfo);
    
    $('input').val('');
    $('#firstName').focus();

    renderToDOM();

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
                <td><button id="deleteBtn">Delete</button></td>
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
    console.log('this is '+ $(this));
    
    $(this).parent().parent().remove();
    
}