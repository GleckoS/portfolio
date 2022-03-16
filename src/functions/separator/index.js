export const separator = (string, type) => {
    const title = string.split("")

    if (type === 'main') {
        for (let i = 0; i < string.length; i++) {
            if (title[i] === ' ' && title[i - 1] === ',') {
                title[i] = 'br'
            }
        }
    }

    return title
}