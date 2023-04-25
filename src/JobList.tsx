type Job = {

    id: number,
    company: string,
    jobTitle: string,
    contact: string,
    contacted: boolean,
    rejected: boolean  
  
}
// Front brackets are the props, back defines what the props are.
export const JobList = ({jobs, setJob}: {jobs: Job[], setJob: React.Dispatch<React.SetStateAction<Job[]>>}) => {

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

    const setToRejected = (jobId: number) => {
        const updatedRejection = jobs.map(job => {
            if(job.id === jobId) {
                return {...job, rejected: true}
            } else {
                return job;
            }
        })
        setJob(updatedRejection)
    }

    // Filter to take out the rejected applications.
    const filterOutRejects = jobs.filter(job => job.rejected === false)


  return (
    <div>
        <h2>Open Jobs</h2>
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
                 {filterOutRejects.map((job) => (
                <tr key={job.id}>
                    <td>{job.company}</td>
                    <td>{job.jobTitle}</td>
                    <td>{job.contact}</td>
                    <td><input type="checkbox" checked={job.contacted} onChange={() => setToContacted(job.id)} /></td>
                    <td><input type="checkbox" checked={job.rejected} onChange={() => setToRejected(job.id)} /></td>
                </tr>
                ))} 
            </tbody>
        </table>
    </div>
  )
}
