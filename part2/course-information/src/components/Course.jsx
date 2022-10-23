const Course = ({course}) => {
    return (  
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    );
}
 
export default Course;

const Header = ({course}) => {
    return (
        <h1>{ course }</h1>
    );
}

const Content = ({ parts }) => {
    const total = parts.reduce((currValue, element) => currValue + element['exercises'], 0);
    
    return (
        <>
            {parts.map(element => {
                return (
                    <Part key={element['id']} name={element['name']} exercise={ element['exercises']} />
                );
            })
            }
            <p><b>total of {total} exercises</b></p>
        </>
    )
}

const Part = ({ name, exercise}) => {
    return (
        <p>{name} {exercise}</p>
    )
}