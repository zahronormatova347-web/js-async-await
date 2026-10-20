
const getPosts = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log("Postlar soni:", data.length);
    return data;
};
const addPost = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            title: "Rest API",
            body: "Bu 101-chi post"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    let data = await res.json();
    console.log("Yangi post:", data);
    return data;
};
const main = async () => {
    await getPosts();
    await addPost(); 
};

main();