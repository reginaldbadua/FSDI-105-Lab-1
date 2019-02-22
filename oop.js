var salon ={
    name: "Pet salon",
    phone: "555 234 5678",
    address: {
      street: "main",
      number: "123"
    },
    workingHours: {
      opens: '9:00',
      closes: '17:00'
    },

    //to store list of pets currently on the salon
    pets:[]
} 
function Pet (name, age, serviceType, ownerName, contactNumber){
  this.hunger = 20;
  this.happy = 10;

  this.name = name;
  this.age = age;
  this.type = serviceType;
  this.ownerName = ownerName;
  this.ownerPhone = contactNumber; 

  /*
  this.feed = function(){
    //this.hunger = this.hunger - 10;
    this.hunger -= 10;
    this.happy +=10;
  }
 

  this.status = function (){
    //print the pet status to console
    console.log(this.name, "Hunger:" + this.hunger, "Happy:" + this.happy);
  }
  */
}

//method to print owner information
this.ownerInfo
  console.log("Owner Name:" + this.ownerName, "Phone Number:" + this.ownerPhone);

//method to display number of pets
function petCount (petNumber){
this.petNumber = petNumber;
  console.log(numberofPets)
}

//store registered pets
var fido = new Pet("Fido,", 3, "Hair cut", "FancyLady", "555 123 4567");

var lola = new Pet("Lola", 5, "Shower", "OldGuy", "555 344 2344")

var charles = new Pet("Charles", 4, "Brush", "TallMan", "555 987 6543")

var buddy = new Pet("Buddy", 4, "Nail trim ", "PrettyGirl", "555 987 6543"); 



var numberofPets = (pets.length);
