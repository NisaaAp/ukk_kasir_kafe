import React from "react";
import '../assets/adminedit.css'

export default class Admin extends React.Component{
    render(){
        return(
            <div className="container rounded bg-white mt-5">
        <div className="row">
            <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://yt3.ggpht.com/a/AATXAJzfKwJjAIcI8kXxQ_7rXWdakcwYZ-e4WK8shKXe9A=s900-c-k-c0xffffffff-no-rj-mo" width="90" /><span className="font-weight-bold" >John Doe</span><span className="text-black-50">john_doe12@bbb.com</span><span>United States</span></div>
            </div>
            <div className="col-md-8">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                            <h6>Back to home</h6>
                        </div>
                        <h6 className="text-right">Edit Profile</h6>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="first name" value="John" /></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="Doe" placeholder="Doe"/></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" value="john_doe12@bbb.com" /></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="+19685969668" placeholder="Phone number" /></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="address" value="D-113, right avenue block, CA,USA" /></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="USA" placeholder="Country" /></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" value="Bank of America" /></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="043958409584095" placeholder="Account Number" /></div>
                    </div>
                    <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </div>
            </div>
        </div>
    </div>
//             <div className="container mt-5 mb-5 d-flex justify-content-center">
//     <div className="card px-1 py-4 " >
//         <div className="card-body ">
//             <h6 className="card-title mb-3">This appointment is for</h6>
//             <div className="d-flex flex-row"> <label className="radio mr-1"> <input type="radio" name="add" value="anz" checked /> <span> <i className/="fa fa-user"></i> Anz CMK </span> </label> <label className="radio"> <input type="radio" name="add" value="add" /> <span> <i className="fa fa-/plus-circle"></i> Add </span> </label> </div>
//             <h6 className="information mt-4">Please provide following information about Anz CMK</h6>
//             <div className="row">
//                 <div className="col-sm-12">
//                     <div className="form-group">
//                         <input className="form-control" type="text" placeholder="Name"/> </div>
///                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-sm-12">
//                     <div className="form-group">
//                         <div className="input-group"> <input className="form-control" type="text" placeholder="M/obile" /> </div/>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-sm-12">
//                     <div className="form-group">
//                         <div className="input-group"> <input className="form-control" type="text" placeholder="E/mail ID" /> </d/iv>
//                     </div>
//                 </div>
//             </div>
//             <div className=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small className="agree-text">By Booking this appointment you agree to the</small> <a href="#" className="terms">Terms & Conditions</a> </div> <button className="btn btn-primary btn-block confirm-button">Confirm</button>
//         </div>
//     </div>
// </div>
        )
    }

}