import '../styles/home.scss';
import { Tooltip } from 'bootstrap'

// test babel
class ReferenceList
{
    constructor() {
        const stuff = new WeakSet([])
    }
}

// add Tooltip
const userTooltip = document.getElementById("tooltip-user");
new Tooltip(userTooltip, {
    title: "hello world",
    placement: "right",
    trigger: "hover"
})
const checkbox = document.querySelector('#box');


// importation asynchrones
async function initGetNiceMessage(count) {
    const { default : getNiceMessage } = await import('./get_nice_message');
    console.log(getNiceMessage(count))
}
checkbox.addEventListener('click', (e) => {
    if (e.currentTarget.checked) {
        // import('./get_nice_message').then((getNiceMessage) => {
        //     console.log(getNiceMessage.default(5))
        // })
        initGetNiceMessage(5)
    }
})