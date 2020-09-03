import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import headerBackground from "../../assets/images/Banner.jpg";
import Filter from "../filter/Filter";
import JobCard from "../jobCard/JobCard";
import Footer from "../footer/Footer";
import Layout from "../Layout";

/* const Home = () => {
  const [jobCards, setJobCards] = useState([]);

  useEffect(() => {
    fetch("https://jobs-platzi-master.herokuapp.com/jobs")
      .then((response) => response.json())
      .then((data) => setJobCards(data.body));
  }, []);

  console.log("home data: ", jobCards);

  return (
    <React.Fragment>
      <Header bgImage={headerBackground}>
        <Filter />
      </Header>
      <Layout>
        <JobCard />
      </Layout>
      <Footer />
    </React.Fragment>
  );
}; */

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  componentDidMount() {
    fetch("https://jobs-platzi-master.herokuapp.com/jobs")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    console.log("Este es el state: ", this.state.data);
    return (
      <React.Fragment>
        <Header bgImage={headerBackground}>
          <Filter />
        </Header>
        <Layout>
          <JobCard />
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
