let name1=document.querySelector('#name');
let email1=document.querySelector('#email');
let phonenumber1=document.querySelector('#phonenumber');
let pwd1=document.querySelector('#pwd');
let btnsubmit=document.querySelector('#btnsubmit');


btnsubmit.addEventListener('click',(e)=>{
    e.preventDefault();


    let name=name1.value;
    let email=email1.value;
    let phonenumber=phonenumber1.value;
    let pwd=pwd1.value;

    let obj={
        name:name,
        email:email,
        phonenumber:phonenumber,
        pwd:pwd
    };

    axios
      .post("http://localhost:8400/register",obj)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });


})



