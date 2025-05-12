// Задание №1
const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

function getOnlineUserNames(allUsers) {
    const onlineUsers = allUsers.filter(user => user.status === 'online');
    const onlineUserNames = onlineUsers.map(user => user.username);

    return onlineUserNames;
}

const usernames = getOnlineUserNames(users);
console.log(`Сейчас в онлайн следующие пользователи: ${usernames}`);

// Задание №2
const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

function giveTalonsInOrder(patients, orders) {
    const sortedPeopleByOrder = orders.map((queueNumber) => {
        return patients.find(patient => patient.id === queueNumber);
    })

    return sortedPeopleByOrder;
}

const result = giveTalonsInOrder(people, ordersArr);
console.log(result);

// Задание №3

function handleObject(obj, key, action) {
    switch (action) {
        case "get":
            return obj[key];
        case "add":
            obj[key] = ''; 
            return obj;
        case "delete":
            delete obj[key];
            return obj;
        default:
            return obj;
    }  
}

const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
}
 
const getObjectProperty = handleObject(student, 'name', 'get');
console.log('getObjectProperty', getObjectProperty);

const addObjectProperty = handleObject(student, 'age', 'add');
console.log('addObjectProperty', addObjectProperty);

const deleteObjectProperty = handleObject(student, 'programmingLanguage', 'delete');
console.log('deleteObjectProperty', deleteObjectProperty);

const getObject = handleObject(student, 'programmingLanguage');
console.log('getObject', getObject);

// Задание №4
const frontStudent = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
    const studentWithJob = {...student};
    studentWithJob['job'] = jobName;
    console.log(`Поздравляем! У студента ${studentWithJob.fullName} появилась новая работа! Теперь он ${studentWithJob.job}`);
    return studentWithJob;
}

const updatedStudent = giveJobToStudent(frontStudent, 'веб-разработчик');
console.log(frontStudent, updatedStudent);

//Задание №5

function sum(...args) {
    const result = args.reduce((a, i) => a + i, 0);
    return result;
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773