const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");





function main() {
   
    menuBtn.addEventListener('click', openSideMenu);
    closeBtn.addEventListener('click', closeSideMenu);
    themeToggler.addEventListener('click', nightMode);
    Orders.forEach(fillTr);


};


const fillTr = (order) => {
    let skin = '';
    if (order.shipping === 'Decline'){
        skin = 'danger'
    }
    else if (order.shipping === 'Pending'){
        skin = 'warning'
    }
    else {
        skin = 'primary'
    }
    const tr = document.createElement('tr');
    const trInnerContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${skin}">${order.shipping}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trInnerContent;
    document.querySelector('table tbody').appendChild(tr); 
};
const nightMode = () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
};
const closeSideMenu = () => {
    sideMenu.style.display = 'none';
};

const openSideMenu = () => {
    sideMenu.style.display = 'block';
};

main();

