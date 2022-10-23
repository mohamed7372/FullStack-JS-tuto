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
        }
        ]
    }
    
    return <Course course={course} />
}

const Course = ({course}) => {
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
    return (
        <>
            {parts.map((element, index) => {
                return (
                    <Part key={index} name={element['name']} exercise={ element['exercises']} />
                );
            })
            }
        </>
    )
}

const Part = ({ name, exercise}) => {
    return (
        <p>{name} {exercise}</p>
    )
}

export default App;