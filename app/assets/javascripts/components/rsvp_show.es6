const RsvpShow = React.createClass({
  renderGuestData() {
    let guestData = this.props.guest_data
    let rsvpRows = _.map(guestData, (guest) => {
      return (
        <div ref='everything' key={guest.id}>
          <div className="row guest">
            <div className="medium-2 small-12 columns">
              <label className="name"><b>{guest.full_name}</b></label>
            </div>
            <div className="medium-10 small-2 columns mobile-select">
              {this.renderRsvps(guest.rsvp)}
            </div>
          </div>
        </div>
      )
    })
    return rsvpRows
  },

  renderRsvps(rsvps) {
    let rsvp = _.map(rsvps, (rsvp) => {
      return (
        <div key={rsvp.id}>
          <div className="medium-2 small-2 column">
            <select name={rsvp.id} ref='rsvpForm' defaultValue={rsvp.status}>
              <option value="--">--</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      )
    })
    return rsvp
  },

  renderFamilyMessage() {
    let familyMessage= this.props.message
    return (
      <div className="row fam">
        <label className="message"><b>Comment(s):</b></label>
        <textarea name="message">{familyMessage}</textarea>
      </div>
    )
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
          <p> - Monika & Parag </p>
        </div>
        <form className="rsvp-form-section" action="/rsvp/update" method="post">
          {this.renderGuestData()}
          {this.renderFamilyMessage()}
          <div className="center-button">
            <input type="submit" value="Submit" className="button tiny"/>
          </div>
        </form>
        </div>
      </div>
    )
  }
})
