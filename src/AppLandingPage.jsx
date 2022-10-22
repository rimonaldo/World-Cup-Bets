import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLoggedUser } from './store/actions/userActions'
import { loadContacts } from './store/actions/contactActions'
import TypoExamples from './components/TypoExamples'
import Hero from './components/Hero'
export class _LandingPage extends Component {
   render() {
      return (
         <section className="landing-page">
            {/* IDEA - THIS IS A PARGRAPH TEMPLATE */}
            <Hero />
            <TypoExamples></TypoExamples>


            {/* <div className="signup-page"> */}

               {/* IDEA - THIS SHOULD BECOME A GALLERY TEMPLATE FLEX 3 AND FLEX / GRID OF 4 AND SPREADING DOWN ON NARROW VIEW */}
               {/* <div className="galleries"> */}
                  {/* IDEA - DRY - SOMETIMES KEEP THINGS SIMPLE AND DONT REAPEAT YOURSELF / OVER COMPLECATE  */}

                  {/* ICON GALLERY */}
                  {/* <div className="icons-gallery">
                     <div className="item fast">
                        <img
                           className="landing-icon"
                           src="https://cdn-icons-png.flaticon.com/512/1408/1408799.png"
                           alt=""
                        />
                        <span>FAST</span>
                     </div>

                     <div className="item safe">
                        <img className="landing-icon" src="https://i.ibb.co/Cs9fnSc/security.png" alt="" />
                        <span>SAFE</span>
                     </div>

                     <div className="item reliable">
                        <img className="landing-icon" src="https://i.ibb.co/Kb1ywdX/handshake.png" alt="" />
                        <span>RELIABLE</span>
                     </div>
                  </div> */}

                  {/* EXAMPLE - OF THE CURRENT GRID MARKUP */}
                  {/* <div className="app-gallery">
                     <div className="item">
                        <span>SHOW CHARTS</span>
                        <img src="https://i.ibb.co/XX0ZR1q/Image-1.png" alt="" />
                     </div>
                  </div> */}
               {/* </div> */}

               {/* <input placeholder="username" type="text" onChange={ev => this.handleChange(ev)} name="username" /> */}
               {/* <input placeholder="password" type="text" onChange={ev => this.handleChange(ev)} name="password" /> */}
               {/* <button className="button" onClick={() => this.onLogin()}> */}
                  {/* Login */}
               {/* </button> */}

               {/* <input placeholder="username" type="text" onChange={ev => this.handleChange(ev)} name="username" /> */}
               {/* <button className="button" onClick={() => this.onSignup()}> */}
                  {/* Signup */}
               {/* </button> */}
            {/* </div> */}

            
         </section>
      )
   }

   state = {
      username: '',
      password: '123',
   }
   componentDidMount() {}

   // ON INPUT CHANGE SET USER NAME
   async handleChange({ target }) {
      const field = target.name
      const value = target.type === 'number' ? +target.value || '' : target.value
      this.setState(prevState => ({
         [field]: value,
      }))
   }

   // DISPATCH SET LOGGED USER
   async onSignup() {
      const name = this.state.username
      if (!name) return
      const loggedUser = await this.props.setLoggedUser(name)
      if (loggedUser) this.loadApp(loggedUser)
   }

   async onLogin() {
      const { username, password } = this.state
      if (!username || !password) return
      const loggedUser = await this.props.setLoggedUser(username, password)
      if (loggedUser) this.loadApp(loggedUser)
   }

   async onStartDemo() {
      const username = 'Employer'
      const password = '123'
      const loggedUser = await this.props.setLoggedUser(username, password)
      if (loggedUser) this.loadApp(loggedUser)
   }

   loadApp(loggedUser) {
      if (loggedUser) {
         this.props.loadContacts()
         this.props.history.push('/')
      }
   }
   // HTML
}

// REDUX CONFIGORATION
const mapStateToProps = state => {
   return {
      contacts: state.contacts,
   }
}

const mapDispatchToProps = { setLoggedUser, loadContacts }

export const LandingPage = connect(mapStateToProps, mapDispatchToProps)(_LandingPage)
