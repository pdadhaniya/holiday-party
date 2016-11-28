const DetailsIndex = React.createClass({
  render() {
    return (
      <div>
        <a id="tothetop"></a>
        <div className="sign-in details">
          <div className="layer"></div>
          <div className="row">
            <a id="to-next-div"></a>
            <div className="event-text">
              <h1>5th Annual Holiday Party</h1>
              <h4>Friday, December 23rd, 2016 at 5:00 PM</h4>
              <p>Museum Park Lofts</p>
              <p>1303 S Michigan Ave</p>
              <p>Apt # 1212</p>
              <p>Chicago, IL 60605</p>
              <a href="https://www.google.com/maps/place/1305+S+Michigan+Ave,+Chicago,+IL+60605/@41.8653561,-87.6258999,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2c9b5525db4b:0xa9fe6ed05e5ef2cc!8m2!3d41.8653561!4d-87.6237059" target="_blank" className="button tiny">Directions</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})