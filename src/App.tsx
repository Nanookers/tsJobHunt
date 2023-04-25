import { useState } from 'react'
import './App.css'

import { JobList } from './JobList';

// Think of this like my model
type Job = {

  id: number,
  company: string,
  jobTitle: string,
  contact: string,
  contacted: boolean,
  rejected: boolean  

}

function App() {
  // Initializing an empty array of Job objects
  const [jobs, setJob] = useState<Job[]>([]);

  // These are to set values from the inputs
  const [company, setCompany] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [contact, setContact] = useState<string>('');

  const companyInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value)
  }

  const jobTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobTitle(event.target.value)  
  }

  const contactInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact(event.target.value)  
  }

  // Form events can be anything from submits to changes to drag and drops
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const job: Job = {
      id: jobs.length+1,
      company: company,
      jobTitle: jobTitle,
      contact: contact,
      contacted: false,
      rejected: false 
    }

    console.log(job);
    

    setJob([...jobs, job])

    setCompany("")
    setJobTitle("")
    setContact("")
  }

  return (
    <>
      <h1>Job Hunter</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='company' placeholder='Company Name' value={company} onChange={companyInput}/>
        <input type='text' name='jobTitle' placeholder='Job Title' value={jobTitle} onChange={jobTitleInput}/>
        <input type='text' name='contact' placeholder='Contact Name' value={contact} onChange={contactInput}/>
        <button type='submit'>Submit</button>
      </form>
      <JobList jobs={jobs} setJob={setJob}/>
    </>
  )
}

export default App
