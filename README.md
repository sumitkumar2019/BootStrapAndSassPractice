### Angular Bootstrap And SASS Practice Application - Reference : W3School

### To Run Angular Bootstrap And SASS Practice Application

### Install Software

- Latest Node JS : from https://nodejs.org/en/
- Git Client : https://git-scm.com/downloads
- Angular 8
### Clone the Application

- open the command line
- git clone https://github.com/sumitkumar2019/BootStrapAndSassPractice.git

### To Run Angular Bootstrap And SASS Practice Application

- go to the directory BootStrapAndSassPractice: add command to the command line : cd BootStrapAndSassPractice

### Install Dependencies

- We get the tools we depend upon via `npm`, the [Node package manager][npm].

```
npm install

```

### Run the Application

```
ng s
```
### Note:
SASS Practice style sheet is renamed to styles copy.scss to accomodate bootstrap changes. In case of converting SASS style sheet to CSS to see the changes: Below are the steps:

#1. Rename styles.copy.scss to style.scss
#2. got to command propmpt an run : ng build --extract-css
#3. We can see compiled css version of styles.scss to style.css in generated dist folder else css will not get generated by default
