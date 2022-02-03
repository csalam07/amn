import Head from 'next/head';
import { useSelector } from 'react-redux';
// import FoodItems from '../components/FoodItems';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { selectTheme } from '../slices/themeSlice';
import Slide from 'react-reveal/Slide';
import config from 'react-reveal/globals';
import Button from '@material-tailwind/react/Button';
import { useState } from 'react';
import StudentDetail from '../components/StudentDetail';

config({ ssrFadeout: true });

function Students({ students }) {
  const darkTheme = useSelector(selectTheme);
  const [showMore, setShowMore] = useState(false);

  console.log(students);
  return (
    <div
      className={` bg-white ${
        darkTheme && 'invert transition duration-1000 ease-in'
      } min-h-screen transition duration-1000 ease-in`}
    >
      <Head>
        <title>Students</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <mian className="">
        <section className="flex flex-col" id="menu">
          <div className="mb-16 flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
            <h3 className="text-foodie-first text-md md:text-lg font-serif capitalize">
              List
            </h3>
            <h2 className="text-3xl md:text-6xl font-black font-serif capitalize">
              Students
            </h2>
          </div>
          <div className="grid space-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] self-center mx-4 gap-6 mb-10">
            {students.slice(0, 6).map((student) => (
              <StudentDetail
                key={student.usn}
                id={student.usn}
                image="/images/pizza.png"
                name={student.name}
                branch={student.branch}
                usn={student.usn}
                semester={student.semester}
              />
            ))}
          </div>

          <Slide top bottom when={showMore}>
            <div
              className={` ${
                showMore
                  ? 'grid space-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] self-center mx-4 gap-6 mt-16'
                  : 'hidden'
              }`}
            >
              {students.slice(6, students.length).map((student) => (
                <StudentDetail
                  key={student.usn}
                  image="/images/pizza.png"
                  name={student.name}
                  branch={student.branch}
                  usn={student.usn}
                  semester={student.semester}
                />
              ))}
            </div>
          </Slide>
          <div className={`mx-auto ${showMore && 'hidden'}`}>
            <Button
              className=""
              color="deepOrange"
              buttonType="filled"
              rounded={true}
              size="lg"
              ripple="light"
              onClick={() => setShowMore(!showMore)}
            >
              View More
            </Button>
          </div>
        </section>
      </mian>
      <Footer />
    </div>
  );
}

export default Students;

export async function getServerSideProps(context) {
  const students = await fetch('http://localhost:5000/api/student').then(
    (res) => res.json(),
  );
  return {
    props: {
      students,
    },
  };
}
