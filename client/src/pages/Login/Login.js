import React from 'react';
import './style.css'
import Tilt from 'react-tilt'
import Logo from "./logoBig.png"
import ParticlesBg from 'particles-bg';
import Footer from "../../components/Footer/index"

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <div>
            <ParticlesBg color="#08f09b" num={200} type="cobweb" bg={true} />
            <div className="body">
                <div className="containerLogin">
                    <div className="row">
                        <div className="col md-9">



                            <div className="cardA">

                                <img src={Logo} alt="" />
                                <div className="contentCard">
                                    <h1>Grab and Go</h1><br />
                                    <h3>"All is well!" Grab-n-go is inspired by the philiposophy to help the community explore real food places nearby, have a look at their menus and just order it online</h3>
                                </div></div>
                        </div ></div>
                    <Tilt className="containerLogin">
                        <div className="col md-3">



                            <div className="cardS">
                                <div className="contentCard">
                                    <label> Email </label>
                                    <input
                                        type="text"
                                        autoFocus
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p className="errorMsg">{emailError}</p>
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <p className="errorMsg">{passwordError}</p>
                                    <div className="btnContainer">
                                        {hasAccount ? (
                                            <>
                                                <button onClick={handleLogin}>Sign In</button>
                                                
                                                <p>Don't have an account?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>

                                            </>
                                        ) : (
                                                <>
                                                    <button onClick={handleSignup}>Sign up</button>
                                                    
                                                    <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                                    </p>

                                                </>
                                            )}
                                    </div>
                                </div>
                            </div></div></Tilt>


                </div></div>
            <Footer />
        </div>
    )
}

export default Login;