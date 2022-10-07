import React, { Component, Fragment } from 'react';
import './CourseList.css';

class CourseList extends Component {
    
    state = {
        isEdit: false,
        name: ''
    }

    // render course item
    renderCourse = () =>{
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={ ()=> this.toggleState() }>Edait Course</button>
                <button onClick={()=> 
                    this.props.deleteCourse(this.props.index)}>Delete Course
                </button>
            </li> 
        )
    }

    // toggle state
    toggleState = ()=>{
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit,
        })
    }

    // Update course item
    UpdateCourseItem= (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    // render update form 
    renderUpdateForm = ()=>{
        return(
            <form>
                <input type="text" ref={(v)=> {this.input = v} } defaultValue={this.props.details.name}/>
                <button onClick={this.UpdateCourseItem}>Update Course</button>
            </form>
        )
    }

    
    render() { 
        let isEdit = this.state.isEdit;
        return (
            <Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </Fragment>
        );
    }
}
 
export default CourseList;