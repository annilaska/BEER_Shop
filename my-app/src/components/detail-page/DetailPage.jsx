import React from "react";
import { NavLink, useParams } from "react-router-dom";
import s from './DetailPage.module.css';
import { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(300),
        height: theme.spacing(70),
      },
      
    },
  }));

const DetailPage = ({ detailBeersData, setBeersCardT, resetData }) => {

    const classes = useStyles();

    let params = useParams();
    const { id } = params;


    useEffect(() => {
        setBeersCardT(id)
    }, [])

    const handleClick = (e) => {
        resetData()
    }

    return (

        <Paper className={classes.root} elevation={3}>

            {Object.values(detailBeersData).map(l => {
                return (
                    <div className={s.wrapper}>
                        <div className={s.buttonBlock}>
                            <NavLink to='/'>
                                <Button color="primary" onClick={handleClick}>BACK</Button>
                            </NavLink>
                        </div>

                        <div className={s.topBlock}>
                            <div className={s.name}>{l.name}</div>
                        </div>
                        <div className={s.botomBlock}>
                            <div className={s.imageBlock}>
                                <img className={s.image}src={l.image_url} alt='beer' />
                            </div>
                            <div className={s.informBlock}>
                                <div className={s.description}>{l.description}</div>
                                <div className={s.tagline}>{l.tagline}</div>
                                <div className={s.abv}>{l.abv}</div>
                                <div className={s.food_pairing}>{l.food_pairing}</div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </Paper>
    )
}


export default DetailPage;










