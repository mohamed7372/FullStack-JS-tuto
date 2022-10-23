const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
        },
        {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
        },
        {
            name: 'State of a component',
            exercises: 14,
            id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
        }
        ]
    }
    
    return <Course course={course} />
}

const Course = ({ course }) => {
    return (  
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    );
}

const Header = ({course}) => {
    return (
        <h1>{ course }</h1>
    );
}

const Content = ({ parts }) => {
    const total = parts.reduce((currValue, element) => currValue + element['exercises'], 0);
    
    return (
        <>
            {parts.map((element, index) => {
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

export default App;