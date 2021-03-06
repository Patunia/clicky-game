import React, {Component} from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import turtle from "./../../../../my-app/src/turtle.json"
import "./Home.css";

class Home extends Component {

  state = {
      turtles: [],
      score: 0,
      topScore: 0,
      selectedturtle: [], 
      navMessage: '',
  };

  componentDidMount() {
      this.loadDefaultScore();
  };

  loadDefaultScore = () => {
      this.setState({
          turtles: turtle,
          score: 0,
          topScore: 0,
          selectedturtle: [],
          message: 'Select one image to start game!',
      });
  };

  // need to add mixing function

  render() {
    return (
        <Container>
        <row>
        {this.state.turtles.map(turtle => {
            return (<Card
                key = {turtle.id}
                id = {turtle.id}
                url = {turtle.url}
                imgClickFunc = {this.imgClickFunc}
              name ={turtle.name} /> )
            })}
          </row>
        </Container>
    )
};
}
// const Home = () => (
//   <div className="container-fluid">
//     <div className="home-contain">
//       <h1> Click away!</h1>
//     </div>
//   </div>

//   );

  export default Home;
