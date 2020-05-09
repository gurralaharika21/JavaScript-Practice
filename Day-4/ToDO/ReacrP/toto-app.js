// ReactDOM.render(  //hello world
//     <h1>Hello,World</h1>,
//     document.getElementById("root")
// ); // 1st

//2   JSX
function formartName(user) {
    return user.fn + " " + user.ln + " ," + user.stng;
}

const user = {
    fn : "harik",
    ln: "reddy",
    stng:"glad to meet you"
};
// function getGreeting(user) {
//     if (user) {
//       return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
//   }
  

const element = (
    <h1>
        Hello , {formartName(user)}!
        <p>Nice</p>
        <img src = "size.png" ></img>
    </h1>
);

ReactDOM.render(
    element, 
    document.getElementById('root')
  );


//3 rendering

//   function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);


// function formatName(user) {
//     return user.fn + " " + user.ln;
// }

// const user= {
//     name :"harika",
//     fn:"reddy",
//     ln:"gurrala"

// };
// const e = (
//     <h1>
//         Hello, {formatName(user)}
//     </h1>
// );
// const name = "Praveen";
// const e = <h1>Hello {name}</h1>;

 // hello world


// ReactDOM.render(
//     <h1>Hello,{name}</h1>, //include js expression in curly braces
//     e,//another way
//     document.getElementById("root")
// );