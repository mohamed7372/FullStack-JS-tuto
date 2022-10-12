const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    
    return (  
        <div>
            <Header course={course} />
            <Content parts={[[part1, exercises1],[part2, exercises2],[part3, exercises3]] } />
            {/* <Content parts={[1,2,3] } /> */}
            <Total exercises={[exercises1, exercises2, exercises3] } />
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
                    <p key={index}>{element[0]} {element[1]}</p>
                );
            })
            }
        </>
    )
}

const Total = ({ exercises }) => {
    const sum = exercises.reduce((prev, current) => prev + current, 0);
    return (
        <p>Number of exercises {sum}</p>
    );
}


export default App;