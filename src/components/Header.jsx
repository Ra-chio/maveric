import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <>
            <Container>
                <nav className="navbar navbar-expand-md sticky-top">
                    <div className="container-fluid px-5 py-1 ">
                        <a href="/login" className="navbar-brand">
                            <img
                                src="https://cdn-fcich.nitrocdn.com/ZguJicRwSUMwxXTngUutFlvSuzRwiSdB/assets/static/optimized/rev-0438459/wp-content/uploads/2021/08/maveric-logo-updated.png"
                                alt="Logo"
                            />
                        </a>
                        <div className="desc">
                            <h4 className="mb-0">Maveric</h4>
                        </div>
                    </div>
                </nav>
            </Container>
        </>
    );
}

const Container = styled.div`
    nav {
        box-shadow: 0px 0px 7px -3px #000000;
        width: 100%;
        background-color: #fff;

        @media (max-width: 500px) {
            .container-fluid {
                justify-content: center;
                h4 {
                    display: none;
                }
            }
        }
    }
`;
