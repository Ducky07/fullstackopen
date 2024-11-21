function Header({ course }) {
  return <h1>{course.name}</h1>;
}

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

function Total({ course }) {
  return (
    <p>
      Total of {course.parts.reduce((val, part) => val + part.exercises, 0)}{" "}
      exercises
    </p>
  );
}

export function Course({ courses }) {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          {course.parts.map((part) => (
            <Part key={part.id} part={part.name} exercises={part.exercises} />
          ))}
          <Total course={course} />
        </div>
      ))}
    </div>
  );
}