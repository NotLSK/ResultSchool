// Задание №1

const peopleWithVisa = [
  {
      firstName: 'Stasia',
      lastName: 'Ward',
      criminalRecord: true,
      passportExpiration: '19.06.2040',
  },
  {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2041',
  },
  {
      firstName: 'Leighann',
      lastName: 'Scott',
      criminalRecord: true,
      passportExpiration: '31.07.2039',
  },
  {
      firstName: 'Nick',
      lastName: 'Pop',
      criminalRecord: false,
      passportExpiration: '31.12.2010',
  },
];

function allowVisa(clients) {
    const currentDateMs = Date.now();
    const result = clients.filter((client) => {
        const passportExpMs = convertStringToDate(client.passportExpiration).getTime();
        return currentDateMs < passportExpMs && !client.criminalRecord;
    })

    return result;
}

function convertStringToDate(dateSting ) {
    const [day, month, year] = dateSting .split('.');
    const result = new Date(year, month - 1, day);
    return result
}

 
const result = allowVisa(peopleWithVisa);
console.log('result', result);