import MainButton from "@components/MainButton";

const login = () => {
    alert('Login');
};

export default function LoginButton() {
    return <MainButton title="Login" action={login}/>
}
