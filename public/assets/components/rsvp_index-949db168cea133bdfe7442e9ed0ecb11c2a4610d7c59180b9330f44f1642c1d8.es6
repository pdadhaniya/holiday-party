const RsvpIndex = React.createClass({
  renderGuestNotFound() {
    let guestNotFound = this.props.no_guest ? (
      <div className="not_found">
        <h5>Name not found.</h5>
        <h5>Please try again or contact Shreya and Parag.</h5>
      </div>
    ) : (
      null
    )
    return guestNotFound
  },

  render() {
    return (
      <div>
        <a id="tothetop"></a>
        <div className="sign-in">
          <a id="to-next-div"></a>
          <div className="row">
            {this.renderGuestNotFound()}
            <h1>R.S.V.P.</h1>
            <p>KINDLY RESPOND BY December 15th, 2016.</p>
            <form action='/rsvp/user' method='get'>
              <input ref='first' name='first' type='text' placeholder='First Name' />
              <input ref='last' name='last' type='text' placeholder='Last Name' />
              <input name="commit" type="submit" value="Next" className="button tiny"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
})
