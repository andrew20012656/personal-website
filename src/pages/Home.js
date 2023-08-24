import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", responseText: "", conversationHistory: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("https://andrew-liu-20012656.com/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: this.state.inputText }),
    });

    console.log(response.body.text)

    if (response.ok) {
      const responseData = await response.json();
      const newConversation = [
        ...this.state.conversationHistory,
        {
          user: this.state.inputText,
          response: responseData.response,
        },
      ];
      this.setState({
        conversationHistory: newConversation,
        responseText: responseData.response,
        inputText: "",
      });
    }
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
                    className="form-control mb-3"
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
              <div
                className="conversation-history rounded p-3"
                style={{ maxHeight: "500px", overflowY: "auto" }}
              >
                {this.state.conversationHistory.map((entry, index) => (
                  <div
                    key={index}
                    className="text-left p-2 mb-2"
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <p>
                      <b>You:</b> {entry.user}
                    </p>
                    <p>
                      <b>Andrew:</b> {entry.response}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
