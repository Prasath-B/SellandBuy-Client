import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
    return (<section className='dashboard'>

                <div className='dashboard-heading'>
                    <h3>Now Buy and Sell Your Stuffs Directly.</h3>
                    <p>No In-bitween dealers. Not even single penny is wasted</p>
                </div>
            
          
                <div className="card-a">
                    <img className="card-img-top card-img-top-a" src="https://carroar.com/wp-content/uploads/2020/01/black-white-cars-pros-cons.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Cars</h5>
                        <p className="card-text">Some quick example text to build on the.</p>    
                    </div>
                    </div>
                <div className=" card-b">
                    <img className="card-img-top card-img-top-a" src="https://www.icicilombard.com/Webpages/Resources/Images/insurance-information/20151110-2-harley-davidsons-aouthern-rally.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Bikes</h5>
                        <p className="card-text">Some quick example text to build on the card ti</p>    
                    </div>
                    </div>
                    <div className=" card-c">
                    <img className="card-img-top card-img-top-a" src="https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Gadgets</h5>
                        <p className="card-text">Some quick example text.</p>    
                    </div>
                    </div>
           
        
        
        
        </section>
    )
}

export default Dashboard;
