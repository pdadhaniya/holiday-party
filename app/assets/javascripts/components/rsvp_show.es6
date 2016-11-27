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

  render() {
    return (
      <div className="rsvp-form">
        <a id="tothetop"></a>
        <div className="row">
        <h1>R.S.V.P.</h1>
        <div className="rsvp-greeting">
          <h5>Hello, we're so excited to celebrate with you!</h5>
          <h5>Kindly respond by May 22, 2016.</h5>
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
