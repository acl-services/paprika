const myArray = ["Avatar", "Button", "Pill", "Toast"];
const myString = myArray.toString();

const myObj = {
  category: "Display",
  components: ["Avatar", "Counter", "Heading", "Icon", "Pill", "Tag"],
}
console.log(JSON.stringify(myObj.components));