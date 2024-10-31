import React from 'react'
import Hero from './Hero'
import FindProgram from './FindProgram'
import { university } from './Data';
import { program } from './Data';
import { category } from './Data';
import UniversityDetail from './UniversityDetail';
import { UniDetail } from './Data';
import TestimonialSlider from './TestimonialSlider';
import DegreeRelatedTopic from './DegreeRelatedTopic';
import FAQs from './FAQs';


const  Degree = () => {
  
  return (
    <div>
      <Hero university={university}/>

      <FindProgram 
      title = 'Browse by program level'
      program = {program}
      />

      <FindProgram 
      title = 'Browse By Category'
      program = {category}
      />

      <UniversityDetail 
      bgColor = ''
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />
      <UniversityDetail 
      bgColor = 'bg-[#F2F5FA]'
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />
      <UniversityDetail 
      bgColor = ''
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />
      <UniversityDetail 
      bgColor = 'bg-[#F2F5FA]'
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />
      <UniversityDetail 
      bgColor = ''
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />

      <TestimonialSlider />

      <DegreeRelatedTopic />

      <FAQs />
    </div>
  )
}

export default Degree;
