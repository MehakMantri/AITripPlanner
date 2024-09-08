import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Input from 'postcss/lib/input';
import { useEffect, useState } from 'react';
import { AI_PROMPT, SelectBudgetOptions } from '@/constants/options';
import { SelectTravelList } from '@/constants/options';
import {
  Button,
  toast
} from "@/components/ui/dialog"

import { FcGoogle } from "react-icons/fc";
import { chatSession } from '@/service/aimodel';


function CreateTrip() {
  const [place,setPlace]= useState();
  const [formData, setFormData] = useState([]);
  const handleInputChange=(name,value) =>{

    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])

  const OnGenerateTrip=async() => {
    if(formData?.noOfDays>5 && !formData?.location || !formData?.budget || !formData?.traveller)
    {
      toast("Please fill all details");
      return;
    }

    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}', formData?.location?.label)
    .replace('{totalDays}',formData?.noOfDays)
    .replace('{traveller}',formData?.traveller)
    .replace('{budget}',formData?.budget)
    .replace('{totalDays}',formData?.noOfDays)
  
    console.log(FINAL_PROMPT);
    const result=await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());


  }

  return (
  <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>      
      <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip 
        planner will generate a customized itinerary based on your preferences</p>
    <div className='mt-20 flex flec-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>
            Where do you wanna travel to?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
            place, 
            onChange:(v)=>{setPlace(v); handleInputChange('location',v)}
            }}
          />
        </div>
    </div>

    <div>
      <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
      <Input placeholder={'Ex.3'} type="number" 
      onchnage={(e)=>handleInputChange('noOfDays', e.target.value)}
      />
    </div>
  {/* </div> */}
    <div>
      <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
      <div className='grid grid-cols-3 gap-5 mt-5'>
        {SelectBudgetOptions.map((item,index)=> (
          <div key={index} 
          onClick={()=>handleInputChange('budget',item.title)}
          className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
          ${formData?.budget==item.title && 'shadow-lg border-black'}`}>
            <h2 className='text-4xl'>{item.icon}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
           
          </div>
        ))}
      </div>
    </div>

    <div>
      <h2 className='text-xl my-3 font-medium'>Who do you plan on travelling with on your next adventure?</h2>
      <div className='grid grid-cols-3 gap-5 mt-5'>
        {SelectTravelList.map((item,index)=> (
          <div key={index} 
          onClick={()=>handleInputChange('traveller',item.title)}
          className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
          ${formData?.traveller==item.people && 'shadow-lg border-black'}`}>
            <h2 className='text-4xl'>{item.icon}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
          </div>
        ))}
      </div>
    </div>
    
    <div className='my-10 justify-end flex'>
    <Button onClick={OnGenerateTrip}> Generate Trip</Button>

    </div>
    

  </div>

  )
}

export default CreateTrip