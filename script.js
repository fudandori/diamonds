let value;
const response = await fetch('https://free.currconv.com/api/v7/convert?q=USD_COP&compact=ultra&apiKey=fce473c88ab0c897391f')
const data = await response.json().then(x => value = x.USD_COP)
export const load = () => {

    let html = '';

    for (let index = 0; index < 26; index++) html += `<tr><td></td><td></td></tr>`

    document.getElementById('table').innerHTML = html;
    const c = document.getElementsByTagName('tbody')[0].children

    for (let i = 0; i < c.length; i++) {
        const element = c[i];

        for (let j = 0; j < element.children.length; j++) {
            const e = element.children[j];
            const diam = 5000 + 1000 * i
            if (j % 2 === 0) e.innerHTML = diam
            else e.innerHTML = (diam / 200 * value * 0.847025).toFixed(0)

        }
    }
}