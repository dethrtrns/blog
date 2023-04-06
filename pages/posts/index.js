import Link from "../../src/helper/materialUtils/Link";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import ModeContext from "../../store/dark-mode-context";
import Typography from "@material-ui/core/Typography";

const AllPostsPage = () => {
  const { setMode } = useContext(ModeContext);

  return (
    <div>
      <Typography variant='h2' color='error'>
        Dummy Page.
        <br /> IRRELEVANT bull$H!T Ahead!!!
        <br />.
        <br />.
        <br />.
        <br />.
        <br />
        what now???
        <br />.
        <br />.
        <br />.
        <br />
        there's Nothing here!
        <br />
        ..
        <br />
        .... Move on you DUMMY!
      </Typography>
      <Button variant='outlined' color='secondary'>
        <Link href={"/"}>to welcome Page</Link>
      </Button>
      <Button variant='contained' color='secondary'>
        <Link href={"/home"}>to HomePage</Link>
      </Button>
      <ul>
        <Typography variant='h3' color='primary'>
          All Posts
        </Typography>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <li>
            <Button variant='text' color='secondary'>
              Post{n}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPostsPage;
