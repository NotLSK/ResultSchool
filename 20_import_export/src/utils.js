export function getRandomColor() {
    const hexadecimal = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color += hexadecimal[index];
        // console.log(color);
    }

    return color;
}