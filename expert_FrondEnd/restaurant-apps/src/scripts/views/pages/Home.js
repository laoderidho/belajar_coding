import '../components/jumbotron';

const Home = {
  async render() {
    return `
        <div class="Home" id="Home">
          <jumbotron-component></jumbotron-component>
        </div>
        <footer-component></footer-component>
        `;
  },

  async afterRender() {
    // afterRender
  },
};

export default Home;
