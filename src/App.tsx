import { useState } from 'react'
import './App.css'

// This is the Model for the Job Object 
import { Job } from './models/Job'

// These are the components
import { JobList } from './JobList';
import { RejectedList } from './RejectedList'

// Think of this like my model

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
      <RejectedList jobs={jobs} setJob={setJob}/>
    </>
  )
}

export default App
