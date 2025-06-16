console.log('#20. TypeScript Homework Loaded')

// Завдання #1: createPerson
interface PersonInterface {
  name: string
  age: number
  isActive: boolean
}

function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
  return { name, age, isActive }
}

// Завдання #2: Calculator + декоратор
function LogMethodCalls(
  target: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = propertyDescriptor.value
  propertyDescriptor.value = function (...args: any[]) {
    console.log(`Calling "${propertyName}" with arguments: ${args.join(', ')}`)
    return originalMethod.apply(this, args)
  }
  return propertyDescriptor
}

class Calculator {
  @LogMethodCalls
  add(a: number, b: number): number {
    return a + b
  }

  @LogMethodCalls
  multiply(a: number, b: number): number {
    return a * b
  }
}

// Завдання #3: namespace UserProfile
namespace UserProfile {
  export interface ProfileInterface {
    id: string
    name: string
    email: string
  }

  function generateId(): string {
    return Math.random().toString(36).substring(2, 12)
  }

  export function createProfile(name: string, email: string): ProfileInterface {
    return {
      id: generateId(),
      name,
      email
    }
  }
}

// Обробники подій
const personOutput = document.getElementById('personOutput')!
document.getElementById('createPersonBtn')?.addEventListener('click', () => {
  const person = createPerson('Олександр', 31, true)
  personOutput.textContent = JSON.stringify(person, null, 2)
})

const calc = new Calculator()
const calcOutput = document.getElementById('calcOutput')!
document.getElementById('calcAddBtn')?.addEventListener('click', () => {
  const result = calc.add(2, 3)
  calcOutput.textContent = `Результат: ${result}`
})

document.getElementById('calcMulBtn')?.addEventListener('click', () => {
  const result = calc.multiply(3, 4)
  calcOutput.textContent = `Результат: ${result}`
})

const profileOutput = document.getElementById('profileOutput')!
document.getElementById('createProfileBtn')?.addEventListener('click', () => {
  const profile = UserProfile.createProfile('John Doe', 'john@example.com')
  profileOutput.textContent = JSON.stringify(profile, null, 2)
})

export { createPerson, Calculator, UserProfile }
