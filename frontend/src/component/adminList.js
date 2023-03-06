
import React from "react";
import '../assets/admin.css'
// import '../assets/scss/style.scss'

export default class AdminList extends React.Component {
    render() {
      return (

        <div className="col-md-4">
            <button className="btn mb-3 mr-3 btn-info">Info</button>
        <h4 className="text-center"><strong>STYLE 3</strong></h4>
        

        <hr/>
        <div className="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" className="img img-responsive"/>
            <div className="profile-content">
                <div className="profile-name">John Doe
                    <p>@johndoedesigner</p>
                </div>
                <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
            <button className="btn mb-3 mr-3 btn-info">Info</button>
            <button class="btn mb-3 mr-3 btn-info">Orange</button>
            <a class="btn btn-primary" href="/admin" role="button">Link</a>
                <div className="row">
                    <div className="col-xs-4">
                        <div className="profile-overview">
                            <p>TWEETS</p>
                            <h4>1300</h4></div>
                    </div>
                    <div className="col-xs-4">
                        <div className="profile-overview">
                            <p>FOLLOWERS</p>
                            <h4>250</h4></div>
                    </div>
                    <div className="col-xs-4">
                        <div className="profile-overview">
                            <p>FOLLOWING</p>
                            <h4>168</h4></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
              
    )
  }
}