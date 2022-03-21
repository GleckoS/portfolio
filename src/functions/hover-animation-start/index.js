export const addAnimation = ({ currentTarget: el }) => {
    el.classList.add('animated')

    setTimeout(() => {
        el.classList.remove('animated')
    }, 1000);
}