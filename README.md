# note-taker

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web)   |
| Node.js | [https://nodejs.org/api/cli.html](https://nodejs.org/api/cli.html)   |
| NPM | [https://www.npmjs.com/](https://www.npmjs.com/)   |
| Express | [https://www.npmjs.com/package/inquirer/v/8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)   |




## Description 


This program can allow users to create and save notes to help organize and keep track of tasks needed to be completed. Users can title a task and then write a description for it. They can then save it or delete it once it has been completed.




## Table of Contents 

* [Javascript Example](#javascript-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)



## Javascript Example

To get a hold of this project, simply navigate to my Github profile and select the repo "note-taker". From there copy the SSH link into your terminal, Gitbash, or whatever application you prefer and use git copy and then paste link. You can then open it using VS Code or access the working app from the deployed link.


```javascript
  function init() {
  inquirer.prompt(questions).then(response => {
    console.log("Generating Your Logo!")
    let shape 
    if (response.shape === "triangle") {
        shape = new Triangle()
    } else if (response.shape === "square"){
        shape = new Square()
    } else {
        shape = new Circle()
    }
    shape.setColor(response.shapeColor)
    let svgInstance = new Svg ()
    svgInstance.setText(response.text, response.textColor)
    svgInstance.setShape(shape)
    writeToFile("test.svg", svgInstance.render())
  })

}
```

In the above code, I used this function that would take the user inputs of what shape they wanted, which were stored in the shapes.js file. It would then create a new svg file based off all of the user inputs and create the logo.


## Usage 

In order to use the note taker, you must first aquire it through GitHub, see above how to do this. After you open it in VS Code, you may then use your computer's terminal or the terminal in VS Code. Do begin taking notes, navigate to the deployed link. Once you have navigated to the home page click the get started button. There you may begin taking notes by entering in a title, then writing a description. After that click the save icon and your new note is saved! Then click the delete icon for whichever notes you feel are not needed anymore.


<img src="./assets/terminal.jpg" width=400></br>
<img src="./assets/logo.jpg" width=400>


## Learning Points 


Through this project, I got more experience working in the back-end and got a better understanding of Express.


## Author Info


### Sam Higa 


* [Portfolio](https://samhiga.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/sam-higa-b887b9209/)
* [Github](https://github.com/samhiga)