function bracesValid(str) {
    const openingBraces = []
    const compliments = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let i=0; i<str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            openingBraces.push(str[i])
        }
        else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
            if (openingBraces.length === 0 || openingBraces.pop() !== compliments[str[i]]) {
                return false
            }
        }
    }
    return openingBraces.length > 0 ? false : true
}
