import React from 'react'
import { useState } from 'react'
import './FAQ.css'
import { motion } from "motion/react"


const FAQ = () => {

  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if(selected == i){
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className='FAQ'>

      <h1>FAQ</h1>

      <div className='accordion'>

        {data.map((item, i) => (

          <div className='item'>

            <div className='title' onClick={() => toggle(i)}>

              <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{delay: 0.1*i}}
              viewport={{amount: 1, once:true}}
              whileHover={{ scale: 1.1 }}      
              
              >{item.question}</motion.h2>

            </div>

            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>

          </div>

        ))}

      </div>

    </div>
  )
}


const data = [
  {
    question: 'What is Pegasus Rentals?',
    answer: 'Pegasus Rentals is the premier car-renting authority in the NYC tri-state area.',
  },
  {
    question: 'Where is Pegasus Rentals based out of?',
    answer: 'We are based out of Queens, NYC!',
  },
  {
    question: 'What cars do we have?',
    answer: 'Pegasus Rentals`s fleet of professionally-maintained, luxury rentals includes the latest models from top brands like Jaguar, Land Rover, Porsche, BMW, Cadillac, and Mercedes Benz.',
  },
  {
    question: 'Does Pegasus Rentals deliver vehicles?',
    answer: 'Yes we do. And it`s included free of charge! RealCar will deliver your rental car to the location of your choice within New York City between 8am and 8pm. Deliveries outside of those hours must be pre-arranged with us. For an additional fee, you may also request that your RealCar rental be delivered to you at NYC-servicing airports (JFK, LaGuardia, Newark).',
  },
  {
    question: 'How can I pick up a rental car?',
    answer: 'Pegasus Rentals offers free delivery within New York City between the hours of 8am and 8pm. However, you may also pick-up your rental at our garage at 448 West 38th Street, New York, NY, 10018.',
  },
  {
    question: 'Can I smoke in a rental car?',
    answer: 'The entirety of the Pegasus fleet is strictly non-smoking. Renters and their passengers are not permitted to smoke in any rental cars. Pegasus takes reports of smoking very seriously. If smoke is detected in a returned vehicle, the renter is subject to a fine of up to $250.',
  },
  {
    question: 'What info do I need to rent a car?',
    answer: 'In order to rent with Pegasus, you must provide: - Valid credit or debit card. Note that using a debit card may require up to a $5000 security deposit (refunded at the end of the rental). - Valid driver`s license with driver`s license number, full name, and address. Please note that the name on the payment card and the name on the driver`s license must match. - Mobile phone number and email address.',
  },
  {
    question: 'Is there an age requirement?',
    answer: 'To rent a car from RealCar, you must be over 18-years old and hold a current, valid (non-temporary) driver`s license, presentable to a RealCar representative on delivery of the vehicle. If you are under the age of 22, you may be required to demonstrate at least two years of current, U.S-licensed driving history and may also be subject to an underage surcharge.',
  },
  {
    question: 'How do I cancel my Pegasus rental?',
    answer: 'Customers may cancel up to 72 hours before the reservation start date and time for a full refund. If a cancellation is made within 72 hours of the reservation start date and time, Pegasus will provide an e-credit that can be applied toward future rentals with Pegasus.',
  },
  {
    question: 'Is gas included with rental price?',
    answer: 'No, the cost of gas is not included in the price of a Pegasus rental. The customer is responsible for purchasing fuel.',
  },
  {
    question: 'Does it cost extra to have the car delivered to me?',
    answer: 'There is no extra cost for having a rental car delivered to you if you are located in the free delivery area. The delivery area is marked with a highlighted perimeter in the booking panel while selecting a delivery location on the map on the website.',
  }
]

export default FAQ