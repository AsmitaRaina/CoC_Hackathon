// import { useNavigate, useParams } from "react-router-dom";
// import useFetch from "./useFetch";

//  const ComplaintDetails = () => {
//     const { id } = useParams();
//     const { data: complaint, error, isPending } = useFetch('http://localhost:8000/complaintss/' + id);
//     const navigate = useNavigate();

//     const handleClick = () => {
//         fetch('http://localhost:8000/complaints/' + complaint.id, {
//             method: 'DELETE'
//         }).then(() => {
//             navigate('/viewcomplaint');
//         })
//     }

//     return (
//         <div className="blog-details">
//             {isPending && <div>Loading...</div>}
//             {error && <div>{error}</div>}
//             {complaint && (
//                 <article>
//                     <h2>{complaint.venue}</h2>
//                     <p>Committee:{complaint.organiser}</p>
//                     <p>{complaint.description}</p>
//                     <p>{complaint.date}</p>
//                     <p>{complaint.start_time} to {complaint.end_time}</p>
//                     <button onClick={handleClick}>delete</button>
//                 </article>
//             )}
//         </div>
//     );
// }

// export default ComplaintDetails;