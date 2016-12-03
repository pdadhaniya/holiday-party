const RsvpShow = React.createClass({
  renderGuestData() {
    let guestData = this.props.guest_data
    let rsvpRows = _.map(guestData, (guest) => {
      return (
        <div ref='everything' key={guest.id}>
          <div className="row guest">
            <div className="medium-6 small-6 columns">
              <label className="name"><b>{guest.full_name}</b></label>
            </div>
            <div className="medium-6 small-6 columns mobile-select">
              <div key={guest.id}>
                <div className="medium-6 small-6 column">
                  <select name={guest.id} ref='rsvpForm' defaultValue={guest.rsvp}>
                    <option value="--">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return rsvpRows
  },

  render() {
    return (
      <div className="rsvp-form">
        <a id="tothetop"></a>
        <div className="row rf">
        <h1>R.S.V.P.</h1>
        <div className="rsvp-greeting">
          <h5>Hello, we&#39;re so excited for the 5th Annual Holiday Party!</h5>
          <h5>Kindly respond by December 15th, 2016.</h5>
          <br/>
          <br />
          <h5>If you are attending, please send Parag between $35-$50/person</h5>
          <h5><b>Venmo:</b> parag-dadhaniya</h5>
          <p> - Monika & Parag </p>
        </div>
        <form className="rsvp-form-section" action="/rsvp/update" method="post">
          {this.renderGuestData()}
          <div className="center-button">
            <input type="submit" value="Submit" className="button tiny"/>
          </div>
        </form>
        </div>
      </div>
    )
  }
})
