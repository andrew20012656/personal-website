import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", responseText: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value });
  }

  handleSubmit(event) {
    alert("Something has been submitted: " + this.state.inputText);
    event.preventDefault();
  }

  render() {
    return (
      <div className="home container-sm">
        <div className="d-flex flex-column min-vh-100">
          <div className="container-xl flex-grow-1">
            <div className="row my-5">
              <h1 className="font-weight-light">Hi, my name is Andrew Liu.</h1>
              <p>
                Ask my chatbot to help answer questions about me. Feel free to
                type in some questions you may have.
              </p>
              <form>
                <div>
                  <textarea
                    className="form-control"
                    id="userInput"
                    rows="3"
                    value={this.state.inputText}
                    onChange={this.handleChange}
                    placeholder="Type your question ..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
