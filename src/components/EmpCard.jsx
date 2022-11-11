import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function EmpCard(props) {
    const navigate = useNavigate();
    const params = {
        key: props.index,
        id: props.id,
        name: props.fname,
        empID: props.employeeid,
        email: props.emailid,
        phone: props.mobile,
        gender: props.gen,
        address: props.location,
        pfp: props.img,
    };

    const handleClick = (id) => {
        navigate({
            pathname: "/employee-details",
            search: `?${createSearchParams(params)}`.toString(),
        });
    };

    return (
        <Container>
            <div className="plate-container mb-1">
                <div
                    className="plate d-flex mx-auto px-2"
                    role="button"
                    id={props.id}
                    onClick={handleClick}
                >
                    <div className="picbox d-flex justify-content-center me-3">
                        <img src={props.img} alt="avatar" />
                    </div>
                    <div className="infobox">
                        <h4>{props.fname}</h4>

                        <h6>{props.employeeid} </h6>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .plate-container {
        .plate {
            width: 100%;
            height: 90px;
            max-height: 100px;
            align-items: center;
            border-radius: 10px;
            border-bottom: 1px solid #cfcfcf;
            box-shadow: 0px 0px 7px -3px #000000;
            &:hover {
                background-color: #ebebeb !important;
            }
            .picbox {
                flex: 3;
                img {
                    height: 80px;
                    border-radius: 100%;
                }
            }
            .infobox {
                flex: 9;
            }
        }
    }
`;
