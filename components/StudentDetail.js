import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Button from '@material-tailwind/react/Button';
import Tilt from 'react-tilt';
import { selectTheme } from '../slices/themeSlice';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function StudentDetail({ image, name, branch, usn, semester }) {
  const darkTheme = useSelector(selectTheme);
  const router = useRouter();
  return (
    <Card className="shadow-2xl max-w-md">
      <Tilt>
        <CardImage
          src={image}
          alt="Card Image"
          className={`${
            darkTheme
              ? 'invert transition duration-1000 ease-in'
              : 'invert-0 transition duration-1000 ease-in-out'
          }`}
        />
      </Tilt>

      <CardBody>
        <H6 color="gray">{name}</H6>
        <Paragraph color="gray">{branch}</Paragraph>
        <Paragraph>{usn}</Paragraph>
      </CardBody>

      <CardFooter className="flex items-center justify-between">
        <Button
          buttonType="link"
          rounded={true}
          color="deepOrange"
          size="lg"
          ripple="light"
        >
          Sem: {semester}
        </Button>
        <Button
          color="deepOrange"
          buttonType="filled"
          rounded={true}
          size="lg"
          ripple="light"
          onClick={() => router.push(`/student/${usn}`)}
        >
          Detail
        </Button>
      </CardFooter>
    </Card>
  );
}

export default StudentDetail;
