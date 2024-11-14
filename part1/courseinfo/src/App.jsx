function Header({ course }) {
  return <h1>{course.name}</h1>;
}

function Total({ course }) {
  return (
    <p>
      Number of exercises{" "}
      {course.parts.reduce((val, part) => val + part.exercises, 0)}
    </p>
  );
}

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

function Content({ course }) {
  return course.parts.map((part) => (
    <Part key={part.name} part={part.name} exercises={part.exercises} />
  ));
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
