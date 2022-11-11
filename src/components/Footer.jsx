import styled from "styled-components";

export default function Footer() {
    return (
        <Container>
            <div className="box sticky-bottom px-5">
                <footer className="py-3 mx-5">
                    <div className="container-fluid">
                        <a href="#!">
                            <img
                                src="https://cdn-fcich.nitrocdn.com/ZguJicRwSUMwxXTngUutFlvSuzRwiSdB/assets/static/optimized/rev-0438459/wp-content/uploads/2021/08/maveric-logo-white.png"
                                alt="logo"
                                className="my-3"
                            />
                        </a>
                        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-2 border-top">
                            <p className="text-white">
                                Copyrights &copy; Maveric Systems Ltd.
                            </p>
                            <ul className="list-unstyled d-flex ">
                                <li className="ms-3 mb-3 border p-2 ">
                                    <a
                                        href="https://www.facebook.com/mavericsystemsltd/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white "
                                    >
                                        <i className="fa-brands fa-facebook" />
                                    </a>
                                </li>
                                <li className="ms-3 mb-3 border p-2 ">
                                    <a
                                        href="https://www.linkedin.com/company/maveric-systems-limited/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white "
                                    >
                                        <i className="fa-brands fa-linkedin-in" />
                                    </a>
                                </li>
                                <li className="ms-3 mb-3 border p-2 ">
                                    <a
                                        target="blank"
                                        rel="noopener noreferrer"
                                        href="https://twitter.com/mavericsystems"
                                        className="text-white "
                                    >
                                        <i className="fa-brands fa-twitter" />
                                    </a>
                                </li>
                                <li className="ms-3 mb-3 border p-2 ">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.youtube.com/c/mavericsystemsltd"
                                        className="text-white "
                                    >
                                        <i className="fa-brands fa-youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .box {
        width: 100%;
        margin: 0;
        background-color: #214e8f;
        box-shadow: 0px 0px 10px -3px #000000;
        footer {
            .container-fluid img {
                width: scale(50%) !important;
            }
            ul{
               f
            }
            li {
                width: 42px;
                height: 42px;
                border: 3px solid #fff !important;
                border-radius: 100%;
                box-shadow: 0px 0px 7px -3px #000000;
                a{
                  text-decoration: none;
                }

                i {
                    font-size: 20px;
                }
                &:hover {
                    background-color: #ee2c82;
                    border-color: #ee2c82 !important;
                }
            }
        }
    }
    @media (max-width: 400px) {
        .box {
            padding: 0 20px;
            footer {
                margin: 0 !important;
                a{
                  display: flex;
                  
                  img{
                  width: 80%;
                }
                }
               ul{
                  flex-direction: column;
               }
            }
            

        }
    }
`;
