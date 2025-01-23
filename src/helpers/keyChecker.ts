export const keyChecker = (body:Record<string, string | number>, array:string[]) => {
    const validKeys = array
    const hasValidKeys = Object.keys(body).every(key => validKeys.includes(key)) 
    return hasValidKeys
}