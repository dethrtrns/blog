// import { MUIRichTextEditor } from "mui-rte";
import { Grid } from "@material-ui/core";
import ContentContainer from "../../../src/components/admin/addPost/ContentContainer";

const AddPostPage = () => {
  return (
    <>
      <ContentContainer content={content} />
    </>
  );
};

export default AddPostPage;

const quote =
  "This is a fancy quoteBlock, just testing out the look and feel of it. just testing out the look and feel of it. just testing out the look and feel of it. just testing out the look and feel of it. just testing out the look and feel of it.";
const author = "John Doe"; // = "Tester Hathaway";
const dummyLongText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat placeat veniam, dignissimos iusto repellat, quisquam consequuntur consectetur, nihil obcaecati error architecto aperiam debitis veritatis. Voluptatem, doloribus dolores. Nisi, tempore";
const dummyShortText = "Lorem ipsum dolor ";
const linkText = " check out most funny lorem ipsum!";

const para = [
  {
    text: { value: dummyShortText, bold: true, italic: true, highlight: true },
  },
  { link: { text: linkText, url: "https://google.com" } },
  {
    text: {
      value: dummyLongText,
      bold: false,
      italic: false,
      highlight: false,
    },
  },
  {
    text: {
      value: dummyShortText,
      bold: true,
      italic: false,
      highlight: false,
    },
  },
  { link: { text: linkText, url: "https://yt.com" } },
  {
    text: {
      value: dummyShortText,
      bold: false,
      italic: true,
      highlight: false,
    },
  },
  {
    text: {
      value: dummyShortText,
      bold: false,
      italic: false,
      highlight: true,
    },
  },
];

const content = [
  { paragraph: para },
  { quote: { text: quote, author: author } },
  { paragraph: para },
  { image: "/bg.jpg" },
  { paragraph: para },
  { image: "/bgUnsplash.jpg" },
  { paragraph: para },
  { block: dummyShortText },
  { paragraph: para },
];

/*

*/
