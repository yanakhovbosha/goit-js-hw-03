function slugify(title) {
    const str = title.toLowerCase();
    const titleStr = str.split(" ");
    const slug = titleStr.join("-");
    return slug
}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));