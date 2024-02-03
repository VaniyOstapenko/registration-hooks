import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function LoginPage() {
    const [inp, setInp] = useState({ email: '', password: '' })

    const collectionInfo = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    const clickButton = (e) => {
        try {
            if (!inp.email || !inp.password) throw new Error('Есть пустые поля')
            if (!/^[\w\d]+@[\w]+\.[\w]{2,4}$/gm.test(inp.email)) throw new Error('Не верный ввод почты')

            console.log(inp);
            setInp({ email: '', password: '' })
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <h1>Login</h1>
            <div>
                <TextField name='email' onChange={collectionInfo} id="outlined-basic" label="Email" variant="outlined" value={inp.email} />
            </div>
            <div>
                <TextField name='password' onChange={collectionInfo} id="outlined-basic" label="Password" variant="outlined" value={inp.password} />
            </div>

            <Button onClick={clickButton} variant="outlined">Login</Button>
            <p>Don't have an account yet? <Link to={'/reg'}><Button variant="text">SIGN IN</Button></Link></p>
        </>
    );
}

export default LoginPage;