import React from 'react';
const Form = props => {
    const courses = props.courses;
    const length = courses.length;
    let Form = length ? ( 
                    <form onSubmit={props.addCourse}>
                    <input type="text" onChange={props.updateCourse} value={props.current} />
                    <button type="submit">Add Course</button>  
            </form>
            ) 
     : (
        <p className='my-message'>There is no course to show</p>
     )
            
    return (
        <div>
            {Form}
        </div>
    )     
}
 
export default Form;
