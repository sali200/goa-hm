const A = getelementsbyclassname(btn)
const B = getelementsbyclassname(div)

A.addEventListener('click', () =>{
    B.style.backgroundColor= 'red';
});