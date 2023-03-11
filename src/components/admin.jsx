import Navbar from "./navbar";
import "../styles/admin.css"
const Admin = () => {
    return (
        <div className="admin">
            <Navbar />
            <section className="firstsection">
                <div className="admincontainer">
                    <div className="backphoto">
                        <img src={"/images/backgroundimage.png"} alt="" />
                        <div className="fixedsentence">
                            <h1><span> Where the Crawdads Sing</span></h1>
                            <p> On Friday, March 10 at 7:00 pm, come see the adaptation of the bestselling novel about a girl <br />
                                raising herself in the marshlands of North Carolina.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="secondsection">
                <div className="aunty">
                    <div className="auntyphoto">
                        <img src={"/images/auntyphoto.jpeg"} alt="" />
                    </div>
                    <div className="boxing">
                        <div className="visit">
                            <p>visit</p>
                        </div>
                        <div className="auntyheading">
                            <h2><span>Café at Greenwich Library</span></h2>
                        </div>
                        <div className="auntytext">
                            <p> There’s no need to stroll down the Ave for a meal when you’re at the Library! Visit our lower level to get coffee, drinks, snacks, and lunch options, locally sourced from favorites like Happiness Is and Shearwater Coffee.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="thirdsection">
                <div className="greenpic">
                    {/* <img src={"/images/greenpic.svg"} alt="" /> */}
                    <div className="firstsent">
                        <h1>March Events</h1>
                        <h4>Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page Library calendars are fridge-ready.</h4>
                        <button>Printable event callendars</button>
                    </div>
                </div>
            </section>
            <section className="fourthsection">
                <div className="fourbox">
                    <div className="firstcolumn">
                        <div className="firstbox">
                            <h2><span>Suffrage In Greenwich</span></h2>
                            <p>On Thursday, March 9 at 7:00 pm, hear about the incredible local women who helped move the dial on women’s rights.</p>
                            <a href="">Register Here</a>
                        </div>
                        <div className="secondbox">
                            <h2><span>Sea Glass Frames</span></h2>
                            <p>On Saturday, March 11 at 10:30 am at Cos Cob Library, join us to create fun and breezy sea glass frames!</p>
                            <a href="">Register Here</a>
                        </div>
                    </div>
                    <div className="secondcolumn">
                        <div className="thirdbox">
                            <h2><span>Tax Help</span></h2>
                            <p>On Saturday, March 11 from 9:00 am – 2:00 pm, drop in to get free help with your taxes from the AARP Foundation.</p>
                            <a href="">Learn More</a>
                        </div>
                        <div className="fourthbox">
                            <h2><span>Protect Yourself Online</span></h2>
                            <p>On Wednesday, March 15 at 3:00 pm, find out the ten vital practices to protect your personal information and finances.</p>
                            <a href="">Make Your Calendar</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Admin;