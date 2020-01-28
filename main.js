// Hey Carolina Code School Hackers! Enjoy!
// Make sure to open your js consoles!

//          __  _ ___ __  _
//   __  __/ /_(_) (_) /_(_)__  _____
//  / / / / __/ / / / __/ / _ \/ ___/
// / /_/ / /_/ / / / /_/ /  __(__  )
// \__,_/\__/_/_/_/\__/_/\___/____/

// a simple "it" function for naming groups of expectations
function it(description, contents) {
  console.log('\n\n"It ' + description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(oz.color).toBe('red'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation);
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation);
        return false;
      }
    }
  }
}

//                          __                  __
//   _________  ____  _____/ /________  _______/ /_____  __________
//  / ___/ __ \/ __ \/ ___/ __/ ___/ / / / ___/ __/ __ \/ ___/ ___/
// / /__/ /_/ / / / (__  ) /_/ /  / /_/ / /__/ /_/ /_/ / /  (__  )
// \___/\____/_/ /_/____/\__/_/   \__,_/\___/\__/\____/_/  /____/
//
// ONLY ADD CODE TO THIS SECTION
class Dog {
  constructor(options) {
    options = options || {}; //this allows the objects with options to pass in as truthy, and
    //when charlie is passed in, it is an empty object and acts as if it were.

    // this.hungry = 'hungry'; //makes ALL dogs hungry
    // this.hungry = options.hungry || true; always grabs true because options.hungry returns falsey;
    //I had this part written before, but it was returning undefined
    //The assignment above however fixes this.
    if(options.hungry === false) {
      this.hungry = false;
    } else {
      this.hungry = true;
    }


    this.status = 'normal';
    this.color = options.color; //works, but because charlie has no "options" it comes back undefined


    //try to think control flow, not special methods that do all the things. just some control flow.
  }

}




class Human {
  constructor(options) {
    options = options || {}; //lets mady be passed in without options, will be undefined until next line
    this.cool = options.cool || false; //explain this line
  }

  pet(dog) {
    dog.status = 'happy';  //we define these methods outside of the constructor body so that
                          //they can be looked up in the prototype chain and be used by one instance instead of being applied to all instances
  }

  feed(dog) {
    dog.hungry = false;
  }
}



//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

let oz = new Dog({
  color: "red",
  hungry: false
});

let moonshine = new Dog({
  color: "blue-red"
});

let charlie = new Dog();


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

let mady = new Human();

let faith = new Human({
  cool: true
});


//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D

it("should make oz happy when mady pets him", function() {
  expect(oz.status).toBe('normal');
  mady.pet(oz);
  expect(oz.status).toBe('happy');
});

it("should make oz red", function() {
  expect(oz.color).toBe('red');
});

it("should be make Moonshine hungry and oz not hungry", function() {
  expect(moonshine.hungry).toBe(true);
  expect(oz.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function() {
  faith.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});


it("should not affect charlie and Moonshine's owner properties when setting mady as oz's owner ", function() {
  oz.owner = mady;
  expect(moonshine.owner).toBe(undefined);
  expect(charlie.owner).toBe(undefined);
});

it("should make Faith cool and mady not cool", function() {
  oz.owner = mady;
  expect(faith.cool).toBe(true);
  expect(mady.cool).toBe(false);
});
