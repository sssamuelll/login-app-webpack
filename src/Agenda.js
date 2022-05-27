import React from "react";

function Agenda() {

    return(

        <div className="agenda">
            <div className="agenda-header">
                <p>Patient's Schedule</p>

                <div className="calendar-day">
                    <button className="view-btn previous-day" title="Previous Day">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>                             
                    </button>
                    <p className="time">May, 19</p>
                    <button className="view-btn next-btn" title="Next Day">                            
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>                                
                    </button>            
                </div>
            </div>
            <div className="agenda-line">
                <div className="patients-status">
                    <div className="item-status">

                        <span className="status-number">24</span>
                        <span className="status-type">Today</span>

                    </div>
                    <div className="item-status">
                        <span className="status-number">45</span>
                        <span className="status-type">Tomorrow</span>
                    </div>
                    <div className="item-status">
                        <span className="status-number">62</span>
                        <span className="status-type">This week</span>
                    </div>
                </div>
                <div className="view-actions">

                </div>
            </div>
            <div className="list-titles">
                <p className="time-title">Time</p>
                <p className="status-title">Status</p>
                <p className="patient-title">Patient</p>
                <p className="reason-title">Reason</p>
            </div>
            <div className="patient-boxes jsListView">
                <div className="patient-box-wrapper">
                    <div className="patient-box" style={{backgroundColor: '#ffd3e2'}}>
                        <div className="patient-box-header">
                            <span>10:00 AM</span>
                            <div className="more-wrapper">
                                <button className="patient-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="patient-box-content-status">
                            <p className="box-content-subheader">
                                Canceled
                            </p>
                        </div>
                        <div className="patient-box-content-header">

                            <p className="box-content-header">Braidy Darin</p>
                        </div>
                        <div className="patient-box-footer">
                            <p className="box-content-subheader">Annual checkup</p>
                        </div>
                    </div>
                </div>
                <div className="patient-box-wrapper">
                    <div className="patient-box" style={{backgroundColor: '#ffd3e2'}}>
                        <div className="patient-box-header">
                            <span>10:30 AM</span>
                            <div className="more-wrapper">
                                <button className="patient-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="patient-box-content-status">
                            <p className="box-content-subheader">
                                Canceled
                            </p>
                        </div>
                        <div className="patient-box-content-header">

                            <p className="box-content-header">Charmaine Quin</p>

                        </div>
                        <div className="patient-box-footer">
                            <p className="box-content-subheader">Pelvic Pain</p>
                        </div>
                    </div>
                </div>
                <div className="patient-box-wrapper">
                    <div className="patient-box" style={{backgroundColor: 'c8f7dc'}}>
                        <div className="patient-box-header">
                            <span>11:00 AM</span>
                            <div className="more-wrapper">
                                <button className="patient-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-more-vertical">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="patient-box-content-status">
                            <p className="box-content-subheader">
                                Complete
                            </p>
                        </div>
                        <div className="patient-box-content-header">
            
                            <p className="box-content-header">Taide Giusy</p>
            
                        </div>
                        <div className="patient-box-footer">
                            <p className="box-content-subheader">Routine physical examination</p>
                        </div>
          
          
                    </div>
                </div>
                <div className="patient-box-wrapper">
                    <div className="patient-box" style={{backgroundColor: '#c8f7dc'}}>
                        <div className="patient-box-header">
                            <span>11:30 AM</span>
                            <div className="more-wrapper">
                                <button className="patient-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-more-vertical">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="patient-box-content-status">
                            <p className="box-content-subheader">
                                Complete
                            </p>
                        </div>
                        <div className="patient-box-content-header">
                            
                            <p className="box-content-header">José Manuel Anastasio</p>
            
                        </div>
                        <div className="patient-box-footer">
                            <p className="box-content-subheader">Abdominal Pain</p>
                        </div>
                    </div>
                </div>
                <div className="patient-box-wrapper">
                    <div className="patient-box" style={{backgroundColor: '#c8f7dc'}}>
                        <div className="patient-box-header">
                            <span>2:00 PM</span>
                            <div className="more-wrapper">
                                <button className="patient-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-more-vertical">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="patient-box-content-status">
                            <p className="box-content-subheader">
                                Complete
                            </p>
                        </div>
                        <div className="patient-box-content-header">
                        
                            <p className="box-content-header">Sorrel Tricia</p>
            
                        </div>
                        <div className="patient-box-footer">
                            <p className="box-content-subheader">Dizziness and Vertigo</p>
                        </div>
                    </div>
                </div>
                <div className="patient-box-wrapper">
                    <div className="patient-box" style={{backgroundColor: '#d5deff'}}>
                        <div className="patient-box-header">
                            <span>2:30 PM</span>
                            <div className="more-wrapper">
                                <button className="patient-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-more-vertical">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="patient-box-content-status">
                            <p className="box-content-subheader">
                                Check In
                            </p>
                        </div>
                        <div className="patient-box-content-header">
                        
                            <p className="box-content-header">Orietta Lucile</p>
            
                        </div>
                        <div className="patient-box-footer">
                            <p className="box-content-subheader">Fever</p>
                        </div>
          
          
                    </div>
                </div>


            </div>
        </div>

    )

}

export default Agenda;