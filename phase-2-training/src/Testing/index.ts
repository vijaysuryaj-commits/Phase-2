const getFullName = (first: string, last: string) => {
    return `${first}${last}`
}

const fullName : string = getFullName("Vijay", "Surya")
const expectedFullName : string = "Vijay Surya"

if(fullName !== expectedFullName)
    throw new Error(`${fullName} does not match expected full name ${expectedFullName}`)