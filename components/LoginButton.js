import MainButton from "@components/MainButton";

const login = () => {
    netlifyIdentity.open('login');
};

export default function LoginButton() {
    return <MainButton title="Login" action={login}/>
}
