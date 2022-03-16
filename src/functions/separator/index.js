export const separator = (string) => {
    const title = string.split("")

    for (let i = 0; i < string.length; i++) {
        if (title[i] === ' ' && title[i - 1] === ',') {
            title[i] = 'br'
        }
    }

    return title
}