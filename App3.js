import React, { Component } from 'react';
import './App3.css'
import Form from './CourseForm/Form';
import CourseList from './CourseList/CourseList';

class App3 extends Component {
    state = { 
        courses: [
            { name:"HTML"},
            { name:"CSS"},
            { name:"JavaScript"}
        ],

        current: ''
     } 

     //UpdateCourse
     UpdateCourse = (e)=> {
        this.setState({
            current: e.target.value
        })
     }

     //AddCourse
     AddCourse = (e) => {
        e.preventDefault();
        e.id = Math.random();
        let courses = this.state.courses;
        let current = this.state.current;
        if (current === ''){
            console.log("Please enter the name of course");
        }
        else {
            courses.push({name: current})
            this.setState({
                courses,
                current: ''
            })
           
        }
     }

     //DeleteCourse
     DeleteCourse = (index)=> {
        let courses = this.state.courses;
        courses.splice(index, 1);
        this.setState({courses});
     }

     //EditCourse
     EditCourse = (index, val)=> {
        let courses = this.state.courses;
        let course = courses[index];
        course.name = val;
        this.setState({courses})

     }
    
    render() { 
        const courses = this.state.courses;
        const CourseDetails = courses.map((course, index) => {
            return <CourseList details={course} key={index} index={index}
                    deleteCourse={this.DeleteCourse} editCourse={this.EditCourse} />
        })
        return (
            <section className='App3'>
                <h2>Add Courses</h2>
                <Form updateCourse={this.UpdateCourse} 
                      addCourse={this.AddCourse} current={this.state.current} 
                      courses={this.state.courses} />
                <ul>{CourseDetails}</ul>
            </section>
        );
    }
}
 
export default App3;