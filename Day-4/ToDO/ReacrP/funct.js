function formatName(user) {
    return user.fn + " " + user.ln;
}

const user= {
    name :"harika",
    fn:"reddy",
    ln:"gurrala"

};
const e = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);