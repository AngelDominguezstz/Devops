// fetch('https://www.wikipedia.org')
// .then(resp=>resp.text())
// .then(html=>{
//     // console.log(html);
//     document.open();
//     document.write(html);
//     document.close();
//     alert(html);

// });
// fetch('https://reqres.in/api/users')
// allow CORS:  Access-Control-Allow-Origin

// fetch('https://reqres.in/api/users').then(resp=>resp.json()).then(respObj=>{console.log(respObj.page)});
fetch('https://www.wikipedia.org').then(resp=>resp.text()).then(html=>{
    // console.log(html)
    document.open();
    document.write(html);
    document.close();
});