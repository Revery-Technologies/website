import React from "react";
import Head from "next/head";
import {
  Grommet,
  Box,
  Heading,
  Button,
  Text,
  Markdown,
  Paragraph,
  Grid,
  Anchor
} from "grommet";
const theme = {
  global: {
    colors: {
      brand: "#AFDDE9"
    },
    font: {
      family: "Roboto"
    }
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Head />
        <Grommet theme={theme}>
          <Box
            round="large"
            style={{ top: 30 }}
            animation="fadeIn"
            align="center"
            margin="medium"
            alignContent="center"
            background="whitesmoke"
          >
            <img
              style={{ width: "500px", height: "250px" }}
              src={require("../static/new.png")}
            />

            <Box
              direction="row-responsive"
              pad="medium"
              align="center"
              alignContent="center"
              animation="zoomIn"
              basis="full"
            >
              <Button
                label="Learn more"
                color="brand"
                margin="medium"
                hoverIndicator
                primary
                onClick={() => window.scrollTo(0, window.innerHeight)}
              />
              <Button
                label="Contact"
                color="brand"
                margin="medium"
                hoverIndicator
                primary
                href="#contact"
              />
            </Box>
          </Box>
          <Box
            pad="medium"
            align="center"
            alignContent="center"
            animation="zoomIn"
          >
            <Grid
              pad="medium"
              animation="zoomIn"
              rows={["small", "xmedium"]}
              columns={["xmedium", "xmedium"]}
              gap="small"
              areas={[
                { name: "header", start: [0, 0], end: [1, 0] },
                { name: "nav", start: [0, 1], end: [0, 1] },
                { name: "main", start: [1, 1], end: [1, 1] }
              ]}
            >
              <Box pad="medium" gridArea="header" background="brand">
                <Markdown pad="medium" align="center">
                  {mission}
                </Markdown>
              </Box>
              <Box pad="medium" gridArea="nav" background="light-3">
                <Markdown>{problems}</Markdown>
              </Box>
              <Box pad="medium" gridArea="main" background="light-3">
                <Markdown>{solutions}</Markdown>
              </Box>
            </Grid>
          </Box>

          <Anchor href="#contact" />
          <Box
            pad="small"
            align="center"
            alignContent="center"
            animation="zoomIn"
            basis="full"
            background="whitesmoke"
          >
            <Box pad="medium" basis="2/3" align="center">
              <Markdown>{contact}</Markdown>
            </Box>
          </Box>
        </Grommet>
      </React.Fragment>
    );
  }
}
const mission = `
### Mission
Revery Technologies' mission is to decrease the impact of mental health issues, such as depression and anxiety, for high school students.

`;
const p3 = `
### Product

`;

const problems = `
### Current Problems
 - No **universal access** to **personalized therapy.**  
 - Hesitation about judgement from other people.  
 - Psychologists & therapists are hard to find in schools, and are also overwhelmed.  
 - Between 2007-2017:  
   - The amount of Teenagers diagnosed with depression has increased by 59% (Pew Research Center)  
   - Hospital admissions for suicidal teenagers have doubled (New York Times)  
 - Up to **80%** of students do not receive the mental health care they need.

`;

const solutions = `
### Our solution
We are creating The Embrace:  
an accessible VR app, intended for high school students, that aims to decrease feelings of stress and anxiety.

`;

const contact = `
### Contact
If you would like to get in touch, feel free to send an email to \`revery-technologies@gmail.com\`
`;

const sources = `
Kataoka, S.; Zhang, L.; & Wells, K. (2002). Unmet need for mental health care among U.S. children: Variation by ethnicity and insurance status. American Journal of Psychiatry, 159(9), pp. 1548-1555.

`;
export default App;
