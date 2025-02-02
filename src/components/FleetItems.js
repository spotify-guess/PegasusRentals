import React from 'react'
import './FleetItems.css'
import { useNavigate } from 'react-router-dom'

import { motion } from "motion/react"

// cars (edit this)
import cadillac_escalade_2018 from './fleet_items/cadillac_escalade_2018.PNG'
import fiat_500_2016 from './fleet_items/fiat_500_2016.PNG'
import ford_explorer_2020 from './fleet_items/ford_explorer_2020.PNG'
import hyundai_elantra_2017 from './fleet_items/hyundai_elantra_2017.PNG'
import range_rover_sport_2019 from './fleet_items/range_rover_sport_2019.png'
import chevy_impala_2018 from './fleet_items/chevy_impala_2018.PNG'
import ford_escape_2014 from './fleet_items/ford_escape_2014.PNG'
import honda_pilot_2017 from './fleet_items/honda_pilot_2017.PNG'
import hyundai_sante_fe_2022 from './fleet_items/hyundai_sante_fe_2022.png'

// icons (dont touch)
import capacity_icon from './person_icon.png'
import mpg_icon from './mpg_icon.png'
import car_doors_icon from './car_door_icon.png'
import drivetrain_icon from './drivetrain_icon.png'




const FleetItems = () => {

  const navigate = useNavigate();

  const redirect1 = () => {
    localStorage.setItem("car", "2019 Range Rover Sport")
    navigate('/ContactUs'); 
  };

  const redirect2 = () => {
    localStorage.setItem("car", "2017 Honda Pilot")
    navigate('/ContactUs'); 
  };

  const redirect3 = () => {
    localStorage.setItem("car", "2018 Chevrolet Impala")
    navigate('/ContactUs'); 
  };

  const redirect4 = () => {
    localStorage.setItem("car", "2020 Ford Explorer")
    navigate('/ContactUs'); 
  };

  const redirect5 = () => {
    localStorage.setItem("car", "2018 Cadillac Escalade")
    navigate('/ContactUs'); 
  };

  const redirect6 = () => {
    localStorage.setItem("car", "2014 Ford Escape")
    navigate('/ContactUs'); 
  };

  const redirect7 = () => {
    localStorage.setItem("car", "2022 Hyundai Sante Fe")
    navigate('/ContactUs'); 
  };

  const redirect8 = () => {
    localStorage.setItem("car", "2016 Fiat 500")
    navigate('/ContactUs'); 
  };

  const redirect9 = () => {
    localStorage.setItem("car", "2017 Hyundai Elantra")
    navigate('/ContactUs'); 
  };


  return (
    <div className='FleetItems'>

      {/* list item 1 */}

    <motion.a 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{delay: 0.1}}
                    viewport={{once: true, amount: 0.4}}
                    whileHover={{ scale: 1.1 }} >
    
      <div className='car'>

        <img src={range_rover_sport_2019} alt=""></img>

        <h3>Range Rover Sport</h3>

        <h5>2019</h5>

        <div className='attributes'>

          <div className='attribute1'>

            <h6>Capacity</h6>

            <div className='split1'>

              <img src={capacity_icon} alt="" className='capacity_icon'></img>

              <p className='capacity_amount'>5</p>

            </div>

          </div>

          <div className='attribute2'>

            <h6>Drivetrain</h6>

            <div className='split2'>

              <img src={drivetrain_icon} alt="" className='drivetrain_icon'></img>

              <p>AWD</p>

            </div>

          </div>

          <div className='attribute3'>

            <h6>MPG</h6>

            <div className='split3'>

              <img src={mpg_icon} alt="" className='mpg_icon'></img>

              <p>19</p>

            </div>

          </div>

          <div className='attribute4'>

            <h6>Doors</h6>

            <div className='split4'>

              <img src={car_doors_icon} alt="" className='car_doors_icon'></img>

              <p>4</p>

            </div>

          </div>

        </div>

        <button onClick={redirect1}>Book Now</button>

      </div>

      </motion.a>

      {/* end of car 1*/}

      {/* list item 2 */}

      <motion.a  
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{delay: 0.2}}
                    viewport={{once: true, amount: 0.4}}
                    whileHover={{ scale: 1.1 }}      >

      <div className='car'>

        <img src={honda_pilot_2017} alt=""></img>

        <h3>Honda Pilot</h3>

        <h5>2017</h5>

        <div className='attributes'>

          <div className='attribute1'>

            <h6>Capacity</h6>

            <div className='split1'>

              <img src={capacity_icon} alt="" className='capacity_icon'></img>

              <p className='capacity_amount'>8</p>

            </div>

          </div>

          <div className='attribute2'>

            <h6>Drivetrain</h6>

            <div className='split2'>

              <img src={drivetrain_icon} alt="" className='drivetrain_icon'></img>

              <p>FWD</p>

            </div>

          </div>

          <div className='attribute3'>

            <h6>MPG</h6>

            <div className='split3'>

              <img src={mpg_icon} alt="" className='mpg_icon'></img>

              <p>23</p>

            </div>

          </div>

          <div className='attribute4'>

            <h6>Doors</h6>

            <div className='split4'>

              <img src={car_doors_icon} alt="" className='car_doors_icon'></img>

              <p>4</p>

            </div>

          </div>

        </div>

        <button onClick={redirect2}>Book Now</button>

      </div>

      </motion.a>


      {/* end of car 2 */}

      {/* list item 3 */}

      <motion.a  
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{delay: 0.1}}
                    viewport={{once: true, amount: 0.4}}
                    whileHover={{ scale: 1.1 }}       >

      <div className='car'>

        <img src={chevy_impala_2018} alt=""></img>

        <h3>Chevrolet Impala</h3>

        <h5>2018</h5>

        <div className='attributes'>

          <div className='attribute1'>

            <h6>Capacity</h6>

            <div className='split1'>

              <img src={capacity_icon} alt="" className='capacity_icon'></img>

              <p className='capacity_amount'>5</p>

            </div>

          </div>

          <div className='attribute2'>

            <h6>Drivetrain</h6>

            <div className='split2'>

              <img src={drivetrain_icon} alt="" className='drivetrain_icon'></img>

              <p>FWD</p>

            </div>

          </div>

          <div className='attribute3'>

            <h6>MPG</h6>

            <div className='split3'>

              <img src={mpg_icon} alt="" className='mpg_icon'></img>

              <p>25</p>

            </div>

          </div>

          <div className='attribute4'>

            <h6>Doors</h6>

            <div className='split4'>

              <img src={car_doors_icon} alt="" className='car_doors_icon'></img>

              <p>4</p>

            </div>

          </div>

        </div>
        
        <button onClick={redirect3}>Book Now</button>


      </div>

      </motion.a>


      {/* end of car 3 */}

      {/* list item 4 */}

      <motion.a   
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{delay: 0.2}}
                    viewport={{once: true, amount: 0.4}}
                    whileHover={{ scale: 1.1 }}          >

      <div className='car'>

        <img src={ford_explorer_2020} alt=""></img>

        <h3>Ford Explorer</h3>

        <h5>2020</h5>

        <div className='attributes'>

          <div className='attribute1'>

            <h6>Capacity</h6>

            <div className='split1'>

              <img src={capacity_icon} alt="" className='capacity_icon'></img>

              <p className='capacity_amount'>7</p>

            </div>

          </div>

          <div className='attribute2'>

            <h6>Drivetrain</h6>

            <div className='split2'>

              <img src={drivetrain_icon} alt="" className='drivetrain_icon'></img>

              <p>RWD</p>

            </div>

          </div>

          <div className='attribute3'>

            <h6>MPG</h6>

            <div className='split3'>

              <img src={mpg_icon} alt="" className='mpg_icon'></img>

              <p>24</p>

            </div>

          </div>

          <div className='attribute4'>

            <h6>Doors</h6>

            <div className='split4'>

              <img src={car_doors_icon} alt="" className='car_doors_icon'></img>

              <p>4</p>

            </div>

          </div>

        </div>

        <button onClick={redirect4}>Book Now</button>


      </div>

      </motion.a>


      {/* end of car 4 */}

      {/* list item 5 */}
    
      <motion.a  
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{delay: 0.1}}
                    viewport={{once: true, amount: 0.4}}
                    whileHover={{ scale: 1.1 }}     >

      <div className='car'>

        <img src={cadillac_escalade_2018} alt=""></img>

        <h3>Cadillac Escalade</h3>

        <h5>2018</h5>

        <div className='attributes'>

          <div className='attribute1'>

            <h6>Capacity</h6>

            <div className='split1'>

              <img src={capacity_icon} alt="" className='capacity_icon'></img>

              <p className='capacity_amount'>8</p>

            </div>

          </div>

          <div className='attribute2'>

            <h6>Drivetrain</h6>

            <div className='split2'>

              <img src={drivetrain_icon} alt="" className='drivetrain_icon'></img>

              <p>RWD</p>

            </div>

          </div>

          <div className='attribute3'>

            <h6>MPG</h6>

            <div className='split3'>

              <img src={mpg_icon} alt="" className='mpg_icon'></img>

              <p>17</p>

            </div>

          </div>

          <div className='attribute4'>

            <h6>Doors</h6>

            <div className='split4'>

              <img src={car_doors_icon} alt="" className='car_doors_icon'></img>

              <p>4</p>

            </div>

          </div>

        </div>

        <button onClick={redirect5}>Book Now</button>


      </div>

      </motion.a>


      {/* end of car 5 */}

      {/* list item 6 */}

      <motion.a   
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{delay: 0.2}}
                    viewport={{once: true, amount: 0.4}}
                    whileHover={{ scale: 1.1 }}           >

      <div className='car'>

        <img src={ford_escape_2014} alt=""></img>

        <h3>Ford Escape</h3>

        <h5>2014</h5>

        <div className='attributes'>

          <div className='attribute1'>

            <h6>Capacity</h6>

            <div className='split1'>

              <img src={capacity_icon} alt="" className='capacity_icon'></img>

              <p className='capacity_amount'>5</p>

            </div>

          </div>

          <div className='attribute2'>

            <h6>Drivetrain</h6>

            <div className='split2'>

              <img src={drivetrain_icon} alt="" className='drivetrain_icon'></img>

              <p>FWD</p>

            </div>

          </div>

          <div className='attribute3'>

            <h6>MPG</h6>

            <div className='split3'>

              <img src={mpg_icon} alt="" className='mpg_icon'></img>

              <p>25</p>

            </div>

          </div>

          <div className='attribute4'>

            <h6>Doors</h6>

            <div className='split4'>

              <img src={car_doors_icon} alt="" className='car_doors_icon'></img>

              <p>4</p>

            </div>

          </div>

        </div>

        <button onClick={redirect6}>Book Now</button>


      </div>

      </motion.a>


      {/* end of car 6 */}

      {/* list item 7 */}

      <motion.a  
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{delay: 0.1}}
                    viewport={{once: true, amount: 0.4}}
                    whileHover={{ scale: 1.1 }}      >

      <div className='car'>

        <img src={hyundai_sante_fe_2022} alt=""></img>

        <h3>Hyundai Sante Fe</h3>

        <h5>2022</h5>

        <div className='attributes'>

          <div className='attribute1'>

            <h6>Capacity</h6>

            <div className='split1'>

              <img src={capacity_icon} alt="" className='capacity_icon'></img>

              <p className='capacity_amount'>5</p>

            </div>

          </div>

          <div className='attribute2'>

            <h6>Drivetrain</h6>

            <div className='split2'>

              <img src={drivetrain_icon} alt="" className='drivetrain_icon'></img>

              <p>FWD</p>

            </div>

          </div>

          <div className='attribute3'>

            <h6>MPG</h6>

            <div className='split3'>

              <img src={mpg_icon} alt="" className='mpg_icon'></img>

              <p>26</p>

            </div>

          </div>

          <div className='attribute4'>

            <h6>Doors</h6>

            <div className='split4'>

              <img src={car_doors_icon} alt="" className='car_doors_icon'></img>

              <p>4</p>

            </div>

          </div>

        </div>

        <button onClick={redirect7}>Book Now</button>


      </div>

      </motion.a>


      {/* end of car 7 */}

      {/* list item 8 */}

      <motion.a   
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{delay: 0.2}}
                    viewport={{once: true, amount: 0.4}}
                    whileHover={{ scale: 1.1 }}           >

      <div className='car'>

        <img src={fiat_500_2016} alt=""></img>

        <h3>Fiat 500</h3>

        <h5>2016</h5>

        <div className='attributes'>

          <div className='attribute1'>

            <h6>Capacity</h6>

            <div className='split1'>

              <img src={capacity_icon} alt="" className='capacity_icon'></img>

              <p className='capacity_amount'>2</p>

            </div>

          </div>

          <div className='attribute2'>

            <h6>Drivetrain</h6>

            <div className='split2'>

              <img src={drivetrain_icon} alt="" className='drivetrain_icon'></img>

              <p>FWD</p>

            </div>

          </div>

          <div className='attribute3'>

            <h6>MPG</h6>

            <div className='split3'>

              <img src={mpg_icon} alt="" className='mpg_icon'></img>

              <p>34</p>

            </div>

          </div>

          <div className='attribute4'>

            <h6>Doors</h6>

            <div className='split4'>

              <img src={car_doors_icon} alt="" className='car_doors_icon'></img>

              <p>2</p>

            </div>

          </div>

        </div>

        <button onClick={redirect8}>Book Now</button>


      </div>

      </motion.a>

      {/* end of car 8 */}

      {/* list item 9 */}

      <motion.a  
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{delay: 0.1}}
                    viewport={{once: true, amount: 0.4}}
                    whileHover={{ scale: 1.1 }}      >

      <div className='car'>

        <img src={hyundai_elantra_2017} alt=""></img>

        <h3>Hyundai Elantra</h3>

        <h5>2017</h5>

        <div className='attributes'>

          <div className='attribute1'>

            <h6>Capacity</h6>

            <div className='split1'>

              <img src={capacity_icon} alt="" className='capacity_icon'></img>

              <p className='capacity_amount'>5</p>

            </div>

          </div>

          <div className='attribute2'>

            <h6>Drivetrain</h6>

            <div className='split2'>

              <img src={drivetrain_icon} alt="" className='drivetrain_icon'></img>

              <p>FWD</p>

            </div>

          </div>

          <div className='attribute3'>

            <h6>MPG</h6>

            <div className='split3'>

              <img src={mpg_icon} alt="" className='mpg_icon'></img>

              <p>32</p>

            </div>

          </div>

          <div className='attribute4'>

            <h6>Doors</h6>

            <div className='split4'>

              <img src={car_doors_icon} alt="" className='car_doors_icon'></img>

              <p>4</p>

            </div>

          </div>

        </div>

        <button onClick={redirect9}>Book Now</button>


      </div>

      </motion.a>


      {/* end of car 9 */}


    </div>


  )
}

export default FleetItems