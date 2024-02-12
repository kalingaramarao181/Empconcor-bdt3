import "./index.css"
import { Component } from "react";
import ProductListItem from "../ProductListItem"
import {Link} from "react-router-dom"
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import Cookies from "js-cookie";

import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { MdIntegrationInstructions } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuBarChartHorizontal } from "react-icons/lu";

//HR CLOUD INFORMATION
import { FaRupeeSign } from "react-icons/fa";
import { GiGlobe } from "react-icons/gi";
import { FaSearchengin } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi2";
import { FaObjectGroup } from "react-icons/fa";
import { GiRoyalLove } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import { MdAccountTree } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa6";
import { BsHeartPulseFill } from "react-icons/bs";
import { LiaKhandaSolid } from "react-icons/lia";

//IT CLOUD INFORMATION
import { AiTwotoneAppstore } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";



const productsList = [
    {
        productId: "PLATFORM",
        productName: "Platform"
    },
    {
        productId: "HRCLOUD",
        productName: "HR Cloud"
    },
    {
        productId: "ITCLOUD",
        productName: "IT Cloud"
    },
    {
        productId: "FINANCECLOUD",
        productName: "Finance Cloud"
    },
]

const productCardsList = [
    {
        uniqueId: "PLATFORM",
        productName: "Platform",
        content: "Manage & Automate The employe Lifecycle",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oSPErgzGrqrbTpEFqWMB-bI0vtvZi8nw_Q&usqp=CAU",
    },
    
    {
        uniqueId: "ITCLOUD",
        productName: "IT Cloud",
        content: "Control & Rerport on your spend in one place"
    },
    {
        uniqueId: "FINANCECLOUD",
        productName: "Finance Cloud",
        content: "A new better way to manage your workspace"
    },
    {
        uniqueId: "HRCLOUD",
        productName: "HR Cloud",
        content: "Remotly secure and configure Your compiny's IT"
        
    },
]




class Header extends Component{

    state = {navBarItemShow: "PRODUCTS", displayProductItem: "ITCLOUD", producstStatus: false, loginButtonStatus: false}
    

    onClickToHiden = () => {
        this.setState((prevState) => ({producstStatus: !prevState.producstStatus}))
    }
    

    //PRODUCT ITEM OVERVIEW
    //HR CLOUD INFORMATION
    hrcloudInformation = () => {
        return (
            <button onClick={this.onClickToHiden} type="button" className="hiden-page-button">
            <div className="hrcloud-d-container">
                <div className="hrcloud-d-card-container">
                    <img src="img\hrcloud.png" className="hrcloud-d-image" alt="hrcloud"/>
                    <h1 className="hrcloud-d-head">HR Cloud</h1>
                    <p className="hrcloud-d-desc">Manage and autonate the employe lifecycle</p>
                    <button className="hrcloud-d-button">Learn More</button>
                    <Link to="hrlogin">
                        <button type="button" className="hr-login-button">Login</button>
                    </Link>
                </div>
                <div className="hrcloud-d-card-container">
                    <div className="hrcloud-d-item-container">
                        <FaRupeeSign className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">Us Payroll</h1>
                            <p className="hrcloud-d-name-desc">Run payroll in minutes</p>
                        </div> 
                    </div>
    
                    <div className="hrcloud-d-item-container">
                        <GiGlobe className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">Global Payroll</h1>
                            <p className="hrcloud-d-name-desc">Pay Your entire workforce</p>
                        </div> 
                    </div>
                    <Link to="./Recruiting" >
                    <div className="hrcloud-d-item-container">
                        <FaSearchengin className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">Recruiting</h1>
                            <p className="hrcloud-d-name-desc">Recruit and Develope Talent</p>
                        </div> 
                    </div>
                    </Link>
    
                    <div className="hrcloud-d-item-container">
                        <HiAcademicCap className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">Learning Management</h1>
                            <p className="hrcloud-d-name-desc">Automate Compliance</p>
                        </div> 
                    </div>
    
                    <div className="hrcloud-d-item-container">
                        <FaObjectGroup className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">PEO Services</h1>
                            <p className="hrcloud-d-name-desc">Large group of benfits & HR</p>
                        </div> 
                    </div>
    
                    <div className="hrcloud-d-item-container">
                        <GiRoyalLove className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">Benifits</h1>
                            <p className="hrcloud-d-name-desc">Manage workforce benfits</p>
                        </div> 
                    </div>
                </div>
    
                <div className="hrcloud-d-card-container">
                    <div className="hrcloud-d-item-container">
                        <IoMdClock className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">Time & Attandance</h1>
                            <p className="hrcloud-d-name-desc">Easyly Track & Aprove Time</p>
                        </div> 
                    </div>
    
                    <div className="hrcloud-d-item-container">
                        <MdAccountTree className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">Headcount Planning</h1>
                            <p className="hrcloud-d-name-desc">Align on Hiring & Comp</p>
                        </div> 
                    </div>
    
                    <div className="hrcloud-d-item-container">
                        <FaUserSecret className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">Performence Management</h1>
                            <p className="hrcloud-d-name-desc">Build High Performence teams</p>
                        </div> 
                    </div>
    
                    <div className="hrcloud-d-item-container">
                        <BsHeartPulseFill className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">Pulse</h1>
                            <p className="hrcloud-d-name-desc">Easy send Employe Servys</p>
                        </div> 
                    </div>
    
                    <div className="hrcloud-d-item-container">
                        <LiaKhandaSolid className="hrcloud-d-item-icon"/>
                        <div className="hrcloud-d-name-container">
                            <h1 className="hrcloud-d-name">ASO</h1>
                            <p className="hrcloud-d-name-desc">Streamline Compliance & HR</p>
                        </div> 
                    </div>
                </div>
            </div>
            </button>
        )
    }

    //PLATFORM INFORMATION
    platformInformation = () => {
        return ( <button onClick={this.onClickToHiden} type="button" className="hiden-page-button">
        <ul className="products-card-container">
                    {productCardsList.map((eachItem) => (
                    <Link className="" to={"/" + eachItem.uniqueId}>  
                        <li className="product-item">
                            <h1 className="preoduct-head">{eachItem.productName}</h1>
                            <p className="product-desc">{eachItem.content}</p>
                        </li>
                        </Link>
                    ))}
                </ul>
                </button>)
    }

    //IT CLOUD INFORMATION
    iTCloudInformation = () => {
        return (
            <button onClick={this.onClickToHiden} type="button" className="hiden-page-button">
            <div className="hrcloud-d-container">
            <div className="hrcloud-d-card-container">
                <img src="img\itcloud.png" className="hrcloud-d-image" alt="itcloud"/>
                <h1 className="hrcloud-d-head">IT Cloud</h1>
                <p className="hrcloud-d-desc">Remotly secure and configure your compeny's IT</p>
                <button className="hrcloud-d-button">Learn More</button>
            </div>
            <div className="hrcloud-d-card-container">
                <div className="hrcloud-d-item-container">
                    <AiTwotoneAppstore className="hrcloud-d-item-icon"/>
                    <div className="hrcloud-d-name-container">
                        <h1 className="hrcloud-d-name">App Management</h1>
                        <p className="hrcloud-d-name-desc">Securly connect employs with your apps--Like Slack & Office365</p>
                    </div> 
                </div>

                <div className="hrcloud-d-item-container">
                    <FaComputer className="hrcloud-d-item-icon"/>
                    <div className="hrcloud-d-name-container">
                        <h1 className="hrcloud-d-name">Divice Management</h1>
                        <p className="hrcloud-d-name-desc">Remotly setup Secure & Manage your Computers</p>
                    </div> 
                </div>
            </div>
        </div>
        </button>
        )
    }

    //FINANCE CLOUD INFORMATION
    financeCloudInformation = () => {
        return (
            <button onClick={this.onClickToHiden} type="button" className="hiden-page-button">
            <div className="hrcloud-d-container">
            <div className="hrcloud-d-card-container">
                <img src="img\financecloud.webp" className="hrcloud-d-image" alt="financecloud"/>
                <h1 className="hrcloud-d-head">Finance Cloud</h1>
                <p className="hrcloud-d-desc">Control and report on your spend in one place</p>
                <button className="hrcloud-d-button">Learn More</button>
            </div>
            <div className="hrcloud-d-card-container">
                <div className="hrcloud-d-item-container">
                    <FaRupeeSign className="hrcloud-d-item-icon"/>
                    <div className="hrcloud-d-name-container">
                        <h1 className="hrcloud-d-name">Corparate Cards</h1>
                        <p className="hrcloud-d-name-desc">Card unlike any other</p>
                    </div> 
                </div>

                <div className="hrcloud-d-item-container">
                    <GiGlobe className="hrcloud-d-item-icon"/>
                    <div className="hrcloud-d-name-container">
                        <h1 className="hrcloud-d-name">Expense Management</h1>
                        <p className="hrcloud-d-name-desc">Review employ expenses</p>
                    </div> 
                </div>

                <div className="hrcloud-d-item-container">
                    <FaSearchengin className="hrcloud-d-item-icon"/>
                    <div className="hrcloud-d-name-container">
                        <h1 className="hrcloud-d-name">Global Payroll</h1>
                        <p className="hrcloud-d-name-desc">Pay entire your workforce</p>
                    </div> 
                </div>

                <div className="hrcloud-d-item-container">
                    <HiAcademicCap className="hrcloud-d-item-icon"/>
                    <div className="hrcloud-d-name-container">
                        <h1 className="hrcloud-d-name">Headcount Planning</h1>
                        <p className="hrcloud-d-name-desc">Track & Stick to your plan</p>
                    </div> 
                </div>

                <div className="hrcloud-d-item-container">
                    <FaObjectGroup className="hrcloud-d-item-icon"/>
                    <div className="hrcloud-d-name-container">
                        <h1 className="hrcloud-d-name">Bill Pay</h1>
                        <p className="hrcloud-d-name-desc">Pay Venders Globally</p>
                    </div> 
                </div>
            </div>

            <div className="hrcloud-d-card-container">
                <div className="hrcloud-d-item-container">
                    <IoMdClock className="hrcloud-d-item-icon"/>
                    <div className="hrcloud-d-name-container">
                        <h1 className="hrcloud-d-name">US Payroll</h1>
                        <p className="hrcloud-d-name-desc">Run Payroll in minutes</p>
                    </div> 
                </div>
            </div>
        </div>
        </button>
        )
    }
    //PRODUCT ITEM OVERVIEW (CLOSE)

    renderItemOverview = () => {
        const {displayProductItem} = this.state

        if (displayProductItem === "PLATFORM"){
            return <>{this.platformInformation() }</>
        }
        else if (displayProductItem === "HRCLOUD"){
            return <>{this.hrcloudInformation()}</>
        }
        else if (displayProductItem === "ITCLOUD"){
            return <>{this.iTCloudInformation()} </>
        }
        else if (displayProductItem === "FINANCECLOUD"){
            return <>{this.financeCloudInformation()} </>
        }
        
    }

    gettingProductItem = (productId) => {
        this.setState({displayProductItem: productId})
    }


    //PRODUCTS
    renderProducts = () => {
        return(
            <div className="products-container">
                <ul className="products-list">
                    {productsList.map((eachItem) => (
                        <ProductListItem productDetails={eachItem} gettingProductItem={this.gettingProductItem}/>
                    ))}
                </ul>

        {this.renderItemOverview()}
    </div>
        )
    }
    //PRODUCTS (CLOSE)


    onClickProducts = () => {
        this.setState((prevState) => ({producstStatus: !prevState.producstStatus}))
    }
 
    onClickPrising = () => {
        this.setState({navbarItemShow: "PRISING"})
    }

    onClickIntegrations = () => {
        this.setState({navbarItemShow: "INTEGRATIONS"})
    }

    onClickCustomars = () => {
        this.setState({navbarItemShow: "CUSTOMARS"})
    }

    onClickParternars = () => {
        this.setState({navbarItemShow: "PARTERNARS"})
    }

    onClickResources = () => {
        this.setState({navbarItemShow: "RESOURCES"})
    }

    onClickLogout = () => {
        const {history} = this.props
        this.setState({loginButtonStatus: true})
        Cookies.remove("jwt_token")
        history.replace("/")
    }

    onClickLogin = () => {
        const {history} = this.props
        this.setState({loginButtonStatus: false})
        history.replace("/login")
    }

    
    loginStatus = () => {
        return <button className="logout-button" type="button" onClick={this.onClickLogout}>Logout</button>
    }

    logoutStatus = () => {
        return <button className="login-button" type="button" onClick={this.onClickLogin}>Login</button>
    }


    render(){
        let {producstStatus, loginButtonStatus} = this.state
        const token = Cookies.get("jwt_token");

        if (token === undefined){
            loginButtonStatus = false
        }else{
            loginButtonStatus = true
        }


    return(
        <nav className="nav-main-container">
            <div className="nav-container">
                <Link to="/">
                    <img className="nav-image" src="img\applogo.png" alt="head"/>
                </Link>
                <ul className="nav-items">
                    <li className="nav-item">
                        <button className="nav-button" onClick={this.onClickProducts} type="button">Products <MdOutlineProductionQuantityLimits /></button> 
                    </li>
                    <li className="nav-item">
                        <button className="nav-button" onClick={this.onClickPrising} type="button">Prising <GiBoxingGloveSurprise /></button> 
                    </li>
                    <li className="nav-item">
                        <button className="nav-button" onClick={this.onClickIntegrations} type="button">Integrations <MdIntegrationInstructions /></button> 
                    </li>
                    <li className="nav-item">
                        <button className="nav-button" onClick={this.onClickCustomars} type="button">Customars <AiOutlineCustomerService /></button> 
                    </li>
                    <li className="nav-item">
                        <button className="nav-button" onClick={this.onClickParternars} type="button">Partners <HiMiniUserGroup/></button> 
                    </li>
                    <li className="nav-item">
                        <button className="nav-button" onClick={this.onClickResorces} type="button">Resources <LuBarChartHorizontal/></button> 
                    </li>
                </ul>

                {loginButtonStatus ? this.loginStatus() : this.logoutStatus()}
                
            </div>
            {producstStatus && this.renderProducts()}
            
        </nav>
  )
}
}
export default withRouter(Header)

/*<Link to="/Login">
    <div className="preofile-container">
        <img className="profile-logo" src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png" alt="user" />
        <label className="profile-text">Login</label>
    </div>
</Link>*/