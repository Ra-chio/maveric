import styled from "styled-components";

export default function EmpInfo(props) {
    return (
        <>
            <Container>
                <div className="container p-5 d-flex justify-content-center">
                    <div className="box d-flex flex-row">
                        <div className=" picbox justify-content-center d-flex flex-column">
                            <img
                                src={props.p}
                                alt="avatar"
                                className="border "
                            />
                        </div>
                        <div className=" infobox d-flex flex-column justify-content-center py-5 px-3">
                            <div className="info d-flex border-bottom  py-2 px-4 mx-2">
                                <div className="key me-5">Name</div>
                                <div className="value">: {props.n}</div>
                            </div>
                            <div className="info d-flex  border-secondary py-2 px-4 mx-2">
                                <div className="key me-5">Employee ID</div>
                                <div className="value">: {props.empID}</div>
                            </div>
                            <div className="info d-flex border-bottom py-2 px-4 mx-2">
                                <div className="key me-5">Email</div>
                                <div className="value">: {props.mail}</div>
                            </div>
                            <div className="info d-flex border-bottom py-2 px-4 mx-2">
                                <div className="key me-5">Mobile</div>
                                <div className="value">: {props.m}</div>
                            </div>
                            <div className="info d-flex border-bottom py-2 px-4 mx-2">
                                <div className="key me-5">Gender</div>
                                <div className="value">: {props.g}</div>
                            </div>
                            <div className="info d-flex border-bottom py-2 px-4 mx-2">
                                <div className="key me-5">Address</div>
                                <div className="value">: {props.l}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    .container {
        min-height: 387px;
        align-items: center;
        .picbox {
            flex: 5;
            img {
                width: 90%;
                box-shadow: 0px 0px 10px -2px #000000;
            }
        }
        .infobox {
            flex: 7;
            .info {
                font-size: 20px;
                box-shadow: 0px 0px 10px -8px #000000;
                .key {
                    font-weight: bold;
                    width: 60px;
                }
                .value {
                    width: 80%;
                }
            }
        }
    }
    @media (max-width: 770px) {
        .container {
            padding: 20px !important;
            .box {
                flex-direction: column !important;
                max-width: 95%;
                .picbox {
                    flex-direction: row !important;
                    img {
                        width: 80%;
                    }
                }
                .infobox {
                    padding: 20px 0 !important;
                    max-width: 100%;
                    .info {
                        padding: 8px 0 !important;
                        .key {
                            flex: 5;
                        }
                        .value {
                            flex: 7;
                        }
                    }
                }
            }
        }
    }
`;
