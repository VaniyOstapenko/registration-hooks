import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function RegstrationPage() {
    const [inp, setInp] = useState({ email: '', password: '', confirm_password: '' })

    const collectionOfInfo = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    const clickBtn = () => {
        try {
            if (!inp.email || !inp.password || !inp.confirm_password) throw new Error('Есть пустые поля')
            if (!/^[\w\d]+@[\w]+\.[\w]{2,4}$/gm.test(inp.email)) throw new Error('Не верный ввод почты')
            if (inp.password != inp.confirm_password) throw new Error('Пароль не совпадает')
            console.log(inp);
            setInp({ email: '', password: '', confirm_password: '' })
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <>
                <h1>Regstration</h1>
                <div>
                    <TextField name='email' onChange={collectionOfInfo} id="outlined-basic" label="Email" variant="outlined" value={inp.email} />
                </div>
                <div>
                    <TextField name='password' onChange={collectionOfInfo} id="outlined-basic" label="Password" variant="outlined" value={inp.password} />
                </div>
                <div>
                    <TextField name='confirm_password' onChange={collectionOfInfo} id="outlined-basic" label="Confirm Password" variant="outlined" value={inp.confirm_password} />
                </div>

                <Button onClick={clickBtn} variant="outlined">Sign up</Button>
                <p>Already have an account <Link to={'/'}><Button variant="text">SIGN IN</Button></Link></p>
            </>
        </>
    );
}

export default RegstrationPage;