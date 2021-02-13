//index.js for FESD FET Week4

let partID = 0;

document.getElementById('add-part').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('part-list');
    let row = table.insertRow(2);
    row.setAttribute('id', `part-item-${partID}`);
    row.insertCell(0).innerHTML = document.getElementById('line-item').value;
    row.insertCell(1).innerHTML = document.getElementById('part-number').value;
    row.insertCell(2).innerHTML = document.getElementById('description').value;
    row.insertCell(3).innerHTML = document.getElementById('quantity').value;
    row.insertCell(4).innerHTML = document.getElementById('location').value;
    row.insertCell(5).innerHTML = document.getElementById('class').value;
    row.insertCell(6).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    let actions = row.insertCell(7);
    actions.appendChild(createPartDeleteButton(partID++));
    document.getElementById('line-item').value = '';
    document.getElementById('part-number').value = '';
    document.getElementById('description').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('location').value = '';
    document.getElementById('class').value = '';
    document.getElementById('entry-date').value = '';
})

function createPartDeleteButton(partID) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = partID;
    btn.innerHTML = 'Delete Part';
    btn.onclick = () => {
        console.log(`Deleting part with id: item-${partID}`);
        let elementToDelete = document.getElementById(`part-item-${partID}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}

let button = document.getElementById('my-button');
console.log(button);

let buttonsByTag = document.getElementsByTagName('button');
console.log(buttonsByTag);

let buttonsByClassName = document.getElementsByClassName('my-class');
console.log(buttonsByClassName);

let buttonsByCssSelector = document.querySelectorAll('button.my-class');
console.log(buttonsByCssSelector);

let buttonsByCssSelector2 = document.querySelectorAll('.my-class');
console.log(buttonsByCssSelector2);

let button2 = document.getElementById('btn');
let content = document.getElementById('content');
let content2 = document.getElementById('content2');

button2.addEventListener('click', () => {
    if (content.innerHTML == 'Goodbye.') {
        content.innerHTML = 'Hello.';
    } else {
        content.innerHTML = 'Goodbye.'
    }
});

document.getElementById('remove').addEventListener('click', () => {
    content.parentNode.removeChild(content);
});

document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = 'This is a new paragraph';
    parent.appendChild(newElement);
});

document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    parent.appendChild(newElement);
    document.getElementById('new-text').value = '';
});



// document.getElementById('content').innerHTML = 'Good bye.';

let id = 0;

document.getElementById('create').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()} -${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id));
    actions.appendChild(createEditButton(id++));
    document.getElementById('new-task').value = '';
})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}

function createEditButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Edit';
    btn.onclick = () => {
        // console.log(`Deleting row with id: item-${id}`);
        let elementToEdit = document.getElementById(`item-${id}`);
    }
    return btn;
}

//Team Building below
class Member {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class Team {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
    }

    deleteMember(member) {
        let index = this.members.indexOf(member);
        this.members.splice(index, 1)
    }
}

let teams = [];
let teamID = 0;

onClick('new-team', () => {
    teams.push(new Team(teamID++, getValue('new-team-name')));
    drawDOM();
});

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function getValue(id) {
    return document.getElementById(id).value;
}

function drawDOM() {
    let teamDiv = document.getElementById('teams');
    clearElement(teamDiv);
    for (team of teams) {
        let table = createTeamTable(team);
        let title = document.createElement('h2');
        title.innerHTML = team.name;
        title.appendChild(createDeleteTeamButton(team));
        teamDiv.appendChild(title);
        teamDiv.appendChild(table);
        for (member of team.members) {
            createMemberRow(team, table, member);
        }
    }
}

function createMemberRow(team, table, member) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = member.name;
    row.insertCell(1).innerHTML = member.position;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let index = team.members.indexOf(member);
        team.members.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createDeleteTeamButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete Team';
    btn.onclick = () => {
        let index = teams.indexOf(team);
        teams.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createNewMemberButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onclick = () => {
        team.members.push(new Member(getValue(`name-input-${team.id}`), getValue(`position-input-${team.id}`)))
        drawDOM();
    };
    return btn;
}

function createTeamTable(team) {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-dark table-striped');
    let row = table.insertRow(0);
    let nameColumn = document.createElement('th');
    let positionColumn = document.createElement('th');
    let actionColumn = document.createElement('th');
    nameColumn.innerHTML = 'Name';
    positionColumn.innerHTML = 'Position';
    actionColumn.innerHTML = 'Action';
    row.appendChild(nameColumn);
    row.appendChild(positionColumn);
    row.appendChild(actionColumn);
    let formRow = table.insertRow(1);
    let nameTh = document.createElement('th');
    let positionTh = document.createElement('th')
    let createTh = document.createElement('th');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('id', `name-input-${team.id}`);
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control');
    let positionInput = document.createElement('input');
    positionInput.setAttribute('id', `position-input-${team.id}`);
    positionInput.setAttribute('type', 'text');
    positionInput.setAttribute('class', 'form-control');
    let newMemberButton = createNewMemberButton(team);
    nameTh.appendChild(nameInput);
    positionTh.appendChild(positionInput);
    createTh.appendChild(newMemberButton);
    formRow.appendChild(nameTh);
    formRow.appendChild(positionTh);
    formRow.appendChild(createTh);
    return table;
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}