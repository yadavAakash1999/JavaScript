// const creatCourse ={
//     lecture: 10,
//     section : 3,
//     title : "java Script",

//     notes:{                                 //nested object
//         introduction : "welcome to the course."
//     },
//     enroll(){
//         console.log("you are successfully enrolled")
//     }
// }

//Factory Function

function creatCourse(lecture,section,title) {
   return {
        lecture: lecture,
        section: section,
        title: title,

        notes: {                                 //nested object
            introduction: "welcome to the course."
        },
        enroll() {
            console.log("you are successfully enrolled")
        }
    }
   
}

// const course1 = creatCourse(10,3,"javaScript");
// console.log(course1)

//Constructor Function

function Course(title){
    this.title = tilte,
    this.enroll = function(){
        console.log("you are successfully enrolled")
    }
}

const course2 = new Course("java");
