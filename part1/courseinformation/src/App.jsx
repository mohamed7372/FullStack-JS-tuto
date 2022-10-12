const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercise: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercise : 7
    }
    const part3 = {
        name: 'State of a component',
        exercise : 14
    }
    
    return (  
        <div>
            <Header course={course} />
            <Content parts={[part1,part2,part3] } />
            <Total exercises={[part1.exercise, part2.exercise, part3.exercise] } />
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

const Total = ({ exercises }) => {
    const sum = exercises.reduce((prev, current) => prev + current, 0);
    return (
        <p>Number of exercises {sum}</p>
    );
}


export default App;