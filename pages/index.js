import MainButtonBar from '@components/MainButtonBar'
import LoginButton from '@components/LoginButton'
import SignupButton from "@components/SignupButton";
import Header from "@components/Header";

export default function Home() {
    return (
        <>
            <Header text="Welcome to the Ontrack Customer Portal!"/>
            <MainButtonBar>
                <LoginButton/>
                <SignupButton/>
            </MainButtonBar>
        </>
    )
}
