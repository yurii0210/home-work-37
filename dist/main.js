var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
console.log('#20. TypeScript Homework Loaded');
function createPerson(name, age, isActive) {
    return { name, age, isActive };
}
// Завдання #2: Calculator + декоратор
function LogMethodCalls(target, propertyName, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args) {
        console.log(`Calling "${propertyName}" with arguments: ${args.join(', ')}`);
        return originalMethod.apply(this, args);
    };
    return propertyDescriptor;
}
class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
__decorate([
    LogMethodCalls,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculator.prototype, "add", null);
__decorate([
    LogMethodCalls,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculator.prototype, "multiply", null);
// Завдання #3: namespace UserProfile
var UserProfile;
(function (UserProfile) {
    function generateId() {
        return Math.random().toString(36).substring(2, 12);
    }
    function createProfile(name, email) {
        return {
            id: generateId(),
            name,
            email
        };
    }
    UserProfile.createProfile = createProfile;
})(UserProfile || (UserProfile = {}));
// Обробники подій
const personOutput = document.getElementById('personOutput');
(_a = document.getElementById('createPersonBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const person = createPerson('Олександр', 31, true);
    personOutput.textContent = JSON.stringify(person, null, 2);
});
const calc = new Calculator();
const calcOutput = document.getElementById('calcOutput');
(_b = document.getElementById('calcAddBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    const result = calc.add(2, 3);
    calcOutput.textContent = `Результат: ${result}`;
});
(_c = document.getElementById('calcMulBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    const result = calc.multiply(3, 4);
    calcOutput.textContent = `Результат: ${result}`;
});
const profileOutput = document.getElementById('profileOutput');
(_d = document.getElementById('createProfileBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
    const profile = UserProfile.createProfile('John Doe', 'john@example.com');
    profileOutput.textContent = JSON.stringify(profile, null, 2);
});
export { createPerson, Calculator, UserProfile };
