import MainButton from "@components/MainButton";

const signup = () => {
    alert('Signup');
};

export default function SignupButton() {
    return <MainButton title="Sign up" action={signup}/>
}
