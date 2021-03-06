# Kitsune

The vision for this app is that it connects strangers with each other by exchanging little notes. Mostly aimed to lighten up the day of someone else!
![This is how it looks like](public/img/Kitsune-Gif.gif)

## Vision

Users can without logging in write a little note about concerns they have. These notes are visible to every other user but they don't see the name of the user. Every user is only visible with their desired abbreviation. 

Other user can and should reply to these notes with a positive response to cheer the other user a little bit up and show them that there a lot of people who care about them and others.

If possible it should work the following way:
Users create a note and get a unique hash on which the note is adressable - this way they can look up the responses they got.
Additionally, before being able to write such a note they have to give 2 responses to others - this way it is secured that the a certain flow is given.
Notes of concerns should be as long as 240 signs. Responses should be 120 signs and giving little advices or a little cheer up. 
Everything should work without a log in - you can visit the website and start right away. 

The interface should be as minimalistic as possible and if possible look a little bit like a 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

MongoDB installed

### Installing

Install the dependencies in the main directory and in the /server subdirectory.

```
npm i
```

Start your MondoDB Server 

```
mongod --config /usr/local/etc/mongod.conf
```

Then the server in the subdirectory

```
npm start
```

And after that in the main directory

```
npm start
```

## Running the tests

Tests are to be implemented at a later stage of this project. (TODO: SOON!)

## Built With

* [react](https://github.com/facebook/react) - JavaScript library for building user interface
* [MongoDB](https://www.mongodb.com/) - The database for modern applications

## Contributing

Not yet available - in the meantime write me a message!

## Authors

* **Fynn Grandke** - *Initial work* - [FynnGrandke](https://github.com/FynnGrandke)

## Special Thanks

* **David Khourshid** - Thank you for this awesome background [AnimatedAnimals](https://github.com/codrops/AnimatedAnimals)

## License

TBA

## Information

* Let's see where this is going!