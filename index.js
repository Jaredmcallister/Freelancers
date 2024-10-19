//console.log (`hello`);
//make get an average function for the average price using the starting price
//make an array of objects called Freelancers with the names occupation and starting price multiple freelancers
//append the freelancers alice and bob

//make a set interval for Carol and other freelancers and put in the name occupation and starting price for carol
//append the freelancers that are named freelancer
//have it update the average price for each free lancer that is added to the table

const initialFreelancers = [
  { name: "Alice", price: 30, occupation: "Writer"},
  { name: "Bob", price: 50, occupation: "Teacher"},
];
console.log (initialFreelancers);
const freelancer = [
  { name: "Alice", price: 70, occupation: "Programmer"},
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
console.log (freelancer);
const freelancerGrabbed = document.querySelectorAll(`.tablebody`);
console.log (freelancerGrabbed);
setInterval (() => {
 // const tr = document.createElement(`tr`);
  // put the user input into the li
  //freelancerAdded.innerText = usersInput.value;

  // grab the ul
  //const ul = document.querySelector(`#tablebody`);
  // add the li to the ul
  //ul.append(tr);
//console.log('say hello');
}, 3000);
 