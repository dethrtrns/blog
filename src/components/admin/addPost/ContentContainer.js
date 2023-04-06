import { Grid } from "@material-ui/core";
import HighlightedBlock from "./HighlightedBlock";
import QuoteBlock from "./QuoteBlock";
import ImageContainer from "./ImageContainer";
import Paragraph from "./Paragraph";

function ContentContainer({ content }) {
  return (
    <>
      <Grid
        style={{ alignItems: "center", justifyContent: "center" }}
        container
      >
        {content.map((item, i) => {
          if (item.paragraph)
            return (
              <Grid key={i} xs={12} item>
                <Paragraph para={item.paragraph} />
              </Grid>
            );
          else if (item.image)
            return (
              <Grid key={i} xs={12} item>
                <ImageContainer src={item.image} />
              </Grid>
            );
          else if (item.quote)
            return (
              <Grid key={i} xs={12} item>
                <QuoteBlock
                  quote={item.quote.text}
                  author={item.quote.author}
                />
              </Grid>
            );
          else if (item.block)
            return (
              <Grid key={i} xs={12} item>
                <HighlightedBlock text={item.block} />
              </Grid>
            );
        })}
      </Grid>
    </>
  );
}

export default ContentContainer;
