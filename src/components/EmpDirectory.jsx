import { useState } from "react";
import styled from "styled-components";
import EmpCard from "./EmpCard";
import EmpDB from "../empinfo.json";
import Header from "./Header";
import Footer from "./Footer";

export default function EmpDirectory() {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    //  console.log(searchInput);

    return (
        <>
            <Header />
            <Container>
                <div className="container">
                    <div className="header mx-auto ">
                        <div className="input-group mb-3 search-wrap py-5">
                            <input
                                onChange={(e) => handleChange(e)}
                                value={searchInput}
                                type="text"
                                className="form-control form-control-lg "
                                placeholder="Search for Employee"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                autoFocus
                            />
                            <button
                                className="btn btn-secondary btn-lg px-5"
                                type="button"
                                id="button-addon2"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="list-container d-flex flex-column gap-2 mb-5 mx-auto my-3">
                        {/* eslint-disable-next-line array-callback-return */}
                        {EmpDB.filter((emp) => {
                            if (searchInput === "") {
                                return emp;
                            } else if (
                                Object.values(emp)
                                    .join("")
                                    .toLowerCase()
                                    .includes(searchInput.toLowerCase())
                            ) {
                                return emp;
                            }
                        }).map((emp) => (
                            <EmpCard
                                key={emp.id}
                                id={emp.id}
                                fname={emp.name}
                                employeeid={emp.empID}
                                emailid={emp.email}
                                mobile={emp.phone}
                                gen={emp.gender}
                                location={emp.address}
                                img={emp.pfp}
                            />
                        ))}
                        <nav className="pagination-container d-flex justify-content-center">
                            <ul className="pagination pagination-md">
                                <li className="page-item">
                                    <a
                                        href="/employee-directory"
                                        className="page-link disabled "
                                    >
                                        prev
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        href="/employee-directory"
                                        className="page-link active"
                                    >
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        href="/employee-directory"
                                        className="page-link disabled"
                                    >
                                        next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    .container {
        min-height: 387px;
        .header {
            max-height: 150px;
            width: 90%;
            .input-group {
                input {
                    min-width: 200px;
                    border-radius: 7px;
                    box-shadow: 0px 0px 7px -3px #000000;
                }
                button {
                    background: #214e8f;
                    border-radius: 7px;
                    &:hover {
                        background-color: #1c4279;
                    }
                    /* box-shadow: 0px 0px 10px -6px #000000; */
                }
            }
        }
        .list-container {
            width: 90%;
            justify-content: center;
            .pagination-container {
                .pagination {
                    box-shadow: 0px 0px 7px -3px #000000;
                    border-radius: 7px;
                    .page-link.active {
                        background-color: #214e8f;
                    }
                }
            }
        }
    }
`;
