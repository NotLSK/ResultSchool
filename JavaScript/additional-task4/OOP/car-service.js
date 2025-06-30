// Задание №2
class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00'
    }

    constructor(name, workingHours) {
        this.name = name;
        this.workingHours = workingHours || CarService.DefaultWorkingHours;
    }

    #convertStringTimeToNumber(str) {
        const [hours, minutes] = str.split(':').map(Number);
        return hours + minutes / 60;
    }

    #isOpen() {
        const date = new Date();
        const now = date.getHours() + date.getMinutes() / 60;
        const fromTime = this.#convertStringTimeToNumber(this.workingHours.from);
        const tillTime = this.#convertStringTimeToNumber(this.workingHours.till);

        if (now >= fromTime && now <= tillTime) {
            return true;
        }

        return false;
    }

    repairCar(carName) {
        if (carName) {
            if (this.#isOpen()) {
                console.log(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`);
            } else {
                console.log(`К сожалению, мы сейчас закрыты. Приходите с ${this.workingHours.from} по ${this.workingHours.till}`);
            }
        } else {
            console.error('Вам необходимо указать название машины, чтобы отремонтировать ее');
        }
    }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:30' });
carService.repairCar('BMW');