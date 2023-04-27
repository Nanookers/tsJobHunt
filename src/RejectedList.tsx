import * as React from "react"

type Job = {

    id: number,
    company: string,
    jobTitle: string,
    contact: string,
    contacted: boolean,
    rejected: boolean  
  
}

export const RejectedList = ({jobs, setJob}: {jobs: Job[], setJob: React.Dispatch<React.SetStateAction<Job[]>>}) => {
  
    // Filter For only Rejected Jobs
    const rejectsOnly = jobs.filter(job => job.rejected === true)

    const setToContacted = (jobId: number) => {
        const updatedJobs = jobs.map(job => {
            if (job.id === jobId) {
                return {...job, contacted: true};
            } else {
                return job;
            }
            });
        setJob(updatedJobs);
    }

  return (
    <div>
        <h2>Rejected Jobs</h2>
        <table>
            <thead>
                <tr>
                    <th> Company </th>
                    <th> Job Title </th>
                    <th> Contact </th>
                    <th> Contacted </th>
                    <th> Rejected </th>
                </tr>
            </thead>
            <tbody>
                 {rejectsOnly.map((job) => (
                <tr key={job.id}>
                    <td>{job.company}</td>
                    <td>{job.jobTitle}</td>
                    <td>{job.contact}</td>
                    <td><input type="checkbox" checked={job.contacted} onChange={() => setToContacted(job.id)} /></td>
                    <td><input type="checkbox" checked={job.rejected} /></td>
                </tr>
                ))} 
            </tbody>
        </table>
    </div>
  )
}
