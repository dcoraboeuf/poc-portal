import MainButton from "@components/MainButton";

const signup = () => {
    netlifyIdentity.open('signup');
};

export default function SignupButton() {
    return <MainButton title="Sign up" action={signup}/>
}
