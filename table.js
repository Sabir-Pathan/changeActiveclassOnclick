const about = document.querySelector('.table');
const btns = document.querySelectorAll('.btn');
const articles = document.querySelectorAll('.text')


about.addEventListener('click',(e)=>{
    // dataset ke help se o id target karte hai jis ki id data-id ho
const getIdsElement = e.target.dataset.id
if(getIdsElement)
{
// remove button active class from active button
    btns.forEach((btn)=>{
btn.classList.remove('activ_btn')
// add button active class on click button
e.target.classList.add('activ_btn')
    });
    // remove active class from active text
    articles.forEach((art)=>{
        art.classList.remove('active')
        console.log('hellow')
    })
    // add active class in text area with the help of dataset id matchinge same id data-id and id
    const storesameId = document.getElementById(getIdsElement);

    storesameId.classList.add('active')
}
})