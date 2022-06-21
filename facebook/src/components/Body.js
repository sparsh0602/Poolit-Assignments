import React from 'react'

export default function Body() {
    return (
        <>
        <div className="mobileContainer">
           <span> <span className="phoneImage">📱</span> <a href="#">Get Facebook for Android and browser faster</a></span>
        </div>
            <div className="bodyContainer">

                <div className="content">
                    <div className="contentLeft">
                        <div className="f-logo">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook-logo" />
                        </div>
                        <div className="f-quote">
                            <h2>Facebook helps you connect and share with the people in your life.</h2>
                        </div>
                    </div>

                    <div className="contentRight">
                        <div className="formBox">
                            <input type="text" name="email" id="email" placeholder="Email address or phone number"></input>
                            <input type="password" name="pass" id="pass" placeholder="Password"></input>
                            <div className="loginButtonContainer">
                                <button className="loginButton">Log in</button>
                            </div>
                            <div className="forgottenPasswordButton">
                                <a href="#">Forgotten password? </a>
                            </div>

                            <div className="forgottenLine"></div>

                            <div className="newAccount">
                                <a href="#" className="newAccountButton">Create New Account</a>
                            </div>
                        </div>

                        <div className="createPageFont">
                            <a href="#" className="createPage">Create a page</a>
                            &nbsp;for a celebrity, brand or business.
                        </div>
                    </div>
                </div>
            </div>


            <div className="bodyContainer2">
                <div className="content2">
                    <div className="language">
                        <ul className="languageBar">
                            <li>English (UK)</li>
                            <li>हिन्दी</li>
                            <li>ਪੰਜਾਬੀ</li>
                            <li>اردو</li>
                            <li>ગુજરાતી</li>
                            <li>தமிழ்</li>
                            <li>తెలుగు</li>
                            <li>മലയാളം</li>
                            <li>ಕನ್ನಡ</li>
                            <li>Español</li>
                        </ul>
                    </div>

                    <div className="language">
                        <ul className="languageBar">
                            <li>Sign up</li>
                            <li>Log in</li>
                            <li>Messenger</li>
                            <li>Messener Lite</li>
                            <li>Watch</li>
                            <li>Places</li>
                            <li>Games</li>
                            <li>Marketplace</li>
                            <li>Facebook Pay</li>
                            <li>Oculus</li>
                            <li>Portal</li>
                            <li>Instagram</li>
                            <li>Bulletin</li>
                            <li>Local</li>
                            <li>Fundraisers</li>
                            <li>Services</li>
                            <li>Voting Information Centre</li>
                            <li>Groups</li>
                            <li>About</li>
                            <li>Create ad</li>
                            <li>Create Page</li>
                            <li>Developers</li>
                            <li>Careers</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                            <li>Adchoices</li>
                            <li>Terms</li>
                            <li>Help</li>
                            <li>Contact uploading and non-users</li>

                        </ul>

                    </div>

                    <div className="language">
                        <ul className="languageBar">
                            <li>Meta @ 2022</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer2">
                <div className="footer2List">
                    <div>
                        <ul className="languageBar2">
                            <li>English (UK)</li>
                            <li>हिन्दी</li>
                            <li>ਪੰਜਾਬੀ</li>
                            <li>اردو</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="languageBar2">
                            <li>తెలుగు</li>
                            <li>മലയാളം</li>
                            <li>ಕನ್ನಡ</li>
                            <li>Español</li>
                        </ul>
                    </div>
                </div>

                <div className="info">
                    <ul>
                   <li> <a href="#">About</a></li>
                    <li><a href="#">. &nbsp;Help</a></li>
                    <li><a href="#">. &nbsp;More</a></li>
                    </ul>
                </div>

                <div className="copyright">Meta @ 2022</div>
            </div>
        </>
    )
}
