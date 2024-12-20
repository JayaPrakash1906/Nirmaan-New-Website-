import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Footer from "../Components/Footer";
import Popover from "../Components/Popover";
import { FaLinkedin } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Teams() {
    const [data, setData] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [openEstablishPopUp, setOpenEstablishPopUp] = useState(false);
    const [status, setStatus] = useState("");

    const handleEstablish = (team) => {
        setSelectedTeam(team);
        setOpenEstablishPopUp(true);
    };

    const url = "https://nirmaan.iitm.ac.in:8000/api/images/";

    const fetchTeamsData = async (teamStatus = "") => {
        try {
            const apiUrl = `https://nirmaan.iitm.ac.in:8000/api/projects`;
            console.log("Fetching data from:", apiUrl); // Debug statement
            const result = await axios.get(apiUrl);
            console.log("API Response:", result.data); // Debug statement

            let filteredData = result.data;

            // Filter based on `status`:
            if (teamStatus === "Active") {
                filteredData = filteredData.filter(
                    (team) => ["Akshar", "Pratham"].includes(team.start_up_name)
                );
            } else if (teamStatus === "Graduated") {
                filteredData = filteredData.filter(
                    (team) => team.start_up_name === "Graduated"
                );
            }

            setData(filteredData);
        } catch (err) {
            console.error("API Error:", err);
        }
    };

    useEffect(() => {
        fetchTeamsData(status);
    }, [status]);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            <Navbar />
            <div className="mt-[88px]">
                <div className="bg-green-100">
                    <div className="pt-5 pl-5 flex">
                        <span>
                            <a href="/" className="text-gray-600 font-semibold hover:underline">
                                Home
                            </a>
                        </span>
                        <span className="p-2 text-gray-500">
                            <FaArrowAltCircleRight size={12} />
                        </span>
                        <span className="text-black font-semibold">Teams</span>
                    </div>
                    <h2 className="md:text-5xl font-semibold text-green-600 pt-7 pb-6 text-center sm:text-3xl">
                        All Startups
                    </h2>
                    <div className="ml-2">
                        <select
                            id="options"
                            className="font-dmsans"
                            name="startups"
                            onChange={handleStatusChange}
                            value={status}
                        >
                            <option value="">Select</option>
                            <option value="Active">Active</option>
                            <option value="Graduated">Graduated</option>
                        </select>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 mt-10 px-10">
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <div key={index}>
                                <div
                                    className="flex flex-col justify-center items-center p-4 font-dmsans"
                                    onClick={() => handleEstablish(item)}
                                >
                                    <img
                                        src={item.profile_photo ? url + item.profile_photo : "default-image.png"}
                                        alt={item.name}
                                        className="w-[90px] h-[70px]"
                                    />
                                    <br />
                                    <div className="pt-5">{item.project_name || "No Name"}</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-4">No teams found for this status.</p>
                    )}
                </div>
            </div>
            <Footer />
            <Popover isVisible={openEstablishPopUp} onClose={() => setOpenEstablishPopUp(false)}>
                {selectedTeam && (
                    <div>
                        <div className="flex gap-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-4 mt-2">
                                    {selectedTeam.project_name}
                                </h2>
                            </div>
                            <div>
                                <img
                                    src={selectedTeam.profile_photo ? url + selectedTeam.profile_photo : "default-image.png"}
                                    alt={selectedTeam.name}
                                    className="w-[50px] h-auto"
                                />
                            </div>
                            <div className="md:ms-[290px]">
                                <p className="mt-2">
                                    <strong>Stage:</strong> {selectedTeam.start_up_name || "No team lead"}
                                </p>
                                <p className="mt-2">
                                    <strong>Cohort:</strong> {selectedTeam.incubation_year || "Unknown"}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="font-semibold">
                                Founder: {selectedTeam.members_name || "-"}
                            </div>
                        </div>
                        <p className="mt-4"> 
                            <strong>Description:</strong>{" "}
                            {selectedTeam.description || "No description available"}
                        </p>
                        <p className="flex mt-2">
                            <strong className="mt-[2px]">Social Media:</strong>
                            {selectedTeam.members_linkedin ? (
                                <a
                                    href={selectedTeam.members_linkedin}
                                    className="m-[5px] text-green-600"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            ) : (
                                "No LinkedIn profile available"
                            )}
                        </p>
                    </div>
                )}
            </Popover>
        </div>
    );
}

export default Teams;
