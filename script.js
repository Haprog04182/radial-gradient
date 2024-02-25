const diagram = document.querySelector('.diagram');

const centerX = diagram.offsetLeft + diagram.clientWidth / 2;
const centerY = diagram.offsetTop + diagram.clientHeight / 2;


const colors = [
    "#462446",
    "#b05f6d",
    "#eb6b56",
    "#ffc153",
    "#47b39d",
    "#003f5c",
    "#58508d",
    "#bc5090",
    "#ff6361",
    "#ffa600",

]
let diagram_val = [
    10,
    20,
    15,
    5,
    25,
    25
]

let grad_param = ``;
let full = 0;

for(let i = 0; i < diagram_val.length; i ++){
    let item = document.createElement('h4');
    item.innerHTML = diagram_val[i];
        diagram.appendChild(item);

        let i_centerX = diagram.clientWidth / 2 - item.clientWidth -5;
        let i_centerY = diagram.clientHeight / 2 - item.clientHeight-5;
        let half_deg = (full + (diagram_val[i] / 2)) * 3.6;
        let k = 100;
        let left_marg = (half_deg ) 
        let top_marg = (half_deg ) 

        item.style.setProperty(`--left`, `${left_marg}deg`);
        item.style.setProperty(`--top`, `${top_marg}deg`);
        

    if(i != 0 ){
        grad_param += `, ${colors[i]} ${full}%, ${colors[i]} ${full + diagram_val[i]}%`
    }
    else {    
        grad_param += `${colors[i]} ${diagram_val[i]}%`
    }
    full += diagram_val[i]
}

diagram.style = `background: conic-gradient(${grad_param})`