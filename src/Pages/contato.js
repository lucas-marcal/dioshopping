import { useState, useEffect } from 'react';
import { Grid, Button, TextField, Card, CardContent, CardActions, Typography, makeStyles } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    commentCard: {
      marginTop: theme.spacing()
    },
    name: {
        fontWeight: 500,
        fontSize: "1.3rem"
    },
    messageBody: {
        marginTop: theme.spacing()
    },
    date: {
        color: "#878787",
        marginLeft: theme.spacing()
    },
    btn:{
        marginTop: theme.spacing(2),
        padding: "0.8rem"
    },
    comments: {
        marginTop: theme.spacing(2)
    },
    form: {
        marginTop: theme.spacing()
    },
    alert: {
        marginTop: theme.spacing(2)
    }
  }));

const Contatos = () => {

    const classes = useStyles();
    const url = 'http://localhost:5000/message'
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState(false);
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(async () => {
        const response = await fetch(url)
        const data = await response.json();
        setMessage(data);
    }, [render])

    const sendMessage = () => {
        setValidator(false);
        if(author.length <= 0 || content.length <= 0){
            return setValidator(!validator)
        }
        const bodyForm = {
            email: author,
            message: content,
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.id) {
                setRender(true);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000)
            }
        })
        
        setAuthor('');
        setContent('');
        
        console.log(content)
    }  

    return(
        <>
            <Grid container direction="column" className={classes.form}>

                    <TextField id="name" label="Name" value={author} onChange={(event)=>{setAuthor(event.target.value)}} fullWidth/>
                    <TextField id="message" label="Message" value={content} onChange={(event)=>{setContent(event.target.value)}} fullWidth/>

            

            {validator && 
                <Alert severity="error" className={classes.alert}>
                    Por favor preencha todos os campos!
                </Alert>
            }

            {success &&     
                <Alert severity="success" className={classes.alert}>
                    Mensagem enviada!
                </Alert>
            }

            <Button onClick={sendMessage} className={classes.btn} variant="contained" color="primary">
                Send
            </Button>
            </Grid>

            <Grid container direction="column" className={classes.comments}>
                {message.map((content) => {
                    return(
                        <Card variant="outlined" className={classes.commentCard} key={content.id}>
                            <CardContent>
                                <Typography variant="h5" className={classes.name}>
                                    {content.email}
                                </Typography>
                                <Typography variant="body1" className={classes.messageBody}>
                                    {content.message}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography variant="overline" className={classes.date}>
                                    {content.created_at}
                                </Typography>
                            </CardActions>
                        </Card>
                    )
                } )}
            </Grid>


        </>
    )
}

export default Contatos;
