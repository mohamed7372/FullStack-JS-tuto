const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercise: 10
        },
        {
            name: 'Using props to pass data',
            exercise: 7
        },
        {
            name: 'State of a component',
            exercise: 14
        }
    ]
    
    return (  
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
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
                    <Part key={index} name={element['name']} exercise={ element['exercise']} />
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

const Total = ({ parts }) => {
    const sum = parts.reduce((prev, current) => prev + current['exercise'], 0);
    return (
        <p>Number of exercises {sum}</p>
    );
}


export default App;