import Header from "./Header";
import Footer from "./Footer";
import EmpInfo from "./EmpInfo";
import { useSearchParams } from "react-router-dom";

export default function EmpDetails() {
    const [searchParams] = useSearchParams();
    //  console.log(searchParams.get("empID"));
    return (
        <>
            <Header />

            <EmpInfo
                key={searchParams.get("key")}
                id={searchParams.get("id")}
                n={searchParams.get("name")}
                empID={searchParams.get("empID")}
                mail={searchParams.get("email")}
                m={searchParams.get("phone")}
                g={searchParams.get("gender")}
                l={searchParams.get("address")}
                p={searchParams.get("pfp")}
            />

            <Footer />
        </>
    );
}
